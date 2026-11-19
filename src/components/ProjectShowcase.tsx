import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { dashboardProjects, moreProjects, showcaseProjects } from "@/data/projects";
import DeviceMockup, { type MockupImage } from "./DeviceMockup";

export default function ProjectShowcase({
  imageMap,
}: {
  imageMap: Record<string, boolean>;
}) {
  return (
    <section id="projects" className="border-t border-line bg-muted-bg/40">
      <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">Projects</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">
          Things I have built
        </h2>

        <div className="mt-12 space-y-20 md:space-y-28">
          {showcaseProjects.map((p, idx) => {
            const images: MockupImage[] = p.screenshots.map((src) => ({
              src,
              available: imageMap[src] ?? false,
            }));
            const textFirst = idx % 2 === 0;
            return (
              <article key={p.id} className="grid items-center gap-10 md:grid-cols-2">
                <div className={textFirst ? "" : "md:order-2"}>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display text-5xl font-bold text-accent md:text-6xl"
                      aria-hidden
                    >
                      {p.number}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-teal">
                      {p.contextLabel ?? ""}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                    {p.title}
                  </h3>
                  {p.badge && (
                    <p className="mt-1 text-sm font-medium text-ink-muted">{p.badge}</p>
                  )}
                  <p className="mt-3 leading-relaxed text-ink-muted">{p.oneLiner}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.chips.map((c) => (
                      <li
                        key={c}
                        className="rounded-full border border-line bg-card px-3 py-1 font-mono text-[11px] text-ink"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-muted-bg px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        {l.label === "GitHub" ? (
                          <Github size={15} aria-hidden />
                        ) : (
                          <ExternalLink size={15} aria-hidden />
                        )}
                        {l.label}
                        <ArrowUpRight size={13} className="text-ink-muted" aria-hidden />
                      </a>
                    ))}
                    {p.caseStudy && (
                      <a
                        href="#case-study"
                        className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
                      >
                        Read the case study
                      </a>
                    )}
                  </div>
                </div>

                <div className={textFirst ? "md:order-2" : "md:order-1"}>
                  <DeviceMockup device={p.device} title={p.title} images={images} />
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-ink-muted">
          Render-hosted demos may take up to a minute to wake up; Streamlit demos may
          show a wake-up screen on first load.
        </p>

        {/* Dashboards (05) */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-baseline gap-3">
            <span
              className="font-display text-5xl font-bold text-accent md:text-6xl"
              aria-hidden
            >
              05
            </span>
            <h3 className="font-display text-2xl font-bold text-ink">Data dashboards</h3>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {dashboardProjects.map((d) => (
              <article
                key={d.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[var(--shadow)]"
              >
                {d.screenshot && imageMap[d.screenshot] ? (
                  <Image
                    src={d.screenshot}
                    alt={`${d.title} dashboard screenshot`}
                    width={800}
                    height={450}
                    className="aspect-video w-full border-b border-line object-cover object-top"
                  />
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                <h4 className="font-display text-lg font-bold text-ink">{d.title}</h4>
                <p className="mt-1.5 text-sm text-ink-muted">{d.oneLiner}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {d.chips.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-accent"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-muted-bg px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={d.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
                >
                  <Github size={15} aria-hidden /> GitHub
                  <ArrowUpRight size={13} className="text-ink-muted" aria-hidden />
                </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* More projects */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-ink">More projects</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {moreProjects.map((m) => (
              <article
                key={m.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[var(--shadow)]"
              >
                {m.screenshot && imageMap[m.screenshot] ? (
                  <Image
                    src={m.screenshot}
                    alt={`${m.title} screenshot`}
                    width={800}
                    height={450}
                    className="aspect-video w-full border-b border-line object-cover object-top"
                  />
                ) : null}
                <div className="flex flex-1 flex-col p-5">
                <h4 className="font-display text-base font-bold text-ink">{m.title}</h4>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">
                  {m.oneLiner}
                </p>
                {m.note && (
                  <p className="mt-2 font-mono text-[11px] text-ink-muted">{m.note}</p>
                )}
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-muted-bg px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={m.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
                >
                  <Github size={14} aria-hidden /> GitHub
                  <ArrowUpRight size={12} className="text-ink-muted" aria-hidden />
                </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
