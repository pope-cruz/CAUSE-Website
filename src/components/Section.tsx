import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  className = "",
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;
  const dark = tone === "dark";
  return (
    <section id={id} aria-labelledby={headingId} className={`py-20 sm:py-28 ${dark ? "bg-ink text-paper" : ""} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p
            className={`text-sm font-bold uppercase tracking-[0.2em] ${dark ? "text-cause-sky" : "text-cause-blue"}`}
          >
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl"
          >
            {title}
          </h2>
          {intro ? (
            <div className={`mt-5 text-lg text-pretty ${dark ? "text-cause-mist" : "text-ink-soft"}`}>
              {intro}
            </div>
          ) : null}
        </div>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
