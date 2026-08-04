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

      <div className="mt-10 space-y-8 border-l border-[var(--color-border)] pl-6">
        {experience.map((item) => (
          <div key={item.role + item.company} className="relative">
            <span className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
              {item.period}
            </p>
            <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">
              {item.role} · <span className="text-[var(--color-accent)]">{item.company}</span>
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-muted)]">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
