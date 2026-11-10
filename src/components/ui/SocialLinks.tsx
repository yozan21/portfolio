// Icon-only social links (GitHub, LinkedIn, Instagram, email), used in the hero header and the footer.
import { socialIcons } from "@/components/ui/icons";
import { site } from "@/content/site";
import { externalLinkProps } from "@/lib/externalLink";

export function SocialLinks() {
  return (
    <ul className="flex gap-1 text-muted">
      {site.contacts.map(({ label, href, icon }) => {
        const Icon = socialIcons[icon];
        return (
          <li key={label}>
            <a
              href={href}
              {...externalLinkProps(href)}
              aria-label={label}
              className="inline-flex size-11 items-center justify-center rounded-full hover:text-accent pointer-fine:size-9"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
