import { motion } from "framer-motion";

const projects = [
  {
    title: "Bayesian Neural Networks for Uncertainty Quantification",
    tags: ["PyTorch", "Bayesian ML", "Research"],
    description: "Implemented variational inference methods for deep learning models to provide calibrated uncertainty estimates in medical image classification.",
    link: "#",
  },
  {
    title: "Time Series Forecasting with ARIMA-GARCH",
    tags: ["R", "Finance", "Statistics"],
    description: "Built a hybrid model for volatility forecasting on cryptocurrency markets, achieving 15% improvement over baseline GARCH models.",
    link: "#",
  },
  {
    title: "Causal Inference in A/B Testing",
    tags: ["Python", "Causal ML", "Statistics"],
    description: "Developed a framework for estimating heterogeneous treatment effects using doubly-robust estimators on large-scale experimental data.",
    link: "#",
  },
  {
    title: "High-Dimensional PCA for Genomic Data",
    tags: ["R", "Bioinformatics", "Linear Algebra"],
    description: "Applied random matrix theory to determine optimal dimensionality reduction thresholds for gene expression datasets with n << p.",
    link: "#",
  },
  {
    title: "Reinforcement Learning for Portfolio Optimization",
    tags: ["Python", "RL", "Finance"],
    description: "Trained a PPO agent to manage a multi-asset portfolio, incorporating Markowitz constraints and transaction cost modeling.",
    link: "#",
  },
  {
    title: "Spatial Statistics Dashboard",
    tags: ["Python", "Plotly", "Geostatistics"],
    description: "Interactive visualization of spatial autocorrelation in urban crime data using Moran's I and kriging interpolation.",
    link: "#",
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
