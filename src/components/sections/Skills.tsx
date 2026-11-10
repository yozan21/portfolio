// Skills section: skill groups as a definition list of plain text.
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32"
    >
      <SectionHeading id="skills-title" {...site.sections.skills} />
      <dl className="mt-12 sm:mt-16">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="grid gap-2 border-t border-border py-6 last:border-b lg:grid-cols-12 lg:gap-10"
          >
            <dt className="font-medium lg:col-span-4">{group.name}</dt>
            <dd className="leading-relaxed text-muted lg:col-span-8">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
