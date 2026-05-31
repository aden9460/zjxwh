const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "郑嘉雯",
  role: "数字媒体与智能传播硕士",
  location: "浙江杭州",
  summary:
    "关注 AI Agent、内容运营、品牌传播与数字文旅的结合，具备美妆达人投放、私域运营、新媒体账号孵化、多模态影像策划与数据分析经验。",
  intro:
    "我擅长把用户洞察、平台数据和内容创意转化为可执行的传播策略，也在尝试用 Qwen、Codex、Claude、Midjourney 等工具提升内容生产和投放决策效率。",
  contacts: [
    { label: "邮箱", value: "2459871356@qq.com", href: "mailto:2459871356@qq.com" },
    { label: "电话", value: "15158006182", href: "tel:15158006182" },
    {
      label: "主页",
      value: "aden9460.github.io/zjxwh",
      href: "https://aden9460.github.io/zjxwh/",
    },
  ],
};

export const projects = [
  {
    id: "proya",
    title: "珀莱雅 / 彩棠 Beauty KOL Intelligence Agent",
    meta: "抖音内容运营 · 2025.12 - 2026.05",
    tags: ["AI Agent", "美妆投放", "达人筛选", "多模态分析"],
    cover: asset("portfolio-assets/proya/01.png"),
    images: Array.from({ length: 9 }, (_, index) =>
      asset(`portfolio-assets/proya/${String(index + 1).padStart(2, "0")}.png`)
    ),
    description:
      "基于彩棠实际达人筛选流程，搭建 Beauty KOL Intelligence Agent，将自然语言投放需求拆解为产品线、平台、粉丝区间、达人画像与排除项，并辅助完成候选视频搜索、达人信息整理和多模态内容分析。",
    highlights: [
      "参与彩棠修颜乳、青衣气垫、粉底液新品上市推广，跟进卖点拆解、达人匹配、素材测试与投放复盘。",
      "每周输出 20+ 达人推荐清单，累计促成 50+ 达人合作。",
      "跟踪 CTR、CPM、CPE、ROI 等投放数据，协助优化达人筛选标准与内容策略。",
      "撰写符合产品卖点的脚本，并每天编剪 4+ 条信息流视频内容。",
    ],
  },
  {
    id: "wuchan",
    title: "物产中大云商公司",
    meta: "媒介 · 2025.02 - 2025.05",
    tags: ["媒介投放", "KOL/KOC", "SQL", "数据复盘"],
    cover: asset("portfolio-assets/proya/05.png"),
    images: [
      asset("portfolio-assets/proya/05.png"),
      asset("portfolio-assets/proya/06.png"),
      asset("portfolio-assets/proya/07.png"),
    ],
    description:
      "围绕品牌推广需求参与达人筛选、建联、询价与商务谈判，从粉丝量级、报价、CPM/CPE 等维度评估合作适配度。",
    highlights: [
      "通过 SQL 提取与分析达人投放数据，围绕曝光、互动和转化输出效果分析报告。",
      "维护达人合作数据库与资源台账，跟进合作进度、结算对账和合同流程。",
      "以数据表现辅助团队优化媒介投放策略。",
    ],
  },
  {
    id: "kuai",
    title: "快美妆科技有限公司",
    meta: "私域运营 · 2024.07 - 2024.10",
    tags: ["私域运营", "达人直播", "社群维护", "用户转化"],
    cover: asset("portfolio-assets/kuai/01.png"),
    images: Array.from({ length: 13 }, (_, index) =>
      asset(`portfolio-assets/kuai/${String(index + 1).padStart(2, "0")}.png`)
    ),
    description:
      "负责达人全链路私域运营，覆盖商务对接、用户维护、直播跟播和导粉等流程。",
    highlights: [
      "参与达人前期选品与商务对接，筛选适配产品并协助推进合作落地。",
      "维护达人私域社群，策划社群活动与内容发布，提升用户活跃度。",
      "负责达人日播跟播与粉丝需求登记，强化直播人设与粉丝粘性。",
    ],
  },
  {
    id: "suzhou-xinchen",
    title: "苏州新晨传媒公司",
    meta: "新媒体运营 · 2022.12 - 2023.06",
    tags: ["小红书", "账号孵化", "文旅内容", "数据复盘"],
    cover: asset("portfolio-assets/suzhou-xinchen/01.jpg"),
    images: [
      asset("portfolio-assets/suzhou-xinchen/01.jpg"),
      asset("portfolio-assets/suzhou-xinchen/02.jpg"),
      asset("portfolio-assets/suzhou-xinchen/03.jpg"),
      asset("portfolio-assets/suzhou-xinchen/04.jpeg"),
      asset("portfolio-assets/suzhou-xinchen/05.jpeg"),
      asset("portfolio-assets/suzhou-xinchen/06.jpeg"),
      asset("portfolio-assets/suzhou-xinchen/07.jpeg"),
    ],
    description:
      "独立负责小红书账号从 0 到 1 的孵化运营，定位亲子旅行与文旅方向，完成选题策划、拍摄剪辑、发布运营与数据复盘。",
    highlights: [
      "累计策划并发布 30+ 篇旅行攻略类视频内容。",
      "2 个月涨粉 3000，累计浏览量达 30 万。",
      "根据用户数据与播放数据调整选题方向和内容呈现形式。",
    ],
  },
  {
    id: "digital-culture",
    title: "多模态数字影像 / 诗路文化带资源平台",
    meta: "数字文旅项目 · 2024.03 - 2025.12",
    tags: ["AIGC", "数字文旅", "数字人", "文化资源可视化"],
    cover: asset("portfolio-assets/digital-culture/01.png"),
    images: Array.from({ length: 22 }, (_, index) =>
      asset(`portfolio-assets/digital-culture/${String(index + 1).padStart(2, "0")}.png`)
    ),
    description:
      "参与“善琏湖笔”多模态数字影像内容策划和“诗路文化带资源平台”建设，连接传统文化研究、数字影像生成和文旅资源可视化。",
    highlights: [
      "结合湖笔文化背景设计数字影像脚本，参与数字人视觉效果优化与测试。",
      "项目相关成果获浙江省科学技术进步奖提名。",
      "编写《诗路文化带文旅资源考察报告》，整理文化遗产库和旅游产品库。",
      "协助团队将文化研究成果转化为可视化数字产品。",
    ],
  },
  {
    id: "popmart",
    title: "泡泡玛特策划案",
    meta: "广告策划作品 · 课程/竞赛实践",
    tags: ["品牌策划", "广告创意", "消费者洞察"],
    cover: asset("media/og-image.webp"),
    images: [],
    attachment: asset("portfolio-assets/popmart/plan.pdf"),
    description:
      "围绕品牌传播和消费者洞察完成策划案，呈现从策略分析、创意表达，到传播执行的完整广告策划思路。",
    highlights: [
      "可作为品牌策划、文案表达与整合传播能力的补充展示。",
      "点击详情中的附件可打开完整策划作品 PDF。",
    ],
  },
];

export const campus = [
  {
    title: "浙江传媒学院",
    meta: "数字媒体与智能传播 硕士 · 2023.10 - 2026.06",
    text: "研究生平均绩点 3.8，排名位于专业前 10%。",
  },
  {
    title: "班级心理委员",
    meta: "2023.10 - 2026.06",
    text: "策划心理健康周、心理健康月等主题活动，负责宣传文案、资源整理与活动沟通。",
  },
  {
    title: "社团理事会部长",
    meta: "2020.09 - 2022.05",
    text: "负责社团活动策划、宣传运营、数据分析和团队管理，推动多部门协作完成校园活动。",
  },
];

export const skills = [
  ["内容与运营", "KOL/KOC 筛选", "达人建联", "Brief 撰写", "脚本策划", "社群运营", "账号孵化"],
  ["数据分析", "SQL", "Python 基础", "CTR / CPM / CPE / ROI", "投放复盘", "用户数据分析"],
  ["AI 与 Agent", "Qwen", "Qwen3-VL", "Codex", "Claude", "Midjourney", "AI 辅助内容生产"],
  ["设计与影像", "PS", "AE", "PR", "无人机拍摄", "短视频剪辑", "宣传物料设计"],
  ["数字人与网页", "iClone", "Character Creator", "Dreamweaver", "基础网页结构搭建"],
];

export const honors = [
  "普通话二级甲等",
  "大学英语六级",
  "演出经纪人证书",
  "全国大学生广告艺术大赛策划案三等奖",
  "研究生绩点专业前 10%",
  "本科绩点专业前 10%",
  "中共党员",
];

export const publications = [
  "微短剧的共情叙事与文化认同实践——以《逃出大英博物馆》为例；第一作者；《数字出版研究》",
  "基于社交媒体的网民情感与群体认同分析——以“TI12”AR止步四强为例；第二作者；《数字出版研究》",
  "文化遗产数字化及数字文旅可视化服务技术研究；第三作者；《中国图象图形学报》",
];
