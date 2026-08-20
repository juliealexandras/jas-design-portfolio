import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotePost } from "@/components/NotePost";
import { SiteChrome } from "@/components/SiteChrome";
import { isTabVisible, notes, notesIntro, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description: `Short updates from ${site.name}.`,
};

export default function NotesPage() {
  if (!isTabVisible("notes")) notFound();

  return (
    <SiteChrome tab="notes">
      <div className="w-full pt-6 md:pt-8">
        <p className="w-full text-base tracking-wide text-zinc-400 md:text-lg">
          {notesIntro}
        </p>
      </div>
      <div className="flex w-full flex-col py-6 md:pt-6 md:pb-2">
        {notes.map((note, i) => (
          <div
            key={`${note.date}-${note.title}`}
            className={i === 0 ? "pb-8" : "border-t border-zinc-900 py-8"}
          >
            <NotePost
              date={note.date}
              title={note.title}
              body={note.body}
              photos={note.photos}
            />
          </div>
        ))}
      </div>
    </SiteChrome>
  );
}
