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
      { value: '7', label: { en: 'audit rule categories', zh: '类稽查规则' } },
      { value: '82.5%', label: { en: 'field-level accuracy (qwen-vl-plus)', zh: '字段级准确率（qwen-vl-plus）' } },
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
        { en: 'Real-API benchmark over 30 synthetic invoices (qwen-vl-plus): 82.5% overall field-level accuracy — invoice number 86.7%, date 90.0%, party names 86.7%, amounts 80–86.7%, tax IDs 70–72% (hardest field); average confidence ~0.97; 3/30 file-level failures recorded.', zh: '30 张合成发票的真实 API 基准（qwen-vl-plus）：字段级总体准确率 82.5%——发票号 86.7%、日期 90.0%、购销方名称 86.7%、金额 80–86.7%、税号 70–72%（最难字段）；平均置信度 ~0.97；3/30 整包失败已记录。' },
        { en: '7 audit rules with severity ranking and evidence (GB 32100-2015 tax-ID check digit included); the 30-invoice demo batch with 11 injected anomalies produced exactly 2 CRITICAL + 5 ERROR + 2 WARNING findings.', zh: '7 条带严重级与证据的审计规则（含 GB 32100-2015 税号校验位）；注入 11 处异常的 30 张演示批次精确产出 2 CRITICAL + 5 ERROR + 2 WARNING。' },
        { en: '95 offline tests green (LLM mocked, verified from a fresh venv); engineering decisions (model choice, DPI, retry policy) backed by measured evidence in docs/benchmark.md.', zh: '95 项离线测试全绿（LLM mock，全新 venv 实测）；模型选型、DPI、重试策略等工程决策均有实测证据（docs/benchmark.md）。' },
        { en: 'Demo video + screenshots available in the demo section below.', zh: '演示视频与截图见下方演示区。' },
      ],
      demo: {
        en: 'Screen recording of the full flow: load the 30-invoice demo batch → extraction results with confidence → audit findings → knowledge-graph view.',
        zh: '完整流程录屏：加载 30 张演示发票 → 带置信度的抽取结果 → 审计告警 → 知识图谱视图。',
      },
      demoMedia: {
        video: '/demos/docmind/demo.mp4',
        gif: '/demos/docmind/demo.gif',
        shots: ['/demos/docmind/1-home.png', '/demos/docmind/2-results.png', '/demos/docmind/3-results-scrolled.png', '/demos/docmind/4-audit.png', '/demos/docmind/5-graph.png'],
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
            en: 'Architected and built the full system: multimodal extraction pipeline with per-field confidence, the declarative audit engine with 7 rules, knowledge-graph builder, batch processing API, React dashboard, and the 30-invoice benchmark with ground truth.',
            zh: '独立完成系统整体架构与实现：带逐字段置信度的多模态抽取管线、7 条规则的声明式审计引擎、知识图谱构建、批量处理 API、React 看板，以及含真值的 30 张发票评测基准。',
          },
        ],
      },
      roleTags: [
        { en: 'Full-stack', zh: '全栈' },
        { en: 'ML integration', zh: '模型集成' },
      ],
      todos: [
        { en: 'Optional: improved second-pass verification prompt to push tax-ID accuracy higher.', zh: '可选：改进二次验证 prompt 以提升税号字段准确率。' },
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
      { value: '97', unit: '%', label: { en: 'confidence ceiling (never 100%)', zh: '置信度上限（永不出 100%）' } },
      { value: '97', label: { en: 'tests: 57 vitest + 40 pytest, all green', zh: '项测试全绿：57 vitest + 40 pytest' } },
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
        { en: 'Rule engine emits only calibrated uncertainty (low / medium / high / cannot judge) with a 97% confidence ceiling; <3 traits forces "cannot judge"; absolute edible/poisonous language is forbidden by tests.', zh: '规则引擎只输出校准后的不确定性分级（低 / 中 / 高 / 无法判断），置信度上限 97%；性状不足 3 项强制"无法判断"；绝对化的可食用/有毒表述被测试禁止。' },
        { en: '26 curated safety-knowledge entries with per-entry sources; vision recognition via qwen-vl-plus with graceful offline degradation (verified in a real end-to-end smoke run).', zh: '26 条精编安全知识库（逐条标注来源）；qwen-vl-plus 拍照识别并优雅降级离线（真实端到端冒烟已验证）。' },
        { en: 'Demo video + screenshots available in the demo section below.', zh: '演示视频与截图见下方演示区。' },
      ],
      demo: {
        en: 'Screen recording: select six traits (including strong-risk signals) → live SVG morphology → calibrated risk verdict with disclaimer → safety-knowledge chat. Runs fully offline.',
        zh: '录屏：选择六项性状（含强风险信号）→ SVG 形态实时渲染 → 校准后的风险结论与免责声明 → 安全知识问答。全程离线可运行。',
      },
      demoMedia: {
        video: '/demos/mycoguard/demo.mp4',
        gif: '/demos/mycoguard/demo.gif',
        shots: ['/demos/mycoguard/1-home.png', '/demos/mycoguard/2-traits-filled.png', '/demos/mycoguard/3-result.png', '/demos/mycoguard/4-result-scrolled.png', '/demos/mycoguard/5-chat.png'],
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
            en: 'Rebuilt the course project into a safety-first product: uncertainty-quantified rule engine and calibration logic, vision proxy backend with secret-safe key handling, curated knowledge base, offline-first degradation, and the compliance/ disclaimer strategy.',
            zh: '将课程项目重构为安全优先的产品：不确定性量化规则引擎与校准逻辑、密钥安全的视觉代理后端、精编知识库、离线优先降级，以及合规与免责策略。',
          },
        ],
      },
      roleTags: [
        { en: 'Frontend', zh: '前端' },
        { en: 'ML integration', zh: '模型集成' },
      ],
      todos: [
        { en: 'Optionally back rule weights with a fresh UCI distillation run (dataset download blocked from this network).', zh: '可选：用新的 UCI 蒸馏运行背书规则权重（本网络无法下载数据集）。' },
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
      { value: '1.000', label: { en: 'retrieval hit@1 (hybrid + reranker, 50 questions)', zh: '检索命中率 hit@1（混合+重排，50 题）' } },
      { value: '0', label: { en: 'API cost for embeddings (local BGE-M3)', zh: 'embedding API 成本（本地 BGE-M3）' } },
      { value: '4.92/5', label: { en: 'answer quality (12 sampled, human-scored)', zh: '答案质量（12 条抽样人工评分）' } },
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
        { en: 'Retrieval benchmark on a 50-question eval set over 165 D2L sections (3,439 chunks): hybrid (dense + BM25 + BGE-reranker) reaches hit@1 1.000 / hit@3 1.000 — +2 pts over dense-only and +16 pts over BM25-only, confirming lexical–semantic complementarity; reranking adds 4 pts at 620ms/query on GPU.', zh: '50 题评测集（165 节、3439 chunks）检索基准：混合（稠密+BM25+BGE 重排）hit@1 1.000 / hit@3 1.000——较纯稠密 +2 个百分点、较纯 BM25 +16 个百分点，验证词汇-语义互补；重排再贡献 4 个百分点（GPU 上 620ms/问）。' },
        { en: 'Answer quality: 12 questions sampled and human-scored at 4.92/5; SSE streaming with cited sources verified end-to-end (e.g., LSTM questions hit the LSTM chapter).', zh: '答案质量：12 条抽样人工评分 4.92/5；SSE 流式与带引用来源端到端验证（如 LSTM 问题全部命中 LSTM 章节）。' },
        { en: '50 pytest tests green; local BGE-M3 embeddings (zero API cost) + DeepSeek generation.', zh: '50 项 pytest 全绿；BGE-M3 本地向量（零 API 成本）+ DeepSeek 生成。' },
        { en: 'Demo video + screenshots available in the demo section below.', zh: '演示视频与截图见下方演示区。' },
      ],
      demo: {
        en: 'Screen recording of the chat UI: two deep-learning questions answered with streaming output, cited sources panel and source highlighting.',
        zh: '聊天界面录屏：两个深度学习问题，流式回答 + 来源面板与引用高亮。',
      },
      demoMedia: {
        video: '/demos/sourceqa/demo.mp4',
        gif: '/demos/sourceqa/demo.gif',
        shots: ['/demos/sourceqa/1-home.png', '/demos/sourceqa/2-question.png', '/demos/sourceqa/3-answer.png', '/demos/sourceqa/4-sources.png', '/demos/sourceqa/5-second.png'],
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
            en: 'Owned the full RAG stack: D2L corpus ingestion with structure-aware parsing and chunking, local BGE-M3 embeddings, ChromaDB store, hybrid retrieval (dense + BM25, RRF fusion) with BGE reranking, DeepSeek generation with citations, the 50-question evaluation set, and the React streaming chat UI.',
            zh: '独立完成全栈 RAG：D2L 语料入库（结构感知解析与分块）、BGE-M3 本地向量、ChromaDB 存储、混合检索（稠密+BM25，RRF 融合）与 BGE 重排、DeepSeek 带引用生成、50 题评测集，以及 React 流式聊天界面。',
          },
        ],
      },
      roleTags: [
        { en: 'Full-stack', zh: '全栈' },
        { en: 'RAG', zh: '检索增强' },
      ],
      todos: [
        { en: 'Expand eval set beyond author-written questions for an unbiased score.', zh: '扩展评测集至非作者自写问题以去偏。' },
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
      { value: '67', label: { en: 'tests green (64 offline + 3 real-API smoke)', zh: '项测试全绿（64 离线 + 3 真实 API）' } },
      { value: '8/8', label: { en: 'claims fact-checked on the author\u2019s own paper', zh: '本人论文的论断事实核查通过' } },
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
        { en: 'Two archived demo runs: the author\u2019s Werewolf paper (DOI + local PDF) with 8/8 claims fact-checked [supported] and related-work links resolved to real arXiv IDs; Attention Is All You Need end-to-end via the arXiv API (BLEU 28.4/41.8 correctly restated, relevance honestly rated 4/10).', zh: '两份存档演示运行：本人的狼人杀论文（DOI + 本地 PDF）8/8 论断核查通过并关联真实 arXiv 文献；Attention Is All You Need 走通 arXiv 全链路（正确复述 BLEU 28.4/41.8，相关性诚实评 4/10）。' },
        { en: '64 offline tests + 3 real-API smoke tests green; self-built orchestration with JSON task board and graceful degradation to abstract-only review.', zh: '64 项离线测试 + 3 项真实 API 冒烟全绿；自研编排 + JSON 任务板，拿不到全文时优雅降级为摘要审阅。' },
        { en: 'Demo video + screenshots available in the demo section below.', zh: '演示视频与截图见下方演示区。' },
      ],
      demo: {
        en: 'Live recording of a real run: submit the author\u2019s Werewolf paper DOI → the four-agent team (Researcher → Reader → Critic → Synthesizer) executes with visible task-board states → structured review with fact-checked claims.',
        zh: '真实运行的现场录制：提交本人狼人杀论文 DOI → 四智能体团队（Researcher → Reader → Critic → Synthesizer）执行，任务板状态实时可见 → 输出经事实核查的结构化审阅。',
      },
      demoMedia: {
        video: '/demos/paperflow/demo.mp4',
        gif: '/demos/paperflow/demo.gif',
        shots: ['/demos/paperflow/1-dashboard.png', '/demos/paperflow/2-entry.png', '/demos/paperflow/4-final-board.png', '/demos/paperflow/6-report.png', '/demos/paperflow/7-report-scrolled.png'],
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
            en: 'Designed and built the full multi-agent framework — Agent base class, tool registry, JSON task board, dependency-aware orchestrator, four-agent team on DeepSeek function calling, CLI and web dashboard. The direction extends my published multi-agent social-reasoning research into a product.',
            zh: '设计并实现完整的多智能体框架——Agent 基类、工具注册表、JSON 任务板、依赖感知编排器、基于 DeepSeek function calling 的四智能体团队、CLI 与 Web 看板。该方向是我已发表的多智能体社会推理研究的工程化延伸。',
          },
        ],
      },
      roleTags: [
        { en: 'Agents', zh: '智能体' },
        { en: 'Backend', zh: '后端' },
      ],
      todos: [
        { en: 'Add chunked/hierarchical reading for very long papers (listed as future work in the repo).', zh: '为超长论文增加分块/层级阅读（仓库已列为 future work）。' },
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
      { value: '28.3M', label: { en: 'parameters (trained from scratch)', zh: '参数量（从零训练）' } },
      { value: '9.5→0.1', label: { en: 'pretrain loss curve (6000 steps)', zh: '预训练 loss 曲线（6000 步）' } },
      { value: '1.6%', label: { en: 'trainable params in LoRA fine-tune', zh: 'LoRA 微调可训练参数占比' } },
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
            en: 'Implement a decoder-only GPT-style transformer from scratch in PyTorch — byte-pair tokenizer, data pipeline, transformer blocks, training loop and sampling.',
            zh: '用 PyTorch 从零实现 decoder-only GPT 风格 transformer——BPE 分词、数据管线、transformer 模块、训练循环与采样。',
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
        { en: 'Pre-training: 28.3M-parameter GPT, 6000 steps in 28 minutes on an 8GB laptop GPU (29–87K tok/s), loss 9.50 → 0.10 (train), best val 5.02; custom BPE tokenizer (12,000 vocab) round-trips exactly.', zh: '预训练：28.3M 参数 GPT，8GB 笔记本 GPU 上 6000 步 28 分钟（29–87K tok/s），loss 9.50 → 0.10（训练），最佳验证 5.02；自实现 BPE 分词器（12000 词表）往返精确。' },
        { en: 'LoRA fine-tuning: 28 adapters, only 1.60% of parameters trainable (0.459M), 442/49 instruction pairs, val loss 4.03 → 0.84 in 3 minutes. Before fine-tuning the model outputs gibberish; after, it answers \u201cIs the death cap mushroom poisonous?\u201d with structured, factually correct guidance (amatoxins, 6–24h delayed poisoning, poison control contact).', zh: 'LoRA 微调：28 个适配器、仅 1.60% 参数可训练（0.459M）、442/49 指令对、3 分钟 val loss 4.03 → 0.84。微调前输出乱码，微调后能结构化且事实正确地回答"毒鹅膏有毒吗"（鹅膏毒素、6-24 小时迟发中毒、联系中毒控制中心）。' },
        { en: '30 tests green; streaming FastAPI + SSE + web UI verified end-to-end; inference fully local — zero API cost.', zh: '30 项测试全绿；FastAPI+SSE 流式与网页 UI 端到端验证；推理完全本地——零 API 成本。' },
        { en: 'Demo video + screenshots available in the demo section below.', zh: '演示视频与截图见下方演示区。' },
      ],
      demo: {
        en: 'Screen recording of the locally served chat UI: ask \u201cIs the death cap mushroom poisonous?\u201d and a follow-up first-aid question — the fine-tuned model streams structured, factual answers with zero API cost.',
        zh: '本地部署聊天界面录屏：提问"毒鹅膏是否有毒"与急救追问——微调后的模型流式输出结构化、事实正确的回答，零 API 成本。',
      },
      demoMedia: {
        video: '/demos/nanollm/demo.mp4',
        gif: '/demos/nanollm/demo.gif',
        shots: ['/demos/nanollm/1-home.png', '/demos/nanollm/2-question.png', '/demos/nanollm/3-answer.png', '/demos/nanollm/4-answer-scrolled.png', '/demos/nanollm/5-second.png'],
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
            en: 'Implemented the entire model stack from scratch — byte-level BPE tokenizer, data pipeline, transformer architecture (attention, LayerNorm, GPT-2 init, weight tying), training loop with checkpointing, sampling, a from-scratch LoRA implementation, and streaming FastAPI serving with a chat UI.',
            zh: '从零实现完整模型栈——字节级 BPE 分词器、数据管线、transformer 架构（注意力、LayerNorm、GPT-2 初始化、权重共享）、带检查点的训练循环、采样、自实现 LoRA，以及流式 FastAPI 服务与聊天界面。',
          },
        ],
      },
      roleTags: [
        { en: 'ML training', zh: '模型训练' },
        { en: 'Backend', zh: '后端' },
      ],
      todos: [
        { en: 'Scale corpus + model for a production-grade assistant (current scope is a mechanism demo with honest limits).', zh: '扩展语料与模型以成为生产级助手（当前为机制演示，限制已如实标注）。' },
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
