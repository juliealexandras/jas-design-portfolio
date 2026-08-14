// All visitor-facing copy lives here. Pages and components read from these
// objects — edit strings in this file instead of hunting through the UI.

// Site identity — name, contact, taglines, and footer changelog
export const site = {
  name: "Julie Spigner",
  firstName: "Julie",
  role: "Product designer",
  email: "juliealexandrastudio@gmail.com",
  linkedin: "https://www.linkedin.com/in/juliespigner/",
  github: "https://github.com/juliealexandra",
  repo: "https://github.com/juliealexandras/jas-design-portfolio",
  changelogDate: "2026-08-12",
  tagline:
    "Designing thoughtful, accessible, and scalable digital products.",
  aboutTagline: "Insert tagline here",
};

// Primary tabs: Work, About, Playground
export const nav = [
  { href: "/", label: "Work", id: "work" },
  { href: "/about", label: "About", id: "about" },
  { href: "/playground", label: "Playground", id: "playground" },
] as const;

export type TabId = (typeof nav)[number]["id"];

// Work page cards. `shape` picks the placeholder thumbnail style.
export const projects = [
  {
    slug: "project-1",
    title: "Project 1",
    year: "20XX",
    caption: "Designing a project 1 for a project 1.",
    alt: "Abstract placeholder for Project 1 case study",
    accent: "#d4d4d8",
    shape: "bars" as const,
  },
  {
    slug: "project-2",
    title: "Project 2",
    year: "20XX",
    caption: "Designing a project 2 for a project 2.",
    alt: "Abstract placeholder for Project 2 case study",
    accent: "#c4c4cc",
    shape: "rings" as const,
  },
  {
    slug: "project-3",
    title: "Project 3",
    year: "20XX",
    caption: "Designing a project 3 for a project 3.",
    alt: "Abstract placeholder for Project 3 case study",
    accent: "#d8d4cc",
    shape: "tiles" as const,
  },
  {
    slug: "project-4",
    title: "Project 4",
    year: "20XX",
    caption: "Designing a project 4 for a project 4.",
    alt: "Abstract placeholder for Project 4 case study",
    accent: "#ccd4d8",
    shape: "wave" as const,
  },
];

// About page — heading and bio paragraphs (each item is one <p>)
export const bio = {
  heading: `👋 Hi, I'm ${site.firstName}!`,
  paragraphs: [
    "I am a product designer who turns ambiguous, large-scale problems into systems that work for customers and for the teams who maintain them. Over four years, most recently at Amazon, I've designed end-to-end digital experiences across mobile, web, and multimodal devices, helping 70+ million customers engage with AI-powered services at home and on the go.",
    "My niche sits at the intersection of systems thinking, cognitive science, and accessibility. As a native ASL user, I bring a first-hand lens on communication and inclusion to decisions. I build interaction patterns, scalable frameworks, and design libraries that save teams time, reduce barriers, and create flexible ways to interact with technology.",
    "I partner closely with product, engineering, research, and business to balance customer needs with technical and business constraints. I care deeply about responsible AI and experiences that empower long-term trust, user customization, and genuine digital wellness. I bring that same care in design workflows.",
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
