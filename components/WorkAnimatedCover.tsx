"use client";

import { useEffect, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function WorkAnimatedCover({
  src,
  alt,
  kind,
}: {
  src: string;
  alt: string;
  kind: "gif" | "video";
}) {
  const reducedMotion = usePrefersReducedMotion();

  if (kind === "video") {
    return (
      <video
        src={src}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        aria-label={alt}
        className="absolute inset-0 size-full object-cover"
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 size-full object-cover"
    />
  );
}
