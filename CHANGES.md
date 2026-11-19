# CHANGES.md — completion & polish pass

Continuation of the existing portfolio (Next.js static export). Design language unchanged.

## What changed, file by file

### Assets added
- `public/images/projects/` — real screenshots now exist for all showcase and card projects:
  `sparelook-1.webp`, `hireflow-1.png`, `covenant-1.webp`, `docket-1.webp`, `dmrc-1.png`,
  `blinkit-1.png`, `stageproof-1.webp`, `cropguard-1.webp`, `fake-news-1.png`
  (files >250 KB were converted to WebP at ≤1600 px; dashboards kept text-readable).
- `public/certificates/` — `hackday-1.0-participation-2026.pdf`, `nptel-ml-elite-2026.pdf`,
  `coursera-excel-advanced-2025.pdf`, `deloitte-data-analytics-simulation-2025.pdf`,
  `iict-summer-internship-training-2026.pdf` (compressed 4.5 MB → 203 KB),
  `iict-summer-internship-2026.pdf` (compressed 4.5 MB → 207 KB),
  `iilm-best-paper-2026.webp`, `agentic-ai-hackathon-2026.jpg`, `craw-security-internship-2025.jpg`.
- `public/experience/` — `studifysuccess-internship-certificate-2026.pdf`,
  `studifysuccess-best-intern-certificate-2026.pdf`, `inamigos-internship-certificate-2026.pdf`,
  `edc-campus-ambassador-certificate-2026.pdf`.
- `_originals/` (git-ignored) — untouched copies of every uploaded PDF/image.

### Data
- `src/data/projects.ts` — screenshot paths updated to the real files; dashboards and
  small "More projects" cards gained an optional `screenshot` field (placeholder
  fallback remains only for missing files); per-card wake-up notes removed.
- `src/data/experience.ts` — NEW entry: **AI/ML Summer Intern, IICT (Jun–Jul 2026)**
  (45-day internship per the IICT certificate; Fake News + Phishing projects).
  "View certificate" proof links added for StudifySuccess, InAmigos, IICT and
  eDC IIT Delhi. eDC wording kept as verified ("Top Campus Ambassador").
- `src/data/achievements.ts` — proof links on Best Paper (IILM), StudifySuccess award
  and Top Campus Ambassador cards; NPTEL marked **(Elite)**; Coursera issuer corrected
  to "Coursera (Macquarie University)"; new course certificates added from documents:
  **Agentic AI Hackathon '26 participation (Product Space, 2026)**,
  **HACKDAY 1.0 participation (DECODEP, 2026)**,
  **Ethical Hacking & Network Pentesting Internship (CRAW Security, 2025)** — see "needs your input".
- `src/data/resumes.ts` — added **Business Analyst** and **SAP ABAP** entries, disabled
  with "coming soon" until the PDFs are provided (5 real versions remain linked).

### Components
- `src/components/ProjectShowcase.tsx` — numbered showcase blocks now show the real
  screenshots in the device mockups; wake-up note shown **once** after the numbered
  blocks ("Render-hosted demos may take up to a minute…; Streamlit… wake-up screen");
  dashboard cards and More-projects cards render their screenshot as a fixed-ratio,
  lazy-loaded preview when the file exists.
- `src/components/Experience.tsx` — "View certificate" proof buttons.
- `src/components/Achievements.tsx` — "View certificate" buttons on achievement cards
  and on each course certificate.
- `src/components/Hero.tsx` — added "Open to internships in backend, GenAI, ML/NLP and
  data analytics" pill + GitHub/LinkedIn icon links next to the location.
- `src/components/About.tsx` — heading "Hi there" → **"I build working products"**.
- `src/app/globals.css` — `.tabular` now uses tabular + lining figures
  (fixes odd "1" glyph rendering in the stats bar).
- `src/app/page.tsx` — build-time existence check extended to dashboard/small-card screenshots.

### Housekeeping
- `ASSET_MAP.md` — full mapping of every attached file → type → section → final name,
  plus privacy scan summary.
- `.gitignore` — added `_originals/`, `.playwright-browsers/`, `scr/`, logs, report JSON.
- Commits: assets commit + code commit on top of the existing baseline.

## Verification
- `npm run build` succeeds (static export); no console errors/warnings.
- No horizontal overflow at 390 / 768 / 1024 / 1440 px.
- Lighthouse (desktop): **Performance 97 · Accessibility 100 · Best Practices 100 · SEO 100**.
- All screenshots re-captured into `scr/` and reviewed.

## Needs your input
1. **Aakash_LOR.pdf (StudifySuccess)** and **Aakash_letter EDC.pdf (eDC IIT Delhi)** —
   both are recommendation letters containing third-party contacts
   (info@studifysuccess.com, cap.edciitd@gmail.com, coordinator names). Not published.
   Tell me: publish, downloadable on request, or keep private.
2. **CRAW Security certificate** — real document you attached, but it was not part of
   the original verified facts. I added it to the certifications list; remove it if you
   prefer it kept off the public site.
3. **Missing resume PDFs** — Business Analyst and SAP ABAP (dropdown entries disabled).
4. **No screenshot** — AI-Driven Phishing Email Detection has no image (its "More
   projects" card is text-only); send one and it will slot in automatically.
5. **OG image** — no Open Graph preview image exists yet; I can generate one if you want.
