import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
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
