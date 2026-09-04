import { skillGroups } from "@/data/skills";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="container-px mx-auto max-w-6xl py-20">
      <Reveal direction="up">
        <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
          02. Skills
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
          What I work with
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} direction="up" delay={index * 100}>
            <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-transform hover:-translate-y-1 hover:border-[var(--color-accent)]/50">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-accent)]">
                {group.label}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)] flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
