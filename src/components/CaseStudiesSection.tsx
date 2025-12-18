import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'FinTech Platform',
    category: 'Financial Services',
    description: 'Built a scalable payment processing platform handling 1M+ transactions daily.',
    metrics: ['99.99% Uptime', '50% Cost Reduction', '3x Faster Processing'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Healthcare App',
    category: 'Healthcare',
    description: 'HIPAA-compliant telemedicine platform connecting doctors with patients globally.',
    metrics: ['500K+ Users', '4.9 App Rating', '24/7 Availability'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Retail',
    description: 'Enterprise e-commerce solution with AI-powered recommendations.',
    metrics: ['200% Revenue Growth', '40% Cart Recovery', '2M+ Products'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Case Studies</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore how we've helped businesses transform their operations with innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.metrics.map((metric, i) => (
                    <span key={i} className="text-xs text-foreground bg-muted px-2 py-1 rounded">
                      {metric}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
