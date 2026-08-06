import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="container-px mx-auto max-w-6xl py-20">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
        04. Experience
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
        Where I&apos;ve worked
      </h2>

      <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60">
        {experience.map((item, index) => (
          <div
            key={item.role + item.company}
            className={`p-6 md:p-8 ${
              index !== experience.length - 1
                ? "border-b border-[var(--color-border)]"
                : ""
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                {item.period}
              </span>
              {item.current && (
                <span className="flex items-center gap-1.5 rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                  Currently working here
                </span>
              )}
            </div>

            <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold md:text-2xl">
              {item.role}
              <span className="text-[var(--color-text-muted)]"> · </span>
              {item.companyUrl ? (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline decoration-[var(--color-accent)]/30 underline-offset-4 transition-colors hover:text-[var(--color-mint)] hover:decoration-[var(--color-mint)]/50"
                >
                  {item.company}
                </a>
              ) : (
                <span className="text-[var(--color-accent)]">{item.company}</span>
              )}
            </h3>

            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)] md:text-[15px]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {point}
                </li>
              ))}
            </ul>

            {item.stack && (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
