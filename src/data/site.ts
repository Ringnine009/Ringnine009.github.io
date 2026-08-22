import type { SiteConfig } from '@/data/types';

// ------------------------------------------------------------------
// Site-wide configuration: author identity, navigation, footer,
// shared UI strings. Everything user-visible is bilingual.
// ------------------------------------------------------------------
export const siteConfig: SiteConfig = {
  author: {
    en: 'Zhenxiao Guo',
    zh: '郭震霄',
  },
  brandMark: 'ZG',
  nav: [
    { href: '/', label: { en: 'Home', zh: '首页' } },
    { href: '/projects', label: { en: 'Projects', zh: '项目' } },
    { href: '/research', label: { en: 'Research', zh: '研究' } },
    { href: '/about', label: { en: 'About', zh: '关于' } },
  ],
  langSwitch: { en: 'EN', zh: '中文' },
  footer: {
    blurb: {
      en: 'AI undergraduate at Tongji University. I build full-stack LLM applications and research multi-agent systems.',
      zh: '同济大学人工智能专业本科生。构建全栈 LLM 应用，研究多智能体系统。',
    },
    columns: [
      {
        heading: { en: 'Explore', zh: '探索' },
        links: [
          { label: { en: 'Projects', zh: '项目' }, href: '/projects' },
          { label: { en: 'Research', zh: '研究' }, href: '/research' },
          { label: { en: 'About', zh: '关于' }, href: '/about' },
        ],
      },
      {
        heading: { en: 'Contact', zh: '联系' },
        links: [
          { label: { en: 'Email', zh: '邮箱' }, href: 'mailto:guozhenxiao6778@163.com', external: true },
          { label: { en: 'GitHub', zh: 'GitHub' }, href: 'https://github.com/Ringnine009', external: true },
        ],
      },
    ],
    bottom: {
      en: '© 2026 Zhenxiao Guo · Built with Astro',
      zh: '© 2026 Zhenxiao Guo · 使用 Astro 构建',
    },
    builtWith: { en: 'EN / 中文', zh: 'EN / 中文' },
  },
  seo: {
    titleSuffix: { en: '· Zhenxiao Guo — LLM Engineer & Multi-Agent Researcher', zh: '· 郭震霄 — LLM 工程师与多智能体研究者' },
    description: {
      en: 'Portfolio of Zhenxiao Guo: full-stack LLM applications (RAG, document intelligence, agents) and multi-agent social reasoning research.',
      zh: '郭震霄作品集：全栈 LLM 应用（RAG、文档智能、智能体）与多智能体社会推理研究。',
    },
  },
};

export const CONTACT_EMAIL = 'guozhenxiao6778@163.com';
export const GITHUB_URL = 'https://github.com/Ringnine009';
