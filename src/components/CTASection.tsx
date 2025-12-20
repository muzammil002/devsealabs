import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto border border-border/50 shadow-2xl hover:shadow-primary/10 transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Get Started Today</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Ready to Scale Your <span className="text-gradient">Development Team?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need staff augmentation, a dedicated team, or custom software development, we're here to help. Let's discuss how we can accelerate your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="glow" size="xl" className="group shadow-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
