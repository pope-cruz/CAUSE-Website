import { collaborations, gallery, universities } from "@/content/site";
import { Section } from "../Section";

export function Impact() {
  return (
    <Section
      id="impact"
      eyebrow="Impact"
      title="Filipino students, admitted around the world."
      intro="CAUSE mentees have gone on to leading universities in the Philippines and abroad. A few examples of schools where our mentees have been admitted:"
      tone="dark"
    >
      <ul className="flex flex-wrap gap-3" aria-label="Examples of universities where CAUSE mentees have been admitted">
        {universities.map((name) => (
          <li
            key={name}
            className="rounded-full border border-white/20 px-5 py-2.5 font-display text-lg"
          >
            {name}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-cause-mist">
        Historical mentee admissions, listed for illustration. These universities are not CAUSE partners.
      </p>

      {gallery.length > 0 ? (
        <ul className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {gallery.map((photo) => (
            <li key={photo.src} className="overflow-hidden rounded-2xl">
              {/* Static export: plain <img> keeps images portable to any host. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="font-display text-2xl font-semibold">Organizations we have worked with</h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {collaborations.map((org) => (
            <li key={org.name} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
              <p className="font-display text-xl font-semibold">{org.name}</p>
              <p className="mt-2 text-cause-mist text-pretty">{org.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
