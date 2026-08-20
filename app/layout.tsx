import type { Metadata } from "next";
import { Young_Serif } from "next/font/google";
import { site } from "@/lib/content";
// Body type is self-hosted. Display type (wordmark) comes from Google Fonts
// via next/font, which downloads Young Serif at build time and serves it locally.
import "@fontsource-variable/instrument-sans";
import "./globals.css";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-young-serif",
});

// Browser tab title and search description for every page
export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  authors: [{ name: site.name }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased ${youngSerif.variable}`}>
      <body className="min-h-full bg-black font-sans">{children}</body>
    </html>
  );
}
