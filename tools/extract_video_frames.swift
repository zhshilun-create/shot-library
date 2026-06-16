import AVFoundation
import AppKit
import Foundation

let args = CommandLine.arguments
guard args.count >= 3 else {
    fputs("Usage: swift extract_video_frames.swift <video> <output-dir>\n", stderr)
    exit(1)
}

let videoURL = URL(fileURLWithPath: args[1])
let outputDir = URL(fileURLWithPath: args[2])
try FileManager.default.createDirectory(at: outputDir, withIntermediateDirectories: true)

let asset = AVAsset(url: videoURL)
let duration = CMTimeGetSeconds(asset.duration)
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.maximumSize = CGSize(width: 1280, height: 1280)
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero

let sampleCount = 8
for index in 0..<sampleCount {
    let progress = sampleCount == 1 ? 0.0 : Double(index) / Double(sampleCount - 1)
    let seconds = max(0.0, min(duration, duration * progress))
    let time = CMTime(seconds: seconds, preferredTimescale: 600)

    do {
        let cgImage = try generator.copyCGImage(at: time, actualTime: nil)
        let bitmap = NSBitmapImageRep(cgImage: cgImage)
        guard let data = bitmap.representation(using: .png, properties: [:]) else { continue }
        let outURL = outputDir.appendingPathComponent(String(format: "frame_%02d_%.2fs.png", index + 1, seconds))
        try data.write(to: outURL)
        print(outURL.path)
    } catch {
        fputs("Failed frame \(index + 1) at \(seconds)s: \(error)\n", stderr)
    }
}

print(String(format: "duration=%.2f", duration))
