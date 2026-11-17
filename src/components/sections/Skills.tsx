"use client";

import { skillGroups } from "@/data/skills";
import Reveal from "@/components/Reveal";

const groupIcons: Record<string, string> = {
  Core: "⚡",
  "State & Architecture": "🏗️",
  "Backend & Data": "🗄️",
  Tooling: "🛠️",
};

const groupGradients: Record<string, string> = {
  Core: "from-blue-500/20 to-cyan-500/10",
  "State & Architecture": "from-purple-500/20 to-pink-500/10",
  "Backend & Data": "from-orange-500/20 to-amber-500/10",
  Tooling: "from-emerald-500/20 to-teal-500/10",
};

const groupAccents: Record<string, string> = {
  Core: "#3b82f6",
  "State & Architecture": "#a855f7",
  "Backend & Data": "#f97316",
  Tooling: "#10b981",
};

export default function Skills() {
  return (
    <section id="skills" className="container-px mx-auto max-w-6xl py-20">
      <Reveal direction="up">
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--color-mint)]">
            02.
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-mint)]/40" />
          <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--color-mint)]">
            Skills
          </span>
        </div>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">
          What I{" "}
          <span className="relative inline-block">
            <span className="text-[var(--color-mint)]">work with</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-[var(--color-mint)] to-[var(--color-accent)] opacity-60" />
          </span>
        </h2>
        <p className="mt-3 max-w-xl text-[var(--color-text-muted)]">
          Technologies and tools I use to bring ideas to life — from pixel-perfect UI to production-ready apps.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => {
          const accent = groupAccents[group.label] ?? "var(--color-accent)";
          const gradient = groupGradients[group.label] ?? "from-blue-500/10 to-cyan-500/5";
          const icon = groupIcons[group.label] ?? "✦";
          return (
            <Reveal key={group.label} direction="up" delay={index * 100}>
              <div
                className={`group relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br ${gradient} p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                style={{
                  boxShadow: "0 0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${accent}22, 0 0 0 1px ${accent}44`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}66`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 transparent";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "";
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                  style={{ background: accent }}
                />

                {/* Icon */}
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-xl"
                  style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
                >
                  {icon}
                </div>

                {/* Title */}
                <h3
                  className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider"
                  style={{ color: accent }}
                >
                  {group.label}
                </h3>

                {/* Divider */}
                <div
                  className="mt-3 mb-4 h-px w-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${accent}66, transparent)` }}
                />

                {/* Skills list */}
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)] transition-colors duration-150 group-hover:text-[var(--color-text)]"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
