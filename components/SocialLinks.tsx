import { site } from "@/lib/content";

// Header and footer LinkedIn / Bluesky / GitHub icons
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function BlueskyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

const iconClass =
  "inline-flex size-11 items-center justify-center rounded-full text-zinc-500 transition-colors duration-200 hover:text-zinc-200";

const socialLinkList = [
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
  { label: "Bluesky", href: site.bluesky, Icon: BlueskyIcon },
  { label: "GitHub", href: site.github, Icon: GitHubIcon },
];

export function SocialLinks({
  compact = false,
  variant = "icons",
}: {
  compact?: boolean;
  variant?: "icons" | "sidebar";
}) {
  // Sidebar: plain stacked text links, right-aligned on desktop — matches
  // the page-nav links above it in the sidebar.
  if (variant === "sidebar") {
    return (
      <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 md:flex-col md:items-end md:gap-y-3">
        {socialLinkList.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg tracking-[0.005em] text-zinc-400 transition-colors duration-200 ease-out hover:text-white md:text-xl"
            >
              {label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  const cls = compact
    ? "inline-flex size-10 items-center justify-center rounded-full text-zinc-500 transition-colors duration-200 hover:text-zinc-200"
    : iconClass;

  return (
    <ul className="flex items-center">
      <li>
        <a
          href={site.linkedin}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a
          href={site.bluesky}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bluesky (opens in a new tab)"
        >
          <BlueskyIcon />
        </a>
      </li>
      <li>
        <a
          href={site.github}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in a new tab)"
        >
          <GitHubIcon />
        </a>
      </li>
    </ul>
  );
}

// Used on locked Playground cards
export function LockIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
