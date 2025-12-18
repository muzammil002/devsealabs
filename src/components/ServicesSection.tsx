import { Code2, Smartphone, Cloud, Brain, Wrench, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Expert Development Team',
    description: 'Full-stack developers who manage everything from server-side logic to engaging interfaces.',
  },
  {
    icon: Smartphone,
    title: 'Custom Software Solutions',
    description: 'Tailored software that perfectly fits your business needs and scales with your growth.',
  },
  {
    icon: Cloud,
    title: 'IT Consultancy & Support',
    description: 'Strategic guidance and 24/7 support to keep your systems running smoothly.',
  },
  {
    icon: Brain,
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge technology and innovative solutions.',
  },
];

const teamTypes = [
  {
    icon: Code2,
    title: 'Full-Stack Developers',
    description: 'Hire versatile developers who manage everything from server-side logic to engaging interfaces.',
  },
  {
    icon: Cloud,
    title: 'Cloud Engineers',
    description: 'Expert cloud architects specializing in AWS, Azure, and Google Cloud platforms.',
  },
  {
    icon: Brain,
    title: 'AI/ML Engineers',
    description: 'Data scientists and ML engineers building intelligent solutions for your business.',
  },
  {
    icon: Wrench,
    title: 'DevOps Engineers',
    description: 'Streamline your development pipeline with CI/CD, automation, and infrastructure experts.',
  },
  {
    icon: Palette,
    title: 'UI/UX Designers',
    description: 'Creative designers crafting beautiful, user-centered digital experiences.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Developers',
    description: 'iOS, Android, and cross-platform experts building seamless mobile experiences.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Services</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2">
              What We Offer
            </h2>
          </div>
          <Button variant="hero" className="mt-4 md:mt-0 group">
            Everything we do
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dedicated Team Section */}
        <div className="mb-8">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Dedicated Team</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2 mb-12">
            Hire Top Talent
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamTypes.map((team, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <team.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {team.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {team.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
