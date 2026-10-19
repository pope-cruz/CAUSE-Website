import { about } from "@/content/site";
import { Section } from "../Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About us"
      title="Started by scholars who believed opportunity should travel further."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-5 text-lg text-pretty">
          <h3 className="font-display text-2xl font-semibold">Our history</h3>
          {about.history.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <aside className="self-start rounded-3xl bg-cause-blush/45 p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cause-red-deep">
            What we believe
          </p>
          <p className="mt-4 font-display text-3xl font-medium leading-tight text-balance">
            {about.belief}
          </p>
        </aside>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h3 className="font-display text-2xl font-semibold">Our values</h3>
          <div className="mt-5 space-y-5 text-ink-soft text-pretty">
            {about.values.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold">Our students care about</h3>
          <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
            {about.regions.map((region) => (
              <li key={region.name} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-32 shrink-0 font-display text-xl font-semibold text-cause-blue">
                  {region.name}
                </span>
                <span className="text-ink-soft">{region.focus}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-display text-2xl font-semibold">Founders</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {about.founders.map((founder) => (
              <li key={founder.name} className="flex items-center gap-4 sm:flex-col sm:items-start">
                <span
                  aria-hidden="true"
                  className="grid size-14 shrink-0 place-items-center rounded-full bg-cause-mist font-display text-lg font-semibold text-cause-blue-deep"
                >
                  {founder.initials}
                </span>
                <span>
                  <span className="block font-semibold">{founder.name}</span>
                  <span className="block text-sm text-ink-soft">Co-founder, 2018</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
