import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { projects, repoImage, projectSlug } from "@/data/portfolio";

function findProject(slug: string) {
  return projects.find((p) => projectSlug(p.repoUrl) === slug);
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p.repoUrl) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  return { title: project ? `${project.title} — Case Study` : "Project" };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full bg-background px-6 pb-24 pt-32 text-foreground md:px-12">
        <div className="mx-auto max-w-5xl">
          {/* back */}
          <Reveal>
            <Link
              href="/#projects"
              className="group mb-16 flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
              <span className="transition-transform group-hover:-translate-x-1">
                BACK TO PORTFOLIO
              </span>
            </Link>
          </Reveal>

          {/* header */}
          <Reveal className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {project.category}
            </span>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-black uppercase tracking-tight md:text-6xl">
              {project.title}
            </h1>
          </Reveal>

          {/* hero image */}
          <Reveal className="mb-16 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
            <Image
              src={repoImage(project.repoUrl)}
              alt={project.title}
              width={1280}
              height={720}
              unoptimized
              className="h-full w-full object-contain object-top"
            />
          </Reveal>

          {/* body grid */}
          <div className="mb-20 grid grid-cols-1 gap-12 border-t border-border pt-12 lg:grid-cols-12">
            {/* sidebar */}
            <Reveal className="flex flex-col gap-8 lg:col-span-4">
              <div>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                  Architecture Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border bg-surface/60 px-2.5 py-1.5 font-mono text-[10px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                    Production Deployment
                  </h4>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2.5 font-mono text-xs font-bold uppercase text-accent transition-all hover:border-accent hover:bg-accent hover:text-background"
                  >
                    <span>Launch Live App</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </Reveal>

            {/* content */}
            <div className="flex flex-col gap-8 lg:col-span-8">
              <Reveal>
                <h3 className="mb-4 font-mono text-lg font-bold uppercase tracking-wide text-zinc-200">
                  Executive Context &amp; Purpose
                </h3>
                <p className="text-base font-light leading-relaxed tracking-wide text-zinc-400">
                  {project.whyBuilt}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h3 className="mb-4 font-mono text-lg font-bold uppercase tracking-wide text-zinc-200">
                  Engineering Implementation Details
                </h3>
                <p className="text-base font-light leading-relaxed tracking-wide text-zinc-400">
                  {project.description} This layer required clean component
                  structure, responsive layout constraints and performance-aware
                  asset delivery to sustain a smooth user experience across
                  devices.
                </p>
              </Reveal>
            </div>
          </div>

          {/* source link */}
          <Reveal className="border-t border-border pt-8">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
            >
              View source code on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
