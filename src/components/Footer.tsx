"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-6 sm:px-6">
        <p className="text-sm text-ink-muted">
          © 2026 {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-ink-muted transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          <ArrowUp size={16} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
