import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 py-24 md:flex-row md:items-center md:gap-16 md:py-32">
      {/* Left: Text Content */}
      <div className="flex w-full flex-col items-start gap-6 md:flex-1">

        <Reveal direction="up" delay={50}>
          <div className="flex items-center gap-2 rounded-full border border-[var(--color-mint)]/30 bg-[var(--color-mint)]/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-mint)]" />
            <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--color-mint)]">
              Available for work
            </span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-mint)] bg-clip-text text-transparent">
              Injamam Ul Hoque Sifat.
            </span>
            <br />
            <span className="text-[var(--color-text)]">
              I build Flutter apps{" "}
            </span>
            <span className="text-[var(--color-text-muted)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              people love to use.
            </span>
          </h1>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p className="max-w-xl text-[var(--color-text-muted)] md:text-lg leading-relaxed">
            Flutter Developer passionate about creating fast, scalable, and user-friendly mobile applications with clean architecture, responsive UI, and production-ready solutions.
          </p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-mint)] px-6 py-2.5 text-sm font-semibold text-[var(--color-bg)] shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:shadow-[var(--color-accent)]/40 hover:scale-105 active:scale-95"
            >
              View Projects →
            </a>
            <a
              href="/resume.pdf"
              className="rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal direction="up" delay={400}>
          <div className="mt-2 flex items-center gap-6 border-t border-[var(--color-border)]/50 pt-6">
            {[
              { value: "2+", label: "Years Exp." },
              { value: "15+", label: "Projects" },
              { value: "5★", label: "App Rating" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-mint)]">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Right: Profile Image */}
      <Reveal direction="up" delay={150}>
        <div className="relative flex shrink-0 justify-center md:justify-end">
          {/* Background blur glow */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-mint)]/15 blur-2xl" />

          {/* Image with subtle shadow */}
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/assets/profile.jpg"
              alt="Injamam Ul Hoque Sifat"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}