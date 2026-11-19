"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { resumeHref, type ResumeOption } from "@/data/resumes";

export type ResumeOptionState = ResumeOption & { available: boolean };

/**
 * Accessible resume dropdown.
 * Keyboard: Enter/Space opens, ArrowUp/ArrowDown move, Esc closes,
 * click outside closes. Options with no file are disabled.
 */
export default function ResumeDropdown({
  options,
  align = "right",
}: {
  options: ResumeOptionState[];
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function openMenu() {
    setOpen(true);
    const firstEnabled = options.findIndex((o) => o.available);
    setActiveIndex(firstEnabled);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const dir = e.key === "ArrowDown" ? 1 : -1;
      let i = activeIndex;
      for (let step = 0; step < options.length; step++) {
        i = (i + dir + options.length) % options.length;
        if (options[i].available) break;
      }
      setActiveIndex(i);
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt?.available) window.location.assign(resumeHref(opt.file));
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
        className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-strong dark:text-[#0b0f1a]"
      >
        Resume
        <ChevronDown
          size={15}
          aria-hidden
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Choose a resume to download"
          className={`absolute top-[calc(100%+8px)] z-50 w-72 rounded-xl border border-line bg-card p-1.5 shadow-[var(--shadow)] ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {options.map((opt, i) =>
            opt.available ? (
              <a
                key={opt.id}
                role="menuitem"
                href={resumeHref(opt.file)}
                download={opt.file}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 transition-colors hover:bg-muted-bg ${
                  i === activeIndex ? "bg-muted-bg" : ""
                }`}
              >
                <span className="flex items-center justify-between text-sm font-medium text-ink">
                  <span>
                    {opt.label}
                    {opt.recommended && (
                      <span className="ml-2 rounded-full bg-teal/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-teal">
                        Recommended
                      </span>
                    )}
                  </span>
                  <Download size={14} className="text-ink-muted" aria-hidden />
                </span>
                <span className="mt-0.5 block text-xs text-ink-muted">{opt.hint}</span>
              </a>
            ) : (
              <div
                key={opt.id}
                role="menuitem"
                aria-disabled="true"
                className="block cursor-not-allowed rounded-lg px-3 py-2 opacity-50"
              >
                <span className="block text-sm font-medium text-ink">{opt.label}</span>
                <span className="mt-0.5 block text-xs text-ink-muted">coming soon</span>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
