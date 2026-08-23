import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'takumi-js/response';
import { notFound } from 'next/navigation';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

// Same brand font used for the "Roves" wordmark on the engine's own boot
// splash, and for headings across this wiki (see app/layout.tsx) — reused
// here so the OG image's title matches. A copy lives in ./fonts rather than
// being read from the main engine repo's own resources/fonts: this route
// needs a real font file (not next/font's CSS-based loading, since takumi-js
// renders images server-side), and roves-wiki must build standalone, without
// a sibling checkout of the engine repo (e.g. in CI, or any other clone).
const metalManiaPath = join(process.cwd(), 'fonts', 'MetalMania-Regular.ttf');

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  // The last segment is always the literal "image.png" (see
  // `generateStaticParams` below) — drop it to get back the real doc slug.
  const pageSlug = slug.slice(0, -1);
  const page = source.getPage(pageSlug);
  if (!page) notFound();

  const [icon, metalMania] = await Promise.all([
    readFile(join(process.cwd(), 'app', 'icon.png')),
    readFile(metalManiaPath),
  ]);
  const iconSrc = `data:image/png;base64,${icon.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        backgroundColor: '#000000',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconSrc} width={72} height={72} alt="" />
        <span style={{ fontSize: 32, color: '#f20e0d', fontWeight: 700, letterSpacing: 2 }}>ROVES</span>
      </div>
      <div
        style={{
          fontFamily: 'Metal Mania',
          fontSize: 64,
          color: '#fefefe',
          lineHeight: 1.15,
          maxWidth: 900,
        }}
      >
        {page.data.title}
      </div>
      {page.data.description ? (
        <div style={{ fontSize: 28, color: '#a56324', marginTop: 24, maxWidth: 900 }}>
          {page.data.description}
        </div>
      ) : null}
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Metal Mania', data: metalMania, weight: 400, style: 'normal' }],
    },
  );
}

export function generateStaticParams() {
  return source.generateParams().map(({ slug }) => ({
    slug: [...(slug ?? []), 'image.png'],
  }));
}
