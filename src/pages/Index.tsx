import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import WhatYouLearnSection from "@/components/sections/WhatYouLearnSection";
import AboutAuthorSection from "@/components/sections/AboutAuthorSection";
import PricingSection from "@/components/sections/PricingSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <WhatYouLearnSection />
      <AboutAuthorSection />
      <PricingSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
