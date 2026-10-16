import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <p className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-8">
          Stockholm, Sweden
        </p>

        <h1 className="font-body text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-8">
          Sebastijan Babi&#263;
        </h1>

        <div className="w-24 h-px bg-primary mb-8" />

        <p className="font-body text-xl text-muted-foreground max-w-2xl leading-relaxed italic">
          Mathematical statistics and machine learning. I derive the maths and then ship the
          system that runs on it.
        </p>

        <div className="callout-box mt-12 max-w-2xl">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-2">
            Currently
          </p>
          <p className="font-body text-lg text-foreground leading-relaxed">
            Founding engineer at East Sea Technologies, building{" "}
            <span className="text-foreground font-semibold">Verah</span> &mdash; field software for
            Swedish VVS and heat-pump firms, live in production. Also founding engineer at
            Townhall Analytics, building{" "}
            <span className="text-foreground font-semibold">OpinionLive</span>. Reading for an
            M.Sc. in Machine Learning &amp; Mathematical Statistics at Stockholm University.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="#work"
            className="px-6 py-3 bg-primary text-primary-foreground font-display text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Systems
          </a>
          <a
            href="#research"
            className="px-6 py-3 border border-border text-muted-foreground font-display text-xs tracking-wider uppercase hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            Research
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
