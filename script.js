const categories = [
  "全部",
  "转场类",
  "空间变化类",
  "人物增强类",
  "物体变化类",
  "速度时间类",
  "光效能量类",
  "AI场景扩展类",
  "产品展示类",
  "搞笑夸张类",
  "影视感包装类"
];

const douyinAiTransitionCards = [
  {
    id: "DY-001",
    category: "转场类",
    difficulty: "低",
    status: "待校准",
    title: "AI首尾帧：手势带出新场景",
    scene: "旅拍、探店、人物出场、城市切换。",
    hook: "人物用手一挥、拉、推、指向镜头，画面从当前地点自然变到下一个地点。",
    shoot: "拍第一段时让人物做明确手势，并在动作末尾停 0.5 秒；第二段在新地点复刻同样方向的手势或姿态。保留首帧和尾帧截图给 AI。",
    assets: "A地点视频、B地点视频、A尾帧截图、B首帧截图、人物参考图。",
    prompt: "使用首尾帧生成转场：人物挥手带动画面从A地点过渡到B地点，动作连贯，真实旅拍风格，镜头轻微推进，竖屏9:16，时长3秒，不要文字，不要水印，不要卡通。",
    notes: "来源：抖音精选《转场太难想？学会这些AI转场技巧，视频创意加倍！》小猪Kevon，2026-03-05。基于公开标题与可见信息拆解，需补看原片校准。",
    media: ""
  },
  {
    id: "DY-002",
    category: "转场类",
    difficulty: "低",
    status: "待校准",
    title: "AI首尾帧：遮挡擦镜换景",
    scene: "街拍、门店切换、房间到户外、旅行 vlog。",
    hook: "用手、衣服、背包、路牌等物体遮住镜头，遮挡移开后进入新场景。",
    shoot: "第一段让遮挡物完整盖住镜头；第二段从同方向移开遮挡物。两段都要拍到足够干净的遮挡瞬间，方便 AI 接缝。",
    assets: "遮挡前视频、遮挡后视频、遮挡满屏截图、第二场景首帧。",
    prompt: "首尾帧AI转场，近景物体擦过镜头并遮满画面，遮挡后自然变成另一个地点，真实手持拍摄，运动模糊自然，竖屏9:16，3秒，无文字无水印。",
    notes: "适合量产，前期最容易拍。来源同 DY-001，需补看原片确认具体示例。",
    media: ""
  },
  {
    id: "DY-003",
    category: "速度时间类",
    difficulty: "中",
    status: "待校准",
    title: "AI首尾帧：跳跃落地换地点",
    scene: "旅拍、校园、城市打卡、剧情短片。",
    hook: "人物起跳时还在 A 地点，落地时已经到 B 地点，形成轻快的空间跳切。",
    shoot: "A地点拍起跳，B地点拍落地；动作方向、人物朝向、机位高度尽量一致。尾帧选人在空中的瞬间，首帧选即将落地的瞬间。",
    assets: "起跳视频、落地视频、空中尾帧、落地首帧、人物服装参考。",
    prompt: "人物从A地点跳起，在空中通过AI转场自然变到B地点并落地，动作连续，真实旅拍视频，轻微速度坡度，竖屏9:16，时长3秒，不要文字水印。",
    notes: "重点是动作匹配，不然 AI 会变成瞬移。来源同 DY-001，需补看原片校准。",
    media: ""
  },
  {
    id: "DY-004",
    category: "物体变化类",
    difficulty: "中",
    status: "待校准",
    title: "AI首尾帧：物体匹配变形",
    scene: "产品展示、旅拍纪念品、食物、道具转场。",
    hook: "A物体在画面中心旋转或靠近镜头，AI 过渡后变成 B物体或新场景入口。",
    shoot: "两个物体尽量放在相同位置、相似大小；拍一段靠近镜头或旋转动作。最后导出 A尾帧和 B首帧。",
    assets: "A物体素材、B物体素材、干净背景、首尾帧截图。",
    prompt: "首尾帧AI变形转场，画面中心的物体旋转并自然变成另一个物体，保持真实摄影质感，商业短视频风格，背景轻微虚化，竖屏9:16，3秒，无文字。",
    notes: "适合把普通素材做成产品亮点。来源同 DY-001，需补看原片确认是否出现该技法。",
    media: ""
  },
  {
    id: "DY-005",
    category: "空间变化类",
    difficulty: "中",
    status: "待校准",
    title: "AI首尾帧：穿越门窗进入新空间",
    scene: "民宿、景区、办公室、展厅、店铺开场。",
    hook: "镜头推进穿过门、窗、洞口、屏幕，进入完全不同的空间。",
    shoot: "第一段拍镜头向入口推进；第二段拍从入口内侧继续推进。入口形状越明确，AI 越容易衔接。",
    assets: "入口推进视频、新空间推进视频、入口尾帧、新空间首帧。",
    prompt: "镜头向前推进穿过一个门框，利用首尾帧自然过渡到另一个空间，真实摄影，电影感光影，运动连续，竖屏9:16，时长3秒，不要文字水印。",
    notes: "可以作为领导汇报的重点样板，因为可拍性和视觉变化都强。来源同 DY-001，需补看原片校准。",
    media: ""
  },
  {
    id: "DY-006",
    category: "AI场景扩展类",
    difficulty: "中",
    status: "待校准",
    title: "AI旅拍：天空/地标情绪化换场",
    scene: "旅行开场、城市宣传、景区打卡、情绪片。",
    hook: "天空、云层、地标或道路被 AI 拉成梦幻过渡，把普通旅拍变成大片感。",
    shoot: "拍摄时保留大面积天空、路面或建筑线条；人物不要贴边，镜头运动尽量稳定。选择天空或道路作为过渡主体。",
    assets: "旅拍原视频、天空/地标尾帧、目标场景首帧、风格参考图。",
    prompt: "真实旅拍镜头中天空和云层流动形成自然转场，从城市街道过渡到目的地地标，电影感色彩，真实光影，竖屏9:16，3秒，不要文字水印，不要过度奇幻。",
    notes: "来源同 DY-001；视频标签含旅拍、AI首尾帧，适合作为旅拍分类案例。",
    media: ""
  }
];

const localReferenceCards = [
  {
    id: "REF-001",
    category: "空间变化类",
    difficulty: "高",
    status: "待测试",
    title: "地球俯冲接FPV高楼下坠",
    scene: "城市宣传、旅拍开场、楼宇介绍、酒店/景区/活动场地出场、剧情片高能转场、从地图定位切到实景地点。",
    hook: "从太空俯瞰地球开始，镜头极速坠入云层和城市，再无缝接到FPV视角从高楼边缘下坠，最后贴近城市建筑平飞。前3秒靠尺度突变和失重感抓住观众。",
    shoot: "实拍重点放在FPV城市段：从高楼顶部向下俯冲，贴近建筑立面下降，再转为平飞穿过屋顶、树林或城市建筑。没有FPV条件时，可用航拍高空俯冲、楼顶俯拍、城市平飞素材拼接，再用AI生成中间过渡。",
    assets: "地球/卫星视角素材、云层下坠素材、城市俯视素材、高楼俯冲FPV素材、城市平飞素材、暗场或遮挡收尾素材、目标城市截图。",
    prompt: "首尾帧AI视频生成，镜头从太空俯瞰地球开始，快速向地表坠落，穿过云层后进入一座现代城市上空，无缝衔接FPV视角沿高楼外立面高速下坠，再贴近城市建筑平飞，真实航拍质感，强烈速度感，运动模糊自然，电影感夕阳光线，竖屏9:16，时长4秒，不要文字，不要水印，不要卡通，不要画面撕裂。",
    notes: "制作要点：所有镜头围绕向下坠落组织；云层、建筑边缘、暗场可作为隐藏剪辑点；AI只负责最难衔接的过渡段，FPV实拍素材越真实越可信。负面提示词：不要科幻飞船、不要卡通地球、不要地图UI、不要文字标签、不要建筑过度变形、不要镜头方向混乱。",
    media: "03_视觉参考/earth-fpv-transition-reference.mp4"
  },
  {
    id: "REF-002",
    category: "人物增强类",
    difficulty: "中",
    status: "待测试",
    title: "站定不动运镜换装",
    scene: "OOTD穿搭、服装品牌种草、个人形象片、街拍账号、达人穿搭企划、单品展示、换季穿搭合集。",
    hook: "人物站在街道中轴线不动，镜头快速推近后在动作节奏点完成换装；中段用纵向模糊和下沉动作隐藏剪辑，后段接包、裤子、鞋的局部特写，最后坐姿定格收尾。",
    shoot: "机位放在道路或场景中轴线上，利用地面线条和建筑边缘制造纵深。每套造型都站在同一个位置，脚尖、肩线、头部高度尽量一致。每套衣服都拍远景站定、推近、扶帽檐或手部动作、向前走一步、下沉或蹲下。",
    assets: "每套造型的远景、半身、近景、局部特写；包、鞋、裤子、帽子的细节镜头；一条空镜；同机位参考帧；节奏音乐或鼓点。",
    prompt: "首尾帧AI视频生成，一个穿搭博主站在城市街道中轴线上，镜头从远景快速推近到半身，人物保持同一站位，在扶帽檐和身体下沉的动作中完成黑色街头风穿搭变化，真实街拍质感，强透视道路线条，阳光硬阴影，轻微运动模糊，OOTD短视频风格，竖屏9:16，时长3秒，不要文字，不要水印，不要卡通，不要脸部变形。",
    notes: "制作要点：换装点必须有遮挡、模糊或大动作；不同造型要对齐机位、站位、头部高度和动作节奏；后段用包、鞋、裤子、帽子特写强化穿搭信息。负面提示词：不要换脸、不要背景跳变、不要衣服穿模、不要手指畸形、不要人物位置漂移。",
    media: "03_视觉参考/ootd-static-outfit-transition-reference.mp4"
  },
  {
    id: "REF-003",
    category: "人物增强类",
    difficulty: "高",
    status: "待测试",
    title: "手机出屏变妆",
    scene: "变妆视频、妆造账号、剧情反转、手机品牌/数码产品创意广告、虚拟人出场、赛博风人物包装、短剧角色变身。",
    hook: "手机悬在画面中，屏幕里的人物伸手突破屏幕边界，像是从手机里逃出来；随后画面进入手机内部空间，人物从日常造型变成黑色科技风造型。",
    shoot: "先拍现实走廊场景：人物站在中轴线上，抬手接手机或托手机，背景对称干净。再拍手机屏幕内人物素材：人物做伸手、探出、看向外部的动作，手部要靠近镜头。第三段拍变妆后的黑色科技风造型，可用黑背景、环形灯、LED灯管和反光服装。",
    assets: "现实走廊人物素材、手机空屏素材、手机屏幕内人物素材、手部伸出屏幕素材、变妆后黑色科技风人物素材、环形灯阵/LED灯素材、黑场收尾素材、手机屏幕遮罩。",
    prompt: "首尾帧AI视频生成，一个女人站在对称的现代走廊中，手中托着一部悬浮手机，手机屏幕里出现另一个日常造型的自己，屏幕内人物伸手突破手机屏幕边界并向外逃出，随后画面进入手机内部的黑色科技空间，人物变成黑色皮衣赛博风妆造，周围有环形LED灯阵和悬浮手机，真实电影质感，强烈纵深，竖屏9:16，时长4秒，不要文字，不要水印，不要卡通，不要手指畸形。",
    notes: "制作要点：手机边框要清晰，方便做屏幕遮罩；出屏动作优先选择手部；屏幕内人物和现实人物视线方向要呼应；进入手机内部时用黑场、放大屏幕或强光效隐藏剪辑。负面提示词：不要手机变形、不要屏幕边框扭曲、不要多余手指、不要脸部变形、不要人物身份变化。",
    media: "03_视觉参考/screen-break-makeup-transition-reference.mp4"
  },
  {
    id: "REF-004",
    category: "影视感包装类",
    difficulty: "高",
    status: "待测试",
    title: "视频行业游戏化角色创建",
    scene: "团队介绍、职业介绍、视频行业创意短片、品牌活动开场、设备/工具展示、栏目包装、达人账号世界观设定、招聘宣传。",
    hook: "把现实视频行业拍成一款游戏：登录界面进入角色，选择摄影师/剪辑师/导演等职业，再用捏脸滑杆调整人物，最后选择相机、稳定器、话筒等装备。",
    shoot: "选择夜景、街区、天台、停车场、片场等有氛围的场景，最好有霓虹灯、路灯、湿地反光或工业背景。登录界面人物站远一点，职业选择多人横排，捏脸界面拍单人半侧脸特写，装备选择单独拍器材素材。",
    assets: "夜景城市背景、角色站立素材、多职业人物横排素材、单人脸部特写、器材道具素材、低机位过场、桥梁/城市Loading背景、游戏UI元素、发光文字、属性条、选择框、按钮音效。",
    prompt: "将现实视频行业创意短片包装成游戏角色创建界面，夜晚霓虹城市街区背景，一组视频行业从业者横排站立，画面上叠加青绿色发光游戏UI，包含登录界面、选择职业、捏脸滑杆、选择摄影器材装备、属性条和加载界面，真实电影质感，赛博朋克但不过度夸张，半透明HUD界面，竖屏9:16，清晰可读的界面布局，不要水印，不要乱码文字，不要卡通。",
    notes: "制作要点：先写清楚登录、角色管理、职业选择、捏脸、装备选择、Loading的流程；所有UI使用同一套颜色、字体、发光强度和按钮样式；人物拍摄要给顶部标题、左侧菜单和底部按钮留空间。负面提示词：不要UI遮挡脸部、不要乱码文字、不要装备变形、不要人物比例异常。",
    media: "03_视觉参考/video-industry-game-character-creator-reference.mp4"
  },
  {
    id: "REF-005",
    category: "产品展示类",
    difficulty: "中",
    status: "待测试",
    title: "背包装备悬浮展开",
    scene: "数码好物、EDC装备、拍摄器材展示、通勤包内容物、产品种草、开箱视频、工具清单、个人装备介绍。",
    hook: "人物打开背包后，多个电子设备从包里飞出，悬浮在人物头部和手势周围；人物一伸手，物体像被控制一样散开排列，能快速展示所有产品。",
    shoot: "固定机位，背景尽量干净，人物站在画面一侧或中间，手里拿包。先拍干净底片，再拍人物打开包、抬头看物体、伸手控制、收回动作。拍摄时给人物头部上方和身体前方留空间。",
    assets: "干净底片、人物拿包表演素材、包的开口位置参考、每个物体的抠像素材或产品图、悬浮路径动画、阴影/接触光、运动模糊、可选音效。",
    prompt: "首尾帧AI视频生成，一个人站在干净的室内沙发前，手中打开黑色背包，多件电子设备从背包里飞出并悬浮在人物周围，包括手机、耳机、相机镜头、充电器和小配件，人物伸手像控制物体一样让它们在空中展开排列，真实短视频拍摄质感，干净白色背景，自然光，轻微运动模糊，竖屏9:16，时长3秒，不要文字，不要水印，不要卡通，不要物体变形。",
    notes: "制作要点：拍干净底片；用包口边缘做遮罩隐藏物体出现；悬浮物控制在6-10个；每个物体要有轻微旋转和漂浮；人物手势要和物体展开方向匹配。负面提示词：不要多余手指、不要产品变形、不要背景跳动、不要杂乱漂浮。",
    media: "03_视觉参考/object-levitation-reference.mov"
  },
  {
    id: "REF-006",
    category: "AI场景扩展类",
    difficulty: "中",
    status: "待测试",
    title: "画中画扩景走出",
    scene: "旅行开场、人物出场、AI扩图展示、空间想象类短视频、普通素材二创、地点转换、剧情梦境段落、视觉钩子开头。",
    hook: "原始视频只保留在画面中央的小窗口里，人物沿着原视频的道路向前走；AI把这条路扩展成海面上的长桥，让人物像是从原视频里走出来，进入更宏大的不可能空间。",
    shoot: "拍人物沿着有明确透视线的道路、走廊、桥、楼梯向镜头走来。机位最好固定或轻微推进，人物运动方向要直，地面线条要清晰。不要让人物贴边，保留完整身体和脚下路面。",
    assets: "原始人物行走视频、原视频中间窗口截图、目标扩景风格参考图、AI扩景背景、人物遮罩、窗口边界遮罩、可选海面/天空/桥梁素材。",
    prompt: "将原视频画面中的道路向外扩展成一座横跨蓝色海面的长桥，保留中央原视频窗口，人物从窗口里的森林道路向前走出，桥面透视与原视频地面完全对齐，晴朗天空，远处海平线，真实摄影质感，空间开阔，轻微电影感，竖屏9:16，不要文字，不要水印，不要卡通，不要道路断裂。",
    notes: "制作要点：原视频要有清晰地面透视线；人物最好朝镜头正向走来；AI扩景优先延展地面；中央小窗口和扩景道路要严格对齐；进阶版需要人物抠像，让脚真正跨出窗口边界。负面提示词：不要人物变形、不要脚部悬空、不要道路透视错位。",
    media: "03_视觉参考/walk-out-transition-reference.mov"
  },
  {
    id: "REF-007",
    category: "转场类",
    difficulty: "中",
    status: "待测试",
    title: "拉手进入屏幕转场",
    scene: "探店转场、情侣/朋友互动、旅行vlog、剧情开场、从电脑内容切到现实场景、教程类视频片头、第一人称沉浸式转场。",
    hook: "画面先看到电脑屏幕，屏幕里播放人物向镜头伸手的视频；人物开始往前拉的一瞬间，画面无缝切入真实拉手镜头，像是观众被屏幕里的人直接拉进另一个场景。",
    shoot: "第一段拍拉手视频：人物面对镜头伸手，手先靠近镜头，再做拉着镜头往前走的动作，拍摄者跟随前进。第二段拍电脑屏幕：屏幕最好纯白或亮屏，周围较暗，机位固定，屏幕完整出现在画面里。",
    assets: "拉手视频、电脑屏幕视频、剪辑软件、屏幕区域遮罩、缩放/位置关键帧。可选素材包括鼠标点击音、拉动音效、屏幕发光音效。",
    prompt: "非AI制作步骤：1. 导入拉手视频和电脑屏幕视频；2. 电脑屏幕视频放底层；3. 拉手视频放上方，缩放/旋转/移动到屏幕区域；4. 找到人物开始往前拉的那一帧；5. 把这一帧对齐到转场切点；6. 复制一层拉手视频放到最上面；7. 转场前显示屏幕里的拉手视频，转场点后切到全屏拉手视频；8. 微调缩放和切点，让手部运动连续。",
    notes: "不需要AI。制作要点：拉手动作要明确，手靠近镜头越近越容易藏切点；电脑屏幕要拍稳，最好用三脚架；屏幕素材可稍微放大；上下两层拉手素材要时间对齐；剪映、PR、达芬奇都能做。",
    media: "03_视觉参考/hand-pull-transition-reference.mp4"
  },
  {
    id: "REF-008",
    category: "影视感包装类",
    difficulty: "高",
    status: "待测试",
    title: "AE三维图层穿梭运镜",
    scene: "Vlog片头、物品展示、教程开场、电影感标题、人物出场、空间穿梭转场、产品展示、探店包装、栏目视觉包装。",
    hook: "画面中的视频、字幕、图片像被放进一个三维空间里，镜头从前景穿过字幕和画面层，向人物或场景深处推进。观众会感觉不是普通平面缩放，而是镜头真的在空间里运动。",
    shoot: "前期尽量拍有纵深的素材，例如走廊、门框、货架、书架、楼梯、相机屏幕、狭窄通道。画面中最好有明显前景和后景，人物或主体不要太贴边，给字幕和3D元素留出前后运动空间。",
    assets: "主视频素材、字幕文字、可选图片/贴纸/图形元素、AE合成、摄像机图层、空对象、3D图层、图表编辑器速度曲线、可选光效/镜头光晕/运动模糊。",
    prompt: "非AI AE制作步骤：1. 主视频导入AE并新建合成；2. 添加字幕、图片或包装元素；3. 打开视频、字幕、图片图层的3D开关；4. 新建摄像机，可绑定空对象；5. 在自定义视图观察3D空间；6. 调整各层Z轴位置，让字幕和画面前后错开；7. 给摄像机或空对象位置打关键帧，做推进、横移或穿梭；8. 开启运动模糊；9. 打开图表编辑器，调整关键帧速度曲线；10. 叠加适量镜头光晕、暗角或颗粒增强电影感。",
    notes: "不需要AI。制作要点：前期素材要有明显纵深；必须打开3D图层；字幕和素材要在Z轴前后错开；摄像机建议绑定空对象；一定要用图表编辑器调速度曲线，线性运动会很假；运动模糊和光效不要盖住主体。",
    media: "03_视觉参考/ae-3d-camera-move-reference.mp4"
  },
  {
    id: "REF-009",
    category: "转场类",
    difficulty: "中",
    status: "待测试",
    title: "遮幅掉出屏幕变装",
    scene: "变装视频、搞笑剧情、产品展示开场、人物出场/退场、短剧转场、创意剪辑教程、Vlog趣味段落。",
    hook: "人物站在画面中介绍内容，突然被横向道具触发，身体向下掉出画面；画面下方像有一个真实屏幕边界，人物掉出去后只剩背景和文字。",
    shoot: "相机必须固定，最好用三脚架。画面前方放沙发、垫子或黑色物体作为下方遮挡边界。人物站在遮挡物后方，助手拿横杆从侧面扫过，人物配合低头、弯腰、下蹲或倒下。额外拍一段空背景，方便后期擦除穿帮。",
    assets: "固定机位人物表演素材、空背景素材、横杆/触发道具素材、前景遮挡物、上下黑色遮幅、文字标题、擦除/遮罩工具、可选音效。",
    prompt: "非AI制作步骤：1. 固定相机拍完整动作；2. 人物站在前景遮挡物后方；3. 横杆从画面侧面扫过，人物配合向下掉出画面；4. 添加上下黑色遮幅，模拟屏幕边界；5. 调整下方黑边盖住人物掉落位置；6. 找到人物开始下坠的动作点；7. 用擦除、蒙版或空背景素材擦掉横杆、助手手部和穿帮区域；8. 必要时逐帧遮住人物下半身，让他像掉到屏幕外；9. 加文字和音效强化效果。",
    notes: "不需要AI。剪映、PR、达芬奇都能做。制作要点：机位固定；前景要有遮挡物；横杆只是触发道具，后期要擦掉；人物下坠动作和横杆节奏一致；一定要拍空背景；遮幅位置要盖住人物消失边缘。",
    media: "03_视觉参考/screen-fall-out-transition-reference.mp4"
  },
  {
    id: "REF-010",
    category: "转场类",
    difficulty: "中",
    status: "待测试",
    title: "外套遮挡穿墙魔术",
    scene: "手机拍摄教程、魔术感开场、人物消失、变装转场、剧情反转、宿舍/走廊/办公室创意短片、低成本剪辑特效。",
    hook: "人物先冲向一面墙，下一秒外套猛地砸到墙上，人物像被墙吸进去一样消失。观众会想知道人怎么不见了，适合放在视频前3秒制造停留。",
    shoot: "找一面结实、背景干净、光线稳定的墙，手机尽量固定。第一段拍人物冲向墙面，靠近墙前收力保证安全；第二段同机位拍外套用力扔到墙上，让外套展开并盖住人物会消失的位置；第三段拍同机位空背景，用来后期补干净画面。",
    assets: "人物冲向墙素材、外套砸墙素材、同机位空背景、撞击音效、布料甩动音效、速度变化、蒙版/擦除工具。",
    prompt: "非AI制作步骤：1. 导入人物冲墙、外套砸墙、空背景三段素材；2. 找到人物快要接触墙面的瞬间；3. 把外套刚好展开并遮住墙面的那一帧对齐为转场点；4. 用外套遮挡隐藏剪辑点；5. 后半段叠加空背景；6. 用分割、蒙版、智能抠像或擦除删除多余部分；7. 把人物卡出去，只保留墙面和外套的冲击感；8. 加撞击音效、布料音效和轻微画面震动。",
    notes: "不需要AI。制作要点：机位固定；墙面干净；外套遮挡面积要大；人物冲墙动作要有冲击感但必须安全；一定要拍空背景；剪辑点放在外套展开、画面最乱的一瞬间，最容易藏穿帮。",
    media: "03_视觉参考/mobile-magic-effect-reference.mp4"
  },
  {
    id: "REF-011",
    category: "空间变化类",
    difficulty: "中",
    status: "待测试",
    title: "巨人跨越低机位开场",
    scene: "旅行开场、校园/城市地标介绍、人物出场、运动类短视频、品牌活动开头、剧情夸张段落、剪辑教程账号、Vlog高能开场。",
    hook: "普通城市或校园场景中，一个巨大人物从建筑后方出现，腿部从镜头上方跨过，最后落到画面前景。人物尺度突然变大，第一眼就能形成视觉停留。",
    shoot: "选择有开阔天空和建筑参照物的场景，手机低机位仰拍，最好固定或保持稳定。让人物从远处起跳、落地、蹲下或靠近镜头，腿部和脚部要经过画面上方。拍摄时多留天空区域，方便后期放大人物后仍然有移动空间。",
    assets: "低机位人物起跳落地素材、同机位场景底片、人物定格片段、智能抠像/蒙版、缩放关键帧、落地震动、脚步声、冲击音效、可选阴影或暗角。",
    prompt: "非AI制作步骤：1. 导入低机位人物起跳落地素材；2. 找到人物起跳后落地或腿部经过镜头的片段；3. 在关键动作处点击定格；4. 把定格片段复制并粘贴到上一层轨道；5. 对上层定格片段使用智能抠像，只保留人物；6. 将上层人物放大并移动到画面上方或建筑后方；7. 调整位置让腿部从镜头上方跨过；8. 加脚步声、落地冲击音效和轻微画面震动。",
    notes: "不需要AI。制作要点：低机位越明显越有巨人感；天空留白要足够；背景里最好有楼、路灯、树等参照物；上层人物边缘要抠干净；人物不要完全挡死背景，保留环境才能显出尺度。",
    media: "03_视觉参考/giant-step-over-opening-reference.mp4"
  }
];

const builtinDefaults = {
  fields: {
    pageTitle: "短视频特效镜头库执行单",
    goal: "建立一套可持续更新的短视频特效镜头库，用于选题策划、拍摄执行、后期制作和向领导汇报参考。",
    week1: "第 1 周：搭框架，完成 10 个样板。",
    week2: "第 2 周：扩展到 30 个特效。",
    week3: "第 3 周：扩展到 50 个特效。",
    week4: "第 4 周：筛选 15 个常用特效，形成标准方案。",
    check1: "什么场景用？",
    check2: "前期怎么拍？",
    check3: "后期怎么做？",
    check4: "AI 提示词怎么写？",
    check5: "团队能否稳定复现？",
    heroTitle: "先做样板，再扩展成库",
    heroText: "每个特效都要沉淀成可拍摄、可生成、可复现、可展示的标准条目。这里可以放你的项目说明、领导要求、参考博主和当前进度。"
  },
  heroMedia: "",
  cards: [
    ...localReferenceCards,
    ...douyinAiTransitionCards,
    {
      id: "001",
      category: "转场类",
      difficulty: "低",
      status: "待测试",
      title: "推门换场景",
      scene: "探店、办公室、产品发布、人物出场。",
      hook: "开门瞬间从普通空间切到更有冲击力的场景。",
      shoot: "固定或半固定机位，人物推门前后动作保持一致；拍一条门前，一条门后，注意手的位置和速度。",
      assets: "门前素材、门后素材、空镜、门框遮罩。",
      prompt: "主体 + 推门动作 + 新场景 + 镜头轻微推进 + 真实短视频风格 + 竖屏9:16 + 不要文字水印。",
      notes: "可先用最简单的遮罩转场测试，确认节奏后再加光效或音效。",
      media: ""
    },
    {
      id: "002",
      category: "AI场景扩展类",
      difficulty: "中",
      status: "待收集",
      title: "普通房间变未来空间",
      scene: "知识类开场、科技产品、工作室展示。",
      hook: "镜头拉开后，普通空间被扩展成未来感大场景。",
      shoot: "人物站位稳定，背景尽量干净；拍摄时留出头顶和两侧空间，方便 AI 扩图或生视频。",
      assets: "原始人物视频、干净背景、AI 扩展图、遮罩。",
      prompt: "真实办公室空间向外扩展成未来科技工作室，保留人物位置，电影感灯光，真实材质，竖屏9:16，不要卡通，不要文字。",
      notes: "适合做领导汇报样板，因为 AI 可行性高、视觉变化明显。",
      media: ""
    },
    {
      id: "003",
      category: "产品展示类",
      difficulty: "中",
      status: "可复现",
      title: "产品悬浮环绕",
      scene: "电商短视频、产品种草、发布会感包装。",
      hook: "产品悬浮在画面中心，周围出现材质、参数或能量线。",
      shoot: "产品单独拍摄，最好用转台或手持稳定器；补一条干净背景，便于抠像和合成。",
      assets: "产品素材、背景素材、参数文案、光效素材。",
      prompt: "一个产品悬浮在画面中央，镜头缓慢环绕，周围有精致光线和半透明界面元素，商业广告质感，真实摄影风格，竖屏9:16。",
      notes: "后续可按不同产品批量复用。",
      media: ""
    }
  ]
};

const defaults = window.defaultShotLibraryState ?? builtinDefaults;
const storageKey = "vfx-shot-library-board-v2";
const mediaDbName = "vfx-shot-library-media";
const mediaStoreName = "media";
const canUseSharedApi = location.protocol === "http:" || location.protocol === "https:";
const knownAddedOrder = {
  "001": 1,
  "002": 2,
  "003": 3,
  "DY-001": 4,
  "DY-002": 5,
  "DY-003": 6,
  "DY-004": 7,
  "DY-005": 8,
  "DY-006": 9,
  "REF-001": 10,
  "REF-002": 11,
  "REF-003": 12,
  "REF-004": 13,
  "REF-005": 14,
  "REF-006": 15,
  "REF-007": 16,
  "REF-008": 17,
  "REF-009": 18,
  "REF-010": 19,
  "REF-011": 20
};
let state = loadState();
let activeCategory = "全部";
let searchQuery = "";
let sharedMode = false;
let remoteSaveTimer = null;

const cardsEl = document.querySelector("#cards");
const tableBody = document.querySelector("#tableBody");
const cardTemplate = document.querySelector("#cardTemplate");
const modeBadge = document.querySelector("#modeBadge");

init();

function init() {
  bindGlobalFields();
  renderFilters();
  renderCards();
  bindHeroMedia();
  bindControls();
  migrateDataUrlMedia();
  loadSharedState();
}

function loadState() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return migrateState(structuredClone(defaults));
  try {
    return migrateState({ ...structuredClone(defaults), ...JSON.parse(stored) });
  } catch {
    return migrateState(structuredClone(defaults));
  }
}

function migrateState(nextState) {
  const existingIds = new Set((nextState.cards ?? []).map((card) => card.id));
  const referenceCards = [...localReferenceCards, ...douyinAiTransitionCards];
  const missingReferenceCards = referenceCards.filter((card) => !existingIds.has(card.id));
  if (missingReferenceCards.length) {
    nextState.cards = [...structuredClone(missingReferenceCards), ...(nextState.cards ?? [])];
  }
  normalizeAddedOrder(nextState.cards ?? []);
  return nextState;
}

function normalizeAddedOrder(cards) {
  let nextOrder = Math.max(0, ...cards.map((card) => knownAddedOrder[card.id] ?? Number(card.addedOrder) ?? 0)) + 1;
  cards.forEach((card, index) => {
    if (Number.isFinite(Number(card.addedOrder))) {
      card.addedOrder = Number(card.addedOrder);
      return;
    }
    if (knownAddedOrder[card.id]) {
      card.addedOrder = knownAddedOrder[card.id];
      return;
    }
    if (!Number.isFinite(Number(card.addedOrder))) {
      card.addedOrder = nextOrder + index;
    }
  });
}

function getNextAddedOrder() {
  return Math.max(0, ...state.cards.map((card) => Number(card.addedOrder) || 0)) + 1;
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
    renderTable();
    scheduleRemoteSave();
  } catch {
    alert("保存失败：浏览器本地空间不足。视频请刷新后重新导入，新版本会把视频保存到更适合大文件的本地数据库。");
  }
}

function bindGlobalFields() {
  syncGlobalFields();
  document.querySelectorAll("[data-field]").forEach((node) => {
    const key = node.dataset.field;
    node.addEventListener("input", () => {
      state.fields[key] = node.textContent.trim();
      saveState();
    });
  });
}

function syncGlobalFields() {
  document.querySelectorAll("[data-field]").forEach((node) => {
    const key = node.dataset.field;
    node.textContent = state.fields[key] ?? "";
  });
}

function bindHeroMedia() {
  const slot = document.querySelector("[data-media-for='hero']");
  paintMedia(slot, state.heroMedia);
  slot.addEventListener("change", (event) => {
    if (!event.target.matches("input[type='file']")) return;
    saveMediaFile(event.target.files[0]).then((mediaRef) => {
      if (!mediaRef) return;
      state.heroMedia = mediaRef;
      paintMedia(slot, mediaRef);
      saveState();
    }).catch(() => {
      alert("素材保存失败。请换一个更小的 MP4/H.264 视频，或先压缩后再导入。");
    });
  });
}

function bindControls() {
  document.querySelector("#addCardBtn").addEventListener("click", () => {
    const next = String(state.cards.length + 1).padStart(3, "0");
    state.cards.unshift({
      id: next,
      addedOrder: getNextAddedOrder(),
      category: "转场类",
      difficulty: "低",
      status: "待收集",
      title: "新特效名称",
      scene: "填写适用场景。",
      hook: "填写视觉钩子。",
      shoot: "填写前期拍摄方法。",
      assets: "填写需要准备的素材。",
      prompt: "填写 AI 提示词。",
      notes: "填写参考链接或备注。",
      media: ""
    });
    saveState();
    renderCards();
  });

  document.querySelector("#searchInput").addEventListener("input", (event) => {
    searchQuery = event.target.value.trim().toLowerCase();
    renderCards();
  });

  document.querySelector("#exportBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "短视频特效镜头库数据.json";
    link.click();
    URL.revokeObjectURL(url);
  });

  document.querySelector("#importInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state = migrateState({ ...structuredClone(defaults), ...JSON.parse(reader.result) });
        saveState();
        syncGlobalFields();
        paintMedia(document.querySelector("[data-media-for='hero']"), state.heroMedia);
        renderCards();
      } catch {
        alert("导入失败，请确认是本页面导出的 JSON 文件。");
      }
    };
    reader.readAsText(file);
  });
}

async function loadSharedState() {
  updateModeBadge();
  if (!canUseSharedApi) return;

  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    if (!response.ok) throw new Error("Shared API unavailable.");
    const remoteState = await response.json();
    sharedMode = true;
    state = remoteState?.cards ? migrateState({ ...structuredClone(defaults), ...remoteState }) : migrateState(structuredClone(defaults));
    localStorage.setItem(storageKey, JSON.stringify(state));
    syncGlobalFields();
    paintMedia(document.querySelector("[data-media-for='hero']"), state.heroMedia);
    renderCards();
    updateModeBadge();
    if (!remoteState?.cards) scheduleRemoteSave();
  } catch {
    sharedMode = false;
    updateModeBadge();
  }
}

function updateModeBadge() {
  if (!modeBadge) return;
  modeBadge.textContent = sharedMode ? "团队在线模式" : "本地模式";
  modeBadge.classList.toggle("online", sharedMode);
}

function scheduleRemoteSave() {
  if (!sharedMode) return;
  clearTimeout(remoteSaveTimer);
  remoteSaveTimer = setTimeout(() => {
    saveRemoteState().catch(() => {
      sharedMode = false;
      updateModeBadge();
      alert("团队在线保存失败，当前改动已暂存在本机。请检查服务器是否还在运行。");
    });
  }, 450);
}

async function saveRemoteState() {
  const response = await fetch("/api/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state)
  });
  if (!response.ok) throw new Error("Remote save failed.");
}

function renderFilters() {
  const filters = document.querySelector("#filters");
  filters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter${category === activeCategory ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderCards();
    });
    filters.append(button);
  });
}

function renderCards() {
  cardsEl.innerHTML = "";
  getVisibleCards().forEach((card) => cardsEl.append(createCard(card)));
  renderTable();
}

function createCard(card) {
  const node = cardTemplate.content.firstElementChild.cloneNode(true);
  node.dataset.id = card.id;

  const mediaSlot = node.querySelector(".card-media");
  paintMedia(mediaSlot, card.media);
  mediaSlot.addEventListener("change", (event) => {
    if (!event.target.matches("input[type='file']")) return;
    saveMediaFile(event.target.files[0]).then((mediaRef) => {
      if (!mediaRef) return;
      card.media = mediaRef;
      paintMedia(mediaSlot, mediaRef);
      saveState();
    }).catch(() => {
      alert("素材保存失败。请换一个更小的 MP4/H.264 视频，或先压缩后再导入。");
    });
  });

  bindEditable(node, ".shot-id", card, "id");
  bindEditable(node, ".title", card, "title");
  bindEditable(node, ".scene", card, "scene");
  bindEditable(node, ".hook", card, "hook");
  bindEditable(node, ".shoot", card, "shoot");
  bindEditable(node, ".assets", card, "assets");
  bindEditable(node, ".prompt", card, "prompt");
  bindEditable(node, ".notes", card, "notes");

  bindSelect(node, ".category", card, "category", categories.filter((item) => item !== "全部"));
  bindSelect(node, ".difficulty", card, "difficulty");
  bindSelect(node, ".status", card, "status");

  node.querySelector(".duplicate").addEventListener("click", () => {
    const copy = structuredClone(card);
    copy.id = `${card.id}-副本`;
    copy.title = `${card.title} 副本`;
    copy.addedOrder = getNextAddedOrder();
    state.cards.splice(state.cards.findIndex((item) => item === card) + 1, 0, copy);
    saveState();
    renderCards();
  });

  node.querySelector(".delete").addEventListener("click", () => {
    if (!confirm(`删除「${card.title}」？`)) return;
    state.cards = state.cards.filter((item) => item !== card);
    saveState();
    renderCards();
  });

  return node;
}

function bindEditable(root, selector, card, key) {
  const node = root.querySelector(selector);
  node.textContent = card[key] ?? "";
  node.addEventListener("input", () => {
    card[key] = node.textContent.trim();
    saveState();
  });
}

function bindSelect(root, selector, card, key, options) {
  const select = root.querySelector(selector);
  if (options) {
    select.innerHTML = "";
    options.forEach((option) => {
      const item = document.createElement("option");
      item.textContent = option;
      select.append(item);
    });
  }
  select.value = card[key];
  select.addEventListener("change", () => {
    card[key] = select.value;
    saveState();
    renderFilters();
    renderTable();
  });
}

function renderTable() {
  tableBody.innerHTML = "";
  [...getVisibleCards()].sort((a, b) => {
    const orderA = Number(a.addedOrder) || Number.MAX_SAFE_INTEGER;
    const orderB = Number(b.addedOrder) || Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  }).forEach((card) => {
    const row = document.createElement("tr");
    [card.id, card.category, card.title, card.scene, card.difficulty, card.status].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    tableBody.append(row);
  });
}

function getVisibleCards() {
  return state.cards.filter((card) => {
    const matchesCategory = activeCategory === "全部" || card.category === activeCategory;
    const text = Object.values(card).join(" ").toLowerCase();
    const matchesSearch = !searchQuery || text.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });
}

function openMediaDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not supported."));
      return;
    }

    const request = indexedDB.open(mediaDbName, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(mediaStoreName, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveMediaFile(file) {
  if (!file) return null;
  if (sharedMode) return uploadSharedMedia(file);
  return saveMediaBlob(file, file.name, file.type || "application/octet-stream", file.size);
}

async function uploadSharedMedia(file) {
  const params = new URLSearchParams({
    name: file.name,
    type: file.type || "application/octet-stream"
  });
  const response = await fetch(`/api/upload?${params.toString()}`, {
    method: "POST",
    body: file
  });
  if (!response.ok) throw new Error("Upload failed.");
  const result = await response.json();
  return result.path;
}

async function saveMediaBlob(blob, name, type, size) {
  const db = await openMediaDb();
  const id = `media-${Date.now()}-${crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)}`;
  const mediaRef = {
    id,
    kind: "indexeddb-media",
    name,
    size,
    type
  };

  await new Promise((resolve, reject) => {
    const transaction = db.transaction(mediaStoreName, "readwrite");
    transaction.objectStore(mediaStoreName).put({ ...mediaRef, blob });
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
  db.close();
  return mediaRef;
}

async function migrateDataUrlMedia() {
  let changed = false;

  if (isDataMedia(state.heroMedia)) {
    const migrated = await dataUrlToStoredMedia(state.heroMedia, "封面素材");
    if (migrated) {
      state.heroMedia = migrated;
      changed = true;
    }
  }

  for (const card of state.cards) {
    if (!isDataMedia(card.media)) continue;
    const migrated = await dataUrlToStoredMedia(card.media, `${card.id || "镜头"}素材`);
    if (migrated) {
      card.media = migrated;
      changed = true;
    }
  }

  if (changed) {
    saveState();
    paintMedia(document.querySelector("[data-media-for='hero']"), state.heroMedia);
    renderCards();
  }
}

function isDataMedia(mediaRef) {
  return typeof mediaRef === "string" && (mediaRef.startsWith("data:image") || mediaRef.startsWith("data:video"));
}

async function dataUrlToStoredMedia(dataUrl, name) {
  try {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    return saveMediaBlob(blob, name, blob.type || "application/octet-stream", blob.size);
  } catch {
    return null;
  }
}

async function getStoredMedia(mediaRef) {
  if (!mediaRef || typeof mediaRef === "string") return null;
  if (mediaRef.kind !== "indexeddb-media") return null;

  const db = await openMediaDb();
  const media = await new Promise((resolve, reject) => {
    const transaction = db.transaction(mediaStoreName, "readonly");
    const request = transaction.objectStore(mediaStoreName).get(mediaRef.id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return media;
}

async function paintMedia(slot, mediaRef) {
  const input = slot.querySelector("input");
  slot.innerHTML = "";
  if (slot.dataset.objectUrl) {
    URL.revokeObjectURL(slot.dataset.objectUrl);
    delete slot.dataset.objectUrl;
  }

  if (!mediaRef) {
    slot.classList.remove("has-media");
    const span = document.createElement("span");
    span.textContent = slot.classList.contains("hero-media") ? "点击添加封面图或视频" : "添加效果图/视频";
    slot.append(span, input);
    return;
  }

  slot.classList.add("has-media");
  let mediaUrl = mediaRef;
  let mediaType = typeof mediaRef === "string" && mediaRef.startsWith("data:") ? mediaRef.slice(5, mediaRef.indexOf(";")) : "";

  if (typeof mediaRef !== "string") {
    try {
      const storedMedia = await getStoredMedia(mediaRef);
      if (!storedMedia?.blob) throw new Error("Missing media blob.");
      mediaUrl = URL.createObjectURL(storedMedia.blob);
      mediaType = storedMedia.type || mediaRef.type || "";
      slot.dataset.objectUrl = mediaUrl;
    } catch {
      slot.classList.remove("has-media");
      const span = document.createElement("span");
      span.textContent = "素材读取失败，请重新导入";
      slot.append(span, input);
      return;
    }
  }

  const mediaPath = String(mediaUrl).split("?")[0].toLowerCase();
  const isVideo = mediaType.startsWith("video") || String(mediaUrl).startsWith("data:video") || /\.(mp4|mov|m4v|webm|ogg)$/.test(mediaPath);
  const media = document.createElement(isVideo ? "video" : "img");
  media.src = mediaUrl;
  if (isVideo) {
    media.controls = true;
    media.muted = false;
    media.playsInline = true;
    media.preload = "metadata";
  }
  slot.append(media, input);
}
