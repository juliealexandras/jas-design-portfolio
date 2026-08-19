// All visitor-facing copy lives here. Pages and components read from these
// objects — edit strings in this file instead of hunting through the UI.

// Site identity — name, contact, taglines, and footer changelog
export const site = {
  name: "Julie Spigner",
  firstName: "Julie",
  role: "Product designer",
  email: "juliealexandrastudio@gmail.com",
  linkedin: "https://www.linkedin.com/in/juliespigner/",
  bluesky: "https://bsky.app/profile/juliealexandra.bsky.social",
  github: "https://github.com/juliealexandras",
  repo: "https://github.com/juliealexandras/jas-design-portfolio",
  changelogDate: "2026-08-19",
  tagline:
    "Product Designer | Seattle, WA",
  aboutTagline: "Product Designer | Seattle, WA",
};

// Primary tabs. hidden: true keeps the route file but omits the tab (and 404s the page).
export const nav = [
  { href: "/", label: "Work", id: "work", hidden: false },
  { href: "/about", label: "About", id: "about", hidden: false },
  { href: "/notes", label: "Notes", id: "notes", hidden: true },
  { href: "/playground", label: "Playground", id: "playground", hidden: true },
] as const;

export type TabId = (typeof nav)[number]["id"];

export function isTabVisible(id: TabId) {
  return !nav.find((item) => item.id === id)?.hidden;
}

// Intro above the Work list
export const workIntro =
  "Selected product design work across mobile, web, and AI-powered experiences.";

// Intro above the Notes feed
export const notesIntro = "Brief updates on what I'm making, reading, and noticing.";

export type ProjectShape = "bars" | "rings" | "tiles" | "wave";

export type Project = {
  slug: string;
  title: string;
  date: string;
  year: string;
  caption: string;
  alt: string;
  accent: string;
  shape: ProjectShape;
  overview: string[];
  overviewLinks?: { label: string; href: string }[];
  titleHref?: string;
  cover?: { src: string; alt: string };
  deck?: { src: string; alt: string }[];
  hidden?: boolean;
};

// Work list overview is clipped to this length.
export const WORK_OVERVIEW_MAX = 300;

// Work page cards. `shape` picks the placeholder thumbnail until a cover or deck is set.
export const projects: Project[] = [
  {
    slug: "work-alexa-plus",
    title: "Alexa+",
    date: "2026-02-01",
    year: "2026",
    caption: "Alexa+ on an Echo Show device.",
    alt: "Alexa+ home dashboard on an Echo Show display",
    accent: "#d4d4d8",
    shape: "bars",
    cover: {
      src: "/work/alexa-plus-prototype.gif",
      alt: "Alexa+ home dashboard on an Echo Show display",
    },
    overview: [
      "Designed Alexa+’s unified opt-in experience across mobile, web, and multimodal devices. I navigated evolving product architecture, multiple user cohorts, phased launches, regulatory requirements, and an emerging brand identity to create a seamless path to Alexa+ for millions.",
    ],
    overviewLinks: [
      { label: "Alexa+", href: "https://www.amazon.com/AlexaPlus"},
      { label: "Alexa+", href: "https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us" },
    ],
  },
  {
    slug: "work-alexa-plus-store",
    title: "Alexa+ Store",
    date: "2025-07-01",
    year: "2025",
    caption: "App grid showcasing add-ons and experiences available to Alexa+ members.",
    alt: "Alexa+ Store interface displaying a grid of apps, skills, and add-on experiences available to Alexa+ members.",
    accent: "#c4c4cc",
    shape: "rings",
    cover: {
      src: "/work/alexa_plus_store_apps.mp4",
      alt: "Alexa+ Store interface displaying a grid of apps, skills, and add-on experiences available to Alexa+ members.",
    },
    overview: [
      "Built the Alexa+ Store experience, evolving Alexa Skills into a modern marketplace for add-ons, integrations, and AI-powered capabilities. I designed discovery, onboarding, and purchase flows across multimodal surfaces in parallel with mobile to make exploration feel seamless and familiar.",
    ],
    overviewLinks: [
      { label: "Alexa+ Store", href: "https://www.aboutamazon.com/news/devices/amazon-new-echo-devices-alexa-plus" },
      { label: "Alexa Skills", href: "https://www.amazon.com/alexa-skills/b?ie=UTF8&node=13727921011" },
    ],
  },
  {
    slug: "work-subscriptions-playbook-library",
    title: "Subscriptions Playbook Library",
    date: "2024-11-01",
    year: "2024",
    caption: "Artifacts from the Subscriptions Playbook Library.",
    alt: "Subscriptions Playbook Library interface",
    accent: "#d8d4cc",
    shape: "tiles",
    deck: [
      { src: "/work/library-subs-ux-deck/1.png", alt: "Subscriptions Playbook Library sample 1" },
      { src: "/work/library-subs-ux-deck/2.png", alt: "Subscriptions Playbook Library sample 2" },
      { src: "/work/library-subs-ux-deck/3.png", alt: "Subscriptions Playbook Library sample 3" },
      { src: "/work/library-subs-ux-deck/4.png", alt: "Subscriptions Playbook Library sample 4" },
      { src: "/work/library-subs-ux-deck/5.png", alt: "Subscriptions Playbook Library sample 5" },
    ],
    overview: [
      "Designed a subscription UX reference library that became the shared source of truth for Amazon brands in Alexa’s ecosystem. Unified purchasing patterns, decision logic, and templates across platforms to help teams ship consistent subscription experiences at scale across US and international markets.",
    ],
  },
  {
    slug: "work-alexa-emergency-assist",
    title: "Alexa Emergency Assist",
    date: "2023-09-01",
    year: "2023",
    caption: "Critical Information setup in the Alexa app.",
    alt: "Alexa Emergency Assist mobile experience",
    accent: "#ccd4d8",
    shape: "wave",
    cover: {
      src: "/work/aea-mobile.png",
      alt: "Alexa Emergency Assist mobile experience",
    },
    overview: [
      "Alexa Emergency Assist is the evolution of Alexa Guard and Alexa Together. I shaped the user journey from purchase through onboarding for older adults and caregivers, balancing complex subscription paths, promotions, emergency requirements, and an evolving brand across Amazon and Alexa app.",
    ],
    overviewLinks: [
      { label: "Alexa Emergency Assist", href: "https://www.amazon.com/gethelpfast" },
      { label: "Alexa Guard", href: "https://www.amazon.com/b?ie=UTF8&node=18021383011"},
      { label: "Alexa Together", href: "https://www.aboutamazon.com/news/devices/alexa-together-launches-to-help-customers-remotely-care-for-loved-ones"},
    ],
  },
  {
    slug: "work-sample",
    title: "Title",
    date: "2023-04-01",
    year: "2023",
    caption: "Caption.",
    alt: "Abstract placeholder for Work Sample project",
    accent: "#ccd4d8",
    shape: "wave",
    hidden: true,
    overview: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
];

export function getWorkProjects() {
  return [...projects]
    .filter((project) => !project.hidden)
    .sort((a, b) => b.date.localeCompare(a.date));
}

// About page — heading and bio paragraphs (each item is one <p>)
export const bio = {
  paragraphs: [
    "I’m a designer who enjoys making sense of messy, ambiguous problems and turning them into experiences that feel clear, useful, and human. Over the past four years, most recently at Amazon, I’ve designed end-to-end experiences across mobile, web, and multimodal devices, helping shape products used by more than 70 million customers.",
    "My work is grounded in systems thinking, cognitive science, and accessibility. As a native ASL user, I bring a firsthand perspective on communication and inclusion that influences how I design products and systems. I enjoy collaborating with product, engineering, research, and business teams to simplify complexity and create meaningful experiences. ",
    "Outside of design, I’m an advocate for community arts and sign language rights. I enjoy connecting with people through creative projects and community events.",
  ],
};

export const aboutCta = {
  before: "Want to talk about a role, a project, or a collaboration? ",
  link: "Connect with me",
  after: ".",
};

// Set to true to show the About portrait. Hidden until a real photo is ready.
export const showPortrait = false;

// Set to true to show the Experience list on About. Copy below is archived.
export const showExperience = false;

export const experience = [
  {
    role: "UX Designer II",
    company: "Amazon",
    dates: "2024 — Present",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    role: "UX Designer I",
    company: "Amazon",
    dates: "2023 — 2024",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    role: "UX Design Research Apprentice",
    company: "Amazon",
    dates: "2022 — 2023",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
];

// Playground page — locked experiment cards (Coming soon)
export const playground = [
  {
    title: "Motion studies",
    year: "2026",
    note: "Interface motion experiments — not public yet.",
    shape: "rings" as const,
  },
  {
    title: "Type playground",
    year: "2026",
    note: "Typographic sketches and layout studies.",
    shape: "tiles" as const,
  },
  {
    title: "Interface sketches",
    year: "2025",
    note: "Early product explorations still under wraps.",
    shape: "bars" as const,
  },
];

// Notes feed. Body max 300 characters — keep copy at or under that limit.
export const notes = [
  {
    date: "2026-08-14",
    title: "Sketching a notes feed",
    body: "Trying a quieter place for short updates — date, a title, a paragraph, and optional polaroids. Placeholder frames for now; real photos later.",
    photos: [
      { src: "/notes/one.svg", alt: "Placeholder polaroid of abstract bars" },
      { src: "/notes/two.svg", alt: "Placeholder polaroid of abstract rings" },
    ],
  },
  {
    date: "2026-08-10",
    title: "Studio afternoon",
    body: "One photo from the desk. This note checks the single-polaroid layout so a lone frame still feels like a snapshot, not a full gallery.",
    photos: [
      { src: "/notes/three.svg", alt: "Placeholder polaroid of abstract tiles" },
    ],
  },
  {
    date: "2026-08-03",
    title: "Text only",
    body: "Some updates won't have photos. This one is just a date, a title, and a short paragraph so the feed still reads when the polaroid row is omitted.",
  },
];
