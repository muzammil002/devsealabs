import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { getServiceById, services } from '@/data/services';
import NotFound from './NotFound';

export default function Service() {
  const { id } = useParams<{ id: string }>();
  const service = id ? getServiceById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <NotFound />;
  }

  const ServiceIcon = service.icon;
  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{service.title}</span>
          </div>
          
          <div className="max-w-5xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <ServiceIcon className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1 pt-2">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Service
                </span>
                <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  What We Offer
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Services Included
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.subServices.map((subService, index) => (
                  <div 
                    key={index}
                    className="group bg-card border border-border p-5 rounded-xl hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{subService.name}</h3>
                        {subService.description && (
                          <p className="text-muted-foreground text-sm">{subService.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Technologies
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Technologies We Use
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {service.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Benefits
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Key Benefits
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card border border-border p-5 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Explore More
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Related Services
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => {
                  const RelatedIcon = relatedService.icon;
                  return (
                    <Link
                      key={relatedService.id}
                      to={`/service/${relatedService.id}`}
                      className="group bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <RelatedIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                            {relatedService.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {relatedService.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-12 md:p-16 overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Ready to Get Started with <span className="text-gradient">{service.title}</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve your business goals. Our team is ready to provide custom solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" size="lg" className="group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/services">
                  <Button variant="hero" size="lg">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



