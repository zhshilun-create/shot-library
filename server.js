const http = require("node:http");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const rootDir = __dirname;
const dataDir = path.join(rootDir, "data");
const uploadDir = path.join(rootDir, "uploads");
const statePath = path.join(dataDir, "state.json");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v",
  ".webm": "video/webm"
};

async function ensureRuntimeDirs() {
  await fsp.mkdir(dataDir, { recursive: true });
  await fsp.mkdir(uploadDir, { recursive: true });
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function sendText(res, statusCode, text) {
  res.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(text);
}

async function readRequestBody(req, maxBytes) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBytes) throw new Error("Request body too large.");
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

function safeUploadName(name) {
  const ext = path.extname(name || "").toLowerCase().replace(/[^a-z0-9.]/g, "");
  return `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ext || ".bin"}`;
}

function resolveStaticPath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = decoded === "/" ? "/index.html" : decoded;
  const filePath = path.normalize(path.join(rootDir, normalized));
  if (!filePath.startsWith(rootDir)) return null;
  return filePath;
}

async function handleState(req, res) {
  if (req.method === "GET") {
    try {
      const state = await fsp.readFile(statePath, "utf8");
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(state);
    } catch {
      sendJson(res, 200, {});
    }
    return;
  }

  if (req.method === "POST") {
    try {
      const body = await readRequestBody(req, 12 * 1024 * 1024);
      JSON.parse(body.toString("utf8"));
      await fsp.writeFile(statePath, body);
      sendJson(res, 200, { ok: true });
    } catch (error) {
      sendJson(res, 400, { ok: false, error: error.message });
    }
    return;
  }

  sendText(res, 405, "Method not allowed");
}

async function handleUpload(req, res, requestUrl) {
  if (req.method !== "POST") {
    sendText(res, 405, "Method not allowed");
    return;
  }

  try {
    const sourceName = requestUrl.searchParams.get("name") || "media.bin";
    const fileName = safeUploadName(sourceName);
    const relativePath = `uploads/${fileName}`;
    const outputPath = path.join(rootDir, relativePath);
    const output = fs.createWriteStream(outputPath);
    let size = 0;
    const maxBytes = 1024 * 1024 * 1024;

    await new Promise((resolve, reject) => {
      req.on("data", (chunk) => {
        size += chunk.length;
        if (size > maxBytes) {
          reject(new Error("Upload too large."));
          req.destroy();
          return;
        }
      });
      req.pipe(output);
      output.on("finish", resolve);
      output.on("error", reject);
      req.on("error", reject);
    });

    sendJson(res, 200, {
      ok: true,
      path: relativePath,
      name: sourceName,
      size
    });
  } catch (error) {
    sendJson(res, 400, { ok: false, error: error.message });
  }
}

async function handleStatic(req, res, pathname) {
  const filePath = resolveStaticPath(pathname);
  if (!filePath) {
    sendText(res, 403, "Forbidden");
    return;
  }

  try {
    const stat = await fsp.stat(filePath);
    if (!stat.isFile()) {
      sendText(res, 404, "Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Content-Length": stat.size
    });
    fs.createReadStream(filePath).pipe(res);
  } catch {
    sendText(res, 404, "Not found");
  }
}

async function main() {
  await ensureRuntimeDirs();

  const server = http.createServer(async (req, res) => {
    const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    if (requestUrl.pathname === "/api/state") {
      await handleState(req, res);
      return;
    }
    if (requestUrl.pathname === "/api/upload") {
      await handleUpload(req, res, requestUrl);
      return;
    }
    await handleStatic(req, res, requestUrl.pathname);
  });

  server.listen(port, host, () => {
    console.log(`镜头库团队版已启动: http://localhost:${port}`);
    console.log(`局域网访问请使用本机 IP: http://<你的电脑IP>:${port}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
