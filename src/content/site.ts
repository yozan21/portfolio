/** Site-wide text and links: identity, hero copy, contact links and calls to action. */

/** A labelled link. */
export type Link = {
  /** Visible link text. */
  label: string;
  /** Destination URL, `mailto:` address or in-page anchor. */
  href: string;
};

export const site = {
  /** Full name, shown as the hero heading and the page title. */
  name: "Yojan Kaphle",
  /** One-line summary, shown under the name and used as the meta description. */
  tagline: "Full-stack developer building crypto products and chess platforms.",
  /** Contact links shown in the hero nav. */
  contacts: [
    { label: "GitHub", href: "https://github.com/yozan21" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yojan-kaphle-7735a2387/",
    },
    { label: "Email", href: "mailto:yojankaphle.01@gmail.com" },
  ] satisfies Link[],
  /** Primary hero button. */
  primaryCta: { label: "View projects", href: "#projects" } satisfies Link,
  /** CV download; the file lives in public/. */
  cv: {
    label: "Download CV",
    href: "/cv.pdf",
    /** File name the browser saves the download as. */
    fileName: "Yojan-Kaphle-CV.pdf",
  },
  /** Contact section copy; its links come from `contacts`. */
  contact: {
    heading: "Contact",
    text: "Open to full-stack roles and freelance work. Email is the quickest way to reach me.",
  },
  /** Footer line, shown after the copyright year. */
  footer: "Yojan Kaphle",
};
