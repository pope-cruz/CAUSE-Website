import { hero, site } from "@/content/site";
import { SunMark } from "../SunMark";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cause-blue">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-xl text-ink-soft text-pretty sm:text-2xl sm:leading-snug">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full bg-cause-blue px-7 py-3.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-cause-blue-deep"
            >
              Explore our programs
            </a>
            <a
              href="#get-involved"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink/80 px-7 py-3 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Get involved
            </a>
          </div>
        </div>

        <figure className="relative isolate overflow-hidden rounded-[2rem] bg-cause-blue px-8 pb-10 pt-16 text-white shadow-[0_30px_60px_-30px_rgba(22,34,63,0.55)] sm:px-12 sm:pt-28">
          <SunMark className="absolute -right-16 -top-16 -z-10 size-72 text-cause-periwinkle/45" />
          <blockquote>
            <p className="font-display text-3xl font-medium leading-tight text-balance sm:text-4xl">
              “{hero.belief}”
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cause-mist">
            The founding belief of {site.name}
          </figcaption>
          <div className="mt-10 border-t border-white/25 pt-6">
            <p className="text-sm text-cause-mist">From every corner of the Philippines</p>
            <p className="mt-1 font-display text-xl">
              Luzon <span aria-hidden="true" className="text-cause-blush">·</span> Visayas{" "}
              <span aria-hidden="true" className="text-cause-blush">·</span> Mindanao
            </p>
            <p className="mt-4 text-sm text-cause-mist">to universities around the world</p>
          </div>
        </figure>
      </div>
    </section>
  );
}
