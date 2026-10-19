type SunMarkProps = {
  className?: string;
};

/** Eight-ray sun motif, a nod to the Philippine flag. Decorative only. */
export function SunMark({ className }: SunMarkProps) {
  const rays = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g fill="currentColor">
        <circle cx="32" cy="32" r="11" />
        {rays.map((angle) => (
          <path
            key={angle}
            d="M32 2 L35.5 15 L32 18 L28.5 15 Z"
            transform={`rotate(${angle} 32 32)`}
          />
        ))}
      </g>
    </svg>
  );
}
