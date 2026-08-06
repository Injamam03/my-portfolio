export default function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-6xl py-20">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
        01. About
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
        Get to Know Me
      </h2>

      <p className="mt-6 max-w-2xl text-[var(--color-text-muted)] leading-relaxed md:text-lg">
        {/* TODO: Nijer real bio likho ekhane - koto bochor kaj korcho,
            ki type er app banate valo lage, ki motivate kore. */}
        I&apos;m a Flutter Developer passionate about building modern, scalable, and user-friendly mobile applications. I enjoy transforming ideas into polished digital products using clean architecture, responsive UI, and maintainable code. My goal is to create high-quality applications that deliver exceptional user experiences and real business value.
      </p>
    </section>
  );
}
