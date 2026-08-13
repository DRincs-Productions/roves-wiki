import type { Metadata } from 'next';
import { appName, githubUrl } from '@/lib/shared';

export function createMetadata(props: Metadata, slug?: string[]): Metadata {
  const slugPath = slug && slug.length > 0 ? `/${slug.join('/')}` : '';
  const image = `/og/docs${slugPath}/image.png`;

  return {
    ...props,
    metadataBase: undefined,
    openGraph: {
      title: props.title ?? appName,
      description: props.description ?? undefined,
      images: image,
      siteName: `${appName} Docs`,
      type: 'website',
      url: githubUrl,
      ...props.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: props.title ?? undefined,
      description: props.description ?? undefined,
      images: image,
      ...props.twitter,
    },
  };
}
