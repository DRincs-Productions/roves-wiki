import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metal_Mania, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import SearchDialog from '@/components/search';

// Falls back to localhost in dev; set NEXT_PUBLIC_SITE_URL once this is
// deployed to a real domain so OG/Twitter image URLs resolve correctly.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
};

// Body text: Space Grotesk — a modern, slightly technical geometric sans,
// distinct from pixi-vn.wiki's Manrope, chosen to sit well next to a metal
// display face without competing with it.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
});

// Headings only: Metal Mania, a hand-inked metal/rock display face — the
// same font already used for the "Roves" wordmark on the engine's own boot
// splash (see ../resources/fonts in the main repo), reused here for brand
// consistency between the engine and its docs.
const metalMania = Metal_Mania({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${metalMania.variable} ${spaceGrotesk.className}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog }}>{children}</RootProvider>
      </body>
    </html>
  );
}
