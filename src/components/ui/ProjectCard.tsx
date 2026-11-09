// One project row: title and role, then summary, decisions, stack tags and links.
import { projectsSection, type Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const links = [
    { label: projectsSection.liveLabel, href: project.liveUrl },
    { label: projectsSection.repoLabel, href: project.repoUrl },
  ].filter((link) => link.href);

  return (
    <article className="grid gap-6 border-t border-border py-10 last:border-b lg:grid-cols-12 lg:gap-10 lg:py-14">
      <header className="lg:col-span-4">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.role}</p>
      </header>

      <div className="lg:col-span-8">
        <p className="max-w-[60ch] text-lg leading-relaxed">{project.summary}</p>

        <h4 className="mt-8 text-sm font-medium text-muted">{projectsSection.decisionsLabel}</h4>
        <ul className="mt-3 max-w-[60ch] list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-border">
          {project.decisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>

        <ul aria-label={projectsSection.stackLabel} className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-sm border border-border px-2 py-1 text-xs text-muted">
              {tech}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <ul className="mt-8 flex gap-6 text-sm">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="underline decoration-border underline-offset-4 hover:text-accent"
                >
                  {label}
                  <span className="sr-only"> {project.title}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
