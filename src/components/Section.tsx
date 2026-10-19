import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Heading on the left, content on the right (from `lg` up). */
  split?: boolean;
  tone?: "white" | "cloud";
  children: ReactNode;
};

export function Section({ id, title, intro, split = false, tone = "white", children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-20 sm:py-28 ${tone === "cloud" ? "bg-cloud" : "bg-white"}`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 sm:px-8 ${split ? "grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20" : ""}`}
      >
        <div className="max-w-2xl">
          <h2
            id={headingId}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl"
          >
            {title}
          </h2>
          {intro ? <div className="mt-5 text-lg text-ink-soft text-pretty">{intro}</div> : null}
        </div>
        <div className={split ? "" : "mt-12 sm:mt-14"}>{children}</div>
      </div>
    </section>
  );
}
