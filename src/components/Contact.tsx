import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import ResumeDropdown, { type ResumeOptionState } from "./ResumeDropdown";

export default function Contact({ resumeOptions }: { resumeOptions: ResumeOptionState[] }) {
  const cards = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: profile.phoneDisplay,
      href: `tel:${profile.phone}`,
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "in/aakashcse2027",
      href: profile.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "aakashimportant15-max",
      href: profile.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <section id="contact" className="border-t border-line bg-muted-bg/40">
      <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">Contact</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">Let&apos;s talk</h2>
        <p className="mt-3 text-ink-muted">
          Open to internships in backend, GenAI and data analytics.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="rounded-2xl border border-line bg-card p-5 shadow-[var(--shadow)] transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-teal">
                <c.icon size={14} aria-hidden />
                {c.label}
              </div>
              <div className="mt-2 break-words text-sm font-medium text-ink">{c.value}</div>
            </a>
          ))}
          <div className="rounded-2xl border border-line bg-card p-5 shadow-[var(--shadow)]">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-teal">
              Resume
            </div>
            <div className="mt-2.5">
              <ResumeDropdown options={resumeOptions} align="left" />
            </div>
            <p className="mt-2.5 text-xs text-ink-muted">Pick the resume for your role.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
