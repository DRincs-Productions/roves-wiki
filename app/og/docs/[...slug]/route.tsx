import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  // The last segment is always the literal "image.png" (see
  // `generateStaticParams` below) — drop it to get back the real doc slug.
  const pageSlug = slug.slice(0, -1);
  const page = source.getPage(pageSlug);
  if (!page) notFound();

  const iconPath = join(process.cwd(), 'app', 'icon.png');
  const icon = await readFile(iconPath);
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
        backgroundColor: '#0a0909',
        backgroundImage: 'linear-gradient(135deg, #2a0605 0%, #0a0909 60%)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconSrc} width={72} height={72} alt="" />
        <span style={{ fontSize: 32, color: '#f20e0d', fontWeight: 700, letterSpacing: 2 }}>ROVES</span>
      </div>
      <div style={{ fontSize: 64, color: '#fefefe', fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
        {page.data.title}
      </div>
      {page.data.description ? (
        <div style={{ fontSize: 28, color: '#a56324', marginTop: 24, maxWidth: 900 }}>
          {page.data.description}
        </div>
      ) : null}
    </div>,
    { width: 1200, height: 630 },
  );
}

export function generateStaticParams() {
  return source.generateParams().map(({ slug }) => ({
    slug: [...(slug ?? []), 'image.png'],
  }));
}
