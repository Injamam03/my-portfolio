import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="container-px mx-auto max-w-6xl py-20">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
        02. Skills
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
        What I work with
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-accent)]">
              {group.label}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
