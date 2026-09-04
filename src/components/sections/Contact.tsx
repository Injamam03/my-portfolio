"use client";

import { useState, FormEvent } from "react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback to direct mailto if API route encounters external API restrictions
        const mailtoUrl = `mailto:injamamulh544@gmail.com?subject=${encodeURIComponent(
          `Portfolio Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.open(mailtoUrl, "_blank");

        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      // Fallback to mailto on network error
      const mailtoUrl = `mailto:injamamulh544@gmail.com?subject=${encodeURIComponent(
        `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-20">
      <Reveal direction="up">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">
          Get in <span className="text-[var(--color-mint)]">Touch</span>
        </h2>
        <p className="mt-3 max-w-xl text-[var(--color-text-muted)]">
          Have a project in mind or want to collaborate? Send me a message and it will be delivered directly to my email (<span className="text-[var(--color-accent)] font-medium">injamamulh544@gmail.com</span>).
        </p>
      </Reveal>

      <Reveal direction="up" delay={150}>
        <form
          onSubmit={handleSubmit}
          className="mt-8 max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-8 backdrop-blur-sm shadow-xl"
        >
          {status === "success" && (
            <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400">
              <div className="flex items-center gap-2.5 font-semibold text-emerald-300">
                <CheckCircleIcon />
                <span>Message Sent Successfully!</span>
              </div>
              <p className="mt-1 text-sm text-emerald-200/80">
                Thank you for reaching out! Your message has been sent to my email inbox (<strong className="text-emerald-300">injamamulh544@gmail.com</strong>). I will reply to you as soon as possible.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-400">
              <div className="flex items-center gap-2.5 font-semibold text-rose-300">
                <AlertIcon />
                <span>Error Sending Message</span>
              </div>
              <p className="mt-1 text-sm text-rose-200/80">{errorMessage}</p>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                <UserIcon />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] transition-colors"
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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] transition-colors"
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
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project or idea..."
              required
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] transition-colors"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-mint)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <SpinnerIcon />
                  Sending...
                </>
              ) : (
                <>
                  <SendIcon />
                  Send Message
                </>
              )}
            </button>

            <a
              href="mailto:injamamulh544@gmail.com"
              className="text-xs text-[var(--color-text-muted)] underline underline-offset-4 hover:text-[var(--color-accent)] transition-colors"
            >
              Or send directly via email: injamamulh544@gmail.com
            </a>
          </div>
        </form>
      </Reveal>
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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

function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}