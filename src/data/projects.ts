// ---------------------------------------------------------------
// Projects. Add a new project = add one object.
// Screenshots live in /public/images/projects/ - if a file is
// missing, the DeviceMockup shows a clean placeholder automatically
// (checked at build time, see src/lib/files.ts).
// ---------------------------------------------------------------

export type ProjectLink = {
  label: string;
  href: string;
  /** Muted note rendered under the button, e.g. wake-up warnings. */
  note?: string;
};

export type ShowcaseProject = {
  id: string;
  number: string;
  title: string;
  badge?: string;
  contextLabel?: string;
  oneLiner: string;
  chips: string[];
  tags: string[];
  links: ProjectLink[];
  /** Path under /public, e.g. /images/projects/sparelook-1.png */
  screenshots: string[];
  device: "laptop" | "phone";
  caseStudy?: boolean;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "sparelook",
    number: "01",
    title: "SpareLook",
    badge: "CodeVerse India 2026 - 2nd Rank (Winner), Team Leader",
    oneLiner:
      "Equipment sharing and booking platform where double bookings are blocked at the database level.",
    chips: ["40/40 concurrency rounds", "141 automated tests", "deny-by-default API"],
    tags: ["Next.js", "TypeScript", "SQLite", "Zod", "Vitest"],
    links: [
      { label: "GitHub", href: "https://github.com/aakashimportant15-max/sparelook" },
      {
        label: "Live demo",
        href: "https://sparelook.onrender.com",
      },
    ],
    screenshots: ["/images/projects/sparelook-1.webp", "/images/projects/sparelook-2.png"],
    device: "laptop",
    caseStudy: true,
  },
  {
    id: "hireflow",
    number: "02",
    title: "HireFlow",
    badge: "AI Candidate Screening and Interview Intelligence Agent",
    contextLabel: "Agentic AI Hackathon '26",
    oneLiner:
      "Turns resumes and job descriptions into structured, evidence-backed requirement mappings with a full audit trail.",
    chips: ["12 real resumes", "156 mappings", "193 audit records"],
    tags: ["Python", "Groq", "Pydantic", "SQLite", "Streamlit", "pytest"],
    links: [
      { label: "GitHub", href: "https://github.com/aakashimportant15-max/HireFlow" },
      {
        label: "Live demo",
        href: "https://aakashimportant15-max-hireflow-app-jhoc1s.streamlit.app",
      },
      {
        label: "Demo video",
        href: "https://drive.google.com/file/d/1eShvcy6mvzct0STsxCa5RVqZjRR9zfHN/view?usp=drive_link",
      },
    ],
    screenshots: ["/images/projects/hireflow-1.png"],
    device: "laptop",
  },
  {
    id: "covenant",
    number: "03",
    title: "Covenant",
    badge: "AI Brand Constitution and Guardian",
    oneLiner:
      "A 4-stage LLM workflow that builds a brand constitution and then checks new content against it.",
    chips: ["4-stage workflow", "Pydantic-validated JSON", "deployed"],
    tags: ["Python", "Streamlit", "Groq API", "Pydantic", "pytest"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/aakashimportant15-max/CONVENANT-AI-Brand-Guardian",
      },
      {
        label: "Live demo",
        href: "https://covenant-ai-brand-guardian.streamlit.app/",
      },
    ],
    screenshots: ["/images/projects/covenant-1.webp"],
    device: "laptop",
  },
  {
    id: "docket",
    number: "04",
    title: "DocKet",
    badge: "The Judge Layer - Hackathon Submission and Judging Platform",
    contextLabel: "DOGFOOD 2026",
    oneLiner:
      "A judging platform with backend-enforced deadlines and per-judge score isolation.",
    chips: ["official 7/7 acceptance checks", "3 roles", "CSV export"],
    tags: ["FastAPI", "SQLAlchemy", "SQLite", "Jinja2", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/aakashimportant15-max/DocKet-JudgeOS" },
      {
        label: "Live demo",
        href: "https://docket-jw6s.onrender.com/gallery",
      },
    ],
    screenshots: ["/images/projects/docket-1.webp"],
    device: "laptop",
  },
];

export type DashboardProject = {
  id: string;
  title: string;
  oneLiner: string;
  chips: string[];
  tags: string[];
  github: string;
  /** Optional preview screenshot shown on the card. */
  screenshot?: string;
};

export const dashboardProjects: DashboardProject[] = [
  {
    id: "dmrc",
    title: "DMRC Intelligence Platform",
    oneLiner: "Excel BI dashboard on Delhi Metro operations and finances.",
    chips: ["150,000 trips", "228 stations", "10 years of financials"],
    tags: ["Excel", "Pivot Tables", "Python", "Pandas"],
    github: "https://github.com/aakashimportant15-max/DMRC-Intelligence-Platform",
    screenshot: "/images/projects/dmrc-1.png",
  },
  {
    id: "blinkit",
    title: "BlinkIT Sales Intelligence",
    oneLiner: "Power BI dashboard on outlet sales performance.",
    chips: ["8,523 records", "6 KPI cards", "5 cross-filtered visuals"],
    tags: ["Power BI", "Python", "Pandas"],
    github: "https://github.com/aakashimportant15-max/BlinkIT-Sales-Intelligence-Platform",
    screenshot: "/images/projects/blinkit-1.png",
  },
];

export type SmallProject = {
  id: string;
  title: string;
  oneLiner: string;
  tags: string[];
  github: string;
  note?: string;
  /** Optional preview screenshot shown on the card. */
  screenshot?: string;
};

export const moreProjects: SmallProject[] = [
  {
    id: "stageproof",
    title: "StageProof",
    oneLiner:
      "Flood early-warning sensor integrity layer: HMAC-SHA256 packet authentication, Ridge-regression plausibility check, SHA-256 hash-chained audit log, 6 attack/fault scenarios, 259 tests.",
    tags: ["Python", "HMAC-SHA256", "pytest"],
    github: "https://github.com/aakashimportant15-max/StageProof",
    note: "Uses simulated data.",
    screenshot: "/images/projects/stageproof-1.webp",
  },
  {
    id: "cropguard",
    title: "CropGuard",
    oneLiner:
      "Early-warning system for crop theft and wildlife intrusion (B.Tech minor project, team of 2, ongoing). YOLOv8, rule-based alert agent, Flask dashboard, Telegram bot; decision engine tested 12/12, event manager 7/7.",
    tags: ["YOLOv8", "Flask", "Telegram bot"],
    github: "https://github.com/aakashimportant15-max/CropGuard",
    note: "Hardware integration in progress. Co-applicant on a design registration application for the solar-powered enclosure, accepted by VIPS-TC.",
    screenshot: "/images/projects/cropguard-1.webp",
  },
  {
    id: "phishing",
    title: "AI-Driven Phishing Email Detection",
    oneLiner:
      "82,078 emails, TF-IDF, 4 models benchmarked, Random Forest 98.44%.",
    tags: ["Python", "TF-IDF", "Random Forest"],
    github: "https://github.com/aakashimportant15-max/AI-Phishing-Email-Detection",
    note: "Benchmark on a fixed split; see repository for limitations.",
    screenshot: "/images/projects/phishing-1.png",
  },
  {
    id: "fakenews",
    title: "AI-Powered Fake News Detection",
    oneLiner:
      "44,919 articles, TF-IDF, 5 models benchmarked, Random Forest 99.51%.",
    tags: ["Python", "TF-IDF", "Random Forest"],
    github: "https://github.com/aakashimportant15-max/AI-Fake-News-Detection",
    note: "Benchmark on a fixed split; see repository for limitations.",
    screenshot: "/images/projects/fake-news-1.png",
  },
];

// -------------------------------------------------------------
// SpareLook detailed case study (Section 5.5)
// -------------------------------------------------------------

export const spareLookCaseStudy = {
  stats: [
    { value: "40/40", label: "concurrency rounds" },
    { value: "141", label: "automated tests" },
  ],
  problem:
    "Two users could request the same equipment for overlapping times, and an application-level check alone can race under concurrent requests.",
  approach:
    "Enforced no-overlap rules inside the database with an overlap trigger and immediate transactions, made booking requests idempotent, and kept an append-only audit trail. Added a deny-by-default API layer with role- and tenant-scoped authorization, Zod validation, and bcrypt-hashed passwords.",
  impact:
    "Verified by a multi-process concurrency test (40/40 rounds) and 141 automated tests. Deployed as a live demo.",
  tech: ["Next.js", "TypeScript", "SQLite", "Zod", "Vitest"],
  // TODO(Aakash): fill in the specific modules you personally built.
  myRole: "Team Leader (CodeVerse India 2026)",
  whatIBuilt: "Team project: I led the team.",
};
