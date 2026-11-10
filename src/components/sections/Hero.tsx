// Hero section: contact links, then availability pill, eyebrow, greeting, name, summary and CTAs.
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pt-8 pb-8 sm:px-10 sm:pt-12 lg:gap-16"
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
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          {site.availability}
        </p>
        <p className="mt-8 text-lg font-medium tracking-wide text-accent sm:text-xl">{site.eyebrow}</p>
        <p className="mt-4 font-heading text-2xl font-light sm:text-3xl">{site.greeting}</p>
        <h1
          id="hero-title"
          className="mt-2 text-5xl leading-[0.95] tracking-[-0.03em] lg:text-6xl xl:text-[5rem]"
        >
          {site.name.split(" ").map((word) => (
            <span key={word} className="block">
              {word}{" "}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted sm:text-xl">{site.summary}</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:gap-4">
          <a
            href={site.primaryCta.href}
            className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-4 font-medium whitespace-nowrap max-[359px]:px-3 max-[359px]:text-sm text-background hover:bg-foreground sm:px-8 pointer-fine:h-12"
          >
            {site.primaryCta.label}
          </a>
          <a
            href={site.contactCta.href}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-accent px-4 font-medium whitespace-nowrap max-[359px]:px-3 max-[359px]:text-sm hover:bg-surface sm:gap-3 sm:px-8 pointer-fine:h-12"
          >
            {site.contactCta.label}
            <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
