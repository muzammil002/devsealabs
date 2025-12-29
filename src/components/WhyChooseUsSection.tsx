import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'You get full ownership & control of your app.',
  'DevSeaLabs delivers bug-free, modern performance apps crafted by our team of certified & extremely talented experts.',
  'Our team goes the extra mile - they\'re beautiful minds who love to exceed expectations.',
  'We\'re committed to on budget, on time, always.',
  'Get a free consultation and let our experts understand your needs to save you time and money.',
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
              What makes <span className="text-primary">DevSeaLabs</span>
            </h2>
            <h3 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              your #1 choice
            </h3>
          </div>

          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 group bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link to="/contact">
              <Button variant="glow" size="lg" className="group shadow-lg">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

