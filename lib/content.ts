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
  changelogDate: "2026-08-12",
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

export type ProjectGalleryImage = {
  alt: string;
  src?: string;
  shape?: ProjectShape;
  accent?: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  year: string;
  caption: string;
  alt: string;
  accent: string;
  shape: ProjectShape;
  role: string;
  tools: string;
  org: string;
  timeline: string;
  platforms: string;
  overview: string[];
  overviewLinks?: { label: string; href: string }[];
  gallery: ProjectGalleryImage[];
  cover?: { src: string; alt: string };
};

// Work list overview is clipped to this length.
export const WORK_OVERVIEW_MAX = 300;

// Work page cards and project pages. `shape` picks the placeholder thumbnail style.
// Replace gallery `src` with a file in /public when a real image is ready.
export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Alexa+",
    date: "2026-06-01",
    year: "2026",
    caption: "Designing a unified opt-in experience for the next generation of Alexa.",
    alt: "Alexa+ logo on a dark blue glow",
    accent: "#d4d4d8",
    shape: "bars",
    cover: {
      src: "/work/alexa-plus-cover.jpg",
      alt: "Alexa+ logo on a dark blue glow",
    },
    role: "Product designer",
    tools: "Figma",
    org: "Amazon",
    timeline: "2025 — 2026",
    platforms: "Mobile, web, multimodal",
    overview: [
      "Designed Alexa+’s unified opt-in experience across mobile, web, and multimodal devices. I navigated evolving product architecture, multiple user cohorts, phased launches, and new regulatory requirements to create a seamless path to Alexa+ for millions.",
    ],
    overviewLinks: [
      { label: "Alexa+", href: "https://www.amazon.com/AlexaPlus" },
    ],
    gallery: [
      { alt: "Placeholder frame for Alexa+ overview", shape: "bars", accent: "#d4d4d8" },
      { alt: "Placeholder frame for Alexa+ detail", shape: "tiles", accent: "#c4c4cc" },
      { alt: "Placeholder frame for Alexa+ close-up", shape: "wave", accent: "#d8d4cc" },
    ],
  },
  {
    slug: "project-2",
    title: "Project 2",
    date: "2025-09-01",
    year: "2025",
    caption: "Designing a project 2 for a project 2.",
    alt: "Abstract placeholder for Project 2 case study",
    accent: "#c4c4cc",
    shape: "rings",
    role: "Product designer",
    tools: "Figma",
    org: "Organization",
    timeline: "20XX — 20XX",
    platforms: "Mobile, web",
    overview: [
      "A short overview of this project — the problem, the people it was for, and the outcome. Replace this copy when the case study is ready to share.",
    ],
    gallery: [
      { alt: "Placeholder frame for Project 2 overview", shape: "rings", accent: "#c4c4cc" },
      { alt: "Placeholder frame for Project 2 detail", shape: "bars", accent: "#d4d4d8" },
      { alt: "Placeholder frame for Project 2 close-up", shape: "tiles", accent: "#d8d4cc" },
    ],
  },
  {
    slug: "project-3",
    title: "Project 3",
    date: "2024-11-01",
    year: "2024",
    caption: "Designing a project 3 for a project 3.",
    alt: "Abstract placeholder for Project 3 case study",
    accent: "#d8d4cc",
    shape: "tiles",
    role: "Product designer",
    tools: "Figma",
    org: "Organization",
    timeline: "20XX — 20XX",
    platforms: "Mobile, web",
    overview: [
      "A short overview of this project — the problem, the people it was for, and the outcome. Replace this copy when the case study is ready to share.",
    ],
    gallery: [
      { alt: "Placeholder frame for Project 3 overview", shape: "tiles", accent: "#d8d4cc" },
      { alt: "Placeholder frame for Project 3 detail", shape: "wave", accent: "#ccd4d8" },
      { alt: "Placeholder frame for Project 3 close-up", shape: "rings", accent: "#c4c4cc" },
    ],
  },
  {
    slug: "project-4",
    title: "Project 4",
    date: "2023-04-01",
    year: "2023",
    caption: "Designing a project 4 for a project 4.",
    alt: "Abstract placeholder for Project 4 case study",
    accent: "#ccd4d8",
    shape: "wave",
    role: "Product designer",
    tools: "Figma",
    org: "Organization",
    timeline: "20XX — 20XX",
    platforms: "Mobile, web",
    overview: [
      "A short overview of this project — the problem, the people it was for, and the outcome. Replace this copy when the case study is ready to share.",
    ],
    gallery: [
      { alt: "Placeholder frame for Project 4 overview", shape: "wave", accent: "#ccd4d8" },
      { alt: "Placeholder frame for Project 4 detail", shape: "rings", accent: "#c4c4cc" },
      { alt: "Placeholder frame for Project 4 close-up", shape: "bars", accent: "#d4d4d8" },
    ],
  },
];

export function getWorkProjects() {
  return [...projects].sort((a, b) => b.date.localeCompare(a.date));
}

// About page — heading and bio paragraphs (each item is one <p>)
export const bio = {
  paragraphs: [
    "I’m a designer who enjoys making sense of messy, ambiguous problems and turning them into experiences that feel clear, useful, and human. Over the past four years, most recently at Amazon, I’ve designed end-to-end experiences across mobile, web, and multimodal devices, helping shape products used by more than 70 million customers.",
    "My work is grounded in systems thinking, cognitive science, and accessibility. As a native ASL user, I bring a firsthand perspective on communication and inclusion that influences how I design products and systems. I enjoy collaborating with product, engineering, research, and business teams to simplify complexity and create meaningful experiences. ",
    "Outside of design, I’m an advocate for community arts and sign language rights. I enjoy connecting with people through creative projects and community events.",
  ],
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
