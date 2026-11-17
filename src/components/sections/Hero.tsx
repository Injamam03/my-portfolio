import Image from "next/image";
import Reveal from "@/components/Reveal";
import { MapPin, ArrowRight, Download, Briefcase, Smartphone, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Headline & Pitch */}
          <div className="flex w-full flex-col items-start gap-6 lg:max-w-2xl">
            {/* Availability Badge */}
            <Reveal direction="up" delay={50}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold tracking-wide text-[var(--color-accent)]">
                  Open to full-time &amp; remote
                </span>
              </div>
            </Reveal>

            {/* Title & Headline */}
            <Reveal direction="up" delay={100}>
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-text-muted)]">
                  Hello, I&apos;m <span className="font-semibold text-[var(--color-text)]">Injamam Ul Hoque Sifat</span>
                </p>
                <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
                  Flutter Mobile App Developer{" "}
                  <span className="block text-[var(--color-accent)]">
                    (Android &amp; iOS)
                  </span>
                </h1>
              </div>
            </Reveal>

            {/* Short 2-line pitch */}
            <Reveal direction="up" delay={150}>
              <p className="max-w-xl text-base text-[var(--color-text-muted)] leading-relaxed sm:text-lg">
                Specializing in building high-performance, pixel-perfect cross-platform mobile apps with Clean Architecture.
                <br className="hidden sm:inline" />
                Turning complex designs into scalable, maintainable Android and iOS experiences people love to use.
              </p>
            </Reveal>

            {/* Location tag */}
            <Reveal direction="up" delay={200}>
              <div className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                <MapPin size={14} className="text-[var(--color-accent)] shrink-0" />
                <span>Cox&apos;s Bazar, Bangladesh &bull; Available Worldwide (UTC+6)</span>
              </div>
            </Reveal>

            {/* 2 CTA Buttons */}
            <Reveal direction="up" delay={250}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-accent-glow)] transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-xl active:scale-95"
                >
                  <span>Explore Apps</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-95"
                >
                  <Download size={15} className="text-[var(--color-accent)]" />
                  <span>Download Resume</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Profile Photo with ambient border */}
          <Reveal direction="up" delay={150}>
            <div className="relative flex shrink-0 items-center justify-center">
              {/* Soft background glow */}
              <div className="absolute -inset-4 -z-10 rounded-full bg-[var(--color-accent-glow)] blur-3xl opacity-60" />

              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl transition-all sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-92 lg:w-92 group">
                <Image
                  src="/assets/profile.jpg"
                  alt="Injamam Ul Hoque Sifat - Flutter Mobile App Developer"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 368px"
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtitle pill overlay on photo */}
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-[var(--color-border)]/80 bg-[var(--color-bg)]/85 p-2.5 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
                      Stack
                    </span>
                    <span className="font-[family-name:var(--font-mono)] font-semibold text-[var(--color-accent)]">
                      Flutter &bull; Dart &bull; Clean Arch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 3: Stats Cards */}
        <Reveal direction="up" delay={300}>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Stat 1: Years */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 backdrop-blur-sm transition-all hover:border-[var(--color-accent)]/50 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  Experience
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Briefcase size={16} />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
                  1+
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                  Years Commercial
                </span>
              </div>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Building production mobile features at Sparktech Agency &amp; client contracts.
              </p>
            </div>

            {/* Stat 2: Apps Shipped */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 backdrop-blur-sm transition-all hover:border-[var(--color-accent)]/50 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  Delivered
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Smartphone size={16} />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
                  3
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                  Apps Shipped
                </span>
              </div>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Complete Flutter applications across Fitness, Marketplace, and Fintech domains.
              </p>
            </div>

            {/* Stat 3: Published Apps (Rule: Use real data, put "TODO" where info missing) */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 backdrop-blur-sm transition-all hover:border-[var(--color-accent)]/50 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  App Stores
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Sparkles size={16} />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--color-accent)] sm:text-4xl">
                  TODO
                </span>
                <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)]">
                  Pending Counts
                </span>
              </div>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Published store listings currently being finalized &amp; linked.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
