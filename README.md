# Aakash - Portfolio Website

Fast, single-page portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS**,
exported as a fully static site (`output: "export"`). No backend, no env secrets.

## Run it

```bash
cd "C:\Users\Dell\Desktop\data analysts\RESUME\portfolio"
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run screenshots  # re-capture all screenshots into ./scr (needs npm run build first)
```

## Replace a resume PDF (no code change)

Drop the new file into `public/resumes/` with the **exact same filename** and redeploy:

- `Aakash_Resume_General.pdf` (Recommended)
- `Aakash_Resume_Backend.pdf`
- `Aakash_Resume_GenAI.pdf`
- `Aakash_Resume_DataAnalyst.pdf`
- `Aakash_Resume_ML_NLP.pdf`

Links always point to `/resumes/<exact filename>` so nothing breaks. If a file is
missing, its dropdown option is disabled with "coming soon" (no broken link).
Bump `RESUME_VERSION` in `src/data/resumes.ts` after replacing a file to
cache-bust returning visitors.

## Add a project

Add one object to `src/data/projects.ts` (`showcaseProjects`, `dashboardProjects`
or `moreProjects`). For a numbered showcase block, also put a screenshot in
`public/images/projects/<id>-1.png` - if it is missing, a clean "Screenshot
coming soon" mockup placeholder is shown automatically (checked at build time).

## Change the email or the accent colour (one place each)

- Email / phone / links: `src/data/profile.ts`
- Accent colour (amber + teal) and theme tokens: CSS variables in `src/app/globals.css`

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub).
2. In Vercel: **Add New Project → Import** the repo. Framework preset: **Next.js**.
3. No environment variables needed. Build command `next build`, output handled
   automatically (static export).

## Files that must exist in `public/`

| File | Purpose | Fallback if missing |
|---|---|---|
| `resumes/*.pdf` (5 files) | Resume dropdown downloads | Option disabled "coming soon" |
| `images/aakash.jpg` | Hero photo | Circle with initial "A" |
| `images/projects/*.png` | Project screenshots | "Screenshot coming soon" mockup card |
| `certificates/codeverse-2026.pdf` | Certificate link target | - |
| `certificates/codeverse-2026.png` | Certificate card image | Text-only achievement card |
| `experience/*.pdf` | "View certificate" proof links on the Experience timeline | Link hidden |
| `certificates/*.pdf` / `*.jpg` | Course/achievement certificate links | Link hidden |

New resume versions (Business Analyst, SAP ABAP) appear as disabled "coming soon"
entries until `public/resumes/Aakash_Resume_Business_Analyst.pdf` /
`Aakash_Resume_SAP_ABAP.pdf` are added.

`reference/` contains other people's design screenshots - layout reference only,
never shipped in the build. `_originals/` holds untouched copies of every uploaded
certificate/letter (git-ignored). Two recommendation letters (StudifySuccess LOR,
eDC IIT Delhi letter) are intentionally NOT published - see ASSET_MAP.md and CHANGES.md.
