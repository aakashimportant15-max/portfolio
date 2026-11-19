"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/achievements";

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function Stat({ value, display, label }: { value: number; display: string; label: string }) {
  const [shown, setShown] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // show final value statically
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const dur = 900;
          function tick(now: number) {
            const p = Math.min(1, (now - t0) / dur);
            setShown(Math.round(easeOut(p) * value));
            if (p < 1) requestAnimationFrame(tick);
            else setShown(null); // show exact display string
          }
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="tabular font-display text-3xl font-bold text-accent sm:text-4xl">
        {shown === null ? display : shown}
      </div>
      <div className="mt-1 text-xs leading-snug text-ink-muted sm:text-sm">{label}</div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <div className="border-y border-line bg-card">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-6 gap-y-6 px-4 py-8 sm:grid-cols-3 sm:px-6 md:grid-cols-5">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}
