// Projects section: heading and one ProjectCard per entry in content/projects.
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32"
    >
      <SectionHeading id="projects-title" {...site.sections.projects} />
      <div className="mt-12 sm:mt-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
