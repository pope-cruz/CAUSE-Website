import { journey } from "@/content/site";
import { Section } from "../Section";

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="A path from first question to community."
      intro={
        <p>
          An illustrative look at the mentee journey. Specific steps, eligibility,
          and timelines are set each cycle and shared through official CAUSE channels.
        </p>
      }
    >
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {journey.map((item, index) => (
          <li key={item.step} className="rounded-3xl bg-midnight p-7 text-white">
            <span className="grid size-10 place-items-center rounded-full bg-sky font-display text-lg font-bold text-midnight">
              {index + 1}
            </span>
            <h3 className="mt-5 font-display text-3xl font-semibold">{item.step}</h3>
            <p className="mt-3 text-mist text-pretty">{item.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
