/**
 * All public copy for the site lives here so it can be reviewed and edited
 * without touching layout code.
 *
 * Sources: the approved editorial brief (GitHub issue #1) and the
 * "[Aug 2026] About Us" document in the CAUSE Philippines Drive. Anything not
 * yet confirmed by the team is gated behind a flag below and listed in
 * README.md under "Outstanding confirmations".
 */

/**
 * Impact figures from the August 2026 About Us draft. They have NOT been
 * independently audited. Keep this `false` until the CAUSE team confirms the
 * numbers; the site then shows qualitative milestones instead.
 */
export const SHOW_UNCONFIRMED_METRICS = false;

/**
 * Official public contact address. Leave `null` until the team confirms which
 * address should be published; CTAs fall back to explanatory text.
 */
export const CONTACT_EMAIL: string | null = null;

/**
 * Verified official social or web links for the footer. Add entries only
 * after the team confirms each URL.
 */
export const OFFICIAL_LINKS: { label: string; href: string }[] = [];

export const site = {
  name: "CAUSE Philippines",
  fullName: "Coalition of American University Student Experiences Philippines",
  founded: 2018,
  description:
    "CAUSE Philippines is a student-run nonprofit helping low-income Filipino students navigate pathways to higher education and scholarships around the world through mentorship and education sessions.",
  applicationNotice:
    "Application information will be announced through official CAUSE channels.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
];

export const hero = {
  eyebrow: "Student-run nonprofit · Since 2018",
  title: "Opportunity should have no borders.",
  subtitle:
    "Helping Filipino students navigate pathways to higher education around the world.",
  belief: "Talent is everywhere, but opportunity is not.",
};

/** Shown in place of numbers while SHOW_UNCONFIRMED_METRICS is false. */
export const milestones = [
  {
    label: "Since 2018",
    detail:
      "Founded by three scholarship recipients and run by students ever since.",
  },
  {
    label: "Nationwide",
    detail:
      "Supporting students from Luzon, the Visayas, and Mindanao — not just Metro Manila.",
  },
  {
    label: "One-on-one",
    detail:
      "Individual mentorship from students studying at universities around the world.",
  },
];

/** August 2026 draft figures — awaiting team confirmation. */
export const metrics = [
  { value: "250+", label: "mentees connected with mentors" },
  { value: "160+", label: "mentors across 90+ universities worldwide" },
  { value: "$13.2M", label: "in scholarship awards reported by mentees since 2018" },
];

export const about = {
  history: [
    "CAUSE Philippines was co-founded by Janelle Perez, Rafael Santiago, and Philippe Bungabong — three students who graduated from high school in 2018 and received scholarships to pursue college in the United States.",
    "They connected through a shared passion for educational equity and the belief that talent is everywhere but opportunity is not. Through their initiative, the Coalition of American University Student Experiences Philippines was created, committed to helping low-income Filipino students receive a quality college education around the globe.",
  ],
  belief: "Where a student comes from should not determine how far they can go.",
  values: [
    "Low-income students are the most connected to the pressing issues of the Philippines. We want to help them pursue a multifaceted, global college education that broadens how they might address their communities’ problems in the future.",
    "Different issues permeate different communities, so we support students from all over the country — not just in the capital, but also in far-flung provinces where problems often remain unattended.",
    "By helping these students develop their skills, we strive to cultivate generations of scholars who will foster multi-sectoral growth across the Philippines — and to be a community they can rely on.",
  ],
  regions: [
    { name: "Luzon", focus: "solving traffic and urban mobility" },
    { name: "Visayas", focus: "geospatial support for fishing communities" },
    { name: "Mindanao", focus: "advancing inclusive development" },
  ],
  founders: [
    { name: "Janelle Perez", initials: "JP" },
    { name: "Rafael Santiago", initials: "RS" },
    { name: "Philippe Bungabong", initials: "PB" },
  ],
};

export const programs = [
  {
    id: "mentorship",
    title: "Mentorship",
    summary:
      "Individualized college application mentorship. Each mentee works with mentors who have gone through the process themselves — from building a school list to submitting applications and weighing offers.",
    points: [
      "One-on-one guidance through each stage of the application",
      "Mentors studying at universities in the Philippines and abroad",
      "Support with scholarship and financial aid applications",
    ],
  },
  {
    id: "workshops",
    title: "College Application Workshops",
    summary:
      "A webinar series that supplements one-on-one mentorship. Sessions move from general questions to specifics, led by invited mentors.",
    points: [
      "Application timelines and what to prepare",
      "Letters of recommendation",
      "Awards and extracurriculars",
      "Essays: Common App and supplementals",
      "Interviews",
      "Planning ahead in Grade 11",
      "Living and studying abroad",
      "Applying for financial aid",
      "Next steps after decisions",
      "Graduate studies",
    ],
  },
  {
    id: "outreach",
    title: "Community & Outreach",
    summary:
      "School and community outreach that brings information about studying abroad to students who might not otherwise hear about it — especially outside Metro Manila.",
    points: [
      "Information sessions for schools and communities",
      "Collaborations with organizations that share our mission",
      "Open educational sessions for aspiring applicants",
    ],
  },
];

export const journey = [
  {
    step: "Learn",
    detail:
      "Attend open sessions and webinars to understand what applying abroad involves.",
  },
  {
    step: "Apply",
    detail:
      "When mentee applications open, apply through the official CAUSE channels.",
  },
  {
    step: "Connect",
    detail:
      "Work with mentors who have navigated the same applications and scholarships.",
  },
  {
    step: "Grow",
    detail:
      "Build your applications, then stay on as part of a community that gives back.",
  },
];

/** Examples of historical mentee admissions — never present these as partners. */
export const universities = [
  "Harvard University",
  "Massachusetts Institute of Technology",
  "Yale University",
  "Princeton University",
  "Stanford University",
  "University of Cambridge",
  "New York University",
  "Smith College",
  "Wesleyan University",
];

/**
 * Photo gallery for the Impact section. Empty until the team supplies photos
 * with publication consent. Add files under /public/photos and list them here,
 * e.g. { src: "/photos/webinar-2025.jpg", alt: "Mentors leading a webinar" }.
 */
export const gallery: { src: string; alt: string }[] = [];

/** Past collaborations named in CAUSE materials. Current status unverified. */
export const collaborations = [
  {
    name: "EducationUSA Philippines",
    detail:
      "The U.S. Department of State’s advising network on higher education. CAUSE has collaborated with EducationUSA on events, including a webinar series on applying abroad.",
  },
  {
    name: "Workbean",
    detail: "A platform of company cultures for job seekers in Asia.",
  },
];

export const involvement = [
  {
    id: "mentees",
    title: "For students",
    heading: "Become a mentee",
    body: "If you are a Filipino high school student hoping to study abroad — especially if cost feels like a barrier — CAUSE mentorship and webinars are for you.",
  },
  {
    id: "mentors",
    title: "For university students",
    heading: "Become a mentor",
    body: "Studying at a university in the Philippines or abroad? Share what you learned with the next generation of applicants.",
  },
  {
    id: "partners",
    title: "For organizations",
    heading: "Partner with us",
    body: "Schools, nonprofits, and organizations that share our mission can work with CAUSE on outreach, sessions, and student support.",
  },
];
