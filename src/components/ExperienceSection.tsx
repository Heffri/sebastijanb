import { motion } from "framer-motion";
import { roles, degrees } from "@/data/experience";

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
          <span className="font-display text-xs text-primary">04</span>
          <h2 className="font-body text-3xl font-bold text-foreground">Experience &amp; education</h2>
        </div>
        <div className="w-full h-px bg-border mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xs tracking-[0.2em] uppercase text-primary mb-3">
            Experience
          </h3>
          <div className="w-12 h-px bg-primary/20 mb-8" />

          <div className="space-y-8">
            {roles.map((role) => (
              <div
                key={role.title + role.organisation}
                className={role.current ? "callout-box" : "border-l-2 border-border pl-5 py-3"}
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="font-display text-[11px] tracking-wider uppercase text-primary/70">
                    {role.period}
                  </p>
                  {role.arrangement && (
                    <p className="font-display text-[10px] tracking-wider text-muted-foreground/60">
                      {role.arrangement}
                    </p>
                  )}
                </div>
                <h4 className="font-body text-lg font-semibold text-foreground mt-1 mb-0.5 leading-snug">
                  {role.title}
                </h4>
                <p className="font-body text-base text-muted-foreground mb-2">
                  {role.organisation}
                </p>
                <p className="font-body text-[13px] text-muted-foreground/90 leading-[1.75]">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="font-display text-xs tracking-[0.2em] uppercase text-primary mb-3">
            Education
          </h3>
          <div className="w-12 h-px bg-primary/20 mb-8" />

          <div className="space-y-10">
            {degrees.map((degree) => (
              <div key={degree.title}>
                <div className="callout-box">
                  <p className="font-display text-[11px] tracking-wider uppercase text-primary/70 mb-1">
                    {degree.period}
                  </p>
                  <h4 className="font-body text-lg font-semibold text-foreground mb-0.5 leading-snug">
                    {degree.title}
                  </h4>
                  <p className="font-body text-base text-muted-foreground">{degree.institution}</p>
                  {degree.note && (
                    <p className="font-body text-[13px] text-muted-foreground/80 mt-1 italic">
                      {degree.note}
                    </p>
                  )}
                </div>

                {degree.thesis && (
                  <div className="mt-5 border border-border/60 bg-card/30 p-4">
                    <p className="font-display text-[9px] tracking-[0.25em] uppercase text-primary/70 mb-2">
                      Thesis
                    </p>
                    <p className="font-body text-sm font-semibold text-foreground leading-snug mb-1.5">
                      {degree.thesis.title}
                    </p>
                    <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">
                      {degree.thesis.summary}
                    </p>
                    <p className="font-display text-[10px] tracking-wider text-muted-foreground/60 mt-3">
                      Supervisor: {degree.thesis.supervisor}
                    </p>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {degree.courses.map((course) => (
                    <span
                      key={course}
                      className="font-display text-[10px] px-2.5 py-1.5 bg-secondary text-secondary-foreground border border-border"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
