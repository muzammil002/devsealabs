import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AwardsSection } from '@/components/AwardsSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StatsSection } from '@/components/StatsSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { TechnologiesSection } from '@/components/TechnologiesSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AwardsSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
      <TechnologiesSection />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
