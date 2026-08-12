import { ProjectCard } from "@/components/ProjectCard";
import { SiteChrome } from "@/components/SiteChrome";
import { projects } from "@/lib/content";

export default function Home() {
  return (
    <SiteChrome tab="work">
      <div className="grid w-full grid-cols-1 gap-8 px-6 py-4 md:grid-cols-2 md:gap-6 md:px-16 md:pt-2.5 md:pb-2">
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
