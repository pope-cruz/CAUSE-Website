import { about } from "@/content/site";
import { Section } from "../Section";

export function About() {
  return (
    <Section
      id="about"
      split
      title={
        <>
          {about.belief} <span className="text-sky-deep">{about.beliefAccent}</span>
        </>
      }
    >
      <div className="space-y-5 text-lg text-pretty">
        {about.history.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
        <p className="text-ink-soft">{about.reach}</p>
      </div>
    </Section>
  );
}
