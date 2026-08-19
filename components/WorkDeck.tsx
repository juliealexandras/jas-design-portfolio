"use client";

import Image from "next/image";
import { useState } from "react";

function CaretIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "prev" ? (
        <path d="M15 6 9 12l6 6" />
      ) : (
        <path d="m9 6 6 6-6 6" />
      )}
    </svg>
  );
}

const buttonClass =
  "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f4f4f5] bg-white text-[#18181b] shadow-[var(--shadow-glass)] transition-colors hover:bg-zinc-50";

export function WorkDeck({
  slides,
  label,
}: {
  slides: { src: string; alt: string }[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const slide = slides[index];

  if (!slide) return null;

  function go(delta: number) {
    setIndex((current) => (current + delta + total) % total);
  }

  return (
    <div
      className="relative w-full overflow-clip rounded-[26px]"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative isolate aspect-[1920/1000] w-full overflow-hidden rounded-[26px] bg-[#e4e4e7]">
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 768px) 48rem, 100vw"
          className="object-cover"
          priority={index === 0}
        />
        <p
          className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-[#f4f4f5] bg-white px-3 pt-[5px] pb-[4px] text-sm font-medium tracking-[0.005em] text-[#18181b]"
          aria-hidden="true"
        >
          {index + 1} / {total}
        </p>
        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {total}
        </p>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[26px] border border-zinc-100"
      />
      <button
        type="button"
        className={`${buttonClass} left-2`}
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        <CaretIcon direction="prev" />
      </button>
      <button
        type="button"
        className={`${buttonClass} right-2`}
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        <CaretIcon direction="next" />
      </button>
    </div>
  );
}
