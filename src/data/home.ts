import type { Stat } from '@/data/types';

// ------------------------------------------------------------------
// Home page content (hero, research highlights, skills, CTA).
// ------------------------------------------------------------------

export const homeContent = {
  hero: {
    kicker: {
      en: '~/portfolio — llm-engineer & multi-agent-researcher',
      zh: '~/portfolio — llm-engineer & multi-agent-researcher',
    },
    title: {
      en: 'Building ',
      zh: '构建 ',
    },
    titleAccent: {
      en: 'full-stack LLM applications',
      zh: '全栈 LLM 应用',
    },
    titleSuffix: {
      en: ', and the multi-agent research behind them.',
      zh: '，以及其背后的多智能体科研。',
    },
    sub: {
      en: 'I am an AI undergraduate at Tongji University: I ship full-stack LLM products (RAG, document intelligence, agent teams), understand model internals from the weights up, and publish multi-agent social-reasoning research.',
      zh: '同济大学人工智能专业本科生：交付全栈 LLM 产品（RAG、文档智能、智能体团队），从权重层面理解模型原理，并发表多智能体社会推理研究。',
    },
    ctaPrimary: { en: 'View projects', zh: '查看项目' },
    ctaSecondary: { en: 'Read the paper', zh: '阅读论文' },
    ctaTertiary: { en: 'About me', zh: '关于我' },
    meta: [
      { en: 'Tongji Univ. · AI · 2023–2027', zh: '同济大学 · 人工智能 · 2023–2027' },
      { en: 'IELTS 7.0', zh: '雅思 7.0' },
      { en: 'Open-source portfolio · 6 repos', zh: '开源作品集 · 6 个仓库' },
    ],
    terminal: {
      title: { en: 'portfolio — zsh', zh: 'portfolio — zsh' },
      lines: [
        { kind: 'cmd', text: { en: 'cat positioning.txt', zh: 'cat positioning.txt' } },
        { kind: 'out', text: { en: 'LLM engineer · multi-agent researcher', zh: 'LLM 工程师 · 多智能体研究者' } },
        { kind: 'cmd', text: { en: 'ls projects/', zh: 'ls projects/' } },
        { kind: 'out', text: { en: 'DocMind  MycoGuard  SourceQA  PaperFlow  NanoLM', zh: 'DocMind  MycoGuard  SourceQA  PaperFlow  NanoLM' } },
        { kind: 'cmd', text: { en: 'python train.py --from-scratch', zh: 'python train.py --from-scratch' } },
        { kind: 'out', text: { en: 'loss ↓ · win-rate ↑ 44.2% → 68.8%', zh: 'loss ↓ · 胜率 ↑ 44.2% → 68.8%' } },
        { kind: 'dim', text: { en: '# zero external dependencies · static · bilingual', zh: '# 零外部依赖 · 纯静态 · 双语' } },
      ],
    },
  },

  featured: {
    kicker: { en: 'Featured work', zh: '精选项目' },
    heading: { en: 'Selected projects & research', zh: '精选项目与研究' },
    desc: {
      en: 'Five built products and one published paper — from multimodal document intelligence to a transformer trained from scratch.',
      zh: '五个成型项目与一篇已发表论文——从多模态文档智能到从零训练的 transformer。',
    },
    viewAll: { en: 'All projects', zh: '全部项目' },
  },

  researchHighlights: {
    kicker: { en: 'Research highlights', zh: '研究亮点' },
    heading: { en: 'Multi-agent social reasoning, published', zh: '已发表的多智能体社会推理研究' },
    desc: {
      en: 'Dynamic Belief Networks & Deep-Thinking Probes — open access in Theoretical and Natural Science (Vol.174).',
      zh: '《Dynamic Belief Networks and Deep-Thinking Probes》——开放获取，发表于 Theoretical and Natural Science（Vol.174）。',
    },
    stats: [
      {
        value: '44.2%',
        unit: '→ 68.8%',
        label: { en: 'villager win rate after DBN + DTR probe', zh: '引入 DBN + DTR 探针后村民胜率' },
      },
      {
        value: '35.5%',
        unit: '→ 66.6%',
        label: { en: 'vote accuracy improvement', zh: '投票准确率提升' },
      },
      {
        value: '9P',
        label: { en: 'standard Werewolf game, AgentScope-based', zh: '基于 AgentScope 的标准狼人杀配置' },
      },
      {
        value: 'EMA',
        label: { en: 'belief maintenance mechanism (recursive consistency)', zh: '信念维护机制（递归一致性）' },
      },
    ] as Stat[],
    cta: { en: 'Read the research page', zh: '查看研究页' },
  },

  skills: {
    kicker: { en: 'Capabilities', zh: '能力' },
    heading: { en: 'Skills & tools', zh: '技能与工具' },
    items: [
      { label: { en: 'Python', zh: 'Python' }, pct: 92, note: { en: 'research + backend', zh: '科研 + 后端' } },
      { label: { en: 'LLM application engineering', zh: 'LLM 应用工程' }, pct: 90, note: { en: 'RAG · agents · eval', zh: 'RAG · 智能体 · 评测' } },
      { label: { en: 'PyTorch', zh: 'PyTorch' }, pct: 85, note: { en: 'training · fine-tuning', zh: '训练 · 微调' } },
      { label: { en: 'React · TypeScript', zh: 'React · TypeScript' }, pct: 82, note: { en: 'product UIs', zh: '产品前端' } },
      { label: { en: 'FastAPI · backend', zh: 'FastAPI · 后端' }, pct: 85, note: { en: 'services · streaming', zh: '服务 · 流式' } },
      { label: { en: 'C++ · MATLAB · Verilog', zh: 'C++ · MATLAB · Verilog' }, pct: 65, note: { en: 'foundations', zh: '基础' } },
    ],
    note: {
      en: 'Self-assessed proficiency; verified through shipped projects and published research.',
      zh: '自我评估水平，以已交付项目与已发表研究为准。',
    },
  },

  cta: {
    heading: { en: 'Let’s build and research together', zh: '一起构建，一起研究' },
    sub: {
      en: 'Open to research collaborations in LLM / NLP / multi-agent systems — and always happy to discuss the projects on this page.',
      zh: '欢迎 LLM / NLP / 多智能体方向的科研合作，也随时乐意聊聊本页的项目。',
    },
    primary: { en: 'Email me', zh: '发邮件' },
    secondary: { en: 'GitHub profile', zh: 'GitHub 主页' },
    emailLine: { en: 'guozhenxiao6778@163.com', zh: 'guozhenxiao6778@163.com' },
  },
};
