// ------------------------------------------------------------------
// About page — grounded in the real CV and user-verified facts.
// Chinese names, internship companies and courses confirmed by the user.
// ------------------------------------------------------------------

export const aboutContent = {
  kicker: { en: 'About', zh: '关于' },
  title: { en: 'Zhenxiao Guo', zh: '郭震霄' },
  role: {
    en: 'AI undergraduate · LLM engineer · multi-agent researcher',
    zh: '人工智能本科生 · LLM 工程师 · 多智能体研究者',
  },
  intro: {
    en: 'AI undergraduate at Tongji University. Full-stack LLM applications — retrieval, document intelligence, agent orchestration — and multi-agent social-reasoning research.',
    zh: '同济大学人工智能专业本科生。全栈 LLM 应用——检索、文档智能、智能体编排——以及多智能体社会推理研究。',
  },
  contact: {
    email: 'guozhenxiao6778@163.com',
    phone: '+86 186 1794 6778',
    github: 'https://github.com/Ringnine009',
  },

  education: {
    kicker: { en: 'Education', zh: '教育背景' },
    heading: { en: 'Education', zh: '教育背景' },
    school: { en: 'Tongji University', zh: '同济大学' },
    location: { en: 'Shanghai, China', zh: '中国 · 上海' },
    major: { en: 'B.Eng. in Artificial Intelligence', zh: '人工智能专业（本科）' },
    period: { en: 'Sep 2023 – Jun 2027', zh: '2023.09 – 2027.06' },
    gpa: { en: 'GPA 80.16/100 · 3.61/5.00', zh: 'GPA 80.16/100 · 3.61/5.00' },
    courses: {
      en: 'Extracurricular: Generative AI with Large Language Models (DeepLearning.AI × AWS) · Natural Language Processing Specialization, 4 courses (DeepLearning.AI)',
      zh: '课外课程：《Generative AI with Large Language Models》（DeepLearning.AI × AWS）· DeepLearning.AI《自然语言处理专项课程》4 门',
    },
  },

  publication: {
    kicker: { en: 'Publication', zh: '论文发表' },
    heading: { en: 'Published research', zh: '论文发表' },
    title: {
      en: 'Dynamic Belief Networks and Deep-Thinking Probes for Multi-agent Social Reasoning',
      zh: '基于动态信念网络与深度思考比率探针的多智能体社交推理增强',
    },
    meta: [
      { en: '03/2026 – 06/2026', zh: '2026.03 – 2026.06' },
      { en: 'Supervisor: Vincent LAU (HKUST)', zh: '导师：刘坚能（香港科技大学）' },
      { en: 'Published in Theoretical and Natural Science (TNS) · Vol.174', zh: '发表于 Theoretical and Natural Science（TNS）· 第 174 卷' },
    ],
    link: { en: 'See the research page', zh: '查看研究页' },
  },

  research: {
    kicker: { en: 'Research', zh: '科研经历' },
    heading: { en: 'Research experience', zh: '科研经历' },
    items: [
      {
        title: { en: 'Multimodal Information Fusion Perception and Visual Semantic Understanding in Complex Scenarios', zh: '复杂场景多模态信息融合感知与视觉语义理解' },
        org: { en: 'School of Artificial Intelligence and Robotics, Hunan University', zh: '湖南大学 机器人与人工智能学院' },
        role: { en: 'Research Assistant', zh: '科研助理' },
        period: { en: 'Aug 5 – 28, 2026', zh: '2026.08.05 – 2026.08.28' },
        points: [
          {
            en: 'Built standardized multimodal datasets (temporal-spatial alignment, cross-modality correlation) and reproduced mainstream fusion-perception models in PyTorch with performance and ablation analyses.',
            zh: '构建标准化多模态数据集（时空对齐、跨模态关联），并用 PyTorch 复现主流融合感知模型，完成性能与消融分析。',
          },
          {
            en: 'Contributed to lightweight feature-fusion module design, training pipelines and algorithm testing for robotic visual perception.',
            zh: '参与轻量特征融合模块设计、训练管线与算法测试，支撑机器人视觉感知。',
          },
        ],
      },
    ],
  },

  work: {
    kicker: { en: 'Internships', zh: '实习经历' },
    heading: { en: 'Work & internship experience', zh: '工作与实习经历' },
    items: [
      {
        title: { en: 'GEO system development & full-stack implementation', zh: 'GEO 系统开发与全栈实现' },
        org: { en: 'Shanghai Zhidian Qiaodong AI Technology Co., Ltd.', zh: '支点撬动' },
        role: { en: 'AI R&D Engineer Intern', zh: 'AI 研发工程师实习生' },
        period: { en: 'Jun 23 – Jul 31, 2026', zh: '2026.06.23 – 2026.07.31' },
        points: [
          {
            en: 'Developed GEO system modules (knowledge-base management, AI visibility diagnostics, content generation, publishing scheduling, result tracking) — React + TypeScript frontend, Python + FastAPI backend.',
            zh: '开发 GEO 系统模块（知识库管理、AI 可见度诊断、内容生成、发布调度、结果追踪）：React + TypeScript 前端，Python + FastAPI 后端。',
          },
          {
            en: 'Built AI automation tools (desktop assistant, AI search data collection, multi-platform publishing automation) and supported testing, Docker environments and desktop builds.',
            zh: '开发 AI 自动化工具（桌面助手、AI 搜索采集、多平台发布自动化），并支持测试、Docker 环境与桌面构建。',
          },
        ],
      },
      {
        title: { en: 'Data warehouse & analytical reporting', zh: '数据仓库与分析报表' },
        org: { en: 'Hunan CountData Technology Information Co., Ltd.', zh: '大算' },
        role: { en: 'Big Data and Cloud Computing Intern', zh: '大数据与云计算实习生' },
        period: { en: 'Jan 5 – Feb 27, 2026', zh: '2026.01.05 – 2026.02.27' },
        points: [
          {
            en: 'Cleaned cloud-phone user behavior logs with Python (dedup, standardization, quality checks); built warehouse table structures and scheduled ETL flows.',
            zh: '用 Python 清洗云手机用户行为日志（去重、标准化、质检）；搭建数仓表结构与定时 ETL 流程。',
          },
          {
            en: 'Ran multi-dimensional SQL analytics and dashboards; handled cloud-server configuration, storage/database resources, deployment and monitoring.',
            zh: '使用 SQL 做多维度运营分析并搭建看板；负责云服务器配置、存储/数据库资源、部署与监控。',
          },
        ],
      },
      {
        title: { en: 'Digital content management platform', zh: '企业数字内容管理平台' },
        org: { en: 'Hunan Zhigaodian Network Technology Co., Ltd.', zh: '制高点' },
        role: { en: 'Information Technology Support Intern', zh: '信息技术支持实习生' },
        period: { en: 'Jul 3 – Aug 22, 2025', zh: '2025.07.03 – 2025.08.22' },
        points: [
          {
            en: 'Designed and developed platform modules (content publishing, user permissions) and supported user guidance, troubleshooting and feedback loops.',
            zh: '设计并开发平台模块（内容发布、用户权限），并支持用户引导、问题排查与反馈闭环。',
          },
        ],
      },
    ],
  },

  skills: {
    kicker: { en: 'Skills', zh: '技能' },
    heading: { en: 'Skills & languages', zh: '技能与语言' },
    groups: [
      {
        title: { en: 'Languages', zh: '语言' },
        items: [
          { en: 'English — IELTS 7.0', zh: '英语 — 雅思 7.0' },
          { en: 'Chinese — native', zh: '中文 — 母语' },
        ],
      },
      {
        title: { en: 'Programming', zh: '编程' },
        items: [
          { en: 'Python, C++, MATLAB, Verilog', zh: 'Python、C++、MATLAB、Verilog' },
          { en: 'React · TypeScript deployment experience', zh: 'React · TypeScript 部署经验' },
        ],
      },
      {
        title: { en: 'LLM engineering', zh: 'LLM 工程' },
        items: [
          { en: 'Local LLM deployment, engineering integration, basic AI agent development', zh: '大模型本地部署、工程化集成、基础智能体开发' },
        ],
      },
      {
        title: { en: 'Tools', zh: '工具' },
        items: [
          { en: 'Microsoft Office (Excel, Word, PowerPoint)', zh: 'Microsoft Office（Excel、Word、PowerPoint）' },
        ],
      },
    ],
  },

  cta: {
    heading: { en: 'Get in touch', zh: '联系方式' },
    sub: {
      en: 'Interested in my work, or open to research collaborations? I reply to email.',
      zh: '对我的工作感兴趣，或想开展科研合作？欢迎来信。',
    },
    primary: { en: 'Email me', zh: '发邮件' },
    secondary: { en: 'GitHub', zh: 'GitHub' },
  },
};
