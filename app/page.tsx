import { WorkEntry } from "@/components/WorkEntry";
import { SiteChrome } from "@/components/SiteChrome";
import { getWorkProjects, workIntro } from "@/lib/content";

// Work page — one-column list, newest first
export default function Home() {
  const projects = getWorkProjects();

  return (
    <SiteChrome tab="work">
      <div className="w-full px-6 pt-6 md:px-16 md:pt-8">
        <p className="w-full text-base tracking-wide text-zinc-500 md:text-lg">
          {workIntro}
        </p>
      </div>
      <div className="flex w-full flex-col px-6 py-6 md:px-16 md:pt-8 md:pb-2">
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className={i === 0 ? "pb-12 md:pb-16" : "border-t border-zinc-100 py-12 md:py-16"}
          >
            <WorkEntry project={project} delayMs={i * 60} />
          </div>
        ))}
      </div>
    </SiteChrome>
  );
}
