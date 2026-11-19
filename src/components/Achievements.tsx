import Image from "next/image";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { achievements, courseCertificates } from "@/data/achievements";

export default function Achievements({
  certificateImageAvailable,
}: {
  certificateImageAvailable: boolean;
}) {
  const [first, ...rest] = achievements;

  return (
    <section id="achievements" className="border-t border-line bg-muted-bg/40">
      <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 md:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">
          Achievements
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">
          Achievements and certificates
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Certificate image card first */}
          {first.certificateImage && first.certificatePdf ? (
            <a
              href={first.certificatePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-line bg-card shadow-[var(--shadow)] transition-shadow hover:shadow-lg"
            >
              {certificateImageAvailable ? (
                <Image
                  src={first.certificateImage}
                  alt="CodeVerse India 2026 certificate: Aakash, Winner, 2nd Rank, Team Leader"
                  width={1019}
                  height={703}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                />
              ) : (
                <div className="flex aspect-[1019/703] items-center justify-center bg-muted-bg font-mono text-xs text-ink-muted">
                  Certificate image coming soon
                </div>
              )}
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-base font-bold text-ink">
                    {first.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-ink-muted">{first.detail}</p>
                </div>
                <span className="mt-0.5 shrink-0 text-teal">
                  <ExternalLink size={15} aria-hidden />
                </span>
              </div>
            </a>
          ) : (
            <AchievementCard a={first} />
          )}

          <div className="space-y-4">
            {rest.map((a) => (
              <AchievementCard key={a.id} a={a} />
            ))}
          </div>
        </div>

        {/* Course certificates - text list */}
        <div className="mt-12 rounded-2xl border border-line bg-card p-6 shadow-[var(--shadow)]">
          <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
            Course certificates
          </h3>
          <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {courseCertificates.map((c) => (
              <li key={c.name} className="flex items-start gap-2 text-sm text-ink-muted">
                <BadgeCheck size={14} className="mt-1 shrink-0 text-teal" aria-hidden />
                <span>
                  <span className="font-medium text-ink">{c.name}</span> - {c.issuer} (
                  {c.year}
                  {c.inProgress ? ", in progress" : ""})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({
  a,
}: {
  a: (typeof achievements)[number];
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5 shadow-[var(--shadow)]">
      <h3 className="font-display text-base font-bold text-ink">{a.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{a.detail}</p>
    </div>
  );
}
