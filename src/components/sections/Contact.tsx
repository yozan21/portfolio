// Contact section: short invitation, the email address as the main link, then other profiles.
import { site } from "@/content/site";

export function Contact() {
  const email = site.contacts.find((c) => c.href.startsWith("mailto:"));
  const profiles = site.contacts.filter((c) => c !== email);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32"
    >
      <h2 id="contact-title" className="text-4xl font-semibold tracking-tight sm:text-6xl">
        {site.contact.heading}
      </h2>
      <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted sm:text-xl">
        {site.contact.text}
      </p>

      {email && (
        <a
          href={email.href}
          className="mt-10 inline-block font-heading text-2xl font-semibold tracking-tight break-all underline decoration-border underline-offset-8 hover:text-accent sm:text-4xl"
        >
          {email.href.replace("mailto:", "")}
        </a>
      )}

      <ul className="mt-8 flex gap-6">
        {profiles.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="underline decoration-border underline-offset-4 hover:text-accent">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
