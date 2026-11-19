// ---------------------------------------------------------------
// Achievements and certificates.
// The first achievement renders as the CodeVerse certificate image
// card (links to the PDF). Course certificates are a text list.
// ---------------------------------------------------------------

export type Achievement = {
  id: string;
  title: string;
  detail: string;
  /** Certificate image card (only the first one has this). */
  certificateImage?: string;
  certificatePdf?: string;
  /** Optional proof link (PDF or image). */
  proof?: { label: string; href: string; external?: boolean };
};

export const achievements: Achievement[] = [
  {
    id: "codeverse",
    title: "CodeVerse India 2026 - Winner, 2nd Rank, Team Leader",
    detail: "30 Oct - 1 Nov 2026",
    certificateImage: "/certificates/codeverse-2026.png",
    certificatePdf: "/certificates/codeverse-2026.pdf",
  },
  {
    id: "best-paper",
    title: "Best Paper Presentation (top 6)",
    detail:
      "13th International Conference on Responsible Management in the Age of AI, IILM University (Mar 2026). Co-authored paper: \"Balancing Efficiency and Human Values in Organizational Automation\" (accepted for publication, 2026).",
    proof: {
      label: "View certificate",
      href: "/certificates/iilm-best-paper-2026.webp",
    },
  },
  {
    id: "design-registration",
    title: "Design registration application accepted by VIPS-TC",
    detail:
      "CropGuard solar-powered field enclosure; co-applicant with the institute and faculty.",
  },
  {
    id: "studify-award",
    title: "Certificate of Achievement for Outstanding Performance in Data Analysis",
    detail: "StudifySuccess (Aug 2026).",
    proof: {
      label: "View certificate",
      href: "/experience/studifysuccess-best-intern-certificate-2026.pdf",
    },
  },
  {
    id: "top-ca",
    title: "Top Campus Ambassador recognition",
    detail: "eDC, IIT Delhi.",
    proof: {
      label: "View certificate",
      href: "/experience/edc-campus-ambassador-certificate-2026.pdf",
    },
  },
];

export type CourseCertificate = {
  name: string;
  issuer: string;
  year: string;
  inProgress?: boolean;
  /** Optional proof (PDF or image) served from /public. */
  href?: string;
  hrefLabel?: string;
};

export const courseCertificates: CourseCertificate[] = [
  {
    name: "Introduction to Machine Learning (Elite)",
    issuer: "NPTEL, IIT Madras",
    year: "2026",
    href: "/certificates/nptel-ml-elite-2026.pdf",
    hrefLabel: "View certificate",
  },
  {
    name: "Summer Internship Training in AI and ML",
    issuer: "IICT",
    year: "2026",
    href: "/certificates/iict-summer-internship-training-2026.pdf",
    hrefLabel: "View certificate",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte, Forage",
    year: "2025",
    href: "/certificates/deloitte-data-analytics-simulation-2025.pdf",
    hrefLabel: "View certificate",
  },
  {
    name: "Advanced Excel Skills for Business (Advanced)",
    issuer: "Coursera (Macquarie University)",
    year: "2025",
    href: "/certificates/coursera-excel-advanced-2025.pdf",
    hrefLabel: "View certificate",
  },
  {
    name: "Web Dev Cohort 2026",
    issuer: "ChaiCode",
    year: "2026",
  },
  {
    name: "GenAI with JavaScript 2026",
    issuer: "ChaiCode",
    year: "2026",
    inProgress: true,
  },
  {
    name: "Agentic AI Hackathon '26 - participation",
    issuer: "Product Space",
    year: "2026",
    href: "/certificates/agentic-ai-hackathon-2026.jpg",
    hrefLabel: "View certificate",
  },
  {
    name: "HACKDAY 1.0 - participation",
    issuer: "DECODEP (with Unstop and GO.)",
    year: "2026",
    href: "/certificates/hackday-1.0-participation-2026.pdf",
    hrefLabel: "View certificate",
  },
  {
    name: "Ethical Hacking and Network Pentesting Internship with Industrial Training",
    issuer: "CRAW Security (with VIPS-TC)",
    year: "2025",
    href: "/certificates/craw-security-internship-2025.jpg",
    hrefLabel: "View certificate",
  },
];

// ---------------------------------------------------------------
// Education
// ---------------------------------------------------------------

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  cgpa: "CGPA 8.48/10",
  years: "2023 - 2027",
  school: "Vivekananda Institute of Professional Studies - Technical Campus, GGSIPU",
  schoolEntries: [
    { label: "Class XII", date: "03/2022", school: "Summermal Jain Public School, New Delhi" },
    { label: "Class X", date: "03/2020", school: "Summermal Jain Public School, New Delhi" },
  ],
};

// ---------------------------------------------------------------
// Stats strip (5 items)
// ---------------------------------------------------------------

export const stats = [
  { value: 2, display: "2nd", label: "CodeVerse India 2026 (Winner)" },
  { value: 141, display: "141", label: "automated tests (SpareLook)" },
  { value: 40, display: "40/40", label: "concurrency test rounds" },
  { value: 10, display: "10", label: "projects built" },
  { value: 2, display: "2", label: "data analytics internships" },
];
