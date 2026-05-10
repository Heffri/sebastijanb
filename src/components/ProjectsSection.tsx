import { motion } from "framer-motion";

type Project = {
  title: string;
  tags: string[];
  description: string;
  link: string;
};

const categories: { name: string; projects: Project[] }[] = [
  {
    name: "Statistics & ML",
    projects: [
      {
        title: "Supervised Learning",
        tags: ["R", "Regression"],
        description: "Log-linear regression, AIC/LOOCV, mixed-effects models.",
        link: "https://github.com/Heffri/supervised-learning",
      },
    ],
  },
  {
    name: "Data & Visualization",
    projects: [
      {
        title: "US Traffic Incidents",
        tags: ["Python", "Folium"],
        description: "~191k records. Heatmaps, NYC vs LA comparison.",
        link: "https://github.com/Heffri/traffic-incidents-USA",
      },
    ],
  },
  {
    name: "Simulations",
    projects: [
      {
        title: "Population Dynamics",
        tags: ["Python", "ODEs"],
        description: "Euler/RK45 solvers for Lotka-Volterra systems.",
        link: "https://github.com/Heffri/population-dynamics",
      },
      {
        title: "Glacier Ice Flow",
        tags: ["FEniCSx", "MPI"],
        description: "Stokes equations on Arolla glacier, parallel FEM.",
        link: "https://github.com/Heffri/glacier-flow-simulation",
      },
    ],
  },
  {
    name: "Databases & SQL",
    projects: [
      {
        title: "Database Technology",
        tags: ["SQL", "SQLite"],
        description: "Ensembl genome JOINs, index benchmarking.",
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
        description: "SARS-CoV-2 genome parsing, sequence statistics.",
        link: "https://github.com/Heffri/dna-sequence-analysis",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-primary">02</span>
          <h2 className="font-body text-3xl font-bold text-foreground">Projects</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.04 }}
            className="border border-border/60 bg-card/30 p-3 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between px-1 pb-2 border-b border-border/40">
              <span className="font-display text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {category.name}
              </span>
              <span className="font-display text-[10px] text-primary">
                {category.projects.length}
              </span>
            </div>

            {category.projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-background/60 border border-border/50 p-3 hover:border-primary/60 hover:bg-card/60 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h4>
                  <span className="font-display text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="font-display text-[9px] px-1.5 py-0.5 border border-border/60 text-muted-foreground uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </motion.div>
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
