"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialDark(): boolean {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark");
  }
  return false;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(getInitialDark());
  }, []);

  function toggle() {
    const next = !getInitialDark();
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // storage blocked - theme still applies for this session
    }
  }

  const label = dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-ink-muted transition-colors hover:text-accent"
    >
      {dark === null ? (
        <span className="h-4 w-4" aria-hidden />
      ) : dark ? (
        <Sun size={16} aria-hidden />
      ) : (
        <Moon size={16} aria-hidden />
      )}
    </button>
  );
}
