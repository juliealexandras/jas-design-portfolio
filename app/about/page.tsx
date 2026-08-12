import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { bio, experience, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `Bio and résumé for ${site.name}, ${site.role}.`,
};

export default function AboutPage() {
  return (
    <SiteChrome tab="about">
      <div className="flex w-full flex-col gap-16 px-6 pt-8 pb-4 md:px-16 md:pt-10">
        <section
          aria-labelledby="about-heading"
          className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16"
        >
          <div
            className="aspect-[4/5] w-full overflow-hidden rounded-[26px] bg-[#e4e4e7] md:max-w-md"
            role="img"
            aria-label={`Portrait placeholder for ${site.name}`}
          >
            <svg
              viewBox="0 0 400 500"
              className="size-full"
              aria-hidden="true"
              focusable="false"
            >
              <rect width="400" height="500" fill="#e4e4e7" />
              <circle cx="200" cy="190" r="72" fill="#fff" opacity="0.55" />
              <ellipse
                cx="200"
                cy="390"
                rx="130"
                ry="110"
                fill="#fff"
                opacity="0.45"
              />
            </svg>
          </div>
          <div className="flex max-w-xl flex-col gap-4">
            <h2
              id="about-heading"
              className="text-3xl font-medium leading-normal text-zinc-700"
            >
              {bio.heading}
            </h2>
            <p className="text-lg tracking-wide text-zinc-500">
              {bio.location}
              <span className="mx-2 text-zinc-300" aria-hidden="true">
                ·
              </span>
              {bio.education}
            </p>
            {bio.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed tracking-wide text-zinc-500 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <p className="pt-2 text-base tracking-wide text-zinc-500">
              Working on something cool?{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900"
              >
                Get in touch
              </a>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="experience-heading" className="max-w-3xl">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2
              id="experience-heading"
              className="text-3xl font-medium text-zinc-600"
            >
              Experience
            </h2>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Résumé request")}`}
              className="text-base font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-800"
            >
              Email for résumé
            </a>
          </div>
          <ol className="mt-8 flex flex-col">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.dates}`}
                className="border-t border-zinc-100 py-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-medium text-[#18181b]">
                    {job.role}
                    <span className="font-normal text-zinc-500">
                      {" "}
                      · {job.company}
                    </span>
                  </h3>
                  <p className="text-base text-zinc-500">{job.dates}</p>
                </div>
                <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-zinc-500">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </SiteChrome>
  );
}
