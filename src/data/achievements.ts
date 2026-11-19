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
  },
  {
    id: "top-ca",
    title: "Top Campus Ambassador recognition",
    detail: "eDC, IIT Delhi.",
  },
];

export type CourseCertificate = {
  name: string;
  issuer: string;
  year: string;
  inProgress?: boolean;
};

export const courseCertificates: CourseCertificate[] = [
  {
    name: "Introduction to Machine Learning",
    issuer: "NPTEL, IIT Madras",
    year: "2026",
  },
  {
    name: "Summer Internship Training in AI and ML",
    issuer: "IICT",
    year: "2026",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte, Forage",
    year: "2025",
  },
  {
    name: "Advanced Excel Skills for Business",
    issuer: "Coursera",
    year: "2025",
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
