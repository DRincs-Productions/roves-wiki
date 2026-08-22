# roves-wiki

Documentation site for [Roves](https://github.com/DRincs-Productions/roves), built with
Next.js and [Fumadocs](https://fumadocs.vercel.app).

Structurally modeled after [pixi-vn.wiki](https://github.com/DRincs-Productions/pixi-vn)'s
own docs site (Fumadocs setup, theming pattern, custom search/OG/comments), scoped down for
a single-product, English-only docs site — no i18n, no jsdoc auto-generation, no live
playgrounds/AI chat.

## Development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Structure

| Path | What |
| --- | --- |
| `app/(home)` | Landing page. |
| `app/docs` | Documentation layout and pages, rendering `content/docs/**/*.mdx`. |
| `app/api/search/route.ts` | Search API (Orama, via `fumadocs-core/search/server`). |
| `app/og/docs/[...slug]/route.tsx` | Per-page OG image generation (`next/og`). |
| `app/llms.txt`, `app/llms-full.txt`, `app/llms.mdx/docs/[[...slug]]` | Plain-markdown docs for LLMs — a page index, a full dump, and one page's raw markdown, respectively. See [llmstxt.org](https://llmstxt.org). |
| `content/docs/` | All documentation content. Each subfolder has a `meta.json` controlling sidebar order/titles. |
| `lib/shared.ts` | Site-wide constants — app name, GitHub repo, giscus config. |
| `lib/layout.shared.tsx` | Shared nav/layout options (logo, GitHub link). |
| `components/search.tsx` | Custom search dialog UI, still Orama-backed. |
| `components/giscus-comments.tsx` | Per-page comments, rendered on every doc page once configured (see below). |

## Branding

Colors and the heading font are pulled directly from the engine's own brand assets:

- Primary/secondary colors are extracted from `icon.svg` (see `app/global.css`).
- The heading font is **Metal Mania** — the same font used for the "Roves" wordmark on the
  engine's own boot splash screen.
- Body text is **Space Grotesk**.

## Enabling comments (Giscus)

Comments are wired up but render nothing until two IDs are filled in:

1. Enable **Discussions** on the `roves` GitHub repo.
2. Go to [giscus.app](https://giscus.app), point it at `DRincs-Productions/roves`, pick a
   discussion category, and copy the generated `data-repo-id`/`data-category-id`.
3. Paste them into `lib/shared.ts`'s `giscusConfig`.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.vercel.app)
