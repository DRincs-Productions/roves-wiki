import { Heart } from 'lucide-react';
import Image from 'next/image';
import { KofiLogo } from '@/components/ui/icons';
import { fetchAllContributors } from '@/lib/get-contributors';
import { contributorRepos, gitConfig, kofiUrl } from '@/lib/shared';

export async function Contributing() {
  const contributors = await fetchAllContributors(gitConfig.user, contributorRepos);
  if (contributors.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center overflow-hidden px-4 py-16 text-center">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.10]"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-brand-secondary) 0%, transparent 70%)',
        }}
      />
      <Heart fill="currentColor" className="mb-4 text-pink-500 animate-roves-float" />
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">Made Possible by You.</h2>
      <p className="mb-4 text-fd-muted-foreground">
        Roves is 100% powered by passion and open source community.
      </p>
      <div className="mb-8 flex flex-row items-center gap-2">
        <a href={kofiUrl} target="_blank" rel="noreferrer noopener" aria-label="Ko-fi">
          <KofiLogo className="h-10 w-auto" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-sm font-medium text-fd-muted-foreground">Contributors</h3>
        <div className="flex flex-row flex-wrap items-center justify-center md:pe-3">
          {contributors.map((contributor, i) => (
            <a
              key={contributor.login}
              href={`https://github.com/${contributor.login}`}
              rel="noreferrer noopener"
              target="_blank"
              title={contributor.login}
              className="size-10 overflow-hidden rounded-full border-2 border-fd-background bg-fd-background transition-transform duration-200 hover:z-50 hover:scale-125 md:-mr-3 md:size-12"
              style={{ zIndex: contributors.length - i }}
            >
              <Image
                src={contributor.avatar_url}
                alt={`${contributor.login}'s avatar`}
                unoptimized
                width={48}
                height={48}
                loading="lazy"
                className="size-full"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
