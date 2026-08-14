type Shape = "bars" | "rings" | "tiles" | "wave";

// Placeholder artwork for project cards until real images are added
export function ProjectThumb({
  shape,
  accent,
}: {
  shape: Shape;
  accent: string;
}) {
  return (
    <svg
      viewBox="0 0 678 368"
      className="absolute inset-0 size-full"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="678" height="368" fill="#e4e4e7" />
      <rect width="678" height="368" fill={accent} opacity="0.55" />
      {shape === "bars" && (
        <g fill="#fff" opacity="0.55">
          <rect x="72" y="86" width="120" height="196" rx="18" />
          <rect x="216" y="132" width="120" height="150" rx="18" />
          <rect x="360" y="64" width="120" height="218" rx="18" />
          <rect x="504" y="158" width="102" height="124" rx="18" />
        </g>
      )}
      {shape === "rings" && (
        <g fill="none" stroke="#fff" strokeWidth="18" opacity="0.5">
          <circle cx="339" cy="184" r="46" />
          <circle cx="339" cy="184" r="96" />
          <circle cx="339" cy="184" r="146" />
        </g>
      )}
      {shape === "tiles" && (
        <g fill="#fff" opacity="0.5">
          <rect x="90" y="70" width="150" height="110" rx="22" />
          <rect x="264" y="70" width="150" height="110" rx="22" />
          <rect x="438" y="70" width="150" height="110" rx="22" />
          <rect x="90" y="198" width="150" height="100" rx="22" />
          <rect x="264" y="198" width="324" height="100" rx="22" />
        </g>
      )}
      {shape === "wave" && (
        <path
          d="M0 230 C 90 170, 150 290, 250 220 S 420 140, 520 210 S 620 280, 678 200 V 368 H 0 Z"
          fill="#fff"
          opacity="0.45"
        />
      )}
    </svg>
  );
}
