import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Fully static site -- deployed as plain files to Cloudflare Pages
  // (.github/workflows/deploy.yml), no Node server involved. Every route here
  // is already static/SSG (generateStaticParams) except /api/search, which
  // uses fumadocs' staticGET (see that route + components/search.tsx) instead
  // of a live per-query server route.
  output: 'export',
  images: {
    // The Image Optimization API needs a server, which a static export doesn't have.
    unoptimized: true,
  },
  // takumi-js ships a native (napi) addon for OG image rendering (app/og/docs) --
  // bundling it breaks Turbopack ("non-ecmascript placeable asset"), so it needs to stay
  // external and be loaded via plain require() at runtime instead.
  serverExternalPackages: ['takumi-js'],
  // This repo already has its own CLAUDE.md conventions (see the sibling repos) --
  // Next.js's own auto-generated AGENTS.md/CLAUDE.md (framework-internal advice, unrelated
  // to Roves) would collide with and clutter that.
  agentRules: false,
};

export default withMDX(config);
