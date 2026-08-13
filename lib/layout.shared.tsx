import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import LogoImg from '@/app/icon.png';
import { appName, githubUrl } from '@/lib/shared';

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
    links: [],
  };
}
