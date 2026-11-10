// Hero section: icon contact links, then availability pill, eyebrow, greeting, name, summary, CTAs (contact, CV) and a scroll cue to the projects.
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  MouseIcon,
} from "@/components/ui/icons";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/content/site";
import { externalLinkProps } from "@/lib/externalLink";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-4 pb-8 sm:gap-12 sm:px-10 sm:pt-8"
    >
      <nav aria-label="Contact" className="-mr-2 self-end">
        <SocialLinks />
      </nav>

      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          {site.availability}
        </p>
        <p className="mt-6 text-lg font-medium tracking-wide text-accent sm:mt-8 sm:text-xl">
          {site.eyebrow}
        </p>
        <p className="mt-4 font-heading text-2xl font-light sm:text-3xl">
          {site.greeting}
        </p>
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

        <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-muted sm:mt-8 sm:text-lg lg:text-xl">
          {site.summary}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:gap-4">
          <a
            href={site.contactCta.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm bg-accent px-4 font-medium whitespace-nowrap max-[359px]:px-3 text-background hover:bg-foreground sm:gap-3 sm:px-8 sm:text-base sm:pointer-coarse:h-14"
          >
            {site.contactCta.label}
            <ArrowRightIcon size={16} className="shrink-0 max-[359px]:hidden" />
          </a>
          <a
            href={site.cvCta.href}
            {...externalLinkProps(site.cvCta.href)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm border border-accent px-4 font-medium whitespace-nowrap max-[359px]:px-3 hover:bg-surface sm:gap-3 sm:px-8 sm:text-base sm:pointer-coarse:h-14"
          >
            {site.cvCta.label}
            <ExternalLinkIcon
              size={16}
              className="shrink-0 max-[359px]:hidden"
            />
          </a>
        </div>

        <a
          href={site.scrollCue.href}
          aria-label={`${site.scrollCue.before} ${site.scrollCue.after}`}
          className="mx-auto mt-8 hidden w-fit items-center gap-4 py-2 text-sm text-muted hover:text-accent lg:pointer-fine:flex"
        >
          {site.scrollCue.before}
          <span
            aria-hidden="true"
            className="h-px w-16 bg-current opacity-40"
          />
          <MouseIcon size={24} />
          <span
            aria-hidden="true"
            className="h-px w-16 bg-current opacity-40"
          />
          {site.scrollCue.after}
        </a>
      </div>
    </section>
  );
}
