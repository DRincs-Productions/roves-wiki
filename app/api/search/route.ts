import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

// Static export (output: 'export' in next.config.mjs) has no server to hit
// per-query, so this pre-builds the whole index at build time instead of
// serving it live — see components/search.tsx for the matching static client.
export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/open-source/supported-languages
  language: 'english',
});
