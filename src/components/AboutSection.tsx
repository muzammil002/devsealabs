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
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-background to-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="text-primary font-medium uppercase tracking-wider text-xs">About Us</span>
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Building the Future of <span className="text-gradient">Technology</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                DevSeaLabs is a leading software development company with over 6 years of experience 
                delivering cutting-edge solutions. Our team of 85+ expert developers specializes in 
                custom software development, staff augmentation, and dedicated team services for businesses worldwide.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We combine deep technical expertise with industry knowledge to create solutions that 
                drive real business value. Whether you need to augment your existing team or build a 
                dedicated development team, we provide flexible staffing solutions that scale with your needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="glow" size="lg" className="group shadow-lg">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 glass rounded-3xl p-8 shadow-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '6+', label: 'Years Experience', delay: '0s' },
                  { value: '85+', label: 'Developers', delay: '0.1s' },
                  { value: '280+', label: 'Projects', delay: '0.2s' },
                  { value: '22+', label: 'Countries', delay: '0.3s' },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 text-center border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="font-heading font-bold text-4xl text-primary mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
