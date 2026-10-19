# CAUSE Philippines website

The public website for **CAUSE Philippines** (Coalition of American University
Student Experiences Philippines): a student-run nonprofit helping low-income
Filipino students navigate pathways to higher education around the world.

This is a **fully static** site. There is no database, login, CMS, form
processing, analytics, or API. `npm run build` produces plain HTML, CSS, and JS
in `out/` that any static host can serve.

## Stack

- [Next.js 16](https://nextjs.org) App Router with `output: "export"`
- TypeScript, Tailwind CSS 4
- Fonts: Fraunces (headings) and Source Sans 3 (body), self-hosted at build
  time through `next/font/google`

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Checks:

```bash
npm run lint
npm run typecheck
npm run build      # writes the static site to out/
npm start          # serves out/ locally to preview the production build
```

## Deploy

Upload the contents of `out/` to any static host.

- **Vercel:** import the repository. The Next.js preset detects the static
  export automatically.
- **Netlify / Cloudflare Pages:** build command `npm run build`, publish
  directory `out`.
- **GitHub Pages:** publish `out/`. If the site is served from a sub-path
  (e.g. `/CAUSE-Website`), add `basePath` to `next.config.ts` first.

Set `SITE_URL` (e.g. `SITE_URL=https://example.org npm run build`) so social
previews use absolute URLs on the production domain. It defaults to
`http://localhost:3000`.

## Editing content

All copy lives in [`src/content/site.ts`](src/content/site.ts). Layout
components in `src/components/` only read from it.

Switches at the top of that file control content that still needs sign-off:

| Setting | Default | What it does |
| --- | --- | --- |
| `SHOW_UNCONFIRMED_METRICS` | `false` | When `true`, the impact strip shows the August 2026 figures (250+ mentees, 160+ mentors, 90+ universities, $13.2M in reported scholarships) with a "not independently audited" note. When `false`, it shows qualitative milestones instead. |
| `CONTACT_EMAIL` | `null` | When set, each "Get involved" card gets a `mailto:` link. Until then, cards say that applications will be announced through official CAUSE channels. |
| `OFFICIAL_LINKS` | `[]` | Verified social or web links shown in the footer. |
| `gallery` | `[]` | Photos for the Impact section. Put files in `public/photos/` and list each one with `src` and descriptive `alt` text. |

## Page structure

A single page with anchored sections: Home (hero and impact strip), About,
Programs, How it works, Impact, Get involved, and the footer. The header
collapses into an accessible disclosure menu on small screens. There is also a
custom 404 page.

## Sources

Copy comes from the approved editorial brief
([issue #1](https://github.com/pope-cruz/CAUSE-Website/issues/1)) and these
CAUSE Philippines documents. Access to them is restricted to the team.

- [About Us (Aug 2026)](https://docs.google.com/document/d/1-CHGjjfZqY2Ofw_vfQ6n0LcOlcrCDSgDgULgdB01rkE/edit): history, values, founders, and candidate metrics
- [Logo and color swatches](https://drive.google.com/drive/folders/1ZToQp3cPCnuFhZ9KFAVUj246XEuAL810): palette decoded from `cause-swatch.aco`
- [2026–27 Webinar Curriculum](https://docs.google.com/document/d/1as5l7CdaD5ybN6pnCiyKqFzS_iW_SBw6x9LFqTf5d5U/edit): workshop topics (speakers and dates are deliberately not published)
- Photo archives: [site photos](https://drive.google.com/drive/folders/1EAYIrwTHqnxolL3bNep55yNbIV9GAsCf), [CAUSE takeover photos](https://drive.google.com/drive/folders/1-2H41DScO1-5x1IGqJ2W3u8OvKU3kkRo)

Brand palette (from the official swatch file): `#305db6`, `#719aed`,
`#79dbff`, `#c3dff4`, `#ffffff`, `#fcbddf`, `#f96565`, `#d94949`.

## Outstanding confirmations

Before launch, the CAUSE team should confirm:

1. **Impact figures.** 250+ mentees, 160+ mentors, 90+ universities, and
   $13.2M (₱630M) in reported scholarship awards since 2018 come from the
   August 2026 draft and are not audited. They stay hidden until
   `SHOW_UNCONFIRMED_METRICS` is turned on.
2. **Official contact address.** Choose the address to publish for mentee,
   mentor, and partner inquiries, then set `CONTACT_EMAIL`.
3. **Official social links.** List them in `OFFICIAL_LINKS`.
4. **Past collaborations.** The site describes EducationUSA Philippines and
   Workbean as organizations CAUSE "has worked with", not as current partners.
   Confirm that this wording is accurate and what the Workbean relationship was.
5. **University examples.** Harvard, MIT, Yale, Princeton, Stanford,
   Cambridge, NYU, Smith, and Wesleyan are listed as historical mentee
   admissions. Yale-NUS (closed in 2025) is omitted.
6. **Program descriptions.** The bullet points under Mentorship and Community
   & Outreach were written from the brief. Review them against how programs
   currently run.
7. **Founders.** Names only, shown with initials. Add photos or bios only with
   each founder's permission.
8. **Production domain.** Needed for `SITE_URL`.

## Assets needed

- **Official logo** as SVG or transparent PNG. The Drive has `CAUSE Logo.jpg`.
  Until a logo is added, the site uses a text wordmark (`src/components/Wordmark.tsx`).
- **Photos** for the hero and gallery, with consent from everyone pictured.
  No photos are published yet.
- **Brand fonts.** The brand kit includes TT Chocolates and Appetite, which are
  commercial fonts and are not copied here. If CAUSE holds web licenses, they
  can replace Fraunces and Source Sans 3 in `src/app/layout.tsx`.
