import Link from "next/link";
import { Monogram } from "@/components/Monogram";
import { SocialLinks } from "@/components/SocialLinks";
import { nav, site, type TabId } from "@/lib/content";

// Intro under the logo. About uses a shorter tagline; Work and Playground
// share the main tagline.
function Hero({ tab }: { tab: TabId }) {
  if (tab === "about") {
    return (
      <div className="flex w-full flex-col items-start px-6 pb-2 pt-20 md:h-[176px] md:px-16 md:pb-6 md:pt-14">
        <h1 className="w-full text-4xl font-medium leading-normal tracking-[0.0125em] text-[#3f3f46]">
          {site.name.toLowerCase()}
        </h1>
        <p className="mt-1 w-full whitespace-pre-line text-base font-normal tracking-wide text-zinc-500 md:text-lg">
          {site.aboutTagline}
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-start px-6 pb-2 pt-20 md:h-[176px] md:px-16 md:pb-6 md:pt-14">
      <h1 className="w-full text-4xl font-medium leading-normal tracking-[0.0125em] text-[#3f3f46]">
        {site.name.toLowerCase()}
      </h1>
      <div className="mt-1 w-full text-base font-normal tracking-wide text-zinc-500 md:max-w-3xl md:text-lg">
        <p>{site.tagline}</p>
      </div>
    </div>
  );
}

// Work / About / Playground pill navigation
function TabNav({ tab }: { tab: TabId }) {
  return (
    <nav
      className="flex w-full flex-col items-start px-6 pt-4 pb-0 md:px-16"
      aria-label="Primary"
    >
      <ul className="flex items-start gap-1">
        {nav.map((item) => {
          const active = item.id === tab;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="group relative z-10 flex cursor-pointer items-center justify-center rounded-full border border-transparent px-3.5 pt-[5px] pb-[4px]"
              >
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full border border-white/50 bg-zinc-200/60 shadow-[var(--shadow-glass)] md:backdrop-blur-md"
                  />
                ) : null}
                <span
                  className={`relative z-10 shrink-0 text-lg font-medium tracking-[0.005em] text-nowrap transition-colors duration-200 ease-out ${
                    active
                      ? "text-[#52525b]"
                      : "text-zinc-500 group-hover:text-[#52525b]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// Shared shell: skip link, header, tabs, page content, footer
export function SiteChrome({
  children,
  tab,
}: {
  children: React.ReactNode;
  tab: TabId;
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-white">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="relative w-full shrink-0">
        <div className="flex w-full items-start justify-between px-6 pt-8 pb-4 md:px-16 md:pb-8">
          <Link
            href="/"
            className="group relative -m-2 inline-block shrink-0 rounded-xl p-2 transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100"
            aria-label={`${site.name} — home`}
          >
            <Monogram className="block size-8 md:size-11" />
          </Link>
          <SocialLinks />
        </div>
        <Hero tab={tab} />
      </header>

      <div className="flex w-full shrink-0 flex-col items-center pt-0 pb-2 md:pb-4">
        <TabNav tab={tab} />
        <div className="w-full px-6 pt-3 md:px-16">
          <div className="h-px w-full bg-zinc-100" />
        </div>
      </div>

      <main id="main" className="w-full flex-1">
        {children}
      </main>

      <footer className="mt-auto w-full px-6 pt-16 pb-10 md:px-16 md:pt-24 md:pb-12">
        <div className="h-px w-full bg-zinc-100" />
        <div className="flex flex-col items-start gap-4 pt-10 md:flex-row md:items-end md:justify-between">
          <SocialLinks compact />
        </div>
        <p className="mt-8 text-sm text-zinc-500">
          Designed by a human and engineered with Next.js + Cursor + Claude.
        </p>
        <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-700"
          >
            Change Log {site.changelogDate}
          </a>
        </p>
      </footer>
    </div>
  );
}
