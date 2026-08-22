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
    en: 'I am an undergraduate in Artificial Intelligence at Tongji University. My work spans the full stack of LLM products — retrieval, document intelligence, agent orchestration — and research into how agents reason socially. I build, measure and publish.',
    zh: '同济大学人工智能专业本科生。工作覆盖 LLM 产品全栈——检索、文档智能、智能体编排——以及智能体社会推理研究。既做工程，也做评测，也发表论文。',
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
    period: { en: '09/2023 – 06/2027', zh: '2023.09 – 2027.06' },
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
        period: { en: '05/08/2026 – 28/08/2026', zh: '2026.08.05 – 2026.08.28' },
        points: [
          {
            en: 'Collected, cleaned and preprocessed multi-source visual perception data; built standardized multimodal datasets with temporal-spatial alignment and cross-modality feature correlation.',
            zh: '采集、清洗与预处理多源视觉感知数据；构建标准化多模态数据集，实现跨模态时空对齐与特征关联。',
          },
          {
            en: 'Reproduced mainstream multimodal fusion perception models in PyTorch; ran performance tests, metric analysis and experiment organization.',
            zh: '基于 PyTorch 复现主流多模态融合感知模型，完成性能测试、指标分析与实验整理。',
          },
          {
            en: 'Helped design lightweight feature-fusion modules and attention-optimization strategies against feature redundancy and information interference; ran comparative, ablation and visualization analyses.',
            zh: '针对特征冗余与信息干扰问题，协助设计轻量特征融合模块与注意力优化策略；开展对比实验、消融实验与可视化分析。',
          },
          {
            en: 'Contributed to training pipelines (data loading, tuning, environment config, validation) and algorithm module testing for robotic visual perception in complex scenarios.',
            zh: '参与训练管线（数据加载、调参、环境配置、结果验证）与算法模块测试，支撑复杂场景机器人视觉感知。',
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
        period: { en: '23/06/2026 – 31/07/2026', zh: '2026.06.23 – 2026.07.31' },
        points: [
          {
            en: 'Developed modules of the GEO system (enterprise knowledge-base management, AI visibility diagnostics, content generation, publishing scheduling, result tracking) with React + TypeScript frontend and Python + FastAPI backend.',
            zh: '参与 GEO 系统模块开发（企业知识库管理、AI 可见度诊断、内容生成、发布调度、结果追踪）：React + TypeScript 前端，Python + FastAPI 后端。',
          },
          {
            en: 'Built AI-assisted automation tools: GEO desktop assistant, AI search data collection, multi-platform publishing automation (web-desktop coordination, session management, browser automation, task scheduling).',
            zh: '开发 AI 辅助自动化工具：GEO 桌面助手、AI 搜索数据采集、多平台发布自动化（Web-桌面协同、会话管理、浏览器自动化、任务调度）。',
          },
          {
            en: 'Supported testing, regression verification, Docker-based dev environments and desktop build processes; wrote technical documentation and standardized recurring workflows.',
            zh: '支持功能测试、回归验证、Docker 开发环境与桌面构建；编写技术文档并将重复性工作流程标准化。',
          },
        ],
      },
      {
        title: { en: 'Data warehouse & analytical reporting', zh: '数据仓库与分析报表' },
        org: { en: 'Hunan CountData Technology Information Co., Ltd.', zh: '大算' },
        role: { en: 'Big Data and Cloud Computing Intern', zh: '大数据与云计算实习生' },
        period: { en: '05/01/2026 – 27/02/2026', zh: '2026.01.05 – 2026.02.27' },
        points: [
          {
            en: 'Collected and cleaned cloud-phone platform user behavior logs with Python scripts (dedup, field standardization, quality checks, summaries).',
            zh: '用 Python 脚本采集与清洗云手机平台用户行为日志（去重、字段标准化、质量检查、摘要）。',
          },
          {
            en: 'Helped build data-warehouse table structures and ETL flows with scheduled jobs; ran multi-dimensional operational queries in SQL and built dashboards.',
            zh: '协助搭建数仓表结构与定时 ETL 流程；使用 SQL 进行多维度运营统计查询并搭建可视化看板。',
          },
          {
            en: 'Handled cloud-server basics, cloud storage/database resource management, deployment testing, log monitoring and troubleshooting; documented operations.',
            zh: '负责云服务器基础配置与日常维护、云存储与云数据库资源管理、部署测试、日志监控与排障，并编写运维文档。',
          },
        ],
      },
      {
        title: { en: 'Digital content management platform', zh: '企业数字内容管理平台' },
        org: { en: 'Hunan Zhigaodian Network Technology Co., Ltd.', zh: '制高点' },
        role: { en: 'Information Technology Support Intern', zh: '信息技术支持实习生' },
        period: { en: '03/07/2025 – 22/08/2025', zh: '2025.07.03 – 2025.08.22' },
        points: [
          {
            en: 'Participated in designing and developing functional modules of the company’s digital content management platform: content publishing management, user permission management, and basic user-interface work.',
            zh: '参与企业数字内容管理平台功能模块的设计与开发：内容发布管理、用户权限管理与基础界面工作。',
          },
          {
            en: 'Supported user guidance, on-site troubleshooting and feedback loops between users and the development team.',
            zh: '支持用户引导、现场问题排查，以及用户与研发团队之间的反馈闭环。',
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
