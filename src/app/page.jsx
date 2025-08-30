import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIWeaponsSection from "@/components/AIWeaponsSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
// import PortfolioSection from "@/components/PortfolioSection";
// import TeamSection from "@/components/TeamSection";
import QualificationSection from "@/components/QualificationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScheduleCallSection from "@/components/ScheduleCallSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* AI Weapons Section */}
      <AIWeaponsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Portfolio Section removed */}

      {/* Team Section removed */}

      {/* Qualification Section */}
      <QualificationSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Schedule a Call Section */}
      <ScheduleCallSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTopButton />
    </div>
  );
}