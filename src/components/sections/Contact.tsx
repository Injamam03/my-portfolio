export default function Contact() {
  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-20">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mint)]">
        05. Contact
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
        Let&apos;s work together
      </h2>
      <p className="mt-3 max-w-xl text-[var(--color-text-muted)]">
        Have a project in mind? Send a message and I&apos;ll get back to you.
      </p>

      {/*
        NOTE: Ei form ekhono UI-only, submit korle kono jaygay data jabe na.
        Porer step e amra ei form ke ekta API route othoba email service
        (jemon Resend) er sathe connect korbo.
      */}
      <form className="mt-8 grid max-w-xl gap-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-accent)]"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-accent)]"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Enter Your Message"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-accent)]"
        />
        <button
          type="submit"
          className="w-fit rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
