import type { Project } from '@/data/types';

// ------------------------------------------------------------------
// Project registry — the single source of truth for all six display
// slots (5 products + 1 paper). Every card, list row and detail page
// is rendered from this file. Fill/verify the TODO-marked fields.
//
// NOTE: GitHub URLs below are placeholders matching the planned repo
// names (执行计划 §5). They must be verified/replaced after push.
// ------------------------------------------------------------------

export const PROJECTS: Project[] = [
  {
    slug: 'docmind',
    kind: 'project',
    name: 'DocMind',
    glyph: '◇',
    status: { en: 'Flagship', zh: '代表作' },
    tagline: {
      en: 'Multimodal invoice intelligence & audit platform',
      zh: '多模态票据智能审核平台',
    },
    summary: {
      en: 'End-to-end invoice understanding and audit: Qwen-VL extracts structured fields with confidence, a rule engine flags duplicates, arithmetic mismatches and tax anomalies, and a knowledge graph visualizes the document graph.',
      zh: '端到端票据理解与稽查：Qwen-VL 抽取结构化字段并输出置信度，规则引擎自动预警重复发票号、金额不一致与税率异常，知识图谱可视化票据关联。',
    },
    tech: ['FastAPI', 'Qwen-VL', 'Python', 'React · TS', 'Rule Engine', 'KG Viz'],
    stats: [
      { value: '30', label: { en: 'invoice evaluation set', zh: '张样例发票评测集' } },
      { value: '3+', label: { en: 'audit rule categories', zh: '类稽查规则' } },
      { value: 'TODO', label: { en: 'field-level F1 (fill in)', zh: '字段级 F1（待填充）' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/docmind-invoice-intelligence',
        external: true,
        placeholder: true,
      },
      demo: {
        label: { en: 'Live demo', zh: '在线演示' },
        url: '#',
        external: true,
        placeholder: true,
      },
      internal: { en: 'Case study', zh: '案例详情' },
    },
    detail: {
      problem: {
        heading: { en: 'Problem', zh: '问题' },
        body: [
          {
            en: 'Manual invoice review for reimbursement and audit is slow, error-prone and hard to scale: clerks re-key fields, duplicate invoice numbers slip through, and arithmetic or tax-rate inconsistencies are caught only by chance.',
            zh: '报销与审计中的人工票据审核速度慢、易出错、难扩展：字段重复录入、重复发票号漏检、金额算术与税率不一致只能靠偶然发现。',
          },
          {
            en: 'Existing OCR tools extract text but not structure, and provide no confidence signal or audit logic on top.',
            zh: '现有 OCR 工具只能提取文本而非结构化字段，且不提供置信度信号，也没有审计逻辑。',
          },
        ],
      },
      approach: {
        heading: { en: 'Approach', zh: '方法' },
        body: [
          {
            en: 'Qwen-VL multimodal document understanding produces structured JSON fields with per-field confidence; a layered FastAPI service orchestrates extraction, normalization and audit.',
            zh: 'Qwen-VL 多模态文档理解输出带逐字段置信度的结构化 JSON；分层 FastAPI 服务编排抽取、标准化与稽查。',
          },
          {
            en: 'A declarative rule-audit engine detects duplicate invoice numbers, arithmetic inconsistencies, abnormal tax rates and buyer/seller mismatches, then visualizes the document relationships as a knowledge graph.',
            zh: '声明式规则审计引擎检测重复发票号、金额算术不一致、税率异常与购销方不符，并将票据关系以知识图谱可视化。',
          },
        ],
      },
      architecture: {
        en: 'Architecture diagram — upload → Qwen-VL extraction (JSON + confidence) → rule-audit engine → knowledge graph → React dashboard.',
        zh: '架构图占位 — 上传 → Qwen-VL 抽取（JSON + 置信度）→ 规则审计引擎 → 知识图谱 → React 看板。',
      },
      highlights: [
        { en: 'Structured field extraction with per-field confidence', zh: '结构化字段抽取，带逐字段置信度' },
        { en: 'Declarative rule engine: duplicate / arithmetic / tax anomalies', zh: '声明式规则引擎：重复 / 算术 / 税率异常' },
        { en: 'Knowledge-graph visualization of document relations', zh: '票据关联的知识图谱可视化' },
        { en: 'Field-level benchmark over 30 sample invoices', zh: '30 张样例发票的字段级评测基准' },
      ],
      results: [
        { en: 'TODO: fill in field-level precision/recall/F1 from the evaluation set.', zh: '待填充：评测集上的字段级精确率 / 召回率 / F1。' },
        { en: 'TODO: add demo video + screenshots (3–5).', zh: '待填充：演示视频与截图（3–5 张）。' },
      ],
      demo: {
        en: 'TODO: embed demo video/GIF + screenshots here. Static media only — no external hosting.',
        zh: '待填充：此处嵌入演示视频 / GIF 与截图。仅静态媒体，不依赖外部托管。',
      },
      techStack: [
        { en: 'Backend: Python · FastAPI (layered architecture)', zh: '后端：Python · FastAPI（分层架构）' },
        { en: 'Vision: Qwen-VL multimodal document understanding', zh: '视觉：Qwen-VL 多模态文档理解' },
        { en: 'Frontend: React · TypeScript dashboard', zh: '前端：React · TypeScript 看板' },
        { en: 'Data: knowledge graph + field-level evaluation harness', zh: '数据：知识图谱 + 字段级评测框架' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/docmind-invoice-intelligence (placeholder — verify after push).',
        zh: '源码：github.com/Ringnine009/docmind-invoice-intelligence（占位链接，推送后核对）。',
      },
      role: {
        heading: { en: 'My role', zh: '我的角色' },
        body: [
          {
            en: 'TODO: describe what you personally built — extraction pipeline, audit rules, KG visualization, evaluation set.',
            zh: '待填充：描述个人负责部分 — 抽取管线、审计规则、图谱可视化、评测集。',
          },
        ],
      },
      roleTags: [
        { en: 'Full-stack', zh: '全栈' },
        { en: 'ML integration', zh: '模型集成' },
      ],
      todos: [
        { en: 'Verify all result numbers against the evaluation run.', zh: '核对评测运行中的全部结果数字。' },
        { en: 'Replace GitHub/demo placeholder URLs.', zh: '替换 GitHub / 演示占位链接。' },
      ],
    },
  },
  {
    slug: 'mycoguard',
    kind: 'project',
    name: 'MycoGuard',
    glyph: '◎',
    status: { en: 'Safety-first', zh: '安全优先' },
    tagline: {
      en: 'Mushroom safety recognition with calibrated uncertainty',
      zh: '蘑菇安全识别助手（带不确定性量化）',
    },
    summary: {
      en: 'Photo-based mushroom identification with Qwen-VL, an offline rule engine with live SVG rendering, RAG safety Q&A, and explicit uncertainty tiers instead of overconfident predictions.',
      zh: '拍照识别蘑菇（Qwen-VL）+ 可离线规则引擎与 SVG 实时形态渲染 + 安全知识 RAG 问答，用分级不确定性表达取代过度自信的绝对化结论。',
    },
    tech: ['React 19', 'TypeScript', 'Qwen-VL', 'RAG', 'Offline Rules', 'SVG'],
    stats: [
      { value: '4', label: { en: 'uncertainty tiers (low→unknown)', zh: '级不确定性分级' } },
      { value: '100%', label: { en: 'offline rule-engine availability', zh: '规则引擎可离线运行' } },
      { value: 'TODO', label: { en: 'recognition accuracy (fill in)', zh: '识别准确率（待填充）' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/mycoguard-ai',
        external: true,
        placeholder: true,
      },
      demo: {
        label: { en: 'Live demo', zh: '在线演示' },
        url: '#',
        external: true,
        placeholder: true,
      },
      internal: { en: 'Case study', zh: '案例详情' },
    },
    detail: {
      problem: {
        heading: { en: 'Problem', zh: '问题' },
        body: [
          {
            en: 'Wild mushroom foraging poses real public-health risks, yet most consumer "identification" tools answer with false certainty — a single wrong "safe" call can be dangerous.',
            zh: '野外采蘑菇存在真实的公共健康风险，而多数消费级“识别”工具给出过度自信的结论——一次错误的“安全”判断可能造成危险。',
          },
          {
            en: 'The app must work offline for field use and must communicate uncertainty honestly.',
            zh: '应用需支持野外离线使用，并诚实地表达不确定性。',
          },
        ],
      },
      approach: {
        heading: { en: 'Approach', zh: '方法' },
        body: [
          {
            en: 'Two signal paths: a deterministic offline rule engine with live SVG morphology rendering, and photo recognition via Qwen-VL. Both feed a single uncertainty-calibrated output.',
            zh: '双信号通路：确定性离线规则引擎 + SVG 实时形态渲染，以及 Qwen-VL 拍照识别；两者汇入统一的不确定性校准输出。',
          },
          {
            en: 'A safety-knowledge RAG module answers follow-up questions with cited sources; every screen carries a disclaimer and confidence tier (low / medium / high / cannot judge).',
            zh: '安全知识 RAG 模块以带引用的方式回答追问；每个页面带免责声明与置信度分级（低 / 中 / 高 / 无法判断）。',
          },
        ],
      },
      architecture: {
        en: 'Architecture diagram — photo → Qwen-VL recognition + offline rule engine → uncertainty calibration → safety verdict + RAG citations.',
        zh: '架构图占位 — 拍照 → Qwen-VL 识别 + 离线规则引擎 → 不确定性校准 → 安全结论 + RAG 引用。',
      },
      highlights: [
        { en: 'Offline rule engine + SVG real-time morphology rendering', zh: '离线规则引擎 + SVG 实时形态渲染' },
        { en: 'Calibrated uncertainty tiers, never absolute claims', zh: '分级不确定性表达，杜绝绝对化表述' },
        { en: 'Safety RAG Q&A with citations', zh: '带引用的安全知识 RAG 问答' },
        { en: 'Site-wide medical disclaimers', zh: '全站免责声明' },
      ],
      results: [
        { en: 'TODO: fill in recognition accuracy + uncertainty calibration metrics.', zh: '待填充：识别准确率与不确定性校准指标。' },
        { en: 'TODO: add demo video + screenshots (3–5).', zh: '待填充：演示视频与截图（3–5 张）。' },
      ],
      demo: {
        en: 'TODO: embed demo video/GIF + screenshots here. Static media only — no external hosting.',
        zh: '待填充：此处嵌入演示视频 / GIF 与截图。仅静态媒体，不依赖外部托管。',
      },
      techStack: [
        { en: 'Frontend: React 19 · TypeScript · Vite', zh: '前端：React 19 · TypeScript · Vite' },
        { en: 'Vision: Qwen-VL photo recognition', zh: '视觉：Qwen-VL 拍照识别' },
        { en: 'Knowledge: RAG over curated mushroom-safety corpus', zh: '知识：精选蘑菇安全语料的 RAG' },
        { en: 'Offline: pure-frontend rule engine + SVG rendering', zh: '离线：纯前端规则引擎 + SVG 渲染' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/mycoguard-ai (placeholder — verify after push).',
        zh: '源码：github.com/Ringnine009/mycoguard-ai（占位链接，推送后核对）。',
      },
      role: {
        heading: { en: 'My role', zh: '我的角色' },
        body: [
          {
            en: 'TODO: describe what you personally built — rule engine, uncertainty calibration, RAG, disclaimer strategy.',
            zh: '待填充：描述个人负责部分 — 规则引擎、不确定性校准、RAG、免责策略。',
          },
        ],
      },
      roleTags: [
        { en: 'Frontend', zh: '前端' },
        { en: 'ML integration', zh: '模型集成' },
      ],
      todos: [
        { en: 'Confirm no absolute-accuracy claims remain anywhere.', zh: '确认全站不再出现绝对化准确率表述。' },
        { en: 'Replace GitHub/demo placeholder URLs.', zh: '替换 GitHub / 演示占位链接。' },
      ],
    },
  },
  {
    slug: 'sourceqa',
    kind: 'project',
    name: 'SourceQA',
    glyph: '⌘',
    status: { en: 'RAG', zh: '检索增强' },
    tagline: {
      en: 'Cited Q&A over open textbooks with hybrid retrieval',
      zh: '开放教材问答助手（混合检索 RAG）',
    },
    summary: {
      en: 'Full-stack RAG over public open textbooks: PDF parsing → chunking → BGE-M3 embeddings → ChromaDB → hybrid retrieval (dense + BM25) → BGE rerank → DeepSeek generation with citations and a retrieval-evaluation harness.',
      zh: '面向公开教材的全栈 RAG：PDF 解析 → 分块 → BGE-M3 本地向量 → ChromaDB → 混合检索（稠密 + BM25）→ BGE 重排 → DeepSeek 生成（带引用），并配有检索评测集。',
    },
    tech: ['Python', 'BGE-M3', 'ChromaDB', 'BM25', 'Reranker', 'DeepSeek', 'React'],
    stats: [
      { value: 'TODO', label: { en: 'retrieval hit-rate@k (fill in)', zh: '检索命中率@k（待填充）' } },
      { value: '0', label: { en: 'API cost for embeddings (local)', zh: 'embedding API 成本（本地）' } },
      { value: 'BGE', label: { en: 'local embedding + reranker', zh: '本地 embedding + 重排' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/sourceqa-learning-assistant',
        external: true,
        placeholder: true,
      },
      demo: {
        label: { en: 'Live demo', zh: '在线演示' },
        url: '#',
        external: true,
        placeholder: true,
      },
      internal: { en: 'Case study', zh: '案例详情' },
    },
    detail: {
      problem: {
        heading: { en: 'Problem', zh: '问题' },
        body: [
          {
            en: 'Students ask questions against open textbooks, but generic chatbots hallucinate because they cannot ground answers in the actual source material.',
            zh: '学生针对公开教材提问，通用聊天机器人却常常幻觉——无法把答案锚定到真实教材内容。',
          },
          {
            en: 'Answers must be verifiable: every claim should point back to a chunk of the book.',
            zh: '答案必须可验证：每个论断都应能回溯到教材原文片段。',
          },
        ],
      },
      approach: {
        heading: { en: 'Approach', zh: '方法' },
        body: [
          {
            en: 'Full RAG pipeline: parse PDF chapters, chunk with structure awareness, embed locally with BGE-M3 (zero API cost), store in ChromaDB, and retrieve with hybrid dense + BM25 scoring.',
            zh: '完整 RAG 管线：解析 PDF 章节 → 结构感知分块 → BGE-M3 本地向量化（零 API 成本）→ ChromaDB 存储 → 稠密 + BM25 混合检索。',
          },
          {
            en: 'BGE-reranker re-scores candidates; DeepSeek generates cited answers; a retrieval-evaluation set (hit-rate + answer quality) tracks regressions.',
            zh: 'BGE 重排器对候选重新打分；DeepSeek 生成带引用的回答；检索评测集（命中率 + 答案质量）跟踪回归。',
          },
        ],
      },
      architecture: {
        en: 'Architecture diagram — PDF → parser → chunks → BGE-M3 → ChromaDB → hybrid retriever → reranker → DeepSeek → cited answer → chat UI.',
        zh: '架构图占位 — PDF → 解析 → 分块 → BGE-M3 → ChromaDB → 混合检索 → 重排 → DeepSeek → 带引用回答 → 聊天 UI。',
      },
      highlights: [
        { en: 'Local BGE-M3 embeddings — zero embedding API cost', zh: 'BGE-M3 本地向量化 — embedding 零成本' },
        { en: 'Hybrid retrieval: dense + BM25, then BGE rerank', zh: '混合检索：稠密 + BM25，再经 BGE 重排' },
        { en: 'Cited answers traceable to source chunks', zh: '回答带引用，可回溯到原文片段' },
        { en: 'Retrieval + answer-quality evaluation set', zh: '检索命中率与答案质量评测集' },
      ],
      results: [
        { en: 'TODO: fill in retrieval hit-rate@k and answer-quality scores.', zh: '待填充：检索命中率@k 与答案质量评分。' },
        { en: 'TODO: add demo video + screenshots (3–5).', zh: '待填充：演示视频与截图（3–5 张）。' },
      ],
      demo: {
        en: 'TODO: embed demo video/GIF + screenshots here. Static media only — no external hosting.',
        zh: '待填充：此处嵌入演示视频 / GIF 与截图。仅静态媒体，不依赖外部托管。',
      },
      techStack: [
        { en: 'Retrieval: BGE-M3 (local) + BM25 + BGE-reranker', zh: '检索：BGE-M3（本地）+ BM25 + BGE 重排' },
        { en: 'Store: ChromaDB', zh: '存储：ChromaDB' },
        { en: 'Generation: DeepSeek (OpenAI-compatible)', zh: '生成：DeepSeek（OpenAI 兼容）' },
        { en: 'UI: React chat interface + API docs', zh: 'UI：React 聊天界面 + API 文档' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/sourceqa-learning-assistant (placeholder — verify after push).',
        zh: '源码：github.com/Ringnine009/sourceqa-learning-assistant（占位链接，推送后核对）。',
      },
      role: {
        heading: { en: 'My role', zh: '我的角色' },
        body: [
          {
            en: 'TODO: describe what you personally built — pipeline, hybrid retriever, evaluation set, UI.',
            zh: '待填充：描述个人负责部分 — 管线、混合检索、评测集、UI。',
          },
        ],
      },
      roleTags: [
        { en: 'Full-stack', zh: '全栈' },
        { en: 'RAG', zh: '检索增强' },
      ],
      todos: [
        { en: 'Verify evaluation numbers and corpus scope (D2L open chapters).', zh: '核对评测数字与语料范围（D2L 开放章节）。' },
        { en: 'Replace GitHub/demo placeholder URLs.', zh: '替换 GitHub / 演示占位链接。' },
      ],
    },
  },
  {
    slug: 'paperflow',
    kind: 'project',
    name: 'PaperFlow',
    glyph: '◈',
    status: { en: 'Multi-agent', zh: '多智能体' },
    tagline: {
      en: 'Multi-agent research collaboration from a single paper link',
      zh: '多智能体科研协作系统',
    },
    summary: {
      en: 'Drop in a paper URL or PDF and an agent team — Researcher / Reader / Critic / Synthesizer — produces a structured review, related-work survey and task board via tool calls and JSON orchestration.',
      zh: '丢入论文链接或 PDF，智能体团队（Researcher / Reader / Critic / Synthesizer）通过工具调用与 JSON 任务板产出结构化审阅、相关工作综述与任务清单。',
    },
    tech: ['Python', 'DeepSeek', 'Function Calling', 'Agent Orc.', 'arXiv API'],
    stats: [
      { value: '4', label: { en: 'specialized agents', zh: '个专职智能体' } },
      { value: '3s', label: { en: 'arXiv API etiquette (no key needed)', zh: 'arXiv API 限速间隔（免密钥）' } },
      { value: 'TODO', label: { en: 'review quality eval (fill in)', zh: '审阅质量评测（待填充）' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/paperflow-agents',
        external: true,
        placeholder: true,
      },
      demo: {
        label: { en: 'Live demo', zh: '在线演示' },
        url: '#',
        external: true,
        placeholder: true,
      },
      internal: { en: 'Case study', zh: '案例详情' },
    },
    detail: {
      problem: {
        heading: { en: 'Problem', zh: '问题' },
        body: [
          {
            en: 'Reading the literature is a bottleneck: a single paper link or PDF has to become a structured review, a related-work summary and a reading plan — manually this takes hours.',
            zh: '文献阅读是瓶颈：一个论文链接或 PDF 需要变成结构化审阅、相关工作综述与阅读计划——人工完成要花数小时。',
          },
          {
            en: 'Reinforces the multi-agent research direction of the Werewolf paper: role-specialized agents that plan, read, critique and synthesize.',
            zh: '与狼人杀论文的多智能体研究方向呼应：角色专职智能体进行规划、阅读、批判与综合。',
          },
        ],
      },
      approach: {
        heading: { en: 'Approach', zh: '方法' },
        body: [
          {
            en: 'A lightweight self-built orchestration layer: Researcher fetches metadata via the free arXiv API, Reader extracts claims, Critic challenges them, Synthesizer merges into a structured report.',
            zh: '自研轻量编排层：Researcher 通过免费 arXiv API 获取元数据，Reader 提取论断，Critic 提出质疑，Synthesizer 综合为结构化报告。',
          },
          {
            en: 'DeepSeek function calling drives tool use; a JSON task board keeps the team’s progress inspectable and reproducible.',
            zh: 'DeepSeek function calling 驱动工具调用；JSON 任务板让团队进度可检查、可复现。',
          },
        ],
      },
      architecture: {
        en: 'Architecture diagram — paper link → orchestrator → Researcher / Reader / Critic / Synthesizer (tool calls) → JSON task board → structured review.',
        zh: '架构图占位 — 论文链接 → 编排器 → Researcher / Reader / Critic / Synthesizer（工具调用）→ JSON 任务板 → 结构化审阅。',
      },
      highlights: [
        { en: 'Self-built multi-agent orchestration (no heavy framework)', zh: '自研轻量多智能体编排（不依赖重型框架）' },
        { en: 'Free arXiv API integration with Crossref fallback', zh: '免费 arXiv API 集成，Crossref 兜底' },
        { en: 'DeepSeek function calling + JSON task board', zh: 'DeepSeek function calling + JSON 任务板' },
        { en: 'Structured review + related-work survey output', zh: '输出结构化审阅 + 相关工作综述' },
      ],
      results: [
        { en: 'TODO: fill in review-quality evaluation and pipeline success rate.', zh: '待填充：审阅质量评测与流水线成功率。' },
        { en: 'TODO: add demo video + screenshots (3–5).', zh: '待填充：演示视频与截图（3–5 张）。' },
      ],
      demo: {
        en: 'TODO: embed demo video/GIF + screenshots here. Static media only — no external hosting.',
        zh: '待填充：此处嵌入演示视频 / GIF 与截图。仅静态媒体，不依赖外部托管。',
      },
      techStack: [
        { en: 'Orchestration: self-built agent team + JSON task board', zh: '编排：自研智能体团队 + JSON 任务板' },
        { en: 'LLM: DeepSeek function calling', zh: 'LLM：DeepSeek function calling' },
        { en: 'Data: arXiv API (+ Crossref/doi.org fallback)', zh: '数据：arXiv API（+ Crossref/doi.org 兜底）' },
        { en: 'Language: Python', zh: '语言：Python' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/paperflow-agents (placeholder — verify after push).',
        zh: '源码：github.com/Ringnine009/paperflow-agents（占位链接，推送后核对）。',
      },
      role: {
        heading: { en: 'My role', zh: '我的角色' },
        body: [
          {
            en: 'TODO: describe what you personally built — orchestration loop, agent roles, function-calling contracts, task board.',
            zh: '待填充：描述个人负责部分 — 编排循环、智能体角色、function calling 契约、任务板。',
          },
        ],
      },
      roleTags: [
        { en: 'Agents', zh: '智能体' },
        { en: 'Backend', zh: '后端' },
      ],
      todos: [
        { en: 'Verify arXiv API rate-limit behavior in practice.', zh: '实测确认 arXiv API 限速行为。' },
        { en: 'Replace GitHub/demo placeholder URLs.', zh: '替换 GitHub / 演示占位链接。' },
      ],
    },
  },
  {
    slug: 'nanolm',
    kind: 'project',
    name: 'NanoLM',
    glyph: '▤',
    status: { en: 'From scratch', zh: '从零实现' },
    tagline: {
      en: 'A language model trained from scratch, plus QLoRA fine-tuning',
      zh: '从零训练的轻量语言模型',
    },
    summary: {
      en: 'A GPT-style transformer implemented from scratch in PyTorch — tokenizer, data pipeline, model, training loop, sampling — pre-trained on a small corpus, then QLoRA fine-tuned on an 8 GB laptop GPU.',
      zh: '用 PyTorch 从零实现 GPT 风格 transformer（分词 / 数据 / 模型 / 训练 / 采样），小语料预训练后在 8GB 笔记本 GPU 上 QLoRA 微调。',
    },
    tech: ['PyTorch', 'GPT', 'QLoRA', 'FastAPI', 'Streaming', 'Qwen2.5-1.5B'],
    stats: [
      { value: '0', label: { en: 'API cost at inference (local)', zh: '推理 API 成本（本地）' } },
      { value: '8GB', label: { en: 'GPU budget (QLoRA feasible)', zh: '显存预算（QLoRA 可行）' } },
      { value: 'TODO', label: { en: 'loss / sample quality (fill in)', zh: 'loss / 采样质量（待填充）' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/nanolm-from-scratch',
        external: true,
        placeholder: true,
      },
      demo: {
        label: { en: 'Live demo', zh: '在线演示' },
        url: '#',
        external: true,
        placeholder: true,
      },
      internal: { en: 'Case study', zh: '案例详情' },
    },
    detail: {
      problem: {
        heading: { en: 'Problem', zh: '问题' },
        body: [
          {
            en: 'Production LLM apps are easy to demo but hard to understand: the model itself is a black box. A from-scratch implementation makes the full stack — tokenization, attention, training dynamics — legible.',
            zh: '生产级 LLM 应用容易演示但难理解：模型本身是黑盒。从零实现让全栈——分词、注意力、训练动态——变得可读。',
          },
          {
            en: 'Offline, zero-API-cost chat is a real need (e.g. the offline layer of MycoGuard).',
            zh: '离线、零 API 成本的聊天是真实需求（例如 MycoGuard 的离线层）。',
          },
        ],
      },
      approach: {
        heading: { en: 'Approach', zh: '方法' },
        body: [
          {
            en: 'Implement GPT from scratch in PyTorch (nanoGPT-inspired, credited in the repo): byte-pair tokenizer, data pipeline, transformer blocks, training loop and sampling.',
            zh: 'PyTorch 从零实现 GPT（思路借鉴 nanoGPT，仓库内注明来源）：BPE 分词、数据管线、transformer 模块、训练循环与采样。',
          },
          {
            en: 'Pre-train on a small corpus, then QLoRA fine-tune Qwen2.5-1.5B on the 8 GB laptop GPU; serve streaming inference over FastAPI with a chat UI.',
            zh: '小语料预训练后，在 8GB 笔记本 GPU 上 QLoRA 微调 Qwen2.5-1.5B；FastAPI 流式推理 + 聊天 UI。',
          },
        ],
      },
      architecture: {
        en: 'Architecture diagram — corpus → BPE tokenizer → GPT blocks → training loop → checkpoint → FastAPI streaming → chat UI.',
        zh: '架构图占位 — 语料 → BPE 分词 → GPT 模块 → 训练循环 → 检查点 → FastAPI 流式 → 聊天 UI。',
      },
      highlights: [
        { en: 'GPT from scratch: tokenizer → data → model → train → sample', zh: '从零实现 GPT：分词 → 数据 → 模型 → 训练 → 采样' },
        { en: 'QLoRA fine-tuning on an 8 GB laptop GPU', zh: '8GB 笔记本 GPU 上的 QLoRA 微调' },
        { en: 'Streaming FastAPI inference + chat UI', zh: 'FastAPI 流式推理 + 聊天 UI' },
        { en: 'Before/after fine-tuning comparison', zh: '微调前后效果对比' },
      ],
      results: [
        { en: 'TODO: fill in pre-training loss curve and sample quality comparison (before/after fine-tuning).', zh: '待填充：预训练 loss 曲线与微调前后采样质量对比。' },
        { en: 'TODO: add demo video + screenshots (3–5).', zh: '待填充：演示视频与截图（3–5 张）。' },
      ],
      demo: {
        en: 'TODO: embed demo video/GIF + screenshots here. Static media only — no external hosting.',
        zh: '待填充：此处嵌入演示视频 / GIF 与截图。仅静态媒体，不依赖外部托管。',
      },
      techStack: [
        { en: 'Framework: PyTorch (from-scratch GPT)', zh: '框架：PyTorch（从零 GPT）' },
        { en: 'Fine-tuning: QLoRA (Qwen2.5-1.5B)', zh: '微调：QLoRA（Qwen2.5-1.5B）' },
        { en: 'Serving: FastAPI streaming', zh: '服务：FastAPI 流式' },
        { en: 'UI: chat interface', zh: 'UI：聊天界面' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/nanolm-from-scratch (placeholder — verify after push).',
        zh: '源码：github.com/Ringnine009/nanolm-from-scratch（占位链接，推送后核对）。',
      },
      role: {
        heading: { en: 'My role', zh: '我的角色' },
        body: [
          {
            en: 'TODO: describe what you personally built — model code, training pipeline, fine-tuning config, serving layer.',
            zh: '待填充：描述个人负责部分 — 模型代码、训练管线、微调配置、服务层。',
          },
        ],
      },
      roleTags: [
        { en: 'ML training', zh: '模型训练' },
        { en: 'Backend', zh: '后端' },
      ],
      todos: [
        { en: 'Record final loss, samples and training cost.', zh: '记录最终 loss、采样结果与训练成本。' },
        { en: 'Replace GitHub/demo placeholder URLs.', zh: '替换 GitHub / 演示占位链接。' },
      ],
    },
  },
  {
    slug: 'research',
    kind: 'research',
    name: 'Werewolf Agents',
    glyph: '◉',
    status: { en: 'Published · TNS Vol.174', zh: '已发表 · TNS Vol.174' },
    tagline: {
      en: 'Dynamic Belief Networks & Deep-Thinking Probes for multi-agent social reasoning',
      zh: '多智能体社会推理：动态信念网络与深度思考探针',
    },
    summary: {
      en: 'A 9-player Werewolf system on AgentScope with LLM-backed agents: a Dynamic Belief Network (EMA belief maintenance) and a cross-model Deep-Thinking-Ratio probe raise villager win rate and vote accuracy.',
      zh: '基于 AgentScope 的 9 人狼人杀系统：动态信念网络（EMA 信念维护）与跨模型深度思考比率探针，显著提升村民胜率与投票准确率。',
    },
    tech: ['AgentScope', 'LLM Backend', 'DBN', 'DTR Probe', 'Agentic Evaluation'],
    stats: [
      { value: '44.2%', unit: '→ 68.8%', label: { en: 'villager win rate', zh: '村民胜率' } },
      { value: '35.5%', unit: '→ 66.6%', label: { en: 'vote accuracy', zh: '投票准确率' } },
      { value: '9P', label: { en: 'standard Werewolf setup', zh: '标准狼人杀配置' } },
    ],
    links: {
      paper: {
        label: { en: 'Open-access paper', zh: '开放获取论文' },
        url: 'https://doi.org/10.54254/2753-8818/2026.DL34010',
        external: true,
      },
      internal: { en: 'Read research page', zh: '查看研究页' },
    },
    detail: {
      problem: {
        heading: { en: 'Problem', zh: '问题' },
        body: [
          {
            en: 'LLM agents struggle with social reasoning: tracking what other agents believe — recursively — and knowing when to think deeper before acting.',
            zh: 'LLM 智能体在社会推理上存在困难：递归地追踪其他智能体的信念，以及在行动前判断何时需要更深的思考。',
          },
        ],
      },
      approach: {
        heading: { en: 'Approach', zh: '方法' },
        body: [
          {
            en: 'Equip target agents with a Dynamic Belief Network (DBN) that maintains belief states via an exponential moving average mechanism, addressing the recursive consistency challenge in multi-agent systems.',
            zh: '为目标智能体配备动态信念网络（DBN），通过指数滑动平均机制维护信念状态，解决多智能体系统中的递归一致性挑战。',
          },
          {
            en: 'Propose a cross-model architectural Deep Thinking Ratio (DTR) probe that analyzes hidden-layer activation patterns through forward inference of probe models, providing enhanced marginal utility for complex social reasoning.',
            zh: '提出跨模型架构的深度思考比率（DTR）探针，通过探针模型前向推理分析隐藏层激活模式，为复杂社会推理提供边际增益。',
          },
        ],
      },
      architecture: {
        en: 'Method diagram placeholder — DBN belief maintenance (EMA) + DTR logit-lens probe over agent hidden states → social reasoning improvement.',
        zh: '方法图占位 — DBN 信念维护（EMA）+ DTR 探针对智能体隐藏状态的分析 → 社会推理能力提升。',
      },
      highlights: [
        { en: 'Dynamic Belief Network with EMA belief maintenance', zh: 'EMA 机制维护信念的动态信念网络' },
        { en: 'Cross-model DTR probe on hidden-layer activations', zh: '跨模型 DTR 探针分析隐藏层激活' },
        { en: 'Quantitative in-game metrics (win rate, vote accuracy, Brier score)', zh: '游戏内定量指标（胜率、投票准确率、Brier 分数）' },
        { en: 'Published open access — Theoretical and Natural Science, Vol.174', zh: '开放获取发表 — Theoretical and Natural Science Vol.174' },
      ],
      results: [
        { en: 'Villager win rate: 44.2% → 68.8% (verify against the paper PDF).', zh: '村民胜率：44.2% → 68.8%（以论文原文核对）。' },
        { en: 'Vote accuracy: 35.5% → 66.6% (verify against the paper PDF).', zh: '投票准确率：35.5% → 66.6%（以论文原文核对）。' },
        { en: 'Brier score convergence — see full tables in the paper.', zh: 'Brier 分数收敛 — 完整表格见论文原文。' },
      ],
      demo: {
        en: 'TODO: add a method-diagram figure and in-game screenshots once verified against the paper PDF.',
        zh: '待填充：核对论文 PDF 后补充方法图与游戏内截图。',
      },
      techStack: [
        { en: 'Framework: AgentScope multi-agent platform', zh: '框架：AgentScope 多智能体平台' },
        { en: 'Backend: LLM-powered agent reasoning', zh: '后端：LLM 驱动的智能体推理' },
        { en: 'Novelty: DBN (EMA) + cross-model DTR probe', zh: '创新点：DBN（EMA）+ 跨模型 DTR 探针' },
        { en: 'Metrics: in-game quantitative evaluation', zh: '指标：游戏内定量评测' },
      ],
      github: {
        en: 'Source code is intentionally not public (research policy); the paper is open access at the DOI above.',
        zh: '源码按研究惯例不公开；论文在上述 DOI 开放获取。',
      },
      role: {
        heading: { en: 'My role', zh: '我的角色' },
        body: [
          {
            en: 'Co-author — developed the Werewolf system on AgentScope, designed the DBN EMA mechanism and the DTR probe, and built the quantitative in-game evaluation metrics. Supervised by LIU Jianneng (HKUST).',
            zh: '共同作者 — 基于 AgentScope 开发狼人杀系统，设计 DBN EMA 机制与 DTR 探针，并搭建游戏内定量评测指标。导师：刘建能（香港科技大学）。',
          },
        ],
      },
      roleTags: [
        { en: 'Research', zh: '科研' },
        { en: 'Multi-agent', zh: '多智能体' },
      ],
      todos: [
        { en: 'Cross-check all numbers against the published PDF before launch.', zh: '上线前对照论文 PDF 核对全部数字。' },
        { en: 'Add method-diagram figure + screenshots.', zh: '补充方法图与截图。' },
      ],
    },
  },
];

/** Projects with a full detail page (5). */
export const DETAILED_PROJECTS = PROJECTS.filter((p) => p.kind === 'project');

export const getProject = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
