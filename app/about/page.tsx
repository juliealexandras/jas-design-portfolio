import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { aboutCta, bio, experience, showExperience, showPortrait, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `Bio for ${site.name}, ${site.role}.`,
};

export default function AboutPage() {
  return (
    <SiteChrome tab="about">
      <div className="flex w-full flex-col gap-16 pt-8 pb-4 md:pt-10">
        {/* Portrait placeholder + bio. Portrait is off while showPortrait is false. */}
        <section
          aria-label="About"
          className={`grid grid-cols-1 items-start gap-8 md:gap-16 ${
            showPortrait ? "md:grid-cols-2" : ""
          }`}
        >
          {showPortrait ? (
            <div
              className="aspect-[4/5] w-full overflow-hidden rounded-[26px] bg-zinc-900 md:max-w-md"
              role="img"
              aria-label={`Portrait placeholder for ${site.name}`}
            >
              <svg
                viewBox="0 0 400 500"
                className="size-full"
                aria-hidden="true"
                focusable="false"
              >
                <rect width="400" height="500" fill="#1c1c1f" />
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
          ) : null}
          <div className="flex w-full flex-col gap-4">
            {bio.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed tracking-wide text-zinc-400 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Hidden while showExperience is false in lib/content.ts */}
        {showExperience ? (
          <section aria-labelledby="experience-heading" className="max-w-3xl">
            <h2
              id="experience-heading"
              className="text-3xl font-medium text-zinc-300"
            >
              Experience
            </h2>
            <ol className="mt-8 flex flex-col">
              {experience.map((job) => (
                <li
                  key={`${job.company}-${job.dates}`}
                  className="border-t border-zinc-900 py-6 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-medium text-white">
                      {job.role}
                      <span className="font-normal text-zinc-400">
                        {" "}
                        · {job.company}
                      </span>
                    </h3>
                    <p className="text-base text-zinc-400">{job.dates}</p>
                  </div>
                  <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-zinc-400">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        <p className="max-w-2xl text-base leading-relaxed tracking-wide text-zinc-400 md:text-lg">
          {aboutCta.before}
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-white"
          >
            {aboutCta.link}
          </a>
          {aboutCta.after}
        </p>
      </div>
    </SiteChrome>
  );
}
