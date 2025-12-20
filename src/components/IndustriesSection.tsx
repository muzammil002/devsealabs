import { Link } from 'react-router-dom';
import { industries } from '@/data/industries';

export const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Industries</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across multiple industries to deliver domain-specific solutions that drive real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const IndustryIcon = industry.icon;
            return (
              <Link
                key={industry.id}
                to={`/industry/${industry.id}`}
                onClick={(e) => {
                  // Ensure clean navigation without hash
                  if (window.location.hash) {
                    window.history.replaceState(null, '', window.location.pathname);
                  }
                }}
                className="group bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <IndustryIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
