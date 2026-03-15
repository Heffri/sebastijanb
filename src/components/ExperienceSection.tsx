import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-primary">03</span>
          <div className="w-8 h-px bg-primary" />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Experience & Education</span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6"
          >
            <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-8">Education</h3>
            
            <div className="relative pl-6 border-l border-border">
              <div className="absolute left-[-3px] top-1 w-[5px] h-[5px] rounded-full bg-primary" />
              <p className="font-display text-[10px] tracking-wider uppercase text-primary/70 mb-1">2023 – 2026</p>
              <h4 className="font-body text-sm font-semibold text-foreground mb-1">B.Sc. Mathematics & Computer Science</h4>
              <p className="font-body text-sm text-muted-foreground">Stockholm University</p>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-1.5">
                {["Statistical Inference", "Supervised Learning", "Probability Theory", "Stochastic Processes", "Numerical Analysis", "Database Technology"].map((course, i) => (
                  <span key={i} className="font-body text-[11px] px-2.5 py-1 rounded-sm bg-secondary text-secondary-foreground border border-border">
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
            className="md:col-span-6 md:pt-12"
          >
            <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-8">Experience</h3>
            
            <div className="relative pl-6 border-l border-border">
              <div className="absolute left-[-3px] top-1 w-[5px] h-[5px] rounded-full bg-primary" />
              <p className="font-display text-[10px] tracking-wider uppercase text-primary/70 mb-1">March 2026 – Present</p>
              <h4 className="font-body text-sm font-semibold text-foreground mb-1">Cybersecurity Instructor</h4>
              <p className="font-body text-sm text-muted-foreground">Unga Forskare</p>
            </div>



          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
