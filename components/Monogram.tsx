// Header logo — large brush-marker wordmark that links home
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display block leading-[0.85] text-white ${className}`}
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      Julie Spigner
    </span>
  );
}

// Kept as an alias so existing imports keep working.
export const Monogram = Wordmark;
