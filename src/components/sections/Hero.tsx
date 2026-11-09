// Hero section: name as the display heading, tagline, CTAs and contact links.
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-between gap-24 px-6 py-8 sm:px-10 sm:py-12"
    >
      <nav aria-label="Contact" className="self-end">
        <ul className="flex gap-6 text-sm text-muted">
          {site.contacts.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="hover:text-accent">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h1
          id="hero-title"
          className="text-[clamp(3.5rem,14vw,10rem)] leading-[0.88] font-semibold tracking-[-0.045em]"
        >
          {site.name.split(" ").map((word) => (
            <span key={word} className="block">
              {word}{" "}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-[36ch] text-lg leading-relaxed text-muted sm:text-xl">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.primaryCta.href}
            className="inline-flex h-12 items-center rounded-md bg-accent px-6 font-medium text-background hover:bg-foreground"
          >
            {site.primaryCta.label}
          </a>
          <a
            href={site.cv.href}
            download={site.cv.fileName}
            className="inline-flex h-12 items-center rounded-md border border-border px-6 font-medium hover:bg-surface"
          >
            {site.cv.label}
          </a>
        </div>
      </div>
    </section>
  );
}
