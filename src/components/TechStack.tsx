"use client";

import { useRef } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPhp,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiLaravel,
  SiGithub,
  SiVercel,
  SiJupyter,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import {
  Layers,
  MonitorSmartphone,
  Palette,
  Brain,
  Globe,
  Sparkles,
  Code,
} from "lucide-react";
import { marqueeItems, techGroups, focusAreas } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type TechIcon = React.ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;

const iconMap: Record<string, { icon: TechIcon; color: string }> = {
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  Python: { icon: SiPython, color: "#3776AB" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  "Next.js": { icon: SiNextdotjs, color: "#fafafa" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { icon: SiFramer, color: "#F05032" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  "Git / GitHub": { icon: SiGithub, color: "#fafafa" },
  Vercel: { icon: SiVercel, color: "#fafafa" },
  "VS Code": { icon: Code, color: "#0098FF" },
  Jupyter: { icon: SiJupyter, color: "#F37726" },
  "REST APIs": { icon: SiPostman, color: "#FF6C37" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
};

const focusIcons = [Layers, MonitorSmartphone, Palette, Brain, Globe];

function TechTile({ name, index }: { name: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const meta = iconMap[name] ?? { icon: Sparkles, color: "#f99c00" };
  const Icon = meta.icon;

  const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const r = card.getBoundingClientRect();
    glow.style.background = `radial-gradient(240px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(249,156,0,0.12), transparent 70%)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      ref={cardRef}
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] p-5 transition-colors duration-300 hover:border-accent/40"
    >
      {/* cursor spotlight */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative">
        <div className="w-fit rounded-xl border border-border bg-background p-3 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent">
          <Icon className="h-7 w-7" style={{ color: meta.color }} />
        </div>
      </div>

      <h4 className="relative mt-4 text-sm font-semibold">{name}</h4>
    </motion.div>
  );
}

export default function TechStack() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section id="tech-stack" className="relative overflow-hidden py-24 md:py-36">
      {/* marquee */}
      <div className="relative mb-20 border-y border-border bg-surface/40 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {doubled.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.2em] text-muted"
              >
                {item}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="tech stack"
          title="Tools I Build With"
          description="A pragmatic toolkit chosen for performance, developer experience and scalability — with honest proficiency levels."
        />

        <div className="grid gap-10 lg:grid-cols-3">
          {techGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-surface/60 p-7 backdrop-blur-sm md:p-8">
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-mono text-xs text-accent">
                    0{gi + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                    {group.title}
                  </h3>
                  <span className="ml-auto h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {group.items.map((item, i) => (
                    <TechTile
                      key={item}
                      name={item}
                      index={gi * 6 + i}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* focus areas */}
        <Reveal delay={0.15} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              focus areas
            </span>
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i % focusIcons.length];
              return (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-muted transition-all duration-300 hover:border-accent/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-125" />
                  {area}
                </motion.span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
