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
    supervisor: { en: 'Supervisor: Vincent LAU — Chair Professor, HKUST', zh: '导师：刘坚能（香港科技大学讲席教授）' },
    date: { en: '03/2026 – 06/2026', zh: '2026 年 3 月 – 6 月' },
    role: { en: 'First & sole author', zh: '第一作者（唯一作者）' },
  },

  abstract: {
    kicker: { en: 'Abstract', zh: '摘要' },
    // Paraphrased from the published open-access paper (verified against
    // the PDF: 3000 simulated games, six controlled configurations).
    body: [
      {
        en: 'LLM-powered multi-agent systems face two long-standing problems in social deduction: recursive agreement between homogeneous agents, and stable detection of deception. We address both with a Dynamic Belief Network (DBN) and a cross-model Deep-Thinking Token Ratio (DTR) probe, evaluated on nine-player Werewolf over 3000 simulated games in six controlled configurations.',
        zh: 'LLM 驱动的多智能体系统在社会推理中面临两大长期难题：同质智能体之间的递归共识，以及欺骗的稳定检测。我们提出动态信念网络（DBN）与跨模型深度思考 Token 比率（DTR）探针联合方案，在 9 人狼人杀场景中以 6 组受控配置、3000 局模拟完成评测。',
      },
      {
        en: 'DBN maintains per-player suspicion estimates with exponential moving average (EMA) smoothing, cutting the positive-feedback loop between homogeneous models. The DTR probe measures vocabulary-distribution change across transformer layers via logit-lens as a proxy of cognitive load. Combined, they raise the villager win rate from 44.2% to 68.8%, vote accuracy from 35.5% to 66.6%, and expedite Brier-score convergence — while revealing a non-monotonic relation between individual capability and collective payoff, akin to the handicap principle.',
        zh: 'DBN 通过指数滑动平均（EMA）平滑维护对每位玩家的怀疑估计，切断同质模型间的正反馈循环；DTR 探针以 logit-lens 测量各 transformer 层间的词表分布变化，作为认知负荷的代理。联合使用将村民胜率从 44.2% 提升至 68.8%，投票准确率从 35.5% 提升至 66.6%，并加速 Brier 分数收敛——同时揭示了个体能力与集体收益之间的非单调关系（类似演化博弈中的累赘原则）。',
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
        title: { en: 'Deep-Thinking Token Ratio (DTR) probe', zh: '深度思考 Token 比率（DTR）探针' },
        body: {
          en: 'A cross-model probe that measures vocabulary-distribution change across transformer layers via logit-lens — a proxy of cognitive load computed by an independently deployed Qwen2.5-3B probe model (36 layers).',
          zh: '跨模型探针，以 logit-lens 测量各 transformer 层间的词表分布变化——由独立部署的 Qwen2.5-3B（36 层）探针模型计算的认知负荷代理。',
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
    // All figures verified against the published open-access PDF
    // (research/werewolf-multiagent-paper.pdf, Table 2).
    todoNote: {
      en: 'Figures verified against the published paper (Table 2, six configurations × 500 games).',
      zh: '数字已对照论文原文核实（表 2，6 组配置 × 500 局）。',
    },
    table: {
      headers: [
        { en: 'Metric', zh: '指标' },
        { en: 'Baseline (A)', zh: '基线（A）' },
        { en: 'Best config', zh: '最佳配置' },
        { en: 'Change', zh: '变化' },
      ],
      rows: [
        [
          { en: 'Villager win rate', zh: '村民胜率' },
          '44.2%',
          '68.8% (E: MaKTO + DBN)',
          '+24.6 pp',
        ],
        [
          { en: 'Vote accuracy', zh: '投票准确率' },
          '35.5%',
          '66.6% (F: full modules)',
          '+31.1 pp',
        ],
        [
          { en: 'Mean survival', zh: '平均存活轮数' },
          '2.73 rounds',
          '2.33 rounds (F)',
          { en: 'trade-off (see note)', zh: '权衡（见注）' },
        ],
        [
          { en: 'Brier score', zh: 'Brier 分数' },
          { en: 'slowest convergence', zh: '收敛最慢' },
          { en: 'expedited convergence', zh: '收敛显著加快' },
          { en: '—', zh: '—' },
        ],
      ],
    },
    allConfigs: {
      heading: { en: 'All six configurations', zh: '六组配置全表' },
      note: {
        en: 'DBN and MaKTO-Proxy act in orthogonal directions: combined (E) they gain ~24.6 pp over baseline, close to the sum of independent gains. Full-module F identifies best but survives shortest — a non-monotonic individual-vs-collective trade-off similar to the handicap principle.',
        zh: 'DBN 与 MaKTO-Proxy 作用正交：组合（E）较基线提升约 24.6 个百分点，接近各自独立增益之和。全模块 F 识别最强但存活最短——个体能力与集体收益的非单调权衡，类似累赘原则。',
      },
      headers: [
        { en: 'Config', zh: '配置' },
        { en: 'Win rate', zh: '胜率' },
        { en: 'Vote acc.', zh: '投票准确率' },
        { en: 'Survival', zh: '存活轮数' },
      ],
      rows: [
        ['A (vanilla)', '44.2%', '35.5%', '2.73'],
        ['B (MaKTO)', '54.6%', '44.8%', '2.78'],
        ['C (DBN)', '53.8%', '45.7%', '2.67'],
        ['D (DBN+DTR)', '58.6%', '49.1%', '2.61'],
        ['E (MaKTO+DBN)', '68.8%', '59.3%', '2.59'],
        ['F (MaKTO+DBN+DTR)', '68.2%', '66.6%', '2.33'],
      ],
    },
  },

  paperInfo: {
    kicker: { en: 'Paper', zh: '论文信息' },
    citation: {
      en: 'GUO Zhenxiao. Dynamic Belief Networks and Deep-Thinking Probes for Multi-agent Social Reasoning. Theoretical and Natural Science, Vol.174 (2026).',
      zh: '郭震霄. Dynamic Belief Networks and Deep-Thinking Probes for Multi-agent Social Reasoning. Theoretical and Natural Science, Vol.174 (2026).',
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
