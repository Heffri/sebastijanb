import { motion } from "framer-motion";
import { skillGroups, languages } from "@/data/skills";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-display text-[11px] tracking-[0.4em] uppercase text-primary">01</span>
          <div className="w-8 h-px bg-primary" />
          <span className="font-display text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
            About
          </span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <p className="font-body text-foreground leading-[1.8] text-base mb-6">
              I finished a B.Sc. in Mathematics and Computer Science at Stockholm University in
              June 2026, specialising in mathematical statistics, and defended a thesis on the
              numerical simulation of stochastic partial differential equations. In August 2026 I
              started the M.Sc. in Machine Learning and Mathematical Statistics at the same
              department.
            </p>
            <p className="font-body text-foreground leading-[1.8] text-base mb-6">
              In parallel I am the first technical hire at East Sea Technologies, where I build
              Verah: a multi-tenant SaaS for Swedish heating and plumbing firms that is live and
              in daily use. That means I spend one half of the week on measure theory and the
              other half on row-level security policies, retrieval pipelines and things breaking
              in production.
            </p>
            <p className="font-body text-foreground leading-[1.8] text-base mb-10">
              The through-line is that I like problems where the mathematics has to survive
              contact with a real system &mdash; where an estimator has to be correct{" "}
              <em>and</em> the thing computing it has to stay up.
            </p>

            <div>
              <h3 className="font-display text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
                Spoken languages
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {languages.map((l) => (
                  <span key={l.lang} className="font-body text-sm text-muted-foreground">
                    {l.lang}{" "}
                    <span className="text-primary font-display text-xs">{l.level}</span>
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
            className="md:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-display text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
                    {group.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {group.categories.map((cat) => (
                      <li
                        key={cat.label}
                        className="font-body text-[13px] text-muted-foreground leading-relaxed"
                      >
                        <span className="font-display text-[10px] tracking-[0.2em] uppercase text-primary mr-2">
                          {cat.label}
                        </span>
                        {cat.items.join(" \u00b7 ")}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
