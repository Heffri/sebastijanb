import { motion } from "framer-motion";

const projects = [
  {
    title: "Supervised Statistical Learning",
    tags: ["R", "Regression", "Mixed-Effects"],
    description: "Two R projects: predicting computer prices with log-linear regression, backward AIC, LOOCV, Cook's distance, and VIF diagnostics; and modelling mussel stress-protein response with hierarchical mixed-effects models.",
    link: "https://github.com/Heffri/supervised-learning",
    number: "01",
  },
  {
    title: "Traffic Incidents USA",
    tags: ["Python", "Pandas", "Folium"],
    description: "Analysis of ~191,000 US traffic accidents (2017–2019) studying geographic patterns and signal–accident correlations. Built interactive folium heatmaps and NYC vs. LA comparative visualisations.",
    link: "https://github.com/Heffri/traffic-incidents-USA",
    number: "02",
  },
  {
    title: "Population Dynamics",
    tags: ["Python", "ODEs", "Numerical"],
    description: "Forward Euler and RK45 solvers for 2- and 3-species Lotka-Volterra systems. Demonstrated +295% plant yield via biological control in plant-pest-predator simulations.",
    link: "https://github.com/Heffri/population-dynamics",
    number: "03",
  },
  {
    title: "Glacier Ice Flow",
    tags: ["FEniCSx", "FEM", "MPI"],
    description: "Finite element solver for glacier Stokes equations on real Arolla glacier geometry. Variational formulation in UFL with MPI-parallelised computation via dolfinx.",
    link: "https://github.com/Heffri/glacier-flow-simulation",
    number: "04",
  },
  {
    title: "Database Technology",
    tags: ["SQL", "Python", "SQLite"],
    description: "Human genome analysis on Ensembl with multi-table JOINs and EXPLAIN query-plan analysis. Python + SQLite butterfly observation app with index performance benchmarking.",
    link: "https://github.com/Heffri/database-technology",
    number: "05",
  },
  {
    title: "DNA Sequence Analysis",
    tags: ["Python", "Biopython"],
    description: "Computational analysis of DNA sequences including the SARS-CoV-2 reference genome. Sequence parsing, statistics, and groundwork for alignment algorithms.",
    link: "https://github.com/Heffri/dna-sequence-analysis",
    number: "06",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-primary">02</span>
          <div className="w-8 h-px bg-primary" />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Projects</span>
        </motion.div>

        <div className="space-y-1">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block border-t border-border py-7 px-2 hover:bg-card/60 transition-all duration-300"
            >
              <div className="grid md:grid-cols-12 gap-4 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-display text-xs text-muted-foreground/40">{project.number}</span>
                </div>

                {/* Title */}
                <div className="md:col-span-3">
                  <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="font-display text-[10px] px-2 py-1 rounded-sm border border-border text-muted-foreground"
                    >
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
          className="mt-8"
        >
          <a
            href="https://github.com/Heffri"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[11px] tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            View all on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
