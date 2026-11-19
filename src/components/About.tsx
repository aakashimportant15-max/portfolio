import { GraduationCap, MapPin, Sparkles, Award } from "lucide-react";

const info = [
  { icon: MapPin, label: "Location", value: "New Delhi, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE, 2023-2027" },
  { icon: Sparkles, label: "Focus", value: "Backend, GenAI, Data" },
  { icon: Award, label: "Recognition", value: "CodeVerse India 2026, 2nd Rank" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-teal">About me</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">Hi there</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              B.Tech Computer Science student (2023-2027, CGPA 8.48/10) at VIPS-TC, GGSIPU,
              New Delhi. I enjoy building working products: backends with access control,
              audit trails and automated tests; LLM apps that keep AI output separate from
              deterministic validation; and dashboards on real datasets.
            </p>
            <p>
              I led my team to 2nd Rank (Winner) at CodeVerse India 2026, and my co-authored
              paper received a Best Paper Presentation (top 6) at an international
              conference.
            </p>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-line bg-card p-6 shadow-[var(--shadow)]">
          <ul className="space-y-4">
            {info.map((row) => (
              <li key={row.label} className="flex items-start gap-3">
                <row.icon size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
                    {row.label}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-ink">{row.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
