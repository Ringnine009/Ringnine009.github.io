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
      en: 'AI undergraduate at Tongji University. Full-stack LLM applications — RAG, document intelligence, agent teams — and multi-agent social-reasoning research.',
      zh: '同济大学人工智能专业本科生。全栈 LLM 应用——RAG、文档智能、智能体团队——以及多智能体社会推理研究。',
    },
    ctaPrimary: { en: 'View projects', zh: '查看项目' },
    ctaSecondary: { en: 'Read the paper', zh: '阅读论文' },
    ctaTertiary: { en: 'About me', zh: '关于我' },
    meta: [
      { en: 'Tongji Univ. · AI · 2023–2027', zh: '同济大学 · 人工智能 · 2023–2027' },
      { en: 'IELTS 7.0', zh: '雅思 7.0' },
      { en: '5 projects · 1 published paper', zh: '5 个项目 · 1 篇论文' },
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
        { kind: 'dim', text: { en: '# 5 products · 1 paper · bilingual', zh: '# 5 个项目 · 1 篇论文 · 双语' } },
      ],
    },
  },

  featured: {
    kicker: { en: 'Featured work', zh: '精选项目' },
    heading: { en: 'Selected projects & research', zh: '精选项目与研究' },
    desc: {
      en: 'Five projects and one published paper — from document intelligence to a from-scratch transformer.',
      zh: '五个项目与一篇论文——从文档智能到从零训练的 transformer。',
    },
    viewAll: { en: 'All projects', zh: '全部项目' },
  },

  researchHighlights: {
    kicker: { en: 'Research highlights', zh: '研究亮点' },
    heading: { en: 'Multi-agent social reasoning, published', zh: '已发表的多智能体社会推理研究' },
    desc: {
      en: 'Dynamic Belief Networks & Deep-Thinking Probes — Theoretical and Natural Science, Vol.174, open access.',
      zh: '《Dynamic Belief Networks and Deep-Thinking Probes》——Theoretical and Natural Science Vol.174，开放获取。',
    },
    stats: [
      {
        value: '44.2%',
        unit: '→ 68.8%',
        label: { en: 'villager win rate', zh: '村民胜率' },
      },
      {
        value: '35.5%',
        unit: '→ 66.6%',
        label: { en: 'vote accuracy', zh: '投票准确率' },
      },
      {
        value: '9P',
        label: { en: '9-player Werewolf · AgentScope', zh: '9 人狼人杀 · AgentScope' },
      },
      {
        value: 'EMA',
        label: { en: 'belief maintenance', zh: '信念维护机制' },
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
      en: 'Self-assessed, evidenced by the projects above.',
      zh: '自我评估，由上方项目佐证。',
    },
  },

  cta: {
    heading: { en: 'Let’s build and research together', zh: '一起构建，一起研究' },
    sub: {
      en: 'Open to LLM / NLP / multi-agent research collaborations.',
      zh: '欢迎 LLM / NLP / 多智能体科研合作。',
    },
    primary: { en: 'Email me', zh: '发邮件' },
    secondary: { en: 'GitHub profile', zh: 'GitHub 主页' },
    emailLine: { en: 'guozhenxiao6778@163.com', zh: 'guozhenxiao6778@163.com' },
  },
};
