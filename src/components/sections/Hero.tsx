import Image from "next/image";

export default function Hero() {
  return (
    <section className="container-px mx-auto flex max-w-6xl flex-col items-center gap-10 py-24 md:flex-row md:items-center md:justify-between md:gap-6 md:py-32">
      <div className="flex w-full flex-col items-start gap-6 md:w-[58%]">
        <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
          $ flutter run
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight md:text-6xl">
          Hi, I&apos;m <span className="text-[var(--color-accent)]">Injamam Ul Hoque Sifat</span>
          <br />I build modern Flutter apps that people love to use.
        </h1>

        <p className="max-w-xl text-[var(--color-text-muted)] md:text-lg">
          Flutter Developer passionate about creating fast, scalable, and user-friendly mobile applications with clean architecture, responsive UI, and production-ready solutions.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#projects" className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90">
            View projects
          </a>
          <a href="/resume.pdf" className="rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-accent)]">
            Download resume
          </a>
        </div>
      </div>

      <div className="relative flex w-full justify-center md:w-[42%] md:justify-end">
        <div className="absolute inset-0 -z-10 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />

        <div className="relative h-[280px] w-[280px] rounded-full p-[4px] md:h-[340px] md:w-[340px]">
          <div className="animated-ring absolute inset-0 rounded-full" />

          <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--color-bg)] p-[3px]">
            <Image
              src="/assets/profile.jpg"
              alt="Injamam Ul Hoque Sifat"
              width={340}
              height={340}
              priority
              className="h-full w-full rounded-full border border-[var(--color-border)] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}