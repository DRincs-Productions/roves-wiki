import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import LogoImg from '@/app/icon.png';
import { DiscordIcon, KofiIcon } from '@/components/ui/icons';
import { appName, discordUrl, githubUrl, kofiUrl } from '@/lib/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src={LogoImg} alt="" width={24} height={24} className="mr-2" />
          <span className="font-heading text-lg">{appName}</span>
        </>
      ),
    },
    githubUrl,
    links: [
      {
        type: 'icon',
        label: 'Discord',
        icon: <DiscordIcon className="size-5" />,
        text: 'Discord',
        url: discordUrl,
      },
      {
        type: 'icon',
        label: 'Ko-fi',
        icon: <KofiIcon className="h-5 w-auto" />,
        text: 'Ko-fi',
        url: kofiUrl,
      },
    ],
  };
}
