import Reveal from "@/components/Reveal";
import { CheckCircle2, Smartphone, Layers, ShieldCheck } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Smartphone,
      title: "Cross-Platform Excellence",
      description: "Unified Flutter codebases delivering native performance across Android & iOS devices.",
    },
    {
      icon: Layers,
      title: "Clean Architecture",
      description: "Layered Domain, Data, and Presentation layers for rock-solid code maintainability.",
    },
    {
      icon: ShieldCheck,
      title: "Production Tested",
      description: "Experienced with REST APIs, Firebase backends, payment gateways, and store releases.",
    },
  ];

  return (
    <section id="about" className="container-px mx-auto max-w-6xl py-20 border-t border-[var(--color-border)]/50">
      <Reveal direction="up">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {"// 01. About Me"}
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/40" />
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          Building resilient mobile experiences that bridge{" "}
          <span className="text-[var(--color-accent)]">design &amp; performance.</span>
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left: Bio narrative */}
        <div className="space-y-5 text-[var(--color-text-muted)] leading-relaxed lg:col-span-7">
          <Reveal direction="up" delay={100}>
            <p className="text-base sm:text-lg">
              I am a dedicated <strong className="text-[var(--color-text)] font-semibold">Flutter Mobile App Developer</strong> based in Cox&apos;s Bazar, Bangladesh, currently developing high-quality mobile applications at <span className="text-[var(--color-accent)] font-medium">Sparktech Agency</span>.
            </p>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <p className="text-sm sm:text-base">
              My engineering approach prioritizes <strong className="text-[var(--color-text)]">Clean Architecture</strong>, clean separation of concerns, and deterministic state management using <strong className="text-[var(--color-text)]">BLoC</strong> and <strong className="text-[var(--color-text)]">GetX</strong>. I enjoy translating complex Figma user flows into pixel-perfect Flutter widgets with fluid animations, robust offline caching (SQLite/Hive), and resilient network error handling.
            </p>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="text-sm sm:text-base">
              Whether building full-lifecycle client projects from the ground up or optimizing existing codebases for production, I strive for clean code, smooth 60fps frame rates, and zero regressions.
            </p>
          </Reveal>

          <Reveal direction="up" delay={250}>
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs font-[family-name:var(--font-mono)] text-[var(--color-text)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[var(--color-accent)]" /> Clean Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[var(--color-accent)]" /> BLoC &amp; GetX
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[var(--color-accent)]" /> REST &amp; Firebase
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[var(--color-accent)]" /> CI/CD &amp; Store Setup
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right: Quick pillars / cards */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} direction="up" delay={150 + index * 100}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-5 transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-text)]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
