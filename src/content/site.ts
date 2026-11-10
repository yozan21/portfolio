/** Site-wide text and links: identity, hero copy, contact links and calls to action. */

/** A labelled link. */
/** A contact link with the brand icon that represents it. */
export type SocialLink = Link & {
  /** Key into socialIcons in components/ui/icons.tsx. */
  icon: "github" | "linkedin" | "instagram" | "mail";
};

export type Link = {
  /** Visible link text. */
  label: string;
  /** Destination URL, `mailto:` address or in-page anchor. */
  href: string;
};

/** Email link, used by the contact links and the hero's "Contact me" button. */
const email = "mailto:yojankaphle.01@gmail.com";

export const site = {
  /**
   * Public address, used to build absolute links in share previews.
   * shortcut: reads Vercel's production URL; on another host, replace the fallback with the real domain.
   */
  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000",
  /** Hero pill above the eyebrow; shown with an accent dot. */
  availability: "Open to full-stack roles",
  /** Hero eyebrow above the greeting. */
  eyebrow: "<Full-Stack Developer/>",
  /** Hero line directly above the name. */
  greeting: "Hi, I'm",
  /** Full name, shown as the hero heading and the page title. */
  name: "Yojan Kaphle",
  /** Hero paragraph under the name. */
  summary:
    "I build fast, reliable web products, from React frontends to Node backends. I care about clean architecture and interfaces that feel quick, and I'm now exploring agentic AI workflows.",
  /** Short line for search results and the share image; not shown on the page. Keep under ~160 characters. */
  description: "Full-stack developer building fast, reliable web products, from React frontends to Node backends.",
  /** Contact links: icon-only in the hero header and footer, text in the Contact section. Labels double as aria-labels. */
  contacts: [
    { label: "GitHub", href: "https://github.com/yozan21", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yojan-kaphle-7735a2387/",
      icon: "linkedin",
    },
    { label: "Instagram", href: "https://www.instagram.com/yojan_kaphle/", icon: "instagram" },
    { label: "Email", href: email, icon: "mail" },
  ] satisfies SocialLink[],
  /** Primary hero button. */
  /** Scroll cue under the hero buttons: text followed by a mouse icon, linking to the projects. */
  scrollCue: { label: "Scroll down to see projects", href: "#projects" } satisfies Link,
  /** Secondary hero button. */
  contactCta: { label: "Contact me", href: email } satisfies Link,
  /** CV button; the PDF lives in public/ and opens in a new tab. */
  cvCta: { label: "View CV", href: "/Yojan_Kaphle_Resume.pdf" } satisfies Link,
  /** Heading text for each section, rendered by SectionHeading. */
  sections: {
    projects: {
      label: "Projects",
      title: "Things I've built",
      summary:
        "A few apps I built on my own, from real-time chess to a room rental platform. Each one lists the decisions behind it, not just the features.",
    },
    skills: {
      label: "Skills",
      title: "What I work with",
      summary:
        "Mostly JavaScript and TypeScript across the stack, with Python where it fits. Right now I'm learning to build with LLMs and agents.",
    },
    contact: {
      label: "Contact",
      title: "Get in touch",
      summary: "Open to full-stack roles and freelance work. Email is the quickest way to reach me.",
    },
  },
  /** Read by screen readers after any link that opens in a new tab. */
  newTabNote: "(opens in a new tab)",
  /** Footer line, shown after the copyright year. */
  footer: "Yojan Kaphle",
};
