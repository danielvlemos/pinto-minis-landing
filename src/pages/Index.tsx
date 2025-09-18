import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CourseContentSection from "@/components/sections/CourseContentSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <CourseContentSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
