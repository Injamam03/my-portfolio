import Reveal from "@/components/Reveal";
import { educationData } from "@/data/education";
import { GraduationCap, BookOpen, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="container-px mx-auto max-w-6xl py-20 border-t border-[var(--color-border)]/50">
      <Reveal direction="up">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {"// 07. Education & Foundations"}
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/40" />
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          Academic <span className="text-[var(--color-accent)]">Background</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)]">
          Rigorous foundation in computer science fundamentals, engineering systems, and algorithms.
        </p>
      </Reveal>

      {/* Cards */}
      <div className="mt-10 space-y-6">
        {educationData.map((item, index) => (
          <Reveal key={index} direction="up" delay={index * 150}>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/60 hover:shadow-xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                {/* Left Column: Degree & Institution */}
                <div className="flex flex-col gap-4 md:col-span-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <GraduationCap size={22} />
                    </div>
                    <span className="rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs font-semibold text-[var(--color-accent)]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text)] sm:text-2xl">
                    {item.degree}
                  </h3>

                  <div className="flex flex-col gap-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
                    <div className="flex items-center gap-2 font-medium text-[var(--color-text)]">
                      <BookOpen size={14} className="text-[var(--color-accent)]" />
                      <span>{item.institution}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[var(--color-accent)]" />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs">
                      <Calendar size={14} className="text-[var(--color-accent)]" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:col-span-1 md:flex md:justify-center">
                  <div className="h-32 w-px bg-[var(--color-border)]" />
                </div>

                {/* Right Column: Key Coursework */}
                <div className="flex flex-col gap-3 md:col-span-4">
                  <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Key Coursework
                  </span>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)]/80 px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
