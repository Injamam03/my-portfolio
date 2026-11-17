"use client";

import { navLinks } from "@/data/nav";
import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-[var(--color-border)]/80 bg-[var(--color-bg)]/90 pt-16 pb-12 backdrop-blur-md">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-4 md:col-span-6 lg:col-span-5">
            <div className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xl font-bold tracking-tight">
              <span className="text-[var(--color-accent)]">&gt;</span>
              <span className="text-[var(--color-text)]">injamam</span>
              <span className="text-[var(--color-accent)]">.dev</span>
            </div>

            <p className="max-w-md text-sm text-[var(--color-text-muted)] leading-relaxed">
              Flutter Mobile App Developer crafting responsive, robust, and pixel-accurate applications for Android &amp; iOS. Available for remote roles &amp; contracts worldwide.
            </p>

            {/* Social Icon Row */}
            <div className="mt-2 flex items-center gap-2.5">
              <a
                href="https://github.com/injamam03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Injamam on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5"
              >
                <Github size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/injamam-ul-hoque-sifat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Injamam on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="mailto:injamamulh544@gmail.com"
                aria-label="Send Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5"
              >
                <Mail size={16} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5"
              >
                <FileText size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col gap-3 md:col-span-3 lg:col-span-4">
            <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-3 md:col-span-3 lg:col-span-3">
            <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              Get In Touch
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li>
                <span className="block text-[11px] text-[var(--color-text-muted)]">Location</span>
                <span className="text-[var(--color-text)]">Cox&apos;s Bazar, Bangladesh</span>
              </li>
              <li>
                <span className="block text-[11px] text-[var(--color-text-muted)]">Email</span>
                <a
                  href="mailto:injamamulh544@gmail.com"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  injamamulh544@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-[var(--color-text-muted)]">Availability</span>
                <span className="text-emerald-400 font-mono text-xs">Open to Full-Time &amp; Remote</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)]/60 pt-6 text-xs text-[var(--color-text-muted)] sm:flex-row">
          <p className="font-[family-name:var(--font-mono)]">
            &copy; {new Date().getFullYear()} Injamam Ul Hoque Sifat &bull; Flutter Developer. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
