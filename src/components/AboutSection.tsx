import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = [
  'ISO 27001 Certified',
  'AWS Advanced Partner',
  '24/7 Support Available',
  'Agile Development Process',
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2 mb-6">
              Building the Future of <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              DevSeaLabs is a leading software development company with over 10 years of experience 
              delivering cutting-edge solutions. Our team of 500+ expert developers specializes in 
              building scalable, secure, and innovative software for businesses worldwide.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combine deep technical expertise with industry knowledge to create solutions that 
              drive real business value. From startups to Fortune 500 companies, we've helped 
              organizations across 50+ countries transform their digital presence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 glass rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-primary mb-2">10+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-primary mb-2">500+</div>
                  <div className="text-muted-foreground text-sm">Developers</div>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground text-sm">Projects</div>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-primary mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">Countries</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
