// Projects section: heading and one ProjectCard per entry in content/projects.
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, projectsSection } from "@/content/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32"
    >
      <h2 id="projects-title" className="text-4xl font-semibold tracking-tight sm:text-6xl">
        {projectsSection.heading}
      </h2>
      <div className="mt-12 sm:mt-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
