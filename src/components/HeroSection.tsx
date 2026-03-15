import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <p className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-6">
          Stockholm, Sweden
        </p>

        <h1 className="font-body text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
          Sebastijan Babić
        </h1>

        <p className="font-body text-xl text-muted-foreground max-w-xl leading-relaxed italic">
          Maths & CS student. Mathematical statistics, data science, numerical methods.
        </p>

        <div className="callout-box mt-10 max-w-lg">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-1">Looking for</p>
          <p className="font-body text-lg text-foreground/80">
            Internships in data science, analytics, or quantitative research
          </p>
        </div>

        <div className="flex gap-4 mt-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-display text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-muted-foreground font-display text-xs tracking-wider uppercase hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
