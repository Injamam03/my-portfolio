import { projects } from "@/data/projects";
import ProjectCover from "@/components/ProjectCover";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="container-px mx-auto max-w-6xl py-20">
      <Reveal direction="up">
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
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => {
          const visibleTags = project.tags.slice(0, 3);
          const extraCount = project.tags.length - visibleTags.length;

          return (
            <Reveal key={project.id} direction="up" delay={i * 120}>
              <a
                href={project.playStoreUrl ?? project.githubUrl ?? "#"}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)] hover:shadow-lg"
              >
                <ProjectCover index={i + 1} screenshots={project.screenshots} bannerGradient={project.bannerGradient} />

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold transition-colors group-hover:text-[var(--color-accent)]">
                      {project.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--color-text-muted)]">{project.description}</p>
                  </div>

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
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}