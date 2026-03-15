import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a subtle normal distribution curve
      ctx.beginPath();
      ctx.strokeStyle = "hsla(160, 100%, 50%, 0.06)";
      ctx.lineWidth = 1;
      const centerX = canvas.width * 0.7;
      const centerY = canvas.height * 0.5;
      const spread = canvas.width * 0.25;
      const height = canvas.height * 0.3;
      const offset = Math.sin(frame * 0.005) * 10;
      
      for (let x = -spread; x <= spread; x += 2) {
        const y = height * Math.exp(-0.5 * Math.pow((x + offset) / (spread * 0.3), 2));
        if (x === -spread) {
          ctx.moveTo(centerX + x, centerY + height - y);
        } else {
          ctx.lineTo(centerX + x, centerY + height - y);
        }
      }
      ctx.stroke();

      // Draw axis ticks
      ctx.strokeStyle = "hsla(0, 0%, 100%, 0.03)";
      ctx.lineWidth = 0.5;
      for (let i = -3; i <= 3; i++) {
        const tx = centerX + (i * spread * 0.3);
        ctx.beginPath();
        ctx.moveTo(tx, centerY + height - 5);
        ctx.lineTo(tx, centerY + height + 5);
        ctx.stroke();
      }

      frame++;
      requestAnimationFrame(draw);
    };
    const animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Coordinate axes */}
      <div className="axis-x" style={{ top: "50%" }} />
      <div className="axis-y" style={{ left: "61.8%" }} />
      
      {/* Golden ratio marker */}
      <div className="absolute hidden md:block" style={{ left: "61.8%", top: "50%", transform: "translate(-50%, -50%)" }}>
        <div className="w-2 h-2 rounded-full bg-primary/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          {/* Left — asymmetric, takes 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary" />
              <span className="font-display text-[10px] tracking-[0.4em] uppercase text-primary">
                Stockholm, Sweden
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-[5.5rem] font-bold leading-[0.9] tracking-tight mb-4">
              <span className="text-foreground">Sebastijan</span>
            </h1>
            <h1 className="font-display text-5xl md:text-[5.5rem] font-bold leading-[0.9] tracking-tight mb-10">
              <span className="text-gradient">Babić</span>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed font-light">
              Mathematics & computer science student specialising in mathematical statistics, 
              statistical learning, and data analysis.
            </p>
          </motion.div>

          {/* Right — info panel, 5 cols, pushed down */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 md:mb-4"
          >
            <div className="border border-border rounded-sm p-6 bg-card/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                {[
                  { label: "Program", value: "B.Sc. Math & CS" },
                  { label: "Year", value: "3rd / 2026" },
                  { label: "Focus", value: "Math Statistics" },
                  { label: "University", value: "Stockholm" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-body text-sm text-foreground font-medium">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border flex gap-4">
                <a
                  href="#projects"
                  className="flex-1 text-center px-4 py-2.5 rounded-sm bg-primary text-primary-foreground font-display text-[11px] tracking-wider uppercase hover:opacity-90 transition-opacity"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="flex-1 text-center px-4 py-2.5 rounded-sm border border-border text-muted-foreground font-display text-[11px] tracking-wider uppercase hover:text-foreground hover:border-muted-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
