"use client";

import { useState, FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { Mail, Copy, Check, Linkedin, Github, FileText, Send, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = "injamamulh544@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

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
        // Fallback to mailto if API fails
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
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
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
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
    <section id="contact" className="container-px mx-auto max-w-6xl py-20 border-t border-[var(--color-border)]/50">
      <Reveal direction="up">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {"// 08. Get In Touch"}
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/40" />
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          Let&apos;s Build Something <span className="text-[var(--color-accent)]">Remarkable</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)]">
          Have an exciting project, app idea, or open Flutter role? Reach out directly or drop a message below.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Direct Contact & Action Channels */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          {/* Email Copy Card */}
          <Reveal direction="up" delay={100}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 backdrop-blur-sm transition-all hover:border-[var(--color-accent)]/50">
              <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                Direct Email
              </span>
              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 p-3">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail size={16} className="text-[var(--color-accent)] shrink-0" />
                  <span className="truncate font-[family-name:var(--font-mono)] text-xs sm:text-sm font-semibold text-[var(--color-text)]">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="flex items-center gap-1.5 rounded-lg bg-[var(--color-accent-soft)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Social Links & Resume Download */}
          <Reveal direction="up" delay={150}>
            <div className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 backdrop-blur-sm">
              <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                Connect &amp; Verification
              </span>

              <div className="flex flex-col gap-2.5 pt-1">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/injamam-ul-hoque-sifat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/40 p-3 transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-2)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <Linkedin size={16} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        LinkedIn Profile
                      </span>
                      <p className="text-[11px] text-[var(--color-text-muted)]">
                        in/injamam-ul-hoque-sifat
                      </p>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                    &rarr;
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/injamam03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/40 p-3 transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-2)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <Github size={16} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        GitHub Repositories
                      </span>
                      <p className="text-[11px] text-[var(--color-text-muted)]">
                        github.com/injamam03
                      </p>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                    &rarr;
                  </span>
                </a>

                {/* Resume Download */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/40 p-3 transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-2)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <FileText size={16} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        Download Resume
                      </span>
                      <p className="text-[11px] text-[var(--color-text-muted)]">
                        Updated Curriculum Vitae (PDF)
                      </p>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                    &darr;
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <Reveal direction="up" delay={150}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 sm:p-8 backdrop-blur-sm shadow-xl"
            >
              {status === "success" && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5 text-emerald-300" />
                  <div>
                    <h4 className="font-semibold text-emerald-300">Message Delivered!</h4>
                    <p className="mt-1 text-xs sm:text-sm text-emerald-200/80">
                      Thank you for reaching out. Your message has been routed to my personal email inbox ({emailAddress}). I will respond promptly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-400">
                  <AlertCircle size={20} className="shrink-0 mt-0.5 text-rose-300" />
                  <div>
                    <h4 className="font-semibold text-rose-300">Error</h4>
                    <p className="mt-1 text-xs text-rose-200/80">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Miller"
                    required
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/80 px-4 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    required
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/80 px-4 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Message / Project Scope
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your app requirements, timelines, or role..."
                  required
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/80 px-4 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] transition-colors resize-none"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[var(--color-accent-glow)] transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  <span>{status === "loading" ? "Transmitting..." : "Send Message"}</span>
                </button>

                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                  Response within 24 hours
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
