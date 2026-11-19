import { Briefcase, FileText } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-muted-bg/40">
      <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">Experience</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">
          Internships and roles
        </h2>

        <ol className="relative mt-10 space-y-10 border-l border-line pl-6">
          {experience.map((item) => (
            <li key={`${item.org}-${item.period}`} className="relative">
              <span
                className="absolute -left-[31px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-bg"
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-lg font-bold text-ink">
                  {item.role} <span className="font-normal text-ink-muted">· {item.org}</span>
                </h3>
                <p className="font-mono text-xs text-ink-muted">{item.period}</p>
              </div>
              <ul className="mt-3 space-y-2">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {item.recognition && (
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-muted-bg px-3 py-1.5 text-xs text-ink">
                  <Briefcase size={13} className="text-accent" aria-hidden />
                  {item.recognition}
                </p>
              )}
              {item.proof && (
                <a
                  href={item.proof.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold text-teal transition-colors hover:border-teal"
                >
                  <FileText size={13} aria-hidden />
                  {item.proof.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
