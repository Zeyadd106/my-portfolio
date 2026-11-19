import Image from "next/image";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

const highlights = [
  {
    value: "9+",
    label: "Projects Built & Deployed",
    accent: true,
  },
  {
    value: "3+",
    label: "Years of Coding Experience",
    accent: false,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden border-t border-border bg-surface/30 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* header */}
        <Reveal className="mb-16 md:mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black uppercase leading-none tracking-tight text-foreground md:text-7xl">
            ABOUT <span className="text-zinc-700">ME</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* text column */}
          <div className="order-2 flex flex-col gap-6 text-sm font-light leading-relaxed tracking-wide text-zinc-400 md:text-base lg:order-1 lg:col-span-4">
            <Reveal>
              <p className="text-lg font-semibold uppercase leading-tight text-foreground">
                I bridge the gap between computer science fundamentals and
                modern web craftsmanship.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I&apos;m {profile.name}, a Computer Science student and
                developer based in {profile.location}. I build, debug and
                deploy web applications — from pixel-perfect interfaces to
                full-stack systems.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                I mainly work with React, Next.js and TypeScript, with an
                interest in Python, Laravel and machine learning.
              </p>
            </Reveal>
          </div>

          {/* portrait */}
          <Reveal
            delay={0.1}
            className="order-1 lg:order-2 lg:col-span-4"
          >
            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* highlights column */}
          <div className="order-3 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4 lg:pl-6">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={0.15 + i * 0.1}>
                <span
                  className={`mb-3 block text-5xl font-black tracking-tighter md:text-6xl ${
                    h.accent ? "text-accent" : "text-foreground"
                  }`}
                >
                  {h.value}
                </span>
                <span className="block font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-zinc-500">
                  {h.label}
                </span>
              </Reveal>
            ))}

            <Reveal delay={0.35} className="col-span-1 border-t border-border pt-8 sm:col-span-2">
              <div className="mb-2 flex items-center gap-2 font-mono text-xs text-foreground">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span>ECOSYSTEM FOCUS</span>
              </div>
              <p className="text-sm font-light leading-relaxed text-zinc-400">
                Feature-based architecture, responsive UI systems, and
                AI-assisted development workflows.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
