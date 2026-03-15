import { motion } from "framer-motion";

const projects = [
  {
    title: "Supervised Statistical Learning",
    tags: ["R", "Regression", "Mixed-Effects"],
    description: "Log-linear regression with AIC/LOOCV diagnostics; hierarchical mixed-effects models with likelihood-ratio testing.",
    link: "https://github.com/Heffri/supervised-learning",
  },
  {
    title: "US Traffic Incidents",
    tags: ["Python", "Pandas", "Folium"],
    description: "~191k accident records. Interactive heatmaps, signal–accident correlations, NYC vs LA comparison.",
    link: "https://github.com/Heffri/traffic-incidents-USA",
  },
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
  {
    title: "Database Technology",
    tags: ["SQL", "Python", "SQLite"],
    description: "Ensembl genome queries with JOINs and EXPLAIN analysis. SQLite butterfly observation app with index benchmarking.",
    link: "https://github.com/Heffri/database-technology",
  },
  {
    title: "DNA Sequence Analysis",
    tags: ["Python", "Biopython"],
    description: "SARS-CoV-2 genome parsing, sequence statistics, alignment groundwork.",
    link: "https://github.com/Heffri/dna-sequence-analysis",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h2 className="font-body text-3xl font-bold text-foreground">2. Projects</h2>
        <div className="w-full h-px bg-border mt-3" />
      </motion.div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group block border-t border-border py-6 hover:bg-card/50 transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-body text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
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
        ))}
        <div className="border-t border-border" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6"
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
