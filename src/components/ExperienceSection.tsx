import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-primary">03</span>
          <h2 className="font-body text-3xl font-bold text-foreground">Experience & Education</h2>
        </div>
        <div className="w-full h-px bg-border mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xs tracking-[0.2em] uppercase text-primary mb-3">Education</h3>
          <div className="w-12 h-px bg-primary/20 mb-6" />

          <div className="callout-box">
            <p className="font-display text-[11px] tracking-wider uppercase text-primary/70 mb-1">2023 – 2026</p>
            <h4 className="font-body text-lg font-semibold text-foreground mb-1">B.Sc. Mathematics & Computer Science</h4>
            <p className="font-body text-base text-muted-foreground">Stockholm University</p>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {["Statistical Inference", "Supervised Learning", "Probability Theory", "Stochastic Processes", "Numerical Analysis", "Database Technology"].map((course, i) => (
                <span key={i} className="font-display text-[11px] px-3 py-1.5 bg-secondary text-secondary-foreground border border-border">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="font-display text-xs tracking-[0.2em] uppercase text-primary mb-3">Experience</h3>
          <div className="w-12 h-px bg-primary/20 mb-6" />

          <div className="callout-box">
            <p className="font-display text-[11px] tracking-wider uppercase text-primary/70 mb-1">March 2026 – Present</p>
            <h4 className="font-body text-lg font-semibold text-foreground mb-1">Cybersecurity Instructor</h4>
            <p className="font-body text-base text-muted-foreground">Unga Forskare</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
