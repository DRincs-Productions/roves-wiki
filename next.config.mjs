import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // This repo already has its own CLAUDE.md conventions (see the sibling repos) --
  // Next.js's own auto-generated AGENTS.md/CLAUDE.md (framework-internal advice, unrelated
  // to Roves) would collide with and clutter that.
  agentRules: false,
};

export default withMDX(config);
