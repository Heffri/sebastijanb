import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-display text-[11px] tracking-[0.2em] text-muted-foreground mb-6">
          Stockholm, Sweden
        </p>

        <h1 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
          Sebastijan Babić
        </h1>

        <p className="font-body text-lg text-muted-foreground max-w-lg leading-relaxed italic">
          Maths & CS student. Mathematical statistics, data science, numerical methods.
        </p>

        <div className="callout-box mt-10 max-w-md">
          <p className="font-display text-[10px] tracking-[0.3em] uppercase text-primary mb-1">Looking for</p>
          <p className="font-body text-base text-foreground/80">
            Internships in data science, analytics, or quantitative research
          </p>
        </div>

        <div className="flex gap-4 mt-10">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-primary text-primary-foreground font-display text-[11px] tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-border text-muted-foreground font-display text-[11px] tracking-wider uppercase hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
