import { hero, involvement } from "@/content/site";
import { ChevronRight, MentorIcon, OrganizationIcon, StudentIcon } from "../Icons";

const icons = { mentees: StudentIcon, mentors: MentorIcon, partners: OrganizationIcon };

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-midnight text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <h1
            id="hero-heading"
            className="font-display text-5xl font-semibold leading-[1.04] tracking-tight text-balance sm:text-6xl"
          >
            {hero.title} <span className="text-sky">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl text-mist text-pretty">{hero.subtitle}</p>
          <blockquote className="mt-10 max-w-md border-l-2 border-sky pl-5">
            <p className="text-lg font-semibold">“{hero.belief}”</p>
            <footer className="mt-2 text-mist">— The founding belief of CAUSE Philippines</footer>
          </blockquote>
        </div>

        <nav aria-labelledby="get-started-heading" className="self-center">
          <h2 id="get-started-heading" className="text-lg font-semibold">
            Get started
          </h2>
          <ul className="mt-4 space-y-3">
            {involvement.map((item) => {
              const Icon = icons[item.id as keyof typeof icons];
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 rounded-xl bg-white p-4 text-ink ring-1 ring-black/5 transition hover:ring-2 hover:ring-sky sm:p-5"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sky-tint text-sky-deep">
                      <Icon className="size-6" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold">{item.role}</span>
                      <span className="block text-ink-soft">{item.tagline}</span>
                    </span>
                    <ChevronRight className="size-5 text-sky-deep transition group-hover:translate-x-0.5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
