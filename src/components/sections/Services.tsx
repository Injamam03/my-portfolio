import Reveal from "@/components/Reveal";
import { servicesData } from "@/data/services";
import { Smartphone, Layers, Cloud, Rocket, CheckCircle2 } from "lucide-react";

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Smartphone,
  Layers,
  Cloud,
  Rocket,
};

export default function Services() {
  return (
    <section id="services" className="container-px mx-auto max-w-6xl py-20 border-t border-[var(--color-border)]/50">
      <Reveal direction="up">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {"// 06. Solutions & Offerings"}
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/40" />
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          What I Can <span className="text-[var(--color-accent)]">Do For You</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)]">
          Specialized services tailored for startups, agencies, and companies seeking production-ready Flutter apps.
        </p>
      </Reveal>

      {/* Services Cards Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => {
          const Icon = serviceIcons[service.icon] ?? Smartphone;

          return (
            <Reveal key={service.id} direction="up" delay={index * 100}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-xl">
                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* 3 Short Bullets */}
                <div className="mt-6 border-t border-[var(--color-border)]/50 pt-5">
                  <ul className="space-y-2.5">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-[var(--color-text-muted)] leading-relaxed">
                        <CheckCircle2 size={13} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
