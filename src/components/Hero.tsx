"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(249,156,0,0.08), transparent 70%)`,
        }}
      />
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-2 font-mono text-sm text-accent"
          >
            {"// who i am"}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            {profile.name}
            <span className="block text-muted">,</span>
            <span className="block bg-gradient-to-r from-accent-bright via-accent to-accent-dim bg-clip-text text-transparent">
              {profile.role}.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-semibold text-background transition-all hover:glow-accent"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-mono text-sm text-foreground transition-all hover:border-accent hover:text-accent"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
