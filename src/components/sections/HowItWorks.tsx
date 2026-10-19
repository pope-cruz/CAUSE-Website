import { journey } from "@/content/site";
import { Section } from "../Section";

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="How it works"
      intro="An illustrative look at the mentee journey. Steps and timelines are set each cycle and shared through official CAUSE channels."
    >
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {journey.map((item, index) => (
          <li key={item.step} className="border-t-2 border-midnight pt-5">
            <p className="text-sm font-semibold text-ink-soft">Step {index + 1}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">{item.step}</h3>
            <p className="mt-2 text-ink-soft text-pretty">{item.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
