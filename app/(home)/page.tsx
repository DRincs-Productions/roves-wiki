import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '@/app/icon.png';
import { githubUrl, tagline } from '@/lib/shared';

const features = [
  {
    title: 'No Tauri required',
    description: 'A single native binary — play.exe, Roves.app, or play — with your web content baked in.',
  },
  {
    title: 'Built on Servo',
    description: "A modern, from-scratch web engine, not a repurposed browser. See servo.org for engine internals.",
  },
  {
    title: 'Small JS bridge',
    description: '@drincs/roves-api gives your game window/process/Steam/cache access — no runtime injection required.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-16 text-center">
      <Image src={LogoImg} alt="" width={96} height={96} priority />
      <h1 className="font-heading mt-6 text-5xl text-fd-foreground sm:text-6xl">Roves</h1>
      <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">{tagline}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/docs"
          className="rounded-md bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground transition-colors hover:opacity-90"
        >
          Get Started
        </Link>
        <Link
          href={githubUrl}
          className="rounded-md border border-fd-border px-5 py-2.5 font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
        >
          GitHub
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
