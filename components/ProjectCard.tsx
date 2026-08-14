import { ProjectThumb } from "@/components/ProjectThumb";
import { LockIcon } from "@/components/SocialLinks";

type CardProps = {
  title: string;
  year: string;
  caption: string;
  alt?: string;
  accent: string;
  shape: "bars" | "rings" | "tiles" | "wave";
  locked?: boolean;
  delayMs?: number;
};

// Used on Work and Playground. Locked cards show a "Coming soon" badge.
export function ProjectCard({
  title,
  year,
  caption,
  alt,
  accent,
  shape,
  locked = false,
  delayMs = 0,
}: CardProps) {
  const media = (
    <div className="relative w-full overflow-clip rounded-[26px] transition-transform duration-300 group-hover:scale-[0.99] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
      <div className="relative isolate aspect-[678/367.625] w-full overflow-hidden rounded-[26px] bg-[#e4e4e7]">
        <ProjectThumb shape={shape} accent={accent} />
        {locked ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f4f4f5] bg-white px-3 py-[5px] text-sm font-medium tracking-[0.005em] text-[#18181b]">
              <LockIcon className="size-3.5 text-zinc-500" />
              Coming soon
            </span>
          </div>
        ) : null}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[26px] border border-zinc-100"
      />
      {/* Desktop: title + year overlay on the thumbnail */}
      <div className="absolute bottom-0 left-0 hidden p-3 md:block">
        <div className="flex items-center justify-center rounded-full border border-[#f4f4f5] bg-white px-3 pt-[5px] pb-[4.8px]">
          <p className="text-base font-medium leading-snug tracking-[0.005em] text-[#18181b]">
            <span>{title}</span>
            <span className="text-zinc-500"> • {year}</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <article
      className="project-card group flex w-full cursor-default flex-col items-start gap-3 animate-fade-up"
      style={{ animationDelay: `${delayMs}ms` }}
      aria-label={alt ?? `${title}, ${year}. ${caption}`}
    >
      {media}
      {/* Desktop caption under the card */}
      <div className="hidden w-full items-start px-[13px] py-0 -mt-1.5 md:flex">
        <p className="text-left text-base font-normal leading-snug tracking-[0.005em] text-zinc-500">
          {caption}
        </p>
      </div>
      {/* Mobile: title, year, and caption stacked below the thumbnail */}
      <div className="flex w-full flex-col items-start gap-1 px-[13px] py-0 text-base leading-snug tracking-[0.01em] md:hidden">
        <p className="text-left text-[#18181b]">
          <span>{title}</span>
          <span className="text-zinc-500"> • {year}</span>
        </p>
        <p className="w-full text-left font-normal leading-tight text-zinc-500">
          {caption}
        </p>
      </div>
    </article>
  );
}
