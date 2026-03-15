import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-body text-2xl font-bold text-foreground">3. Experience & Education</h2>
          <div className="w-full h-px bg-border mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-[11px] tracking-[0.2em] uppercase text-primary mb-6">Education</h3>

            <div className="callout-box">
              <p className="font-display text-[10px] tracking-wider uppercase text-primary/70 mb-1">2023 – 2026</p>
              <h4 className="font-body text-base font-semibold text-foreground mb-1">B.Sc. Mathematics & Computer Science</h4>
              <p className="font-body text-sm text-muted-foreground">Stockholm University</p>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5">
                {["Statistical Inference", "Supervised Learning", "Probability Theory", "Stochastic Processes", "Numerical Analysis", "Database Technology"].map((course, i) => (
                  <span key={i} className="font-display text-[10px] px-2.5 py-1 bg-secondary text-secondary-foreground border border-border">
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
            <h3 className="font-display text-[11px] tracking-[0.2em] uppercase text-primary mb-6">Experience</h3>

            <div className="callout-box">
              <p className="font-display text-[10px] tracking-wider uppercase text-primary/70 mb-1">March 2026 – Present</p>
              <h4 className="font-body text-base font-semibold text-foreground mb-1">Cybersecurity Instructor</h4>
              <p className="font-body text-sm text-muted-foreground">Unga Forskare</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
