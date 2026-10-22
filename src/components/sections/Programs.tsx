import { programs } from "@/content/site";
import { Section } from "../Section";

export function Programs() {
  return (
    <Section
      id="programs"
      split
      tone="cloud"
      title="Guidance at every step of applying abroad."
      intro="Individual mentorship, paired with open sessions anyone can learn from."
    >
      <ul className="divide-y divide-line border-y border-line">
        {programs.map((program) => (
          <li key={program.id} id={program.id} className="py-8">
            <h3 className="font-display text-2xl font-semibold">{program.title}</h3>
            <p className="mt-2 text-ink-soft text-pretty">{program.summary}</p>
            {program.topics ? (
              <p className="mt-4 text-[0.95rem] text-ink-soft">
                <span className="font-semibold text-ink">Topics: </span>
                {program.topics.join(" · ")}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
