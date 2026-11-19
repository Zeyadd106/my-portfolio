"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.includes("@"))
      errs.email = "Provide a valid email address.";
    if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const subject = encodeURIComponent(`Portfolio Inquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full border-b border-white/10 bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors";

  const labelCls =
    "mb-1 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted";

  const errorCls = "font-mono text-[10px] tracking-wide text-red-400";

  return (
    <section
      id="contact"
      className="relative w-full border-t border-white/[0.03] bg-background px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <Reveal className="mb-16 md:mb-24">
          <span className="mb-4 block font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-accent">
            {"// collaboration portal"}
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-foreground md:text-6xl">
            Let&apos;s Work Together
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* channels */}
          <Reveal className="flex flex-col gap-12 lg:col-span-5">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted">
                Direct Channels
              </h3>
              <a
                href={`mailto:${profile.email}`}
                className="mb-2 block break-all font-[family-name:var(--font-display)] text-xl text-foreground transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted">
                Digital Presence
              </h3>
              <div className="flex flex-col items-center gap-3 text-sm font-medium tracking-wider lg:items-start">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-foreground transition-colors hover:text-accent"
                >
                  <span>LinkedIn</span>
                  <LinkedinIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-foreground transition-colors hover:text-accent"
                >
                  <span>GitHub</span>
                  <GithubIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 rounded-2xl border border-white/[0.03] bg-surface/40 p-8 md:p-12"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelCls}>
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g., Zeyad Mohamed..."
                  value={form.name}
                  onChange={set("name")}
                  className={inputCls}
                />
                {errors.name && <span className={errorCls}>{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelCls}>
                  Secure Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g., alex@company.com"
                  value={form.email}
                  onChange={set("email")}
                  className={inputCls}
                />
                {errors.email && (
                  <span className={errorCls}>{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={labelCls}>
                  Project Brief or Ecosystem Scope
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe the project scope or opportunity..."
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputCls} resize-none leading-relaxed`}
                />
                {errors.message && (
                  <span className={errorCls}>{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="group flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-foreground py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-accent active:scale-[0.98]"
              >
                <span>Send</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
