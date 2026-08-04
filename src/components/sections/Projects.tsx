import { projects } from "@/data/projects";
import PhoneMockup from "@/components/PhoneMockup";

export default function Projects() {
  return (
    <section id="projects" className="container-px mx-auto max-w-6xl py-20">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
        03. Projects
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
        Apps I&apos;ve built
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center"
          >
            <PhoneMockup
              screenColor={project.screenColor}
              appName={project.name}
            />

            <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-semibold">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-accent)]">
              {project.tagline}
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
