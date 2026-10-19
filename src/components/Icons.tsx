type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function ChevronRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function StudentIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 9v6" />
    </svg>
  );
}

export function MentorIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.6-3.6 3.2-6 6.5-6s5.9 2.4 6.5 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 14c2.4 0 4.1 1.8 4.5 4.5" />
    </svg>
  );
}

export function OrganizationIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 21V5l8-2v18" />
      <path d="M12 9h8v12" />
      <path d="M2 21h20" />
      <path d="M8 8v.01M8 12v.01M8 16v.01M16 13v.01M16 17v.01" />
    </svg>
  );
}
