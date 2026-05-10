import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type SkillCategory = { label: string; items: string[] };
type SkillGroup = { title: string; categories: SkillCategory[] };

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    categories: [
      { label: "Python", items: ["pandas", "NumPy", "SciPy", "PyTorch", "Scikit-Learn", "seaborn", "matplotlib", "Folium"] },
      { label: "R", items: ["tidyverse", "ggplot2", "lme4"] },
      { label: "SQL", items: ["PostgreSQL", "SQLite", "MariaDB", "Query Optimization", "DAX"] },
      { label: "MATLAB", items: ["SPDE simulation", "Parallel computing", "Numerical methods"] },
    ],
  },
  {
    title: "Libraries & Frameworks",
    categories: [
      { label: "ML & AI", items: ["PyTorch", "Scikit-Learn", "LLMs (Claude, Cursor)", "RAG pipelines"] },
      { label: "Data", items: ["pandas", "NumPy", "SciPy", "tidyverse"] },
      { label: "Visualization", items: ["matplotlib", "seaborn", "Plotly", "ggplot2", "Folium"] },
      { label: "Scientific", items: ["FEniCSx", "lme4", "Three.js"] },
    ],
  },
  {
    title: "Methods",
    categories: [
      { label: "Statistical Modeling", items: ["Regression", "Classification", "Mixed-effects models", "Hypothesis testing"] },
      { label: "Validation", items: ["Cross-validation", "LOOCV", "AIC selection", "VIF diagnostics"] },
      { label: "ML & AI", items: ["Predictive Modeling", "EDA", "RAG pipelines", "RL training"] },
      { label: "Numerical", items: ["FEM", "ODE/PDE solvers", "SPDEs"] },
    ],
  },
  {
    title: "Tools",
    categories: [
      { label: "Dev", items: ["Git", "Docker", "Linux", "Bash"] },
      { label: "Notebooks & IDE", items: ["Jupyter", "RStudio", "Cursor"] },
      { label: "Data Stores", items: ["PostgreSQL", "SQLite", "MariaDB"] },
      { label: "BI & Docs", items: ["Power BI", "DAX", "Excel", "Typst"] },
    ],
  },
];

const languages = [
  { lang: "English", level: "C2" },
  { lang: "Swedish", level: "C1" },
  { lang: "Croatian", level: "B2" },
  { lang: "French", level: "A2" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section label - asymmetric */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-primary">01</span>
          <div className="w-8 h-px bg-primary" />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground">About</span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Left bio — 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <p className="font-body text-muted-foreground leading-[1.8] text-[15px] font-light mb-8">
              I'm a third-year undergraduate at Stockholm University studying Mathematics and Computer Science with a
              specialisation in mathematical statistics. My work sits at the intersection of rigorous statistical theory
              and practical computation — from deriving estimators to building ML pipelines.
            </p>
            <p className="font-body text-muted-foreground leading-[1.8] text-[15px] font-light mb-10">
              Currently writing my bachelor's thesis on stochastic modelling, while teaching cybersecurity fundamentals
              at Unga Forskare.
            </p>

            {/* Languages */}
            <div>
              <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Languages</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {languages.map((l, i) => (
                  <span key={i} className="font-body text-sm text-muted-foreground">
                    {l.lang} <span className="text-primary/60 font-display text-xs">{l.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right skills — 7 cols, grid of skill groups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-7"
          >
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {skillGroups.map((group, i) => (
                <div key={i}>
                  <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-4">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.categories.map((cat, j) => (
                      <HoverCard key={j} openDelay={80} closeDelay={80}>
                        <HoverCardTrigger asChild>
                          <button
                            type="button"
                            className="px-2 py-1 text-xs font-body text-muted-foreground border border-border rounded hover:border-primary hover:text-primary transition-colors cursor-default"
                          >
                            {cat.label}
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent
                          align="start"
                          className="w-auto max-w-xs p-3 bg-card border-border"
                        >
                          <p className="font-display text-[9px] tracking-[0.3em] uppercase text-primary mb-2">
                            {cat.label}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {cat.items.map((item, k) => (
                              <span
                                key={k}
                                className="px-1.5 py-0.5 text-[11px] font-body text-muted-foreground border border-border/60 rounded"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
