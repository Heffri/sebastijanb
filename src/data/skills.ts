export type SkillCategory = { label: string; items: string[] };
export type SkillGroup = { title: string; categories: SkillCategory[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    categories: [
      { label: "Python", items: ["pandas", "NumPy", "SciPy", "PyTorch", "scikit-learn", "seaborn", "matplotlib"] },
      { label: "R", items: ["tidyverse", "ggplot2", "lme4"] },
      { label: "TypeScript", items: ["React 19", "Node", "Zod", "strict mode"] },
      { label: "SQL", items: ["PostgreSQL", "SQLite", "row-level security", "query planning"] },
      { label: "MATLAB", items: ["SPDE simulation", "numerical methods", "parallel computing"] },
    ],
  },
  {
    title: "Statistics & ML",
    categories: [
      { label: "Modelling", items: ["Regression", "Classification", "Mixed-effects models", "Hypothesis testing"] },
      { label: "Validation", items: ["Cross-validation", "LOOCV", "AIC selection", "VIF diagnostics"] },
      { label: "Stochastics", items: ["Wiener processes", "SDEs / SPDEs", "Monte Carlo", "Markov chains"] },
      { label: "Numerical", items: ["FEM", "ODE / PDE solvers", "FEniCSx", "Adaptive integrators"] },
    ],
  },
  {
    title: "AI engineering",
    categories: [
      { label: "Retrieval", items: ["pgvector", "HNSW", "Voyage embeddings", "Cosine ranking"] },
      { label: "LLM systems", items: ["Prompt caching", "Multi-model routing", "Token & cost accounting", "PII sanitisation"] },
      { label: "Speech", items: ["Deepgram Nova-2", "Swedish transcription", "Domain post-editing"] },
      { label: "Frameworks", items: ["Claude API", "PyTorch", "scikit-learn"] },
    ],
  },
  {
    title: "Building & shipping",
    categories: [
      { label: "Backend", items: ["Supabase", "FastAPI", "Drizzle", "SQLAlchemy", "Alembic", "Celery"] },
      { label: "Frontend", items: ["TanStack Start / Query", "Next.js", "Tailwind", "shadcn/ui"] },
      { label: "Infrastructure", items: ["Cloudflare Workers", "Docker", "Nginx", "GitHub Actions", "Linux"] },
      { label: "Testing", items: ["Vitest", "Playwright", "pytest", "ESLint / Ruff"] },
    ],
  },
  {
    title: "Data & documents",
    categories: [
      { label: "Visualisation", items: ["matplotlib", "seaborn", "Plotly", "ggplot2", "Folium", "Recharts"] },
      { label: "BI", items: ["Power BI", "DAX", "Excel"] },
      { label: "Notebooks & IDE", items: ["Jupyter", "RStudio", "Cursor"] },
      { label: "Typesetting", items: ["Typst", "LaTeX", "Markdown"] },
    ],
  },
];

export const languages = [
  { lang: "Swedish", level: "Native" },
  { lang: "English", level: "Bilingual" },
  { lang: "Croatian", level: "Native" },
  { lang: "French", level: "A2" },
];
