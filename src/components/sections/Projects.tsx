import { projects } from "@/data/projects";
import ProjectCover from "@/components/ProjectCover";

export default function Projects() {
  return (
    <section id="projects" className="container-px mx-auto max-w-6xl py-20">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
        ./flutter-projects
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">
        Flutter <span className="text-[var(--color-accent)]">Projects</span>
      </h2>
      <p className="mt-3 text-[var(--color-text-muted)]">
        {projects.length} apps built with Flutter.{" "}
        <span className="font-[family-name:var(--font-mono)] text-[var(--color-mint)]">
          Click a card to explore details.
        </span>
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => {
          const visibleTags = project.tags.slice(0, 3);
          const extraCount = project.tags.length - visibleTags.length;

          return (
            <a key={project.id} href={project.playStoreUrl ?? project.githubUrl ?? "#"} className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]">
              <ProjectCover index={i + 1} screenshots={project.screenshots} bannerGradient={project.bannerGradient} />

              <div className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-[var(--color-text-muted)]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <span key={tag} className="rounded-md border border-[var(--color-border)] px-2 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                      {tag}
                    </span>
                  ))}
                  {extraCount > 0 && (
                    <span className="rounded-md border border-[var(--color-border)] px-2 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                      +{extraCount}
                    </span>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}