import { nav, OFFICIAL_LINKS, site } from "@/content/site";
import { FlagStripes } from "./BrandMotifs";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-midnight text-white">
      <FlagStripes className="h-3" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark variant="lockup" className="h-auto w-full max-w-xs" />
          <p className="mt-5 max-w-sm text-mist">
            A student-run nonprofit founded in {site.founded}.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-sky hover:underline hover:underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky">Connect</p>
          {OFFICIAL_LINKS.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {OFFICIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-sky hover:underline hover:underline-offset-4" rel="noopener">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-mist">
              Announcements are shared through official CAUSE Philippines channels.
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-mist sm:px-8">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
