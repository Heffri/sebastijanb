import { motion } from "framer-motion";

const projects = [
  {
    title: "Supervised Statistical Learning",
    tags: ["R", "Regression", "Mixed-Effects"],
    description: "Log-linear regression with AIC/LOOCV diagnostics; hierarchical mixed-effects models with likelihood-ratio testing.",
    link: "https://github.com/Heffri/supervised-learning",
    number: "01",
  },
  {
    title: "US Traffic Incidents",
    tags: ["Python", "Pandas", "Folium"],
    description: "~191k accident records. Interactive heatmaps, signal–accident correlations, NYC vs LA comparison.",
    link: "https://github.com/Heffri/traffic-incidents-USA",
    number: "02",
  },
  {
    title: "Population Dynamics",
    tags: ["Python", "ODEs", "Numerical"],
    description: "Euler and RK45 solvers for Lotka-Volterra systems. Stability analysis across 2- and 3-species models.",
    link: "https://github.com/Heffri/population-dynamics",
    number: "03",
  },
  {
    title: "Glacier Ice Flow",
    tags: ["FEniCSx", "FEM", "MPI"],
    description: "Stokes equations on real Arolla glacier geometry. FEniCSx + MPI parallel computation. Co-authored.",
    link: "https://github.com/Heffri/glacier-flow-simulation",
    number: "04",
  },
  {
    title: "Database Technology",
    tags: ["SQL", "Python", "SQLite"],
    description: "Ensembl genome queries with JOINs and EXPLAIN analysis. SQLite butterfly observation app with index benchmarking.",
    link: "https://github.com/Heffri/database-technology",
    number: "05",
  },
  {
    title: "DNA Sequence Analysis",
    tags: ["Python", "Biopython"],
    description: "SARS-CoV-2 genome parsing, sequence statistics, alignment groundwork.",
    link: "https://github.com/Heffri/dna-sequence-analysis",
    number: "06",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-body text-2xl font-bold text-foreground">2. Projects</h2>
          <div className="w-full h-px bg-border mt-2" />
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
              className="group block border-t border-border py-5 hover:bg-card/60 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                <span className="font-display text-xs text-muted-foreground/50 md:w-8 shrink-0">{project.number}</span>
                <div className="md:w-48 shrink-0">
                  <h3 className="font-body text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:justify-end shrink-0">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="font-display text-[10px] px-2 py-0.5 border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
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
            className="font-display text-[11px] tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            All repos on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
