import { programs } from "@/content/site";
import { Section } from "../Section";

const accents = ["bg-flag-red", "bg-sky", "bg-midnight"];

export function Programs() {
  return (
    <Section
      id="programs"
      eyebrow="Programs"
      title="Guidance at every step of applying abroad."
      intro="Our programs pair individual mentorship with open sessions, so students get both personal guidance and the shared knowledge of a wider community."
      tone="tint"
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {programs.map((program, index) => (
          <li
            key={program.id}
            id={program.id}
            className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_0_rgba(0,27,48,0.08)] ring-1 ring-midnight/10"
          >
            <span aria-hidden="true" className={`h-2 ${accents[index % accents.length]}`} />
            <div className="flex flex-1 flex-col p-8">
              <h3 className="font-display text-2xl font-semibold">{program.title}</h3>
              <p className="mt-3 text-ink-soft text-pretty">{program.summary}</p>
              <ul className="mt-6 space-y-2 border-t border-midnight/10 pt-6 text-[0.98rem]">
                {program.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-flag-red" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
