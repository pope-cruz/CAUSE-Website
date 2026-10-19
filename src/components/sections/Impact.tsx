import {
  collaborations,
  gallery,
  metrics,
  milestones,
  SHOW_UNCONFIRMED_METRICS,
  universities,
} from "@/content/site";
import { Section } from "../Section";

/**
 * Numeric figures only appear once SHOW_UNCONFIRMED_METRICS is switched on
 * after the team confirms them; until then, qualitative milestones show.
 */
function Highlights() {
  if (SHOW_UNCONFIRMED_METRICS) {
    return (
      <div>
        <dl className="grid gap-8 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="sr-only">{metric.label}</dt>
              <dd className="font-display text-5xl font-semibold">{metric.value}</dd>
              <dd className="mt-2 text-ink-soft">{metric.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-ink-soft">
          Figures as reported by CAUSE Philippines (August 2026); not independently audited.
        </p>
      </div>
    );
  }
  return (
    <ul className="grid gap-8 sm:grid-cols-3">
      {milestones.map((item) => (
        <li key={item.label}>
          <p className="font-display text-3xl font-semibold">{item.label}</p>
          <p className="mt-2 text-ink-soft text-pretty">{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export function Impact() {
  return (
    <Section id="impact" tone="cloud" title="Filipino students, admitted around the world.">
      <Highlights />

      <div className="mt-16 border-t border-line pt-12">
        <h3 className="font-semibold">Where our mentees have been admitted</h3>
        <p className="mt-4 font-display text-2xl leading-relaxed text-balance">
          {universities.join(" · ")}
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          Examples of historical mentee admissions. These universities are not CAUSE partners.
        </p>
      </div>

      {gallery.length > 0 ? (
        <ul className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {gallery.map((photo) => (
            <li key={photo.src} className="overflow-hidden rounded-xl">
              {/* Static export: plain <img> keeps images portable to any host. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-16 border-t border-line pt-12">
        <h3 className="font-semibold">Organizations we have worked with</h3>
        <ul className="mt-6 grid gap-8 md:grid-cols-2">
          {collaborations.map((org) => (
            <li key={org.name}>
              <p className="font-display text-xl font-semibold">{org.name}</p>
              <p className="mt-2 text-ink-soft text-pretty">{org.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
