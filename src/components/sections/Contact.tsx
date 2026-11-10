// Contact section: short invitation, the email address as the main link, then other profiles.
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { externalLinkProps } from "@/lib/externalLink";

export function Contact() {
  const email = site.contacts.find((c) => c.href.startsWith("mailto:"));
  const profiles = site.contacts.filter((c) => c !== email);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32"
    >
      <SectionHeading id="contact-title" {...site.sections.contact} />

      {email && (
        <a
          href={email.href}
          className="mt-12 inline-block font-heading text-2xl font-light tracking-tight break-all underline decoration-border underline-offset-8 hover:text-accent sm:text-4xl"
        >
          {email.href.replace("mailto:", "")}
        </a>
      )}

      <ul className="mt-8 flex gap-6">
        {profiles.map(({ label, href }) => (
          <li key={label}>
            <a href={href} {...externalLinkProps(href)} className="underline decoration-border underline-offset-4 hover:text-accent">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
