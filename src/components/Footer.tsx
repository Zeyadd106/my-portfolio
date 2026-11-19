"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

const socials = [
  {
    name: "LinkedIn",
    href: profile.linkedin,
    icon: <LinkedinIcon className="h-4 w-4" />,
  },
  {
    name: "GitHub",
    href: profile.github,
    icon: <GithubIcon className="h-4 w-4" />,
  },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full border-t border-white/[0.03] bg-background px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-center font-mono text-[11px] tracking-wider text-muted md:text-left">
          © 2026 {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.03] bg-white/[0.01] text-muted transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.02] hover:text-accent"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {s.icon}
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-accent/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <button
          onClick={scrollTop}
          className="group flex cursor-pointer items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
        >
          <span>Back to Top</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 group-hover:-translate-y-0.5">
            <ArrowUp size={12} />
          </span>
        </button>
      </div>
    </footer>
  );
}
