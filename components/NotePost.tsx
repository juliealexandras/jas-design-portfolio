import Image from "next/image";

const BODY_MAX = 300;

type Photo = { src: string; alt: string };

type NotePostProps = {
  date: string;
  title: string;
  body: string;
  photos?: Photo[];
};

function formatNoteDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function NotePost({ date, title, body, photos }: NotePostProps) {
  const clipped = body.slice(0, BODY_MAX);

  return (
    <article className="flex w-full flex-col items-start gap-3">
      <time dateTime={date} className="text-sm tracking-wide text-zinc-500">
        {formatNoteDate(date)}
      </time>
      <h2 className="text-lg font-medium tracking-[0.005em] text-white">
        {title}
      </h2>
      <p className="text-base leading-relaxed tracking-wide text-zinc-400 md:text-lg">
        {clipped}
      </p>
      {photos && photos.length > 0 ? (
        <div className="flex w-full max-w-full flex-wrap gap-4 pt-1">
          {photos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`w-28 shrink-0 bg-white p-2 pb-5 shadow-[var(--shadow-glass)] motion-reduce:rotate-0 ${
                i % 2 === 0
                  ? "motion-safe:rotate-1"
                  : "motion-safe:-rotate-1"
              }`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e4e4e7]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="112px"
                  unoptimized
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      ) : null}
    </article>
  );
}
