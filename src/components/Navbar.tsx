"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Index", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.04] bg-background/60 py-4 backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#top"
          className="group text-xl font-black uppercase tracking-widest text-foreground"
        >
          ZM
          <span className="text-accent transition-all duration-300 group-hover:pl-1">
            .
          </span>
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-2 font-mono text-xs uppercase tracking-[0.3em] text-muted transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground transition hover:opacity-70 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile overlay */}
      <div
        className={`fixed inset-x-0 top-[73px] flex h-[calc(100vh-73px)] w-full flex-col justify-center border-t border-white/[0.04] bg-background/95 px-12 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-display)] text-4xl text-foreground transition-colors duration-300 hover:text-accent"
              style={{ transitionDelay: `${75 * i}ms` }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
