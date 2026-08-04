export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-8 text-sm text-[var(--color-text-muted)] md:flex-row">
        <p>&copy; {new Date().getFullYear()} Your Name. Built with Next.js.</p>
        <p className="font-[family-name:var(--font-mono)] text-xs">
          flutter build portfolio --release
        </p>
      </div>
    </footer>
  );
}
