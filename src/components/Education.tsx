import { GraduationCap } from "lucide-react";
import { education } from "@/data/achievements";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="education-heading"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-teal">Education</p>
      <h2 id="education-heading" className="mt-2 font-display text-3xl font-bold text-ink">
        Education
      </h2>

      <div className="mt-8 rounded-2xl border border-line bg-card p-6 shadow-[var(--shadow)]">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <GraduationCap size={18} aria-hidden />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-ink">{education.degree}</h3>
            <p className="mt-1 text-sm text-ink-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-ink-muted">
              {education.years} · {education.cgpa}
            </p>
          </div>
        </div>
        <ul className="mt-6 space-y-3 border-t border-line pt-5">
          {education.schoolEntries.map((e) => (
            <li key={e.label} className="flex flex-col gap-0.5 text-sm sm:flex-row sm:gap-3">
              <span className="font-semibold text-ink">
                {e.label} <span className="font-mono text-xs font-normal text-ink-muted">({e.date})</span>
              </span>
              <span className="text-ink-muted">{e.school}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
