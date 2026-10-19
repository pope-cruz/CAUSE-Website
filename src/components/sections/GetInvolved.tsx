import { CONTACT_EMAIL, involvement, site } from "@/content/site";
import { Section } from "../Section";

export function GetInvolved() {
  return (
    <Section
      id="get-involved"
      title="Get involved"
      intro="Whether you are applying, have been through it, or want to help from your organization, there is a place for you in CAUSE."
    >
      <ul className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {involvement.map((item) => (
          <li key={item.id} id={item.id} className="flex flex-col border-t-2 border-midnight pt-5">
            <p className="text-sm font-semibold text-ink-soft">{item.title}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">{item.heading}</h3>
            <p className="mt-2 flex-1 text-ink-soft text-pretty">{item.body}</p>
            <p className="mt-5 text-[0.95rem]">
              {CONTACT_EMAIL ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(item.heading)}`}
                  className="font-semibold text-sky-deep underline underline-offset-4"
                >
                  Email {CONTACT_EMAIL}
                </a>
              ) : (
                site.applicationNotice
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
