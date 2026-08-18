import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteChrome } from "@/components/SiteChrome";
import { isTabVisible, playground, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Playground",
  description: `Experimental work by ${site.name} — not public yet.`,
};

// Experiments grid — cards are locked until work is public
export default function PlaygroundPage() {
  if (!isTabVisible("playground")) notFound();

  return (
    <SiteChrome tab="playground">
      <div className="w-full px-6 pt-6 md:px-16 md:pt-8">
        <p className="max-w-xl text-base tracking-wide text-zinc-500 md:text-lg">
          A few experiments that aren&apos;t public yet. Check back soon.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 px-6 py-6 md:grid-cols-2 md:gap-6 md:px-16 md:pt-6 md:pb-2">
        {playground.map((item, i) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            year={item.year}
            caption={item.note}
            accent="#d4d4d8"
            shape={item.shape}
            locked
            delayMs={i * 60}
          />
        ))}
      </div>
    </SiteChrome>
  );
}
