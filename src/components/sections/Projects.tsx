"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { projectsData, projectCategories, Project } from "@/data/projects";
import { ExternalLink, Github, Eye, Smartphone } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  });

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const openLightbox = (project: Project, initialIndex = 0) => {
    setLightboxState({
      isOpen: true,
      images: project.screenshots,
      currentIndex: initialIndex,
      title: project.name,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="projects" className="container-px mx-auto max-w-6xl py-20 border-t border-[var(--color-border)]/50">
      {/* Section Header */}
      <Reveal direction="up">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {"// 04. Selected Works"}
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/40" />
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          Featured <span className="text-[var(--color-accent)]">Flutter Apps</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)]">
          Real cross-platform applications engineered with Clean Architecture, custom UI animations, and robust backend integrations.
        </p>
      </Reveal>

      {/* Category Tabs */}
      <Reveal direction="up" delay={100}>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[var(--color-accent)] text-white shadow-md shadow-[var(--color-accent-glow)]"
                    : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => {
          return (
            <Reveal key={project.id} direction="up" delay={idx * 120}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/60 hover:shadow-xl">
                {/* Phone-Mockup Cover Banner */}
                <div
                  className={`relative flex h-60 items-end justify-center overflow-hidden bg-gradient-to-br ${project.bannerGradient} p-4`}
                >
                  {/* Category Pill Tag */}
                  <span className="absolute left-3.5 top-3.5 z-20 rounded-full border border-white/10 bg-black/50 px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-white/90 backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Lightbox Quick Action button */}
                  <button
                    onClick={() => openLightbox(project, 0)}
                    aria-label={`Preview screenshots of ${project.name}`}
                    className="absolute right-3.5 top-3.5 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-105"
                  >
                    <Eye size={12} />
                    <span>Lightbox ({project.screenshots.length})</span>
                  </button>

                  {/* Phone Mockup Screen Presentation */}
                  <div className="relative flex items-end justify-center">
                    {project.screenshots.map((shot, sIdx) => {
                      const isCenter = sIdx === 0;
                      return (
                        <div
                          key={shot}
                          onClick={() => openLightbox(project, sIdx)}
                          className={`relative cursor-pointer transition-transform duration-300 hover:scale-105 ${
                            isCenter
                              ? "z-10 h-52 w-28 rounded-t-2xl border-4 border-b-0 border-neutral-900 bg-neutral-950 shadow-2xl"
                              : "z-0 h-44 w-24 -ml-4 -rotate-6 rounded-t-xl border-4 border-b-0 border-neutral-900 bg-neutral-950 opacity-90 shadow-lg"
                          }`}
                        >
                          {/* Notch simulation */}
                          <div className="absolute left-1/2 top-1 z-20 h-1.5 w-8 -translate-x-1/2 rounded-full bg-neutral-800" />
                          <div className="relative h-full w-full overflow-hidden rounded-t-[10px]">
                            <Image
                              src={shot}
                              alt={`${project.name} mobile preview ${sIdx + 1}`}
                              fill
                              sizes="120px"
                              className="object-cover object-top"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Store & Code Links (with explicit TODO placeholders as requested) */}
                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[var(--color-border)]/50 pt-4">
                    {/* Play Store */}
                    {project.playStoreUrl && project.playStoreUrl !== "TODO" ? (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1.5 text-xs font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <Smartphone size={13} className="text-[var(--color-accent)]" />
                        <span>Play Store</span>
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span
                        title="Play Store link pending publication"
                        className="flex items-center gap-1 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg)]/60 px-2 py-1 text-[11px] text-[var(--color-text-muted)] cursor-not-allowed"
                      >
                        <Smartphone size={12} className="opacity-60" />
                        <span>Play Store: <strong className="text-[var(--color-accent)] font-mono">TODO</strong></span>
                      </span>
                    )}

                    {/* App Store */}
                    {project.appStoreUrl && project.appStoreUrl !== "TODO" ? (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1.5 text-xs font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <span>App Store</span>
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span
                        title="App Store link pending publication"
                        className="flex items-center gap-1 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg)]/60 px-2 py-1 text-[11px] text-[var(--color-text-muted)] cursor-not-allowed"
                      >
                        <span>iOS: <strong className="text-[var(--color-accent)] font-mono">TODO</strong></span>
                      </span>
                    )}

                    {/* GitHub */}
                    {project.githubUrl && project.githubUrl !== "TODO" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1.5 text-xs font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <Github size={13} />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span
                        title="Client / Proprietary codebase"
                        className="flex items-center gap-1 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg)]/60 px-2 py-1 text-[11px] text-[var(--color-text-muted)] cursor-not-allowed"
                      >
                        <Github size={12} className="opacity-60" />
                        <span>Code: <strong className="font-mono text-neutral-400">TODO (Client)</strong></span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onNavigate={(newIndex) =>
          setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }))
        }
        title={lightboxState.title}
      />
    </section>
  );
}
