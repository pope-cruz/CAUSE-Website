type MotifProps = {
  className?: string;
};

/** Red-and-white stripe band echoing the flag-filled U and S of the logo. Decorative. */
export function FlagStripes({ className = "" }: MotifProps) {
  return (
    <div
      aria-hidden="true"
      className={`bg-[repeating-linear-gradient(180deg,var(--color-flag-red)_0_6px,#ffffff_6px_12px)] ${className}`}
    />
  );
}

/** The Philippine-flag period from the logo. Decorative. */
export function PhDot({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <clipPath id="ph-dot-clip">
          <circle cx="20" cy="20" r="20" />
        </clipPath>
      </defs>
      <g clipPath="url(#ph-dot-clip)">
        <rect width="40" height="20" fill="var(--color-flag-navy)" />
        <rect y="20" width="40" height="20" fill="var(--color-flag-red)" />
        <path d="M0 0 L19 20 L0 40 Z" fill="#ffffff" />
        <circle cx="6" cy="20" r="2.6" fill="var(--color-ph-yellow)" />
      </g>
    </svg>
  );
}
