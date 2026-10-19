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
          <li key={item.step} className="relative rounded-3xl bg-white p-7 shadow-[0_1px_0_rgba(22,34,63,0.08)] ring-1 ring-ink/10">
            <span className="font-display text-sm font-semibold text-cause-red-deep">
              Step {index + 1}
            </span>
            <h3 className="mt-2 font-display text-3xl font-semibold">{item.step}</h3>
            <p className="mt-3 text-ink-soft text-pretty">{item.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
