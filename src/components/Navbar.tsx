"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import ResumeDropdown, { type ResumeOptionState } from "./ResumeDropdown";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ resumeOptions }: { resumeOptions: ResumeOptionState[] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#top"
          className="font-mono text-lg font-bold text-ink"
          aria-label="AK_ - back to top"
        >
          AK<span className="text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ResumeDropdown options={resumeOptions} />
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-ink-muted md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={17} aria-hidden /> : <Menu size={17} aria-hidden />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-bg px-4 py-3 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-ink transition-colors hover:bg-muted-bg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 sm:hidden">
            <ResumeDropdown options={resumeOptions} align="left" />
          </div>
        </div>
      )}
    </header>
  );
}
