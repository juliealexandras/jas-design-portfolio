import Link from "next/link";
import { Wordmark } from "@/components/Monogram";
import { SocialLinks } from "@/components/SocialLinks";
import { nav, site, type TabId } from "@/lib/content";

// Intro under the logo. About uses a shorter tagline; Work, Notes, and
// Playground share the main tagline.
function Hero({ tab }: { tab: TabId }) {
  const tagline = tab === "about" ? site.aboutTagline : site.tagline;

  return (
    <div className="flex w-full flex-col items-start gap-3 pb-2 pt-2 md:pb-4">
      <Link
        href="/"
        className="group -m-2 inline-block rounded-xl p-2 transition-transform duration-200 ease-out hover:scale-[1.01] active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:scale-100"
        aria-label={`${site.name} — home`}
      >
        <Wordmark className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]" />
      </Link>
      <p className="max-w-2xl whitespace-pre-line text-base font-normal tracking-wide text-zinc-400 md:text-lg">
        {tagline}
      </p>
    </div>
  );
}

// Right-hand sidebar: page nav, then social links. Sticky on desktop so it
// stays in view while the feed below it scrolls; a plain stacked block on
// mobile, shown above the main content.
function Sidebar({ tab }: { tab: TabId }) {
  return (
    <aside className="order-1 flex w-full shrink-0 flex-row flex-wrap items-start justify-start gap-x-8 gap-y-4 pb-8 pt-8 md:order-2 md:sticky md:top-10 md:w-36 md:flex-col md:items-end md:gap-y-6 md:pb-0 md:pt-10 lg:w-44">
      <nav aria-label="Primary">
        <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 md:flex-col md:items-end md:gap-y-3">
          {nav
            .filter((item) => !item.hidden)
            .map((item) => {
              const active = item.id === tab;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-lg tracking-[0.005em] transition-colors duration-200 ease-out md:text-xl ${
                      active
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <SocialLinks variant="sidebar" />
    </aside>
  );
}

// Shared shell: skip link, header, sidebar nav, page content, footer
export function SiteChrome({
  children,
  tab,
}: {
  children: React.ReactNode;
  tab: TabId;
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-black">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="flex w-full max-w-6xl flex-1 flex-col px-6 md:flex-row md:items-start md:gap-12 md:px-16">
        <Sidebar tab={tab} />

        <div className="order-2 flex min-w-0 flex-1 flex-col md:order-1">
          <header className="w-full shrink-0 pt-10 md:pt-16">
            <Hero tab={tab} />
          </header>

          <div className="w-full pt-3 md:pt-6">
            <div className="h-px w-full bg-zinc-900" />
          </div>

          <main id="main" className="w-full flex-1">
            {children}
          </main>

          <footer className="mt-auto w-full pt-16 pb-10 md:pt-24 md:pb-12">
            <div className="h-px w-full bg-zinc-900" />
            <p className="mt-8 text-sm text-zinc-500">
              Designed by a human and engineered with Next.js + Cursor + Claude.
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
              <a
                href={site.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-300"
              >
                Change Log {site.changelogDate}
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
