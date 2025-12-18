import { Building2, HeartPulse, GraduationCap, ShoppingCart, Plane, Landmark } from 'lucide-react';

const industries = [
  { icon: Building2, name: 'Real Estate', description: 'PropTech solutions for modern real estate' },
  { icon: HeartPulse, name: 'Healthcare', description: 'HIPAA-compliant medical software' },
  { icon: GraduationCap, name: 'Education', description: 'EdTech platforms and LMS systems' },
  { icon: ShoppingCart, name: 'E-Commerce', description: 'Scalable online retail solutions' },
  { icon: Plane, name: 'Travel', description: 'Booking and travel management apps' },
  { icon: Landmark, name: 'FinTech', description: 'Secure financial technology solutions' },
];

export const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Industries</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Sectors We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across multiple industries to deliver domain-specific solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
