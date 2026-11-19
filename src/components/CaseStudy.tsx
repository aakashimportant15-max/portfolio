import { spareLookCaseStudy } from "@/data/projects";

export default function CaseStudy() {
  const cs = spareLookCaseStudy;
  return (
    <section id="case-study" className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-teal">Case study</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink">
        Case study - SpareLook
      </h2>

      <div className="mt-8 rounded-2xl border border-line bg-card p-6 shadow-[var(--shadow)] md:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-teal">
              My role
            </div>
            <div className="mt-1 text-sm font-semibold text-ink">{cs.myRole}</div>
          </div>
          <dl className="flex gap-8">
            {cs.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-accent">{s.value}</dd>
                <dd className="text-xs text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Problem
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{cs.problem}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Approach
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{cs.approach}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Impact
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{cs.impact}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
          <ul className="flex flex-wrap gap-1.5">
            {cs.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-ink-muted"
              >
                {t}
              </li>
            ))}
          </ul>
          {/* TODO(Aakash): replace with the specific modules you personally built (edit src/data/projects.ts). */}
          <p className="text-xs text-ink-muted">{cs.whatIBuilt}</p>
        </div>
      </div>
    </section>
  );
}
