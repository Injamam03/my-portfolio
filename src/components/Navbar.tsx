"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          return;
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)]/60 bg-[var(--color-bg)]/80 backdrop-blur-md transition-all">
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="#"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          My <span className="text-[var(--color-accent)]">Portfolio</span>
        </Link>

        {/* Nav Items Pill Container Box */}
        <nav className="hidden items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-1.5 backdrop-blur-md shadow-sm md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-md"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-border)]/40 hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-accent)]/80 bg-[var(--color-accent)]/10 px-4 py-1.5 text-xs font-semibold text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] active:scale-95"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
