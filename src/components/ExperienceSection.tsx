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
          {/* Education */}
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
              <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                B.Sc. Mathematics & Computer Science
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-3">Stockholm University</p>
              <p className="font-body text-xs text-muted-foreground/80 leading-relaxed">
                Specialisation in mathematical statistics. Thesis on stochastic modelling (Spring 2026). 
                Coursework covers inference, supervised learning, probability theory, stochastic processes, 
                numerical analysis, and database technology.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Key Coursework</h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Statistical Inference",
                  "Supervised Learning",
                  "Probability Theory",
                  "Stochastic Processes",
                  "Numerical Analysis",
                  "Database Technology",
                  "Linear Algebra",
                  "Multivariable Calculus",
                ].map((course, i) => (
                  <span
                    key={i}
                    className="font-body text-[11px] px-2.5 py-1 rounded-sm bg-secondary text-secondary-foreground border border-border"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience */}
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
              <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                Cybersecurity Instructor
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-3">Unga Forskare</p>
              <ul className="space-y-2">
                <li className="font-body text-xs text-muted-foreground/80 leading-relaxed flex gap-2">
                  <span className="text-primary/40 mt-0.5">—</span>
                  Teach cybersecurity fundamentals to students from primary school through high school
                </li>
                <li className="font-body text-xs text-muted-foreground/80 leading-relaxed flex gap-2">
                  <span className="text-primary/40 mt-0.5">—</span>
                  Design and lead hands-on workshops in Arduino, AI, and programming for groups of 15–30 students
                </li>
              </ul>
            </div>

            <div className="mt-12 p-5 border border-border rounded-sm bg-card/30">
              <p className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-3">Looking for</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                Internships and junior roles in data science, analytics, quantitative research, 
                or scientific computing. Open to both industry and academic settings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
