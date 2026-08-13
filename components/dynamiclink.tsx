import Link, { type LinkProps } from 'next/link';
import type { ReactNode } from 'react';

// Unlike pixi-vn.wiki's version, this has no locale prefix to rewrite —
// this site has no i18n — so it's a plain `next/link` passthrough, kept as
// its own component only so MDX content can use `<DynamicLink>` uniformly
// without caring whether a given deployment ever grows i18n later.
export default function DynamicLink({ children, ...props }: LinkProps & { children?: ReactNode }) {
  return <Link {...props}>{children}</Link>;
}
