export default function Contact() {
  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-20">
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">
        Get in <span className="text-[var(--color-mint)]">Touch</span>
      </h2>
      <p className="mt-3 max-w-xl text-[var(--color-text-muted)]">
        Have a project in mind or want to collaborate? Send me a message.
      </p>

      {/*
        NOTE: Ei form ekhono UI-only, submit korle kono jaygay data jabe na.
        Porer step e amra ei form ke ekta API route othoba email service
        (jemon Resend) er sathe connect korbo.
      */}
      <form className="mt-8 max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-8 backdrop-blur-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
              <UserIcon />
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-lg border border-[var(--color-accent)]/50 bg-[var(--color-bg)]/60 px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-accent)]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
              <MailIcon />
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-accent)]"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
            <MessageIcon />
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project or idea..."
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-accent)]"
          />
        </div>

        <button
          type="submit"
          className="mt-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-mint)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition-opacity hover:opacity-90"
        >
          <SendIcon />
          Send Message
        </button>
      </form>
    </section>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
  );
}