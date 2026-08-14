import { ProjectCard } from "@/components/ProjectCard";
import { SiteChrome } from "@/components/SiteChrome";
import { projects, workIntro } from "@/lib/content";

// Work page — intro + two-column grid of project cards
export default function Home() {
  return (
    <SiteChrome tab="work">
      <div className="w-full px-6 pt-6 md:px-16 md:pt-8">
        <p className="w-full text-base tracking-wide text-zinc-500 md:text-lg">
          {workIntro}
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 px-6 py-6 md:grid-cols-2 md:gap-6 md:px-16 md:pt-6 md:pb-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            year={project.year}
            caption={project.caption}
            alt={project.alt}
            accent={project.accent}
            shape={project.shape}
            delayMs={i * 60}
          />
        ))}
      </div>
    </SiteChrome>
  );
}
