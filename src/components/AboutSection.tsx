import { motion } from "framer-motion";

const skills = [
  { category: "Statistics", items: ["Bayesian Inference", "Regression Analysis", "Time Series", "Hypothesis Testing"] },
  { category: "Machine Learning", items: ["Neural Networks", "Random Forests", "SVM", "Clustering"] },
  { category: "Tools", items: ["Python", "R", "SQL", "TensorFlow"] },
  { category: "Visualization", items: ["Matplotlib", "Seaborn", "Plotly", "Tableau"] },
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
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Skills & Expertise
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
              I'm a graduate student passionate about extracting meaningful patterns from complex datasets. 
              My work bridges rigorous mathematical foundations with practical data science applications — 
              from deriving theoretical convergence properties to building production ML pipelines.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Currently focused on Bayesian methods for high-dimensional inference and their applications 
              in computational biology and financial modeling.
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
