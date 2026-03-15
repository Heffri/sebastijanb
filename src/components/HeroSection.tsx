import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8"
          >
            <p className="font-display text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Stockholm, Sweden
            </p>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
              Sebastijan Babić
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed font-light">
              Maths & CS student. Mathematical statistics, data science, numerical methods.
            </p>

            <div className="mt-8 px-4 py-3 rounded-sm border border-primary/30 bg-primary/5 inline-block">
              <p className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-1">Looking for</p>
              <p className="font-body text-sm text-foreground/80 font-light">
                Internships in data science, analytics, or quantitative research
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-sm bg-primary text-primary-foreground font-display text-[11px] tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-sm border border-border text-muted-foreground font-display text-[11px] tracking-wider uppercase hover:text-foreground hover:border-muted-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="md:col-span-4 hidden md:block"
          >
            <div className="font-display text-[10px] text-muted-foreground/30 leading-loose text-right">
              <p>B.Sc. Mathematics & CS</p>
              <p>Stockholm University, 2026</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
