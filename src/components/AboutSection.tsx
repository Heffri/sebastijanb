import { motion } from "framer-motion";

const skillGroups = [
  { title: "Languages", items: ["Python", "R", "SQL", "MATLAB"] },
  { title: "Libraries", items: ["NumPy", "SciPy", "pandas", "scikit-learn", "matplotlib", "tidyverse", "ggplot2", "FEniCSx"] },
  { title: "Methods", items: ["Regression", "Classification", "Cross-validation", "Mixed-effects", "Hypothesis testing", "FEM", "ODE/PDE solvers"] },
  { title: "Tools", items: ["Git", "Jupyter", "RStudio", "SQLite", "MariaDB", "MPI", "Linux", "LaTeX"] },
];

const languages = [
  { lang: "English", level: "C1" },
  { lang: "Swedish", level: "B2" },
  { lang: "Croatian", level: "B2" },
  { lang: "French", level: "A2" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-body text-2xl font-bold text-foreground">1. About</h2>
          <div className="w-full h-px bg-border mt-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-base text-foreground/80 leading-[1.9] mb-8 max-w-2xl">
            Finishing a bachelor's at Stockholm University — mostly probability, inference, and
            numerical methods. Writing my thesis on stochastic modelling. Teaching cybersecurity
            workshops on the side.
          </p>

          <div className="mb-10">
            <h3 className="font-display text-[11px] tracking-[0.2em] uppercase text-primary mb-3">Languages</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {languages.map((l, i) => (
                <span key={i} className="font-body text-sm text-foreground/70">
                  {l.lang} <span className="text-primary font-display text-xs">{l.level}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            {skillGroups.map((group, i) => (
              <div key={i}>
                <h3 className="font-display text-[11px] tracking-[0.2em] uppercase text-primary mb-3">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, j) => (
                    <span
                      key={j}
                      className="font-display text-xs px-2.5 py-1 bg-secondary text-secondary-foreground border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
