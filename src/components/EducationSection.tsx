import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Sc. Mathematics & Computer Science",
    school: "University — 3rd Year",
    year: "2023 – Present",
    detail: "Specialization in mathematical statistics and data science. Core courses: probability theory, statistical inference, stochastic processes, machine learning, numerical analysis.",
  },
];

const coursework = [
  "Probability Theory",
  "Mathematical Statistics",
  "Stochastic Processes",
  "Machine Learning",
  "Linear Algebra",
  "Numerical Methods",
  "Data Mining",
  "Optimization",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative bg-card/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Background</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 max-w-2xl">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="font-display text-xs text-primary mb-1">{item.year}</p>
                <h3 className="font-display text-lg font-bold text-foreground">{item.degree}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.school}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-sm font-bold text-primary mb-4">Key Coursework</h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, i) => (
                <span
                  key={i}
                  className="font-display text-xs px-3 py-1.5 rounded bg-secondary text-secondary-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
