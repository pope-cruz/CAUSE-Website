import { programs } from "@/content/site";
import { Section } from "../Section";

const accents = ["bg-cause-blue", "bg-cause-coral", "bg-cause-periwinkle"];

export function Programs() {
  return (
    <Section
      id="programs"
      eyebrow="Programs"
      title="Guidance at every step of applying abroad."
      intro="Our programs pair individual mentorship with open sessions, so students get both personal guidance and the shared knowledge of a wider community."
      className="bg-white"
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {programs.map((program, index) => (
          <li
            key={program.id}
            id={program.id}
            className="flex flex-col rounded-3xl border border-ink/10 bg-paper p-8"
          >
            <span aria-hidden="true" className={`h-1.5 w-12 rounded-full ${accents[index % accents.length]}`} />
            <h3 className="mt-6 font-display text-2xl font-semibold">{program.title}</h3>
            <p className="mt-3 text-ink-soft text-pretty">{program.summary}</p>
            <ul className="mt-6 space-y-2 border-t border-ink/10 pt-6 text-[0.98rem]">
              {program.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cause-blue" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
