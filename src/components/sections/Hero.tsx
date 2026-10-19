import { hero, site } from "@/content/site";
import { FlagStripes, PhDot } from "../BrandMotifs";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-midnight text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky sm:tracking-[0.24em]">{hero.eyebrow}</p>
          <h1
            id="hero-heading"
            className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {hero.title} <span className="text-sky">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl text-mist text-pretty sm:text-2xl sm:leading-snug">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full bg-flag-red px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-flag-red-deep"
            >
              Explore our programs
            </a>
            <a
              href="#get-involved"
              className="inline-flex items-center justify-center rounded-full border-2 border-sky px-7 py-3 text-base font-bold text-sky transition-colors hover:bg-sky hover:text-midnight"
            >
              Get involved
            </a>
          </div>
        </div>

        <figure className="relative overflow-hidden rounded-[2rem] bg-sky text-midnight shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
          <div className="px-8 pb-10 pt-12 sm:px-12 sm:pt-14">
            <PhDot className="size-11" />
            <blockquote className="mt-8">
              <p className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                “{hero.belief}”
              </p>
            </blockquote>
            <figcaption className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-midnight/75">
              The founding belief of {site.name}
            </figcaption>
            <div className="mt-10 border-t border-midnight/20 pt-6">
              <p className="text-sm font-semibold text-midnight/75">From every corner of the Philippines</p>
              <p className="mt-1 font-display text-xl font-semibold">
                Luzon <span aria-hidden="true" className="text-flag-red">·</span> Visayas{" "}
                <span aria-hidden="true" className="text-flag-red">·</span> Mindanao
              </p>
              <p className="mt-4 text-sm font-semibold text-midnight/75">to universities around the world</p>
            </div>
          </div>
          <FlagStripes className="h-9" />
        </figure>
      </div>
    </section>
  );
}
