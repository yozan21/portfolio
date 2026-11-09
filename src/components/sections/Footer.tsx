// Site footer: copyright line.
import { site } from "@/content/site";

export async function Footer() {
  "use cache"; // cacheComponents rejects uncached new Date() while prerendering
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 text-sm text-muted sm:px-10">
      <p className="border-t border-border py-8">
        © {new Date().getFullYear()} {site.footer}
      </p>
    </footer>
  );
}
