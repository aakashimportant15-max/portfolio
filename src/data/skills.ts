// ---------------------------------------------------------------
// Skills (icon cards in groups). Only evidenced skills are listed.
// No skill-level percentage bars.
// ---------------------------------------------------------------

export type SkillGroup = {
  id: string;
  title: string;
  /** Icon key resolved by the Skills component (generic icons only). */
  icon:
    | "code"
    | "sparkles"
    | "brain"
    | "server"
    | "chart"
    | "flask";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    skills: ["Python", "SQL", "TypeScript"],
  },
  {
    id: "genai",
    title: "GenAI and LLM",
    icon: "sparkles",
    skills: [
      "LLM API Integration (Groq)",
      "Structured JSON Outputs",
      "Pydantic",
      "Prompt Engineering",
      "Multi-stage LLM Pipelines",
      "Guardrails",
    ],
  },
  {
    id: "ml-nlp",
    title: "ML and NLP",
    icon: "brain",
    skills: [
      "Scikit-learn",
      "NLP",
      "TF-IDF",
      "Text Classification",
      "Random Forest",
      "Logistic Regression",
      "Naive Bayes",
      "Model Evaluation",
      "YOLOv8",
    ],
  },
  {
    id: "backend",
    title: "Backend and Security",
    icon: "server",
    skills: [
      "FastAPI",
      "Next.js",
      "REST APIs",
      "SQLAlchemy",
      "SQLite",
      "MongoDB",
      "Role-Based Access Control",
      "Session Authentication",
      "HMAC-SHA256",
      "bcrypt",
      "Database Triggers",
      "Audit Logging",
    ],
  },
  {
    id: "data-bi",
    title: "Data Analytics and BI",
    icon: "chart",
    skills: [
      "Power BI",
      "Excel (Pivot Tables)",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning",
      "EDA",
      "KPI Analysis",
      "Data Visualization",
    ],
  },
  {
    id: "testing-tools",
    title: "Testing and Tools",
    icon: "flask",
    skills: ["pytest", "Docker", "Git/GitHub", "Streamlit", "Flask", "Jupyter"],
  },
];
