import type { Metadata } from "next";
import { site } from "@/lib/content";
// Self-hosted fonts (npm packages) instead of next/font/google, so the site
// doesn't depend on reaching fonts.googleapis.com at build or runtime.
import "@fontsource-variable/instrument-sans";
import "@fontsource/permanent-marker";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black font-sans">{children}</body>
    </html>
  );
}
