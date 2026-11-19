// ---------------------------------------------------------------
// Resume dropdown data. Filenames are FIXED: replace a PDF in
// public/resumes/ (same filename) and redeploy - no code change.
// Bump RESUME_VERSION to cache-bust after replacing a file.
// ---------------------------------------------------------------

export const RESUME_VERSION = 1;

export type ResumeOption = {
  id: string;
  label: string;
  hint: string;
  /** Exact hosted filename inside /public/resumes/ */
  file: string;
  recommended?: boolean;
};

export const resumes: ResumeOption[] = [
  {
    id: "general",
    label: "General (Full)",
    hint: "Everything in 2 pages",
    file: "Aakash_Resume_General.pdf",
    recommended: true,
  },
  {
    id: "backend",
    label: "Backend",
    hint: "SpareLook, DocKet, 141 tests",
    file: "Aakash_Resume_Backend.pdf",
  },
  {
    id: "genai",
    label: "AI / GenAI",
    hint: "HireFlow, Covenant, LLM apps",
    file: "Aakash_Resume_GenAI.pdf",
  },
  {
    id: "data-analyst",
    label: "Data Analyst",
    hint: "Dashboards, internships",
    file: "Aakash_Resume_DataAnalyst.pdf",
  },
  {
    id: "ml-nlp",
    label: "ML / NLP",
    hint: "Classifiers, 82K emails",
    file: "Aakash_Resume_ML_NLP.pdf",
  },
  {
    id: "business-analyst",
    label: "Business Analyst",
    hint: "Analysis and reporting focus",
    file: "Aakash_Resume_Business_Analyst.pdf",
  },
  {
    id: "sap-abap",
    label: "SAP ABAP",
    hint: "ERP development focus",
    file: "Aakash_Resume_SAP_ABAP.pdf",
  },
];

/** /resumes/<file>?v=<RESUME_VERSION> */
export function resumeHref(file: string): string {
  return `/resumes/${file}?v=${RESUME_VERSION}`;
}
