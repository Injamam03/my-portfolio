export default function Hero() {
  return (
    <section className="container-px mx-auto flex max-w-6xl flex-col items-start gap-6 py-24 md:py-32">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
        $ flutter run
      </p>

      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight md:text-6xl">
        Hi, I&apos;m <span className="text-[var(--color-accent)]">Your Name</span>
        <br />I build Flutter apps that feel native.
      </h1>

      <p className="max-w-xl text-[var(--color-text-muted)] md:text-lg">
        Mobile app developer focused on smooth UI, clean architecture, and
        shipping real products to the Play Store and App Store.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#projects"
          className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="/resume.pdf"
          className="rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
