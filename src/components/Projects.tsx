import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { GithubIcon } from "./icons";
import { projects, repoImage, projectSlug, type Project } from "@/data/portfolio";

const statusDot: Record<Project["status"], string> = {
  live: "bg-emerald-500",
  "in-development": "bg-amber-400",
  completed: "bg-zinc-400",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={0.05}>
      <article className="group grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-surface/60 p-6 shadow-2xl transition-all duration-500 hover:border-accent/40 md:p-8 lg:grid-cols-12 lg:gap-12">
        {/* screenshot */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black shadow-inner lg:col-span-7">
          <Image
            src={repoImage(project.repoUrl)}
            alt={project.title}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-3 py-1 font-mono text-[11px] text-accent backdrop-blur-md">
            <span className={`h-2 w-2 rounded-full ${statusDot[project.status]}`} />
            {project.status}
          </div>
        </div>

        {/* content */}
        <div className="flex h-full flex-col justify-between py-2 lg:col-span-5">
          <div>
            <span className="mb-2 block font-mono text-xs font-medium uppercase tracking-widest text-accent">
              {project.category}
            </span>
            <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-3xl">
              {project.title}
            </h3>
            <p className="mb-6 text-sm font-normal leading-relaxed text-zinc-300">
              {project.description}
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-wide text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-border pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-background transition-all duration-300 hover:bg-accent-bright active:scale-95"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <Link
              href={`/projects/${projectSlug(project.repoUrl)}`}
              className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-95 ${
                project.liveUrl
                  ? ""
                  : "border-transparent bg-accent text-background hover:bg-accent-bright hover:text-background"
              }`}
            >
              Case Study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full border-t border-border bg-surface/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* header */}
        <Reveal className="mb-16 flex flex-col justify-between gap-6 border-b border-border pb-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {"// selected works"}
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-zinc-400">
            Real-world applications and projects built with performance,
            scalability and clean code — straight from my GitHub.
          </p>
        </Reveal>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-16 text-center md:mt-20">
          <a
            href="https://github.com/Zeyadd106?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 font-mono text-sm text-foreground transition-all hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            View All Repositories
          </a>
        </Reveal>
      </div>
    </section>
  );
}
