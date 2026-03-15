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
    <section id="about" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-primary">01</span>
          <h2 className="font-body text-3xl font-bold text-foreground">About</h2>
        </div>
        <div className="w-full h-px bg-border mt-4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-lg text-foreground/80 leading-[1.9] mb-12 max-w-2xl">
          Finishing a bachelor's at Stockholm University — mostly probability, inference, and
          numerical methods. Writing my thesis on stochastic modelling. Teaching cybersecurity
          workshops on the side.
        </p>

        <div className="mb-12">
          <h3 className="font-display text-xs tracking-[0.2em] uppercase text-primary mb-4">Languages</h3>
          <div className="w-12 h-px bg-primary/20 mb-4" />
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {languages.map((l, i) => (
              <span key={i} className="font-body text-base text-foreground/70">
                {l.lang} <span className="text-primary font-display text-sm">{l.level}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group, i) => (
            <div key={i}>
              <h3 className="font-display text-xs tracking-[0.2em] uppercase text-primary mb-3">
                {group.title}
              </h3>
              <div className="w-12 h-px bg-primary/20 mb-4" />
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="font-display text-sm px-3 py-1.5 bg-secondary text-secondary-foreground border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
