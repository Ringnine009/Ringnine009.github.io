// Smoke test for the portfolio site build output.
// Run AFTER `npm run build`:  node scripts/verify.mjs
// Asserts:
//  1. All required routes exist in dist/ for both /en and /zh.
//  2. Key bilingual content markers are present on the rendered pages.
// Exits non-zero (red) when anything is missing.

import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const langs = ['en', 'zh'];
const projects = ['docmind', 'mycoguard', 'sourceqa', 'paperflow', 'nanolm'];

// route → HTML file (Astro emits directory/index.html)
const routes = [
  ...langs.map((l) => ({ name: `/${l}/ home`, file: join(dist, l, 'index.html') })),
  ...langs.map((l) => ({ name: `/${l}/projects`, file: join(dist, l, 'projects', 'index.html') })),
  ...projects.flatMap((p) =>
    langs.map((l) => ({
      name: `/${l}/projects/${p}`,
      file: join(dist, l, 'projects', p, 'index.html'),
    })),
  ),
  ...langs.map((l) => ({ name: `/${l}/research`, file: join(dist, l, 'research', 'index.html') })),
  ...langs.map((l) => ({ name: `/${l}/about`, file: join(dist, l, 'about', 'index.html') })),
  { name: '/404', file: join(dist, '404.html') },
];

const failures = [];

for (const { name, file } of routes) {
  if (!existsSync(file)) {
    failures.push(`MISSING route ${name} -> ${file}`);
  }
}

// Content markers: (file, expected substring, label)
const markers = [
  [join(dist, 'en', 'index.html'), 'DocMind', 'home/en lists DocMind'],
  [join(dist, 'zh', 'index.html'), 'DocMind', 'home/zh lists DocMind'],
  [join(dist, 'zh', 'index.html'), '智能', 'home/zh contains Chinese text'],
  [join(dist, 'en', 'research', 'index.html'), 'Dynamic Belief Networks', 'research/en paper title'],
  [join(dist, 'zh', 'research', 'index.html'), '动态信念网络', 'research/zh paper title'],
  [join(dist, 'zh', 'research', 'index.html'), '10.54254/2753-8818/2026.DL34010', 'research/zh DOI'],
  [join(dist, 'en', 'about', 'index.html'), 'Tongji University', 'about/en education'],
  [join(dist, 'zh', 'about', 'index.html'), '同济大学', 'about/zh education'],
  [join(dist, 'en', 'projects', 'docmind', 'index.html'), 'DocMind', 'docmind/en page'],
  [join(dist, 'zh', 'projects', 'docmind', 'index.html'), 'DocMind', 'docmind/zh page'],
  [join(dist, 'en', 'projects', 'docmind', 'index.html'), 'shot-carousel', 'docmind/en carousel'],
  [join(dist, 'en', 'projects', 'nanolm', 'index.html'), 'diagrams/nanolm.svg', 'nanolm diagram link'],
  [join(dist, 'en', 'index.html'), 'full-stack LLM applications', 'home/en hero positioning'],
];

for (const [file, needle, label] of markers) {
  if (!existsSync(file)) {
    failures.push(`MISSING file for marker: ${label} (${file})`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  if (!html.includes(needle)) {
    failures.push(`MARKER missing: ${label} (${needle}) in ${file}`);
  }
}

if (failures.length > 0) {
  console.error(`\n✗ SMOKE TEST FAILED (${failures.length}):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(`\n✓ SMOKE TEST PASSED: ${routes.length} routes + ${markers.length} content markers OK.`);
