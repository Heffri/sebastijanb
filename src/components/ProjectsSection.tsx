import { motion } from "framer-motion";

const projects = [
  {
    title: "Traffic Incidents USA",
    tags: ["Jupyter", "Pandas", "Seaborn", "Folium"],
    description: "Exploratory analysis of US traffic accidents (2017–2019) with geographic heatmaps and statistical breakdowns of accident rates by traffic signal type, including NYC vs. LA comparisons.",
    link: "https://github.com/Heffri/traffic-incidents-USA",
  },
  {
    title: "Population Dynamics Simulation",
    tags: ["Python", "ODEs", "Numerical Methods"],
    description: "Lotka-Volterra predator-prey models (2- and 3-species) solved with a hand-written Forward Euler and RK45. Demonstrated +295% plant yield improvement via biological control agents.",
    link: "https://github.com/Heffri/population-dynamics",
  },
  {
    title: "Glacier Flow Simulation",
    tags: ["Python", "FEniCSx", "FEM", "MPI"],
    description: "Finite element solver for glacier dynamics using the shallow ice approximation on real Arolla glacier geometry. Built with FEniCSx and parallelised via MPI.",
    link: "https://github.com/Heffri/glacier-flow-simulation",
  },
  {
    title: "DNA Sequence Analysis",
    tags: ["Python", "Biopython", "Bioinformatics"],
    description: "Computational analysis of DNA sequences including the SARS-CoV-2 reference genome. Implements sequence parsing, statistics, and lays groundwork for alignment algorithms.",
    link: "https://github.com/Heffri/dna-sequence-analysis",
  },
  {
    title: "Database Technology",
    tags: ["SQL", "Python", "SQLite", "MariaDB"],
    description: "Three database projects: protein database queries, human genome analysis on Ensembl (discovering Titin's 365 exons), and Swedish butterfly observations with index performance benchmarking.",
    link: "https://github.com/Heffri/database-technology",
  },
  {
    title: "Supervised Learning",
    tags: ["R", "Machine Learning", "Statistics"],
    description: "Supervised learning methods implemented in R — classification and regression techniques with model evaluation and cross-validation.",
    link: "https://github.com/Heffri/supervised-learning",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="font-body text-muted-foreground mb-12 max-w-xl">
            A selection of academic and personal projects spanning data analysis, numerical simulation, 
            and machine learning. All source code available on{" "}
            <a href="https://github.com/Heffri" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub
            </a>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-primary"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="font-display text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <span className="inline-block mt-4 font-display text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View on GitHub →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
