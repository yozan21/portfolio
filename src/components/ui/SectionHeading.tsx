// Shared section heading: accent "<Label/>" eyebrow, large display title and a muted summary.

type SectionHeadingProps = {
  /** Id for the title, referenced by the section's aria-labelledby. */
  id: string;
  label: string;
  title: string;
  summary: string;
};

export function SectionHeading({ id, label, title, summary }: SectionHeadingProps) {
  return (
    <header>
      <p className="text-lg font-medium tracking-wide text-accent sm:text-xl">
        {"<"}
        {label}
        {"/>"}
      </p>
      <h2 id={id} className="mt-4 text-4xl leading-[1.1] font-medium tracking-tight lg:text-5xl">
        {title}
      </h2>
      <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted sm:text-xl">{summary}</p>
    </header>
  );
}
