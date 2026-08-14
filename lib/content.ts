export const site = {
  name: "Julie Spigner",
  firstName: "Julie",
  role: "Product designer",
  email: "juliealexandrastudio@gmail.com",
  location: "Seattle, WA",
  linkedin: "https://www.linkedin.com/in/juliealexandra",
  github: "https://github.com/juliealexandra",
  repo: "https://github.com/juliealexandras/jas-design-portfolio",
  changelogDate: "2026-08-12",
  tagline:
    "Designing thoughtful, accessible, and scalable digital products.",
  previously: ["Amazon"],
  aboutTagline: "Insert tagline here",
};

export const nav = [
  { href: "/", label: "Work", id: "work" },
  { href: "/about", label: "About", id: "about" },
  { href: "/playground", label: "Playground", id: "playground" },
] as const;

export type TabId = (typeof nav)[number]["id"];

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

export const bio = {
  heading: `Hi, I'm ${site.firstName}!`,
  location: site.location,
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
};

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
