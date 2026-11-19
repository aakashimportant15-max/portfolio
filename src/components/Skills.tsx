import {
  Brain,
  ChartColumnBig,
  Code2,
  FlaskConical,
  Server,
  Sparkles,
} from "lucide-react";
import { skillGroups } from "@/data/skills";

const icons = {
  code: Code2,
  sparkles: Sparkles,
  brain: Brain,
  server: Server,
  chart: ChartColumnBig,
  flask: FlaskConical,
} as const;

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-teal">Skills</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink">
        Tools and technologies
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillGroups.map((g) => {
          const Icon = icons[g.icon];
          return (
            <div
              key={g.id}
              className="rounded-2xl border border-line bg-card p-6 shadow-[var(--shadow)]"
            >
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={16} aria-hidden />
                </span>
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-line bg-muted-bg px-2.5 py-1 text-xs text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
