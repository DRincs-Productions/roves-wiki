import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '@/app/icon.png';
import { DiscordIcon } from '@/components/ui/icons';
import { PlatformDownloadButton } from '@/components/platform-download-button';
import { discordUrl, tagline } from '@/lib/shared';

const features = [
  {
    title: 'Single native binary',
    description: 'Ship one native binary to every desktop platform — Windows, macOS, and Linux.',
  },
  {
    title: 'Consistent everywhere',
    description:
      "The engine is baked directly into it instead of relying on the OS's own webview the way Tauri does, so your game looks and behaves exactly the same no matter where it runs.",
  },
  {
    title: 'Built on Servo',
    description:
      'Roves embeds Servo, stripped down into an embedded, modular engine built strictly to run games — not a general-purpose browser like Chromium.',
  },
  {
    title: 'Simple JS bridge',
    description: "With @drincs/roves-api, access Roves' native features directly from JS in your game.",
  },
  {
    title: 'Steam integration',
    description:
      'An opt-in, built-in Steamworks wrapper — achievements, stats, DLC, overlay, store — via @drincs/roves-api/steam. Zero overhead when left out of the build.',
  },
  {
    title: '🚧 Console support',
    description:
      "Thanks to Rust's portability, console targets (Switch, PlayStation, Xbox) are on the roadmap — in active development, not shipped yet.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-16 text-center">
      <Image src={LogoImg} alt="" width={160} height={160} priority />
      <h1 className="font-heading mt-6 text-5xl text-fd-foreground sm:text-6xl">Roves</h1>
      <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">{tagline}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/docs"
          className="rounded-md bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground transition-colors hover:opacity-90"
        >
          Get Started
        </Link>
        <a
          href={discordUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 rounded-md border border-transparent bg-[#5865F2] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#4752C4] hover:shadow-[0_0_20px_-4px_#5865F2]"
        >
          <DiscordIcon className="size-4" />
          Discord
        </a>
      </div>

      <Image
        src="/packmaster2.png"
        alt="Packmaster, the desktop GUI for packaging your game with Roves"
        width={1010}
        height={645}
        className="mt-12 w-full max-w-2xl rounded-lg border border-fd-border"
      />

      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3">
        <PlatformDownloadButton platform="windows" />
        <PlatformDownloadButton platform="macos" />
        <PlatformDownloadButton platform="linux" />
        <Link
          href="/docs/action"
          className="not-prose inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 px-4 py-2.5 text-sm font-medium text-fd-secondary-foreground no-underline transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <Github className="size-5" />
          GitHub Action (CI/CD)
        </Link>
      </div>

      <div className="mt-16 grid w-full max-w-4xl gap-6 text-left sm:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-lg border border-fd-border p-5">
            <h2 className="font-heading text-lg text-fd-foreground">{feature.title}</h2>
            <p className="mt-2 text-sm text-fd-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
