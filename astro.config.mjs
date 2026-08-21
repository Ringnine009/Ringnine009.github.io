// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

// GitHub Pages site root: https://Ringnine009.github.io (user-page repo, served at "/")
export default defineConfig({
  site: 'https://Ringnine009.github.io',
  output: 'static',
  compressHTML: true,
  integrations: [sitemap()],
  // Locale routing is handled entirely by the dynamic [lang] routes
  // (src/pages/[lang]/…) plus per-page hreflang alternates — no Astro
  // i18n middleware needed.
  // Root path redirects to the default English locale.
  redirects: {
    '/': '/en/',
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
