import Reveal from "@/components/Reveal";
import { buildPrinciples } from "@/data/principles";
import { Layers, Activity, WifiOff, GitMerge } from "lucide-react";

const principleIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "clean-architecture": Layers,
  "state-management": Activity,
  "error-network": WifiOff,
  "cicd-delivery": GitMerge,
};

export default function HowIBuild() {
  return (
    <section id="how-i-build" className="container-px mx-auto max-w-6xl py-20 border-t border-[var(--color-border)]/50">
      <Reveal direction="up">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {"// 03. Architecture Philosophy"}
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/40" />
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          How I Build <span className="text-[var(--color-accent)]">Flutter Apps</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)]">
          Four foundational engineering principles applied to every codebase for longevity, testability, and zero production crashes.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {buildPrinciples.map((principle, index) => {
          const Icon = principleIcons[principle.id] ?? Layers;

          return (
            <Reveal key={principle.id} direction="up" delay={index * 100}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-xl">
                {/* Step indicator & Icon */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-mono)] text-xs font-bold text-[var(--color-accent)]">
                      {principle.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                    {principle.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--color-border)]/50 pt-4">
                  {principle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
