import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        {"// "}
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
