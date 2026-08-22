# Zhenxiao Guo — Portfolio Site

Bilingual (English / 中文) portfolio for Zhenxiao Guo — production-grade LLM
applications and multi-agent research. Built with **Astro 5 + TypeScript**, custom CSS
design system, **zero external dependencies** (fonts are bundled npm packages, no CDN).

Live site: <https://Ringnine009.github.io> — default language **EN**, switch
to **中文** from the top-right control.

## Tech stack

- [Astro 5](https://astro.build) — static output, `output: 'static'`
- TypeScript (strict, `astro check` clean)
- Custom light design system: canvas `#fafbfc`, white surfaces with hairline
  borders, indigo accent `#4f46e5`, Inter + JetBrains Mono (bundled via Fontsource)
- `@astrojs/sitemap` for `sitemap-index.xml` + per-page hreflang alternates
- GitHub Actions → Pages deployment (no Jekyll, `.nojekyll` included)

## Local development

Requirements: Node ≥ 20.3 (`.nvmrc` pins 22; developed/tested on Node 26).

```bash
npm install        # install dependencies
npm run dev        # dev server with HMR at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run check      # astro check (type + content checks)
node scripts/verify.mjs   # smoke-test the build output (routes + bilingual markers)
```

Verify the production build locally:

```bash
npm run build
npm run preview   # then open http://localhost:4321/en and http://localhost:4321/zh
```

## Structure

```
site/
├── .github/workflows/deploy.yml   # Pages deployment (build + upload + deploy)
├── public/                        # favicon.svg, robots.txt, og-image.svg, .nojekyll
├── scripts/verify.mjs             # build-output smoke test (used in CI too)
└── src/
    ├── data/                      # ← ALL user-visible content lives here (en/zh pairs)
    │   ├── types.ts               #   shared content types
    │   ├── site.ts                #   author, nav, footer, common UI strings
    │   ├── projects.ts            #   the 6 display slots (5 projects + paper)
    │   ├── home.ts                #   home page content
    │   ├── research.ts            #   paper page content (real bibliographic data)
    │   └── about.ts               #   About page content (from the CV)
    ├── lib/i18n.ts                # language helpers (t(), langPath(), alternatePath())
    ├── layouts/Base.astro         # html shell: SEO, fonts, header, footer, reveal JS
    ├── components/                # Header, Footer, cards, stats, CTA, placeholders…
    ├── styles/                    # tokens.css / base.css / components.css
    └── pages/
        ├── 404.astro              # bilingual 404
        └── [lang]/                # dynamic locale routes: /en/* and /zh/*
            ├── index.astro        # home
            ├── projects/          # list + [slug] detail (5 pages × 2 locales)
            ├── research.astro     # paper page
            └── about.astro        # about page
```

## How to fill in content (for the main session)

Everything user-visible is driven by `src/data/*.ts`. Every string is a `{ en, zh }`
pair. Look for `TODO` comments in the data files:

| File | What to fill |
|---|---|
| `src/data/projects.ts` | per-project summaries, detail sections, result numbers, role, GitHub/demo URLs |
| `src/data/research.ts` | re-verify abstract/results against the published PDF; replace placeholders |
| `src/data/about.ts` | verify internship/education details against the CV |
| `src/data/home.ts` | hero copy, skill percentages, stats |
| `src/data/site.ts` | Chinese name (currently uses the romanized name), footer links |

To add a project: add an entry to `PROJECTS` in `src/data/projects.ts` — the list page,
home grid and detail template render automatically.

## Deployment

This repo is the `<username>.github.io` repository, so the site is served at the repo
root. The workflow `.github/workflows/deploy.yml` builds and deploys automatically on
push to `main`:

1. GitHub → repository **Settings → Pages** → Source: **GitHub Actions** (no branch needed).
2. Push to `main` — the workflow runs `build` (npm ci → build → smoke test → upload
   artifact) then `deploy` (Pages).
3. Verify: <https://Ringnine009.github.io/en/> and <https://Ringnine009.github.io/zh/>.

Alternative manual deploy (fallback if Actions fails):

```bash
npm run build
# then push the dist/ folder to the gh-pages branch, or use any static host.
```

## Design system

- Canvas `#010102` (near-black, not pure black); surfaces `#0f1011 → #1c1d1f` for layering
- Hairline separators: `rgba(255,255,255,0.09)` / `0.16`
- Single accent `#6366F1` (indigo) — buttons, links, focus rings only
- Text hierarchy `#f7f8f8 / #d0d6e0 / #8a8f98 / #62666d`
- Fonts: `Inter Variable` (sans) + `JetBrains Mono Variable` (mono), bundled locally
- Motion: 120–200 ms transitions, scroll reveal (IntersectionObserver, respects
  `prefers-reduced-motion`)

## License

MIT — see `LICENSE`. (Add a LICENSE file before pushing if you want the MIT badge.)
