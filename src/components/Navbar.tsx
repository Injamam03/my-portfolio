import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link
          href="#"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
        >
          your.name<span className="text-[var(--color-accent)]">()</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-[var(--color-accent)] px-4 py-1.5 text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
