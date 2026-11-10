// Site footer: copyright line and icon-only social links.
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/content/site";

export async function Footer() {
  "use cache"; // cacheComponents rejects uncached new Date() while prerendering
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 text-sm text-muted sm:px-10">
      <div className="flex items-center justify-between gap-4 border-t border-border py-6">
        <p>
          © {new Date().getFullYear()} {site.footer}
        </p>
        <nav aria-label="Social links" className="-mr-2">
          <SocialLinks />
        </nav>
      </div>
    </footer>
  );
}
