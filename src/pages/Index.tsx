import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-dot-grid">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <p className="font-display text-[10px] tracking-wider uppercase text-muted-foreground/50">
            © 2026 Sebastijan Babić
          </p>
          <p className="font-display text-[10px] tracking-wider uppercase text-muted-foreground/30">
            φ = 1.618...
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
