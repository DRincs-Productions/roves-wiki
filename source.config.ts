import { remarkDirectiveAdmonition } from 'fumadocs-core/mdx-plugins';
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import remarkDirective from 'remark-directive';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
    // Needed by getText('processed') — see lib/source.ts's getLLMText, used by
    // app/llms.txt, app/llms-full.txt, and app/llms.mdx.
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkDirective, remarkDirectiveAdmonition],
  },
});
