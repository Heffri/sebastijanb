import { motion } from "framer-motion";

type Project = {
  title: string;
  tags: string[];
  description: string;
  link: string;
};

const categories: { name: string; projects: Project[] }[] = [
  {
    name: "Statistics & Machine Learning",
    projects: [
      {
        title: "Supervised Statistical Learning",
        tags: ["R", "Regression", "Mixed-Effects"],
        description: "Log-linear regression with AIC/LOOCV diagnostics; hierarchical mixed-effects models with likelihood-ratio testing.",
        link: "https://github.com/Heffri/supervised-learning",
      },
    ],
  },
  {
    name: "Data Analysis & Visualization",
    projects: [
      {
        title: "US Traffic Incidents",
        tags: ["Python", "Pandas", "Folium"],
        description: "~191k accident records. Interactive heatmaps, signal–accident correlations, NYC vs LA comparison.",
        link: "https://github.com/Heffri/traffic-incidents-USA",
      },
    ],
  },
  {
    name: "Numerical Simulations",
    projects: [
      {
        title: "Population Dynamics",
        tags: ["Python", "ODEs", "Numerical"],
        description: "Euler and RK45 solvers for Lotka-Volterra systems. Stability analysis across 2- and 3-species models.",
        link: "https://github.com/Heffri/population-dynamics",
      },
      {
        title: "Glacier Ice Flow",
        tags: ["FEniCSx", "FEM", "MPI"],
        description: "Stokes equations on real Arolla glacier geometry. FEniCSx + MPI parallel computation. Co-authored.",
        link: "https://github.com/Heffri/glacier-flow-simulation",
      },
    ],
  },
  {
    name: "Databases & SQL",
    projects: [
      {
        title: "Database Technology",
        tags: ["SQL", "Python", "SQLite"],
        description: "Ensembl genome queries with JOINs and EXPLAIN analysis. SQLite butterfly observation app with index benchmarking.",
        link: "https://github.com/Heffri/database-technology",
      },
    ],
  },
  {
    name: "Bioinformatics",
    projects: [
      {
        title: "DNA Sequence Analysis",
        tags: ["Python", "Biopython"],
        description: "SARS-CoV-2 genome parsing, sequence statistics, alignment groundwork.",
        link: "https://github.com/Heffri/dna-sequence-analysis",
      },
    ],
  },
];

const ProjectsSection = () => {
  let projectIndex = 0;
  return (
    <section id="projects" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-primary">02</span>
          <h2 className="font-body text-3xl font-bold text-foreground">Projects</h2>
        </div>
      </motion.div>

      <div className="space-y-12">
        {categories.map((category, ci) => (
          <div key={ci}>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-2"
            >
              <span className="font-display text-[10px] text-primary tracking-wider">
                §{String(ci + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {category.name}
              </h3>
              <div className="flex-1 h-px bg-border/60" />
            </motion.div>

            <div className="space-y-0">
              {category.projects.map((project) => {
                const i = projectIndex++;
                return (
                  <motion.a
                    key={i}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="group block border-t border-border/60 py-6 hover:bg-card/40 transition-all duration-300 px-1"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-body text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5 shrink-0">
                          {project.tags.map((tag, j) => (
                            <span key={j} className="font-display text-[11px] px-2 py-0.5 border border-border text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <a
          href="https://github.com/Heffri"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          All repos on GitHub →
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
