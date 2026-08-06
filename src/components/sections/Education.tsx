import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="container-px mx-auto max-w-6xl py-20">
      {/* Section Header */}
      <div className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
        <GraduationCapIcon className="h-4 w-4" />
        <span>./education</span>
      </div>

      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
        Academic <span className="text-[var(--color-mint)]">Background</span>
      </h2>

      <p className="mt-3 max-w-xl text-[var(--color-text-muted)] md:text-lg">
        Foundation in computer science fundamentals and engineering principles.
      </p>

      {/* Cards */}
      <div className="mt-10 space-y-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
              {/* Left Column - Degree Details */}
              <div className="flex flex-col gap-4 md:col-span-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-mint)]/30 bg-[var(--color-mint)]/10 text-[var(--color-mint)]">
                    <GraduationCapIcon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--color-accent)]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-accent)] sm:text-2xl">
                  {item.degree}
                </h3>

                <div className="flex flex-col gap-2.5 text-sm text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-2.5 font-medium text-[var(--color-text)]">
                    <BookIcon className="h-4 w-4 text-[var(--color-mint)]" />
                    <span>{item.institution}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPinIcon className="h-4 w-4 text-[var(--color-mint)]" />
                    <span>{item.location}</span>
                  </div>

                  <div className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-xs">
                    <CalendarIcon className="h-4 w-4 text-[var(--color-mint)]" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>

              {/* Vertical Divider for MD+ screens */}
              <div className="hidden md:col-span-1 md:flex md:justify-center">
                <div className="h-full w-px bg-[var(--color-border)]" />
              </div>

              {/* Right Column - Key Coursework */}
              <div className="flex flex-col gap-3 md:col-span-4">
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold tracking-wider uppercase text-[var(--color-text-muted)]">
                  KEY COURSEWORK
                </span>

                <div className="flex flex-wrap gap-2 pt-1">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/80 px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Icons
function GraduationCapIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function BookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function MapPinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
