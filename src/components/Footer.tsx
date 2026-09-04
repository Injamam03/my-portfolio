"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-[var(--color-border)]/60 bg-[var(--color-bg)]/80 pt-16 pb-12 backdrop-blur-sm">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Left Column: Brand & Bio */}
          <div className="flex flex-col gap-4 md:col-span-6 lg:col-span-7">
            <div className="font-[family-name:var(--font-mono)] text-xl font-bold tracking-tight">
              <span className="text-[var(--color-mint)]">&gt;</span>{" "}
              <span className="text-[var(--color-text)]">injamam</span>
              <span className="animate-pulse text-[var(--color-mint)]">_</span>
            </div>

            <p className="max-w-md text-sm text-[var(--color-text-muted)] leading-relaxed">
              Flutter Developer building cross-platform mobile experiences and scalable applications.
            </p>

            {/* Social Icon Buttons */}
            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://github.com/injamam03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/injamam-ul-hoque-sifat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://github.com/injamam03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Code"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <CodeIcon />
              </a>

              <a
                href="mailto:injamamulh544@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          {/* Middle Column: NAVIGATE */}
          <div className="flex flex-col gap-3 md:col-span-3 lg:col-span-3">
            <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              NAVIGATE
            </span>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: CONNECT */}
          <div className="flex flex-col gap-3 md:col-span-3 lg:col-span-2">
            <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              CONNECT
            </span>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="https://github.com/injamam03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/injamam-ul-hoque-sifat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:injamamulh544@gmail.com"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)]/60 pt-6 text-xs text-[var(--color-text-muted)] sm:flex-row">
          <p className="font-[family-name:var(--font-mono)]">
            &copy; {new Date().getFullYear()} Injamam Ul Hoque Sifat &middot; All rights reserved
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 font-[family-name:var(--font-mono)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span>&uarr;</span> back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
