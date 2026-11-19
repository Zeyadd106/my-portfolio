"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/data/portfolio";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative overflow-hidden px-6 py-12 text-center transition-colors hover:bg-surface md:py-16"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
              {s.label}
            </p>
            {s.note && (
              <p className="mt-2 text-xs leading-relaxed text-muted/70">
                {s.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
