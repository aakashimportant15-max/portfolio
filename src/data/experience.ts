// ---------------------------------------------------------------
// Experience timeline (max 2 short bullets each).
// proof = optional document under /public (certificate / letter).
// ---------------------------------------------------------------

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  recognition?: string;
  proof?: { label: string; href: string };
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analytics Intern",
    org: "StudifySuccess",
    period: "Jul 2026 - Aug 2026",
    bullets: [
      "Analyzed website search data (66K+ clicks, 1M+ impressions, 5.91% CTR) with Excel and Python; presented trends in weekly reports and a final presentation.",
      "Built an AI chatbot and MongoDB-based admin panel (Groq API) with role-based workflows and session-level analytics.",
    ],
    recognition:
      "Certificate of Achievement for outstanding performance in data analysis (Aug 2026).",
    proof: {
      label: "View certificate",
      href: "/experience/studifysuccess-internship-certificate-2026.pdf",
    },
  },
  {
    role: "AI Data Analytics Intern",
    org: "InAmigos Foundation",
    period: "Jul 2026",
    bullets: [
      "Researched AI and data-analytics adoption across 10+ Indian NGOs; compiled findings into reports and recommendations.",
    ],
    proof: {
      label: "View certificate",
      href: "/experience/inamigos-internship-certificate-2026.pdf",
    },
  },
  {
    role: "AI/ML Summer Intern",
    org: "IICT (Indian Institute of Computing and Technology)",
    period: "Jun 2026 - Jul 2026",
    bullets: [
      "Completed a 45-day summer internship in Artificial Intelligence and Machine Learning (15 Jun - 30 Jul 2026).",
      "Built two projects during the program: AI-Powered Fake News Detection and AI-Driven Phishing Email Detection.",
    ],
    proof: {
      label: "View certificate",
      href: "/certificates/iict-summer-internship-2026.pdf",
    },
  },
  {
    role: "Campus Ambassador",
    org: "E-Cell IIT Bombay",
    period: "Jun 2026 - Present",
    bullets: [
      "Entrepreneur outreach (Innogather), startup case-study research (Startup Spotlight), and a research-backed LinkedIn article on India's AI startup ecosystem.",
    ],
  },
  {
    role: "Campus Ambassador",
    org: "eDC IIT Delhi",
    period: "Dec 2025 - Feb 2026",
    bullets: [
      "Represented eDC IIT Delhi for BECon 2026, driving student registrations and event promotion; recognized as a Top Campus Ambassador.",
    ],
    proof: {
      label: "View certificate",
      href: "/experience/edc-campus-ambassador-certificate-2026.pdf",
    },
  },
];
