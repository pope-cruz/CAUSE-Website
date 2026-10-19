import { CONTACT_EMAIL, involvement, site } from "@/content/site";
import { Section } from "../Section";

export function GetInvolved() {
  return (
    <Section
      id="get-involved"
      eyebrow="Get involved"
      title="There is a place for you in CAUSE."
      intro="Whether you are applying, have been through it, or want to help from your organization, here is how to take part."
      tone="red"
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {involvement.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className="flex flex-col rounded-3xl bg-white p-8 text-midnight shadow-[0_20px_40px_-25px_rgba(0,0,0,0.5)]"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-flag-red">{item.title}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{item.heading}</h3>
            <p className="mt-3 flex-1 text-ink-soft text-pretty">{item.body}</p>
            <div className="mt-6 rounded-2xl bg-sky-tint p-4 text-[0.95rem]">
              {CONTACT_EMAIL ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(item.heading)}`}
                  className="font-semibold text-sky-deep underline underline-offset-4"
                >
                  Email {CONTACT_EMAIL}
                </a>
              ) : (
                <p>{site.applicationNotice}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
