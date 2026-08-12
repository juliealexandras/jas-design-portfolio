export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="1.25"
        y="1.25"
        width="41.5"
        height="41.5"
        rx="10"
        fill="#f4f4f5"
        stroke="#e4e4e7"
        strokeWidth="1.5"
      />
      <text
        x="22"
        y="27.5"
        textAnchor="middle"
        fill="#3f3f46"
        fontSize="15"
        fontWeight="500"
        fontFamily="var(--font-sans), ui-sans-serif, system-ui, sans-serif"
        letterSpacing="0.04em"
      >
        JA
      </text>
    </svg>
  );
}
