import type { ReactNode } from "react";

type Tone = "white" | "tint" | "midnight" | "sky" | "red";

const tones: Record<Tone, { section: string; eyebrow: string; intro: string }> = {
  white: { section: "bg-white", eyebrow: "text-flag-red", intro: "text-ink-soft" },
  tint: { section: "bg-sky-tint", eyebrow: "text-flag-red", intro: "text-ink-soft" },
  midnight: { section: "bg-midnight text-white", eyebrow: "text-sky", intro: "text-mist" },
  sky: { section: "bg-sky text-midnight", eyebrow: "text-midnight", intro: "text-midnight/80" },
  red: { section: "bg-flag-red text-white", eyebrow: "text-white", intro: "text-white/90" },
};

type SectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, tone = "white", children }: SectionProps) {
  const headingId = `${id}-heading`;
  const styles = tones[tone];
  return (
    <section id={id} aria-labelledby={headingId} className={`py-20 sm:py-28 ${styles.section}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className={`text-sm font-bold uppercase tracking-[0.24em] ${styles.eyebrow}`}>
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl"
          >
            {title}
          </h2>
          {intro ? (
            <div className={`mt-5 text-lg text-pretty ${styles.intro}`}>{intro}</div>
          ) : null}
        </div>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
