import { motion } from "framer-motion";

const skills = [
  { category: "Statistics", items: ["Bayesian Inference", "Regression Analysis", "Probability Theory", "Hypothesis Testing"] },
  { category: "Machine Learning", items: ["Supervised Learning", "Dimensionality Reduction", "Model Selection", "Cross-Validation"] },
  { category: "Programming", items: ["Python", "R", "SQL", "MATLAB"] },
  { category: "Tools & Viz", items: ["Pandas", "Scikit-learn", "Matplotlib", "LaTeX"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Hi, I'm Sebastijan — a third-year undergraduate studying Mathematics and Computer Science 
              with a focus on mathematical statistics and data science. I love the challenge of translating 
              abstract mathematical concepts into practical tools that reveal patterns in real-world data.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              My coursework spans probability theory, statistical inference, numerical methods, and 
              machine learning. I'm especially drawn to the elegance of Bayesian thinking and how 
              statistical theory can guide better decision-making under uncertainty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((group, i) => (
              <div key={i}>
                <h3 className="font-display text-sm font-bold text-primary mb-3">{group.category}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
