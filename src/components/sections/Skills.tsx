"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { skillsData, skillCategories, SkillCategory, SkillLevel } from "@/data/skills";
import { Check, Star, Wrench, Layers, Cloud, Rocket } from "lucide-react";

const categoryIcons: Record<SkillCategory, React.ComponentType<{ size?: number; className?: string }>> = {
  Mobile: SmartphoneIcon,
  "Architecture & State": Layers,
  "Cloud & APIs": Cloud,
  Publishing: Rocket,
};

function SmartphoneIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

const levelBadgeStyles: Record<SkillLevel, { label: string; badge: string }> = {
  Expert: {
    label: "Expert",
    badge: "border-[var(--color-accent)]/50 bg-[var(--color-accent-soft)] text-[var(--color-accent)] font-semibold",
  },
  Advanced: {
    label: "Advanced",
    badge: "border-sky-500/40 bg-sky-500/10 text-sky-300 font-medium",
  },
  Familiar: {
    label: "Familiar",
    badge: "border-slate-600/40 bg-slate-800/40 text-slate-300 font-normal",
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoriesWithAll = ["All", ...skillCategories];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="container-px mx-auto max-w-6xl py-20 border-t border-[var(--color-border)]/50">
      <Reveal direction="up">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {"// 02. Technical Arsenal"}
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/40" />
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          Skills &amp; <span className="text-[var(--color-accent)]">Proficiencies</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)]">
          Tested, production-proven tools and frameworks organized by expertise level and architecture domain.
        </p>
      </Reveal>

      {/* Category Filter Tabs */}
      <Reveal direction="up" delay={100}>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categoriesWithAll.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[var(--color-accent)] text-white shadow-md shadow-[var(--color-accent-glow)]"
                    : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Skills Grid */}
      <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill, index) => {
          const CategoryIcon = categoryIcons[skill.category] ?? Wrench;
          const levelInfo = levelBadgeStyles[skill.level];

          return (
            <Reveal key={skill.name} direction="up" delay={50 + (index % 6) * 40}>
              <div className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-surface)] hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent-soft)]">
                    <CategoryIcon size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-text-muted)]">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Level label badge */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider ${levelInfo.badge}`}
                  >
                    {skill.level === "Expert" && <Star size={10} className="fill-current" />}
                    {skill.level === "Advanced" && <Check size={10} />}
                    {levelInfo.label}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Legend */}
      <Reveal direction="up" delay={200}>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-surface-2)]/40 p-4 text-xs text-[var(--color-text-muted)]">
          <span className="font-[family-name:var(--font-mono)] text-[11px]">
            Proficiency Levels:
          </span>
          <div className="flex flex-wrap items-center gap-4 font-[family-name:var(--font-mono)] text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <strong>Expert:</strong> Production-mastered, day-to-day workflow
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <strong>Advanced:</strong> Highly proficient in complex apps
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <strong>Familiar:</strong> Solid working foundation &amp; integration
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
