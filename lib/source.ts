import { docs } from 'collections/server';
import { loader, type InferPageType } from 'fumadocs-core/source';
import { docsContentRoute } from './shared';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

// Used by app/llms.mdx/docs/[[...slug]]/route.ts to point at a page's raw markdown.
export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

// Used by app/llms.txt, app/llms-full.txt, and app/llms.mdx to render a page as
// plain markdown for LLM consumption — see https://llmstxt.org.
export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}
