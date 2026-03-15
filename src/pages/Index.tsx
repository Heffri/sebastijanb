import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <footer className="py-8 border-t border-border">
        <div className="container px-6">
          <p className="font-display text-xs text-muted-foreground">
            © 2026 — Built with curiosity and caffeine
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
