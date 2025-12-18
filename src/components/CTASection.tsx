import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            Ready to Build Something <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our expert team can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
