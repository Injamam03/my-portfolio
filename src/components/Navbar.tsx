"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X, FileText, Send } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          return;
        }
      }

      if (window.scrollY < 80) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)]/80 bg-[var(--color-bg)]/85 backdrop-blur-md transition-colors">
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="#"
          className="group flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-base font-bold tracking-tight transition-opacity hover:opacity-90"
        >
          <span className="text-[var(--color-accent)]">&gt;</span>
          <span className="text-[var(--color-text)] font-semibold">injamam</span>
          <span className="text-[var(--color-accent)]">.dev</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-1 backdrop-blur-md shadow-sm xl:flex"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-accent)] text-white shadow-sm"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-border)]/50 hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle />

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-text)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-95"
          >
            <FileText size={13} className="text-[var(--color-accent)]" />
            <span>Resume</span>
          </a>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_16px_var(--color-accent-glow)] active:scale-95"
          >
            <Send size={12} />
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button + Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 p-6 backdrop-blur-xl md:hidden overflow-y-auto">
          <div className="flex flex-col gap-2">
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
              Menu Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                      : "text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                    {link.href}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Mobile Bottom Actions */}
          <div className="mt-6 flex flex-col gap-3 border-t border-[var(--color-border)] pt-5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
            >
              <FileText size={16} className="text-[var(--color-accent)]" />
              <span>View &amp; Download Resume</span>
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              <Send size={15} />
              <span>Let&apos;s Talk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
