import Image from "next/image";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero({ photoAvailable }: { photoAvailable: boolean }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 pb-16 pt-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:pb-20 md:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 font-mono text-xs text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
            {profile.badge}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-wide text-ink-muted">
            {profile.roleLine}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            {profile.tagline}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-strong dark:text-[#0b0f1a]"
            >
              View projects
              <ArrowDown size={16} aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent"
            >
              <Mail size={16} aria-hidden />
              Get in touch
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-muted">
            <MapPin size={14} aria-hidden />
            {profile.location}
          </p>
        </div>

        <div className="justify-self-center md:justify-self-end">
          {photoAvailable ? (
            <Image
              src={profile.photo}
              alt={`Photo of ${profile.name}`}
              width={280}
              height={280}
              priority
              className="h-44 w-44 rounded-full border border-line object-cover shadow-[var(--shadow)] sm:h-56 sm:w-56 md:h-64 md:w-64"
            />
          ) : (
            <div
              aria-label={`Profile photo of ${profile.name} (not available)`}
              className="flex h-44 w-44 items-center justify-center rounded-full border border-line bg-card font-display text-6xl font-bold text-accent shadow-[var(--shadow)] sm:h-56 sm:w-56 md:h-64 md:w-64"
            >
              {profile.initials}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
