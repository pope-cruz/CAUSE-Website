import { nav, OFFICIAL_LINKS, site } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark variant="lockup" className="h-auto w-full max-w-[16rem]" />
          <p className="mt-5 max-w-sm text-ink-soft">
            A student-run nonprofit founded in {site.founded}.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-ink-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-ink hover:underline hover:underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold">Connect</p>
          {OFFICIAL_LINKS.length > 0 ? (
            <ul className="mt-3 space-y-2 text-ink-soft">
              {OFFICIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-ink hover:underline hover:underline-offset-4" rel="noopener">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-ink-soft">
              Announcements are shared through official CAUSE Philippines channels.
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-ink-soft sm:px-8">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
