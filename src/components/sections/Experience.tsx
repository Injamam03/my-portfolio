import Reveal from "@/components/Reveal";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="container-px mx-auto max-w-6xl py-20 border-t border-[var(--color-border)]/50">
      <Reveal direction="up">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {"// 05. Work History"}
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/40" />
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          Professional <span className="text-[var(--color-accent)]">Experience</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)]">
          Real-world agency and client experience building commercial mobile solutions.
        </p>
      </Reveal>

      {/* Experience Timeline */}
      <div className="relative mt-12 pl-6 sm:pl-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[var(--color-border)]">
        {experienceData.map((item, index) => (
          <Reveal key={item.company + item.role} direction="up" delay={index * 150}>
            <div className="relative mb-10 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/60 hover:shadow-xl">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                      <Calendar size={13} className="text-[var(--color-accent)]" />
                      {item.period}
                    </span>

                    {item.location && (
                      <span className="flex items-center gap-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                        <MapPin size={13} className="text-[var(--color-accent)]" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs font-semibold text-[var(--color-accent)]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                      Current Role
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text)] sm:text-2xl">
                    {item.role}
                  </h3>
                  <span className="text-[var(--color-text-muted)] font-mono">@</span>
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-accent)] hover:underline decoration-[var(--color-accent)]/40 underline-offset-4"
                    >
                      <span>{item.company}</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-accent)]">
                      {item.company}
                    </span>
                  )}
                </div>

                {/* 3 Impact Bullets */}
                <div className="mt-5 space-y-2.5">
                  <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--color-text-muted)]">
                    Key Impacts &amp; Contributions:
                  </span>
                  <ul className="space-y-2">
                    {item.impactBullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--color-border)]/50 pt-4">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)]/70 px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
