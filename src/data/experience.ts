// ---------------------------------------------------------------
// Experience timeline (max 2 short bullets each).
// ---------------------------------------------------------------

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  recognition?: string;
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
  },
  {
    role: "AI Data Analytics Intern",
    org: "InAmigos Foundation",
    period: "Jul 2026",
    bullets: [
      "Researched AI and data-analytics adoption across 10+ Indian NGOs; compiled findings into reports and recommendations.",
    ],
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
  },
];
