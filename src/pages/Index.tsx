import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { CalendarBooking } from '@/components/CalendarBooking';
import { Footer } from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Multiple attempts to ensure element is found
        const attemptScroll = (attempts = 0) => {
          const element = document.querySelector(hash);
          if (element) {
            // Calculate offset for fixed navbar
            const navbarHeight = 100;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = Math.max(0, elementPosition - navbarHeight);
            
            window.scrollTo({
              top: offsetPosition,
              behavior: attempts === 0 ? 'smooth' : 'auto' // Use auto for retries to be faster
            });
          } else if (attempts < 10) {
            // Retry if element not found yet (up to 10 attempts)
            setTimeout(() => attemptScroll(attempts + 1), 100);
          } else {
            // If still not found, log for debugging
            console.warn(`Element with hash ${hash} not found`);
          }
        };
        
        // Start attempting after a short delay to ensure DOM is ready
        setTimeout(() => attemptScroll(), 100);
      } else {
        // Scroll to top if no hash
        window.scrollTo(0, 0);
      }
    };

    // Handle hash navigation on page load
    scrollToHash();

    // Also listen for hash changes
    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location.pathname, location.hash]);

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
      <section className="py-20 md:py-24 px-4 bg-gradient-to-b from-gray-50/50 to-background">
        <div className="container mx-auto max-w-7xl">
          <CalendarBooking />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
