import { motion } from "framer-motion";

const skillGroups = [
{
  title: "Programming Languages",
  items: ["Python", "R", "SQL", "MATLAB"]
},
{
  title: "Libraries",
  items: [
  "NumPy",
  "SciPy",
  "pandas",
  "scikit-learn",
  "matplotlib",
  "seaborn",
  "tidyverse",
  "ggplot2",
  "lme4",
  "FEniCSx"]

},
{
  title: "Methods",
  items: [
  "Regression",
  "Classification",
  "Cross-validation",
  "Mixed-effects models",
  "Hypothesis testing",
  "FEM",
  "ODE/PDE solvers"]

},
{
  title: "Tools",
  items: ["Git", "Jupyter", "RStudio", "SQLite", "MariaDB", "MPI", "Linux", "LaTeX"]
}];


const languages = [
{ lang: "English", level: "C1" },
{ lang: "Swedish", level: "B2" },
{ lang: "Croatian", level: "B2" },
{ lang: "French", level: "A2" }];


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
          className="flex items-center gap-4 mb-16">
          
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
            className="md:col-span-5">
            
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
                {languages.map((l, i) =>
                <span key={i} className="font-body text-sm text-muted-foreground">
                    {l.lang} <span className="text-primary/60 font-display text-xs">{l.level}</span>
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right skills — 7 cols, grid of skill groups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-7">
            
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {skillGroups.map((group, i) =>
              <div key={i}>
                  <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-4">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, j) => {}






                  )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;