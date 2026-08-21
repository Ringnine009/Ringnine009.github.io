// ------------------------------------------------------------------
// Shared i18n types. Content lives in `src/data/*.ts` as paired
// en/zh records; every user-visible string is localized.
// ------------------------------------------------------------------

export type Lang = 'en' | 'zh';

/** A string localized in both supported languages. */
export interface L {
  en: string;
  zh: string;
}

/** A paragraph block with an optional small heading. */
export interface Block {
  heading?: L;
  body: L[];
}

/** One statistical figure (mono value + unit + label). */
export interface Stat {
  value: string;
  unit?: string;
  label: L;
  /** optional precision hint shown as "±0.5pp" etc. */
  note?: string;
}

export type ProjectKind = 'project' | 'research';

export interface ProjectLink {
  label: L;
  url: string;
  external?: boolean;
  /** true = placeholder URL that still needs the real value */
  placeholder?: boolean;
}

export interface Project {
  slug: string;
  kind: ProjectKind;
  /** short display name, identical across languages (brand) */
  name: string;
  /** single-char monospace glyph used on the card icon */
  glyph: string;
  status?: L;
  /** one-line positioning, shown on cards */
  tagline: L;
  /** 2–3 sentence summary, shown on cards + list */
  summary: L;
  /** tech chips */
  tech: string[];
  stats: Stat[];
  links: {
    github?: ProjectLink;
    demo?: ProjectLink;
    paper?: ProjectLink;
    internal: L; // link label to the detail page, e.g. "Case study"
  };
  detail: {
    /** "Problem" section */
    problem: Block;
    /** "Approach / Method" section */
    approach: Block;
    /** architecture diagram placeholder caption */
    architecture: L;
    /** key highlights, bullet list */
    highlights: L[];
    /** result numbers — placeholders marked TODO */
    results: L[];
    /** demo area placeholder */
    demo: L;
    /** optional demo media paths under /demos/<slug>/ (video, gif, screenshots) */
    demoMedia?: {
      video: string;
      gif: string;
      shots: string[];
    };
    /** tech stack list */
    techStack: L[];
    /** GitHub link row */
    github: L;
    /** "My role" section */
    role: Block;
    /** rough role label chips, e.g. "Full-stack · 100%" */
    roleTags: L[];
    /** inline TODO markers rendered as amber notes (may be empty) */
    todos: L[];
  };
}

export interface NavLink {
  href: string;
  label: L;
}

export interface SiteConfig {
  author: L;
  brandMark: string;
  nav: NavLink[];
  langSwitch: L;
  footer: {
    blurb: L;
    columns: { heading: L; links: { label: L; href: string; external?: boolean }[] }[];
    bottom: L;
    builtWith: L;
  };
  common: {
    readMore: L;
    viewProject: L;
    viewAll: L;
    openSource: L;
    backToProjects: L;
    backHome: L;
    onThisPage: L;
    todo: L;
    tags: L;
  };
  seo: {
    titleSuffix: L;
    description: L;
  };
}
