// Header logo — large Young Serif wordmark that links home
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display block leading-none font-normal text-white ${className}`}
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      julie spigner
    </span>
  );
}

// Kept as an alias so existing imports keep working.
export const Monogram = Wordmark;
