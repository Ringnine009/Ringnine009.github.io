import type { Project } from '@/data/types';

// ------------------------------------------------------------------
// Project registry — the single source of truth for the five product
// pages plus the research entry. Every card, list row and detail page
// is rendered from this file.
// ------------------------------------------------------------------

export const PROJECTS: Project[] = [
  {
    slug: 'docmind',
    kind: 'project',
    name: 'DocMind',
    glyph: '◇',
    status: { en: 'Multimodal Doc Understanding', zh: '多模态文档理解' },
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
      { value: '8', label: { en: 'audit rules incl. QR cross-check', zh: '类稽查规则（含二维码交叉校验）' } },
      { value: '82.5%', label: { en: 'field-level accuracy (qwen-vl-plus)', zh: '字段级准确率（qwen-vl-plus）' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/docmind-invoice-intelligence',
        external: true,
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
        en: 'Upload → Qwen-VL extraction (JSON + per-field confidence) → rule-audit engine → dashboard with knowledge-graph view.',
        zh: '上传 → Qwen-VL 抽取（JSON + 逐字段置信度）→ 规则审计引擎 → 知识图谱视图与看板。',
      },
      highlights: [
        { en: 'Structured field extraction with per-field confidence signals', zh: '结构化字段抽取，带逐字段置信度信号' },
        { en: 'Declarative rule engine: duplicate / arithmetic / tax anomalies', zh: '声明式规则引擎：重复 / 算术 / 税率异常' },
        { en: 'Interactive knowledge-graph explorer — object filters, node focus, transaction legend', zh: '交互式知识图谱探索——对象筛选、节点聚焦、关系图例' },
        { en: 'Invoice detail drawer: confidence bars, audit evidence, graph connections', zh: '发票详情抽屉：置信度条、审计证据、图谱关联' },
        { en: 'Audit statistics charts (by rule / by severity)', zh: '审计统计图（按规则 / 按严重级）' },
      ],
      results: [
        { en: 'Real-API benchmark over 30 synthetic invoices (qwen-vl-plus): 82.5% overall field-level accuracy — invoice number 86.7%, date 90.0%, party names 86.7%, amounts 80–86.7%, tax IDs 70–72% (hardest field); average confidence ~0.97; 3/30 file-level failures recorded.', zh: '30 张合成发票的真实 API 基准（qwen-vl-plus）：字段级总体准确率 82.5%——发票号 86.7%、日期 90.0%、购销方名称 86.7%、金额 80–86.7%、税号 70–72%（最难字段）；平均置信度 ~0.97；3/30 整包失败已记录。' },
        { en: '8 audit rules with severity ranking and evidence — including QR-code cross-validation (invoice number / amounts decoded from the invoice QR and checked against the extracted fields) and GB 32100-2015 tax-ID check-digit repair; the 30-invoice demo batch with injected anomalies produces exactly matched findings.', zh: '8 条带严重级与证据的审计规则——含二维码交叉校验（解码发票二维码中的号码/金额与抽取字段比对）与 GB 32100-2015 税号校验位自动修复；注入异常的 30 张演示批次精确产出对应告警。' },
        { en: 'An offline evaluation harness with a machine-readable ground-truth benchmark; model choice, DPI and retry policy are backed by measured evidence.', zh: '离线评测框架 + 机器可读真值基准；模型选型、DPI、重试策略均有实测数据支撑。' },
      ],
      demo: {
        en: 'Screen recording of the full flow: load the 30-invoice demo batch → live extraction progress → results with confidence → invoice detail drawer → audit findings → amount trend chart with buyer/seller filters + audit statistics → interactive knowledge-graph explorer (object filters, node focus) with a transaction legend.',
        zh: '完整流程录屏：加载 30 张演示发票 → 实时抽取进度 → 带置信度的抽取结果 → 发票详情抽屉 → 审计告警 → 金额趋势图（可按购销方筛选）+ 审计统计 → 交互式知识图谱（对象筛选、节点聚焦、关系图例）。',
      },
      demoMedia: {
        video: { en: '/demos/docmind/demo.mp4', zh: '/demos/docmind/demo.mp4' },
        gif: { en: '/demos/docmind/demo.gif', zh: '/demos/docmind/demo.gif' },
        shots: { en: ['/demos/docmind/1-home.png', '/demos/docmind/3-results.png', '/demos/docmind/4-detail-drawer.png', '/demos/docmind/5-audit.png', '/demos/docmind/6-analysis.png', '/demos/docmind/7-analysis-rules.png', '/demos/docmind/8-graph-full.png', '/demos/docmind/11-graph-focus.png'], zh: ['/demos/docmind/1-home.png', '/demos/docmind/3-results.png', '/demos/docmind/4-detail-drawer.png', '/demos/docmind/5-audit.png', '/demos/docmind/6-analysis.png', '/demos/docmind/7-analysis-rules.png', '/demos/docmind/8-graph-full.png', '/demos/docmind/11-graph-focus.png'] },
      },
      techStack: [
        { en: 'Backend: Python · FastAPI (layered architecture)', zh: '后端：Python · FastAPI（分层架构）' },
        { en: 'Vision: Qwen-VL multimodal document understanding', zh: '视觉：Qwen-VL 多模态文档理解' },
        { en: 'Frontend: React · TypeScript dashboard', zh: '前端：React · TypeScript 看板' },
        { en: 'Data: knowledge graph + field-level evaluation harness', zh: '数据：知识图谱 + 字段级评测框架' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/docmind-invoice-intelligence',
        zh: '源码：github.com/Ringnine009/docmind-invoice-intelligence',
      },
      role: {
        heading: { en: 'My role', zh: '我的角色' },
        body: [
          {
            en: 'Architected and built the full system: multimodal extraction pipeline with per-field confidence, the declarative audit engine with 8 rules, knowledge-graph builder, batch processing API, React dashboard, and the 30-invoice benchmark with ground truth.',
            zh: '独立完成系统整体架构与实现：带逐字段置信度的多模态抽取管线、8 条规则的声明式审计引擎、知识图谱构建、批量处理 API、React 看板，以及含真值的 30 张发票评测基准。',
          },
        ],
      },
      roleTags: [
        { en: 'Full-stack', zh: '全栈' },
        { en: 'ML integration', zh: '模型集成' },
      ],
      todos: [],
    },
  },
  {
    slug: 'mycoguard',
    kind: 'project',
    name: 'MycoGuard',
    glyph: '◎',
    status: { en: 'Uncertainty Quantification', zh: '不确定性量化' },
    tagline: {
      en: 'Mushroom safety recognition with calibrated uncertainty',
      zh: '蘑菇安全识别助手（带不确定性量化）',
    },
    summary: {
      en: 'Photo-based mushroom identification with Qwen-VL, an offline rule engine with live SVG rendering, built-in safety-knowledge Q&A, and explicit uncertainty tiers instead of overconfident predictions.',
      zh: '拍照识别蘑菇（Qwen-VL）+ 可离线规则引擎与 SVG 实时形态渲染 + 内置安全知识问答，用分级不确定性表达取代过度自信的绝对化结论。',
    },
    tech: ['React 19', 'TypeScript', 'Qwen-VL', 'Knowledge Q&A', 'Offline Rules', 'SVG'],
    stats: [
      { value: '4', label: { en: 'uncertainty tiers (low→unknown)', zh: '级不确定性分级' } },
      { value: '97%', label: { en: 'confidence ceiling (never 100%)', zh: '置信度上限（永不出 100%）' } },
      { value: '26', label: { en: 'curated safety entries with cited sources', zh: '条精编安全知识（逐条标注来源）' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/mycoguard-ai',
        external: true,
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
        en: 'Photo → vision recognition + offline rule engine → confidence fusion → calibrated verdict with sources.',
        zh: '拍照 → 视觉识别 + 离线规则引擎 → 置信度融合 → 带来源的校准结论。',
      },
      highlights: [
        { en: 'Detailed SVG mushroom rendering — gradients, textures, animated transitions', zh: '精细的 SVG 蘑菇渲染——渐变光影、纹理细节、动画过渡' },
        { en: 'Offline rule engine + real-time morphology rendering', zh: '离线规则引擎 + SVG 实时形态渲染' },
        { en: 'Photo identification with vision-sourced trait badges', zh: '拍照识别，视觉来源性状带徽章标注' },
        { en: 'Calibrated uncertainty tiers, never absolute claims', zh: '分级不确定性表达，杜绝绝对化表述' },
        { en: 'Built-in safety-knowledge Q&A with sources', zh: '带来源的内置安全知识问答' },
      ],
      results: [
        { en: 'Rule engine distills a random forest trained on the real UCI Mushrooms dataset (8,124 rows): held-out accuracy 100.00% (teaching dataset property, stated as such), Gini importances (odor 0.161, gill-color 0.112, gill-size 0.111, spore-print 0.093, ring-type 0.070) drive the weights; every 100%-purity branch is encoded with its supporting sample count and surfaced as an explainable rule.', zh: '规则引擎由真实 UCI 蘑菇数据集（8124 行）上训练的随机森林蒸馏而来：留出集准确率 100.00%（如实标注为教学数据集属性），Gini 重要性（气味 0.161、菌褶颜色 0.112、菌褶大小 0.111、孢子印 0.093、菌环类型 0.070）驱动权重；每条 100% 纯度分支编码为可解释规则并标注支持样本数。' },
        { en: 'Emits only calibrated uncertainty (low / medium / high / cannot judge) with a 97% confidence ceiling; <3 traits forces "cannot judge"; no absolute edible/poisonous verdicts are ever produced.', zh: '只输出校准后的不确定性分级（低 / 中 / 高 / 无法判断），置信度上限 97%；性状不足 3 项强制"无法判断"；绝不输出绝对化的可食用/有毒结论。' },
        { en: 'Dual-channel confidence fusion (rule engine + vision model) with an explicit agree / partial / disagree indicator; offline expert explanation generated deterministically.', zh: '规则引擎与视觉模型双通道置信度融合，带一致 / 部分一致 / 分歧指示；离线专家解读确定性生成。' },
      ],
      demo: {
        en: 'Screen recording: pick key traits one by one (the SVG mushroom morphs with animated transitions) → calibrated risk verdict with disclaimer → photo identification with a real mushroom photo (vision-sourced traits marked, dual-channel fusion) → AI-enhanced safety-knowledge Q&A. The rule engine runs fully offline.',
        zh: '录屏：逐项选择关键性状（SVG 蘑菇动画过渡实时变化）→ 校准后的风险结论与免责声明 → 用真实蘑菇照片拍照识别（视觉性状带标记、双通道融合）→ AI 增强的安全知识问答。规则引擎全程离线运行。',
      },
      demoMedia: {
        video: { en: '/demos/mycoguard/demo.mp4', zh: '/demos/mycoguard/demo.mp4' },
        gif: { en: '/demos/mycoguard/demo.gif', zh: '/demos/mycoguard/demo.gif' },
        shots: { en: ['/demos/mycoguard/1-home.png', '/demos/mycoguard/3-traits-filled.png', '/demos/mycoguard/4-result.png', '/demos/mycoguard/5-expert.png', '/demos/mycoguard/6-photo-mode.png', '/demos/mycoguard/8-photo-result.png', '/demos/mycoguard/9-chat-answer.png'], zh: ['/demos/mycoguard/1-home.png', '/demos/mycoguard/3-traits-filled.png', '/demos/mycoguard/4-result.png', '/demos/mycoguard/5-expert.png', '/demos/mycoguard/6-photo-mode.png', '/demos/mycoguard/8-photo-result.png', '/demos/mycoguard/9-chat-answer.png'] },
      },
      techStack: [
        { en: 'Frontend: React 19 · TypeScript · Vite', zh: '前端：React 19 · TypeScript · Vite' },
        { en: 'Vision: Qwen-VL photo recognition', zh: '视觉：Qwen-VL 拍照识别' },
        { en: 'Knowledge: curated safety corpus with keyword retrieval', zh: '知识：精编安全语料 + 关键词检索' },
        { en: 'Offline: pure-frontend rule engine + SVG rendering', zh: '离线：纯前端规则引擎 + SVG 渲染' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/mycoguard-ai',
        zh: '源码：github.com/Ringnine009/mycoguard-ai',
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
      todos: [],
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
      { value: '0.82', label: { en: 'strict retrieval hit@1 (section-level, 50-question eval)', zh: '严格检索命中率 hit@1（章节级，50 题）' } },
      { value: '0.98', label: { en: 'loose hit@1 incl. keyword matches (hybrid)', zh: '宽松命中率 hit@1 含关键词（混合）' } },
      { value: '0', label: { en: 'API cost for embeddings (local BGE-M3)', zh: 'embedding API 成本（本地 BGE-M3）' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/sourceqa-learning-assistant',
        external: true,
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
        en: 'PDF → parsing → chunking → BGE-M3 embeddings (ChromaDB) + BM25 → hybrid retrieval → DeepSeek → cited answer in the chat UI.',
        zh: 'PDF → 解析 → 分块 → BGE-M3 向量（ChromaDB）+ BM25 → 混合检索 → DeepSeek → 聊天界面中的带引用回答。',
      },
      highlights: [
        { en: 'Local BGE-M3 embeddings — zero embedding API cost', zh: 'BGE-M3 本地向量化 — embedding 零成本' },
        { en: 'Hybrid retrieval: dense + BM25, then BGE rerank', zh: '混合检索：稠密 + BM25，再经 BGE 重排' },
        { en: 'Retrieval breakdown panel — dense / BM25 / RRF scores per source', zh: '检索分解面板——每个来源的 dense / BM25 / RRF 得分' },
        { en: 'Conversation history persisted in the browser', zh: '对话历史持久化（浏览器本地保存）' },
        { en: 'Cited answers traceable to source chunks', zh: '回答带引用，可回溯到原文片段' },
      ],
      results: [
        { en: 'Honest dual-metric retrieval benchmark on a 50-question eval set over 165 D2L sections (3,439 chunks): strict section-level hit@1 = 0.82 (dense-only, best), hybrid + BM25 = 0.76; loose hit@1 including keyword matches = 0.98 (hybrid). Both metrics reported — the strict number is the honest headline.', zh: '50 题评测集（165 节、3439 chunks）的双口径诚实检索基准：严格章节级 hit@1 = 0.82（纯稠密最优）、混合 + BM25 = 0.76；宽松口径（含关键词命中）混合 hit@1 = 0.98。两组数字都如实报告——严格口径才是诚实的主数字。' },
        { en: 'Answer quality: 12 questions sampled and human-scored at 4.83/5; SSE streaming with cited sources verified end-to-end (e.g., LSTM questions hit the LSTM chapter).', zh: '答案质量：12 条抽样人工评分 4.83/5；SSE 流式与带引用来源端到端验证（如 LSTM 问题全部命中 LSTM 章节）。' },
        { en: 'Local BGE-M3 embeddings — zero API cost for retrieval; DeepSeek generates cited answers with source highlighting.', zh: 'BGE-M3 本地向量——检索零 API 成本；DeepSeek 生成带引用回答，来源高亮可溯源。' },
      ],
      demo: {
        en: 'Screen recording of the chat UI: two deep-learning questions answered with streaming output, the retrieval-breakdown panel (per-source dense / BM25 / RRF scores), copy-answer, conversation history and session restore after reload.',
        zh: '聊天界面录屏：两个深度学习问题，流式回答 + 检索分解面板（每个来源的 dense / BM25 / RRF 得分）+ 复制答案 + 会话历史与刷新恢复。',
      },
      demoMedia: {
        video: { en: '/demos/sourceqa/demo.mp4', zh: '/demos/sourceqa/demo.mp4' },
        gif: { en: '/demos/sourceqa/demo.gif', zh: '/demos/sourceqa/demo.gif' },
        shots: { en: ['/demos/sourceqa/1-home.png', '/demos/sourceqa/3-answer.png', '/demos/sourceqa/4-breakdown.png', '/demos/sourceqa/6-second.png', '/demos/sourceqa/7-history.png', '/demos/sourceqa/8-restored.png'], zh: ['/demos/sourceqa/1-home.png', '/demos/sourceqa/3-answer.png', '/demos/sourceqa/4-breakdown.png', '/demos/sourceqa/6-second.png', '/demos/sourceqa/7-history.png', '/demos/sourceqa/8-restored.png'] },
      },
      techStack: [
        { en: 'Retrieval: BGE-M3 (local) + BM25 + BGE-reranker', zh: '检索：BGE-M3（本地）+ BM25 + BGE 重排' },
        { en: 'Store: ChromaDB', zh: '存储：ChromaDB' },
        { en: 'Generation: DeepSeek (OpenAI-compatible)', zh: '生成：DeepSeek（OpenAI 兼容）' },
        { en: 'UI: React chat interface + API docs', zh: 'UI：React 聊天界面 + API 文档' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/sourceqa-learning-assistant',
        zh: '源码：github.com/Ringnine009/sourceqa-learning-assistant',
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
      todos: [],
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
      en: 'Drop in a paper URL or PDF and a team of four specialized AI agents — Researcher, Reader, Critic, Synthesizer — plans, reads, critiques and synthesizes a structured review with related-work links.',
      zh: '丢入论文链接或 PDF，四名专职智能体（Researcher / Reader / Critic / Synthesizer）协同规划、阅读、批判与综合，产出结构化审阅与相关工作链接。',
    },
    tech: ['Python', 'DeepSeek', 'Function Calling', 'Agent Orc.', 'arXiv API'],
    stats: [
      { value: '4', label: { en: 'specialized agents', zh: '个专职智能体' } },
      { value: '2', label: { en: 'archived end-to-end review runs', zh: '份存档的端到端审阅运行' } },
      { value: '8', label: { en: 'claims verified with quote evidence (author\u2019s own paper)', zh: '条论断经引文对照核实（本人论文）' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/paperflow-agents',
        external: true,
      },
      internal: { en: 'Case study', zh: '案例详情' },
    },
    detail: {
      problem: {
        heading: { en: 'Problem', zh: '问题' },
        body: [
          {
            en: 'Reading the literature is a bottleneck: a single paper link or PDF has to become a structured review, related-work links and next-step suggestions — manually this takes hours.',
            zh: '文献阅读是瓶颈：一个论文链接或 PDF 需要变成结构化审阅、相关工作链接与下一步建议——人工完成要花数小时。',
          },
          {
            en: 'Role-specialized agents — planning, reading, critiquing and synthesizing — collaborate to turn a single paper link into a structured, verifiable review.',
            zh: '角色专职智能体——规划、阅读、批判、综合——协作把一篇论文链接转化为结构化、可核验的审阅。',
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
        en: 'Paper link → dependency-aware orchestrator → Researcher / Reader / Critic / Synthesizer with tool calls → JSON task board → structured review.',
        zh: '论文链接 → 依赖感知编排器 → Researcher / Reader / Critic / Synthesizer（工具调用）→ JSON 任务板 → 结构化审阅。',
      },
      highlights: [
        { en: 'Self-built multi-agent orchestration (no heavy framework)', zh: '自研轻量多智能体编排（不依赖重型框架）' },
        { en: 'Free arXiv API integration with Crossref fallback', zh: '免费 arXiv API 集成，Crossref 兜底' },
        { en: 'DeepSeek function calling + JSON task board', zh: 'DeepSeek function calling + JSON 任务板' },
        { en: 'Deterministic claim verification view — quote locations & context, verified by code', zh: '确定性引文核验视图——引文位置与上下文，由代码判定' },
        { en: 'Structured review + related-work survey output', zh: '输出结构化审阅 + 相关工作综述' },
      ],
      results: [
        { en: 'Two archived end-to-end runs: the author\u2019s Werewolf paper (DOI + local PDF) with every claim paired to a verbatim quote verified against the paper text, and related-work links resolved to real arXiv IDs; a second run through Attention Is All You Need exercises the full arXiv pipeline (BLEU 28.4/41.8 correctly restated) with relevance scored 4/10 against an explicit rubric.', zh: '两份存档的端到端运行：本人的狼人杀论文（DOI + 本地 PDF）每条论断均与原文逐字引文配对核验，相关工作链接解析为真实 arXiv 文献；Attention Is All You Need 第二次运行走通 arXiv 全链路（正确复述 BLEU 28.4/41.8），相关性按明确评分细则评 4/10。' },
        { en: 'Self-built orchestration with an inspectable JSON task board; graceful degradation to abstract-only review when full text is unavailable.', zh: '自研编排 + 可检查的 JSON 任务板；拿不到全文时优雅降级为摘要审阅。' },
      ],
      demo: {
        en: 'Live recording of a real run: submit the author\u2019s Werewolf paper DOI → the four-agent team (Researcher → Reader → Critic → Synthesizer) executes with visible task-board states → structured review → per-claim verification view (each quote checked against the paper text by code, with location and context).',
        zh: '真实运行的现场录制：提交本人狼人杀论文 DOI → 四智能体团队（Researcher → Reader → Critic → Synthesizer）执行，任务板状态实时可见 → 结构化审阅 → 逐条引文核验视图（每条引文由代码对照原文，含位置与上下文）。',
      },
      demoMedia: {
        video: { en: '/demos/paperflow/demo.mp4', zh: '/demos/paperflow/demo.mp4' },
        gif: { en: '/demos/paperflow/demo.gif', zh: '/demos/paperflow/demo.gif' },
        shots: { en: ['/demos/paperflow/1-dashboard.png', '/demos/paperflow/2-board.png', '/demos/paperflow/3-report.png', '/demos/paperflow/5-verification.png', '/demos/paperflow/6-verification-expanded.png'], zh: ['/demos/paperflow/1-dashboard.png', '/demos/paperflow/2-board.png', '/demos/paperflow/3-report.png', '/demos/paperflow/5-verification.png', '/demos/paperflow/6-verification-expanded.png'] },
      },
      techStack: [
        { en: 'Orchestration: self-built agent team + JSON task board', zh: '编排：自研智能体团队 + JSON 任务板' },
        { en: 'LLM: DeepSeek function calling', zh: 'LLM：DeepSeek function calling' },
        { en: 'Data: arXiv API (+ Crossref/doi.org fallback)', zh: '数据：arXiv API（+ Crossref/doi.org 兜底）' },
        { en: 'Language: Python', zh: '语言：Python' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/paperflow-agents',
        zh: '源码：github.com/Ringnine009/paperflow-agents',
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
      todos: [],
    },
  },
  {
    slug: 'nanolm',
    kind: 'project',
    name: 'NanoLM',
    glyph: '▤',
    status: { en: 'Model Training', zh: '模型训练' },
    tagline: {
      en: 'A language model trained from scratch, plus LoRA fine-tuning',
      zh: '从零训练的轻量语言模型',
    },
    summary: {
      en: 'A GPT-style transformer implemented from scratch in PyTorch — tokenizer, data pipeline, model, training loop, sampling — pre-trained on a small domain corpus, then fine-tuned with a from-scratch LoRA implementation.',
      zh: '用 PyTorch 从零实现 GPT 风格 transformer（分词 / 数据 / 模型 / 训练 / 采样），小领域语料预训练后，用自实现 LoRA 微调。',
    },
    tech: ['PyTorch', 'GPT', 'LoRA', 'FastAPI', 'Streaming', 'BPE'],
    stats: [
      { value: '28.3M', label: { en: 'parameters (trained from scratch)', zh: '参数量（从零训练）' } },
      { value: '28', unit: 'min', label: { en: 'pretrain on an 8GB laptop GPU', zh: '8GB 笔记本 GPU 预训练耗时' } },
      { value: '1.6%', label: { en: 'trainable params in LoRA fine-tune', zh: 'LoRA 微调可训练参数占比' } },
    ],
    links: {
      github: {
        label: { en: 'GitHub repo', zh: 'GitHub 仓库' },
        url: 'https://github.com/Ringnine009/nanolm-from-scratch',
        external: true,
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
            en: 'Pre-train on a small domain corpus (1.5MB mushroom-safety text), fine-tune with a from-scratch LoRA implementation (1.6% trainable parameters), then serve streaming inference over FastAPI with a chat UI.',
            zh: '小领域语料（1.5MB 蘑菇安全文本）预训练，再用自实现 LoRA 微调（仅 1.6% 参数可训练），最后 FastAPI 流式推理 + 聊天界面。',
          },
        ],
      },
      architecture: {
        en: 'Corpus → BPE tokenizer → GPT blocks trained from scratch → training loop with checkpoints → FastAPI streaming → chat UI.',
        zh: '语料 → BPE 分词 → 从零训练的 GPT 模块 → 训练循环与检查点 → FastAPI 流式 → 聊天界面。',
      },
      highlights: [
        { en: 'GPT from scratch: tokenizer → data → model → train → sample', zh: '从零实现 GPT：分词 → 数据 → 模型 → 训练 → 采样' },
        { en: 'From-scratch LoRA fine-tuning (1.6% trainable parameters)', zh: '自实现 LoRA 微调（仅 1.6% 参数可训练）' },
        { en: 'Live generation-parameter controls (temperature · top-k · penalties)', zh: '实时生成参数控制（temperature · top-k · 惩罚项）' },
        { en: 'Before/after fine-tuning comparison, generated from real checkpoints', zh: '微调前后对比（由真实 checkpoint 生成）' },
        { en: 'Streaming FastAPI inference + chat UI', zh: 'FastAPI 流式推理 + 聊天 UI' },
      ],
      results: [
        { en: 'Pre-training: 28.3M-parameter GPT, 6000 steps in 28 minutes on an 8GB laptop GPU (29–87K tok/s), loss 9.50 → 0.10 (train), best val 5.02; custom BPE tokenizer (12,000 vocab) round-trips exactly.', zh: '预训练：28.3M 参数 GPT，8GB 笔记本 GPU 上 6000 步 28 分钟（29–87K tok/s），loss 9.50 → 0.10（训练），最佳验证 5.02；自实现 BPE 分词器（12000 词表）往返精确。' },
        { en: 'LoRA fine-tuning: 28 adapters, only 1.60% of parameters trainable (0.459M), 442/49 instruction pairs, val loss 4.03 → 0.84 in 3 minutes. Before fine-tuning the model outputs gibberish; after, it answers \u201cIs the death cap mushroom poisonous?\u201d with structured, factually correct guidance.', zh: 'LoRA 微调：28 个适配器、仅 1.60% 参数可训练（0.459M）、442/49 指令对、3 分钟 val loss 4.03 → 0.84。微调前输出乱码，微调后能结构化且事实正确地回答"毒鹅膏有毒吗"。' },
        { en: 'Held-out evaluation (44 hand-written questions, zero overlap with training): 38.6% keyword hit-rate — strongest on edibility questions (80%), weakest on morphological recall (12.5%). Honest limits documented: a mechanism-focused project, not a production chatbot.', zh: '留出评测（44 条手写题、与训练集零重合）：关键词命中率 38.6%——食性判断最强（80%），形态回忆最弱（12.5%）。限制如实记录：这是机制演示项目，不是生产级聊天机器人。' },
        { en: 'True token-level SSE streaming (first token ~0.6s) with repetition penalty and no-repeat n-grams; inference fully local — zero API cost.', zh: '真 token 级 SSE 流式（首 token 约 0.6 秒）+ 重复惩罚与 n-gram 去重；推理完全本地——零 API 成本。' },
      ],
      demo: {
        en: 'Screen recording of the locally served chat UI: adjust generation parameters (temperature, top-k, penalties) live, ask \u201cIs the death cap mushroom poisonous?\u201d with token-level streaming, then switch to the Before/After fine-tuning tab — both answers generated from the real checkpoints, zero API cost.',
        zh: '本地部署聊天界面录屏：实时调节生成参数（temperature、top-k、惩罚项），提问"毒鹅膏是否有毒"并展示 token 级流式输出，再切换到微调前后对比标签页——两组回答均由真实 checkpoint 生成，零 API 成本。',
      },
      demoMedia: {
        video: { en: '/demos/nanollm/demo.mp4', zh: '/demos/nanollm/demo.mp4' },
        gif: { en: '/demos/nanollm/demo.gif', zh: '/demos/nanollm/demo.gif' },
        shots: { en: ['/demos/nanollm/1-home.png', '/demos/nanollm/2-parameters.png', '/demos/nanollm/3-question.png', '/demos/nanollm/4-streaming.png', '/demos/nanollm/5-answer.png', '/demos/nanollm/6-before-after.png'], zh: ['/demos/nanollm/1-home.png', '/demos/nanollm/2-parameters.png', '/demos/nanollm/3-question.png', '/demos/nanollm/4-streaming.png', '/demos/nanollm/5-answer.png', '/demos/nanollm/6-before-after.png'] },
      },
      techStack: [
        { en: 'Framework: PyTorch (from-scratch GPT)', zh: '框架：PyTorch（从零 GPT）' },
        { en: 'Fine-tuning: from-scratch LoRA implementation', zh: '微调：自实现 LoRA' },
        { en: 'Serving: FastAPI streaming', zh: '服务：FastAPI 流式' },
        { en: 'UI: chat interface', zh: 'UI：聊天界面' },
      ],
      github: {
        en: 'Source: github.com/Ringnine009/nanolm-from-scratch',
        zh: '源码：github.com/Ringnine009/nanolm-from-scratch',
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
      todos: [],
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
      en: 'A 9-player Werewolf system on AgentScope with LLM-backed agents: a Dynamic Belief Network (EMA belief maintenance) and a cross-model Deep-Thinking Token Ratio (DTR) probe raise villager win rate and vote accuracy.',
      zh: '基于 AgentScope 的 9 人狼人杀系统：动态信念网络（EMA 信念维护）与跨模型深度思考 Token 比率（DTR）探针，显著提升村民胜率与投票准确率。',
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
            en: 'Propose a cross-model architectural Deep-Thinking Token Ratio (DTR) probe that analyzes hidden-layer activation patterns through forward inference of probe models, providing enhanced marginal utility for complex social reasoning.',
            zh: '提出跨模型架构的深度思考 Token 比率（DTR）探针，通过探针模型前向推理分析隐藏层激活模式，为复杂社会推理提供边际增益。',
          },
        ],
      },
      architecture: {
        en: 'DBN belief maintenance (EMA) + cross-model DTR probe over agent hidden states → social reasoning improvement.',
        zh: 'DBN 信念维护（EMA）+ 跨模型 DTR 探针分析智能体隐藏状态 → 社会推理能力提升。',
      },
      highlights: [
        { en: 'Dynamic Belief Network with EMA belief maintenance', zh: 'EMA 机制维护信念的动态信念网络' },
        { en: 'Cross-model DTR probe on hidden-layer activations', zh: '跨模型 DTR 探针分析隐藏层激活' },
        { en: 'Quantitative in-game metrics (win rate, vote accuracy, Brier score)', zh: '游戏内定量指标（胜率、投票准确率、Brier 分数）' },
        { en: 'Published open access — Theoretical and Natural Science, Vol.174', zh: '开放获取发表 — Theoretical and Natural Science Vol.174' },
      ],
      results: [
        { en: 'Villager win rate: 44.2% → 68.8% (best config E: MaKTO + DBN).', zh: '村民胜率：44.2% → 68.8%（最佳配置 E：MaKTO + DBN）。' },
        { en: 'Vote accuracy: 35.5% → 66.6% (best config F: full modules).', zh: '投票准确率：35.5% → 66.6%（最佳配置 F：全模块）。' },
        { en: 'Brier score convergence — see full tables in the paper.', zh: 'Brier 分数收敛 — 完整表格见论文原文。' },
      ],
      demo: {
        en: 'Figures, tables and the full evaluation data are in the open-access paper (DOI below); an interactive summary of the six configurations is shown above.',
        zh: '图表与完整评测数据见开放获取论文（见下方 DOI）；上方已给出六组配置的交互式汇总。',
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
            en: 'Sole author — developed the Werewolf system on AgentScope, designed the DBN EMA mechanism and the DTR probe, and built the quantitative in-game evaluation metrics. Supervised by Vincent LAU (HKUST).',
            zh: '第一作者（唯一作者）— 基于 AgentScope 开发狼人杀系统，设计 DBN EMA 机制与 DTR 探针，并搭建游戏内定量评测指标。导师：刘坚能（香港科技大学）。',
          },
        ],
      },
      roleTags: [
        { en: 'Research', zh: '科研' },
        { en: 'Multi-agent', zh: '多智能体' },
      ],
      todos: [],
    },
  },
];

/** Projects with a full detail page (5). */
export const DETAILED_PROJECTS = PROJECTS.filter((p) => p.kind === 'project');

export const getProject = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
