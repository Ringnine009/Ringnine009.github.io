// ------------------------------------------------------------------
// Research page — the published paper (real bibliographic data from
// the CV + 执行计划 §3⑥; result numbers marked for PDF verification).
// ------------------------------------------------------------------

export const researchContent = {
  kicker: { en: 'Research · published', zh: '研究 · 已发表' },
  title: {
    en: 'Dynamic Belief Networks and Deep-Thinking Probes for Multi-agent Social Reasoning',
    zh: '多智能体社会推理的动态信念网络与深度思考探针',
  },
  meta: {
    venue: { en: 'Theoretical and Natural Science (TNS)', zh: 'Theoretical and Natural Science（TNS）' },
    volume: { en: 'Vol.174 · Print ISSN 2753-8818', zh: '第 174 卷 · Print ISSN 2753-8818' },
    conference: {
      en: 'Accepted by the Theoretic Physics and Plasma Physics symposium, CONF-MPCS 2026',
      zh: '收录于 CONF-MPCS 2026 理论物理与等离子体物理分会',
    },
    doi: '10.54254/2753-8818/2026.DL34010',
    access: { en: 'Open access · free to read', zh: '开放获取 · 免费阅读' },
    supervisor: { en: 'Supervisor: LIU Jianneng — The Hong Kong University of Science and Technology', zh: '导师：刘建能 — 香港科技大学' },
    date: { en: '03/2026 – 06/2026', zh: '2026 年 3 月 – 6 月' },
    role: { en: 'Co-author', zh: '共同作者' },
  },

  abstract: {
    kicker: { en: 'Abstract', zh: '摘要' },
    // Abstract body — drafted from the CV research summary; MUST be
    // cross-checked against the published PDF before launch.
    body: [
      {
        en: 'We developed a 9-player standard Werewolf game system based on AgentScope, integrated with an LLM backend and equipped target agents with a Dynamic Belief Network (DBN) and a Deep Thinking Ratio (DTR) probe. Quantitative evaluation metrics were designed based on in-game performance to measure enhancements in social reasoning capability.',
        zh: '我们基于 AgentScope 开发了 9 人标准狼人杀游戏系统，集成 LLM 后端，并为目标智能体配备动态信念网络（DBN）与深度思考比率（DTR）探针。基于游戏内表现设计了定量评测指标，以衡量社会推理能力的提升。',
      },
      {
        en: 'The DBN maintained agents’ belief states using an exponential moving average mechanism, addressing the recursive consistency challenge in multi-agent systems. In addition, a cross-model architectural DTR probe was innovatively proposed to analyze hidden-layer activation patterns through forward inference of probe models, providing enhanced marginal utility for complex social reasoning processes.',
        zh: 'DBN 通过指数滑动平均机制维护智能体的信念状态，解决多智能体系统中的递归一致性挑战；创新性地提出跨模型架构的 DTR 探针，通过探针模型前向推理分析隐藏层激活模式，为复杂社会推理过程提供边际增益。',
      },
    ],
  },

  methods: {
    kicker: { en: 'Method', zh: '方法' },
    heading: { en: 'How it works', zh: '方法要点' },
    architecture: {
      en: 'Method diagram placeholder — DBN belief maintenance (EMA) + cross-model DTR probe over agent hidden states → social reasoning improvements measured by in-game metrics.',
      zh: '方法图占位 — DBN 信念维护（EMA）+ 跨模型 DTR 探针分析智能体隐藏状态 → 以游戏内指标衡量的社会推理提升。',
    },
    points: [
      {
        title: { en: 'Dynamic Belief Network', zh: '动态信念网络' },
        body: {
          en: 'Maintains each agent’s belief state over time with an exponential moving average (EMA), keeping recursive beliefs about other agents’ beliefs consistent.',
          zh: '以指数滑动平均（EMA）随时间维护每个智能体的信念状态，保持对其他智能体信念的递归信念一致性。',
        },
      },
      {
        title: { en: 'Deep Thinking Ratio probe', zh: '深度思考比率探针' },
        body: {
          en: 'A cross-model architectural probe that inspects hidden-layer activation patterns via forward inference of probe models, signaling when deeper reasoning adds marginal utility.',
          zh: '跨模型架构探针，通过探针模型前向推理检查隐藏层激活模式，判断何时更深层的推理能带来边际收益。',
        },
      },
      {
        title: { en: 'In-game quantitative evaluation', zh: '游戏内定量评测' },
        body: {
          en: 'Win rate, vote accuracy and Brier-score convergence measured over standard 9-player Werewolf games, isolating the contribution of each mechanism.',
          zh: '在标准 9 人狼人杀局中测量胜率、投票准确率与 Brier 分数收敛，隔离每个机制的贡献。',
        },
      },
    ],
  },

  results: {
    kicker: { en: 'Results', zh: '结果' },
    heading: { en: 'Key numbers', zh: '关键数字' },
    // TODO: re-verify every figure against the published PDF.
    todoNote: {
      en: 'Figures below must be re-verified against the published PDF before launch.',
      zh: '以下数字上线前必须对照论文原文重新核对。',
    },
    table: {
      headers: [
        { en: 'Metric', zh: '指标' },
        { en: 'Baseline', zh: '基线' },
        { en: 'With DBN + DTR probe', zh: '加入 DBN + DTR 探针' },
        { en: 'Change', zh: '变化' },
      ],
      rows: [
        [
          { en: 'Villager win rate', zh: '村民胜率' },
          '44.2%',
          '68.8%',
          '+24.6 pp',
        ],
        [
          { en: 'Vote accuracy', zh: '投票准确率' },
          '35.5%',
          '66.6%',
          '+31.1 pp',
        ],
        [
          { en: 'Brier score', zh: 'Brier 分数' },
          { en: '— (see paper)', zh: '—（见论文）' },
          { en: 'converges (see paper)', zh: '收敛（见论文）' },
          { en: '—', zh: '—' },
        ],
      ],
    },
  },

  paperInfo: {
    kicker: { en: 'Paper', zh: '论文信息' },
    citation: {
      en: 'GUO Zhenxiao. Dynamic Belief Networks and Deep-Thinking Probes for Multi-agent Social Reasoning. Theoretical and Natural Science, Vol.174 (2026).',
      zh: '郭振骁. Dynamic Belief Networks and Deep-Thinking Probes for Multi-agent Social Reasoning. Theoretical and Natural Science, Vol.174 (2026).',
    },
    doiLabel: { en: 'DOI', zh: 'DOI' },
    readOnline: { en: 'Read the open-access paper', zh: '阅读开放获取论文' },
    note: {
      en: 'Source code is intentionally not public (research policy).',
      zh: '源码按研究惯例不公开。',
    },
  },

  cta: {
    heading: { en: 'Explore the research direction further', zh: '进一步探索研究方向' },
    sub: {
      en: 'See how the multi-agent direction extends into a product: PaperFlow turns a paper link into a structured review.',
      zh: '看看多智能体方向如何延伸为产品：PaperFlow 将论文链接转化为结构化审阅。',
    },
    primary: { en: 'View PaperFlow', zh: '查看 PaperFlow' },
    secondary: { en: 'Back to research', zh: '返回研究' },
  },
};
