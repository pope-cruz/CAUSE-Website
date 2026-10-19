import { metrics, milestones, SHOW_UNCONFIRMED_METRICS } from "@/content/site";

/**
 * Shows qualitative milestones by default. Numeric figures only appear once
 * SHOW_UNCONFIRMED_METRICS is switched on after the team confirms them.
 */
export function ImpactStrip() {
  return (
    <section aria-label="CAUSE at a glance" className="bg-sky text-midnight">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        {SHOW_UNCONFIRMED_METRICS ? (
          <>
            <dl className="grid gap-8 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-display text-5xl font-bold">{metric.value}</dd>
                  <dd className="mt-2 text-midnight/80">{metric.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-midnight/80">
              Figures as reported by CAUSE Philippines (August 2026); not independently audited.
            </p>
          </>
        ) : (
          <ul className="grid gap-8 sm:grid-cols-3">
            {milestones.map((item) => (
              <li key={item.label} className="border-l-4 border-flag-red pl-5">
                <p className="font-display text-3xl font-bold">{item.label}</p>
                <p className="mt-2 text-midnight/80 text-pretty">{item.detail}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
