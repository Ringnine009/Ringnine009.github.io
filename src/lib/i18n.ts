import type { Lang, L } from '@/data/types';

export type { Lang, L };

export const LANGS: Lang[] = ['en', 'zh'];
export const DEFAULT_LANG: Lang = 'en';

export const isLang = (v: unknown): v is Lang => v === 'en' || v === 'zh';

/** Localized string accessor. */
export const t = (l: L, lang: Lang): string => l[lang];

/** Build an in-site path with the locale prefix, e.g. langPath('en', '/projects') -> '/en/projects'. */
export const langPath = (lang: Lang, path: string): string =>
  `/${lang}${path.startsWith('/') ? path : '/' + path}`;

/** Absolute URL (for hreflang/canonical) — uses the configured site root. */
export const absoluteUrl = (path: string): string =>
  `https://Ringnine009.github.io${path}`;

/** The alternate-language path for a current pathname, e.g. /en/projects/x -> /zh/projects/x. */
export const alternatePath = (lang: Lang, pathname: string): string => {
  const other: Lang = lang === 'en' ? 'zh' : 'en';
  return pathname.replace(new RegExp(`^/${lang}`), `/${other}`);
};
