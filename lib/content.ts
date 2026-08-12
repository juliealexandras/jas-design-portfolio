export const site = {
  name: "Julie Alexandra",
  firstName: "Julie",
  role: "Product designer",
  email: "hello@juliealexandra.com",
  location: "Los Angeles / New York",
  education: "B.A. Interaction Design",
  linkedin: "https://www.linkedin.com/in/juliealexandra",
  github: "https://github.com/juliealexandra",
  tagline:
    "Designing products to spark moments of delight & human connection.",
  previously: ["Studio North", "Lumen", "Atlas"],
  aboutTagline: "Product, design,\n& everything in between.",
};

export const nav = [
  { href: "/", label: "Work", id: "work" },
  { href: "/about", label: "About", id: "about" },
  { href: "/playground", label: "Playground", id: "playground" },
] as const;

export type TabId = (typeof nav)[number]["id"];

export const projects = [
  {
    slug: "northwind",
    title: "Northwind Health",
    year: "2025",
    caption: "Designing a calmer care dashboard for clinicians and patients.",
    alt: "Abstract placeholder for Northwind Health case study",
    accent: "#d4d4d8",
    shape: "bars" as const,
  },
  {
    slug: "atlas-maps",
    title: "Atlas Maps",
    year: "2024",
    caption: "Reimagining wayfinding for first-time visitors in a new city.",
    alt: "Abstract placeholder for Atlas Maps case study",
    accent: "#c4c4cc",
    shape: "rings" as const,
  },
  {
    slug: "lumen",
    title: "Lumen Studio",
    year: "2024",
    caption: "Product strategy to help creative teams ship with more clarity.",
    alt: "Abstract placeholder for Lumen Studio case study",
    accent: "#d8d4cc",
    shape: "tiles" as const,
  },
  {
    slug: "harbor",
    title: "Harbor Bank",
    year: "2023",
    caption: "Making everyday banking feel human, clear, and trustworthy.",
    alt: "Abstract placeholder for Harbor Bank case study",
    accent: "#ccd4d8",
    shape: "wave" as const,
  },
];

export const bio = {
  heading: `Hi, I'm ${site.firstName}!`,
  location: site.location,
  education: site.education,
  paragraphs: [
    "I love the overlap of art, systems, and technology — and how those pieces can come together as products people actually want to use. I obsess over tools that make creation and communication feel a little more human.",
    "I design where beauty meets tactile utility: interfaces that are quiet until they need to speak, and details that earn their place. I am looking for teams that care about craft as much as outcomes.",
    "Three words: curious, warm, precise.",
  ],
};

export const experience = [
  {
    role: "Product Designer",
    company: "Studio North",
    dates: "2024 — Present",
    bullets: [
      "Led end-to-end product design for a clinician dashboard used across three hospital systems.",
      "Partnered with research and engineering to ship a new onboarding flow that cut time-to-first-value.",
    ],
  },
  {
    role: "Product Design Intern",
    company: "Lumen",
    dates: "Summer 2023",
    bullets: [
      "Designed growth experiments and a campus acquisition narrative for a creative tools suite.",
      "Built interactive prototypes and a component library for a six-person product squad.",
    ],
  },
  {
    role: "UX Design Intern",
    company: "Atlas",
    dates: "Summer 2022",
    bullets: [
      "Mapped first-time visitor journeys and redesigned core wayfinding screens for web and mobile.",
      "Ran unmoderated tests and turned findings into a prioritized opportunity map.",
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
