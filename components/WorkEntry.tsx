import Image from "next/image";
import type { ReactNode } from "react";
import { ProjectThumb } from "@/components/ProjectThumb";
import { WorkAnimatedCover } from "@/components/WorkAnimatedCover";
import { WorkDeck } from "@/components/WorkDeck";
import { WORK_OVERVIEW_MAX, type Project } from "@/lib/content";

function formatWorkDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day || 1)));
}

function clipOverview(overview: string[]) {
  return overview.join(" ").slice(0, WORK_OVERVIEW_MAX);
}

function OverviewText({
  text,
  links,
}: {
  text: string;
  links?: { label: string; href: string }[];
}) {
  if (!links?.length) return text;

  const nodes: ReactNode[] = [];
  let remaining = text;

  for (const link of links) {
    const index = remaining.indexOf(link.label);
    if (index === -1) continue;
    if (index > 0) nodes.push(remaining.slice(0, index));
    nodes.push(
      <a
        key={`${link.label}-${link.href}`}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-700"
      >
        {link.label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
    remaining = remaining.slice(index + link.label.length);
  }

  if (remaining) nodes.push(remaining);
  return nodes;
}

function coverKind(src?: string) {
  if (!src) return "none";
  const lower = src.toLowerCase();
  if (lower.endsWith(".gif")) return "gif";
  if (/\.(mp4|webm|mov)$/.test(lower)) return "video";
  return "image";
}

function WorkCover({ project }: { project: Project }) {
  if (project.deck && project.deck.length > 0) {
    return <WorkDeck slides={project.deck} label={project.title} />;
  }

  const src = project.cover?.src;
  const alt = project.cover?.alt ?? project.alt;
  const kind = coverKind(src);

  return (
    <div className="relative w-full overflow-clip rounded-[26px]">
      <div className="relative isolate aspect-video w-full overflow-hidden rounded-[26px] bg-[#e4e4e7]">
        {kind === "video" && src ? (
          <WorkAnimatedCover src={src} alt={alt} kind="video" />
        ) : kind === "gif" && src ? (
          <WorkAnimatedCover src={src} alt={alt} kind="gif" />
        ) : kind === "image" && src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 48rem, 100vw"
            quality={100}
            unoptimized
            className="object-cover"
          />
        ) : (
          <>
            <ProjectThumb shape={project.shape} accent={project.accent} />
            <span className="sr-only">{project.alt}</span>
          </>
        )}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[26px] border border-zinc-100"
      />
    </div>
  );
}

// One Work list row: date eyebrow, title, clipped overview, then the cover card.
export function WorkEntry({
  project,
  delayMs = 0,
}: {
  project: Project;
  delayMs?: number;
}) {
  const overview = clipOverview(project.overview);

  return (
    <article
      className="project-card flex w-full flex-col items-start gap-3 animate-fade-up"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <time
        dateTime={project.date}
        className="text-xs font-medium uppercase tracking-[0.08em] text-zinc-400"
      >
        {formatWorkDate(project.date)}
      </time>
      <h2 className="text-xl font-medium tracking-[0.005em] text-[#3f3f46] md:text-2xl">
        {project.titleHref ? (
          <a
            href={project.titleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-700"
          >
            {project.title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          project.title
        )}
      </h2>
      <p className="max-w-2xl text-base leading-relaxed tracking-wide text-zinc-500 md:text-lg">
        <OverviewText
          text={overview}
          links={project.overviewLinks}
        />
      </p>
      <figure className="flex w-full max-w-3xl flex-col gap-3 pt-1">
        <WorkCover project={project} />
        <figcaption className="text-center text-sm font-bold leading-snug tracking-[0.005em] text-zinc-500">
          {project.caption}
        </figcaption>
      </figure>
    </article>
  );
}
