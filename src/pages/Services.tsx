import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { services, serviceCategories, getServicesByCategory } from '@/data/services';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <span className="text-foreground font-medium">Services</span>
          </div>
          
          <div className="max-w-5xl">
            <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
              Our Services
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Comprehensive IT Services
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              devsealabs is a software development company providing comprehensive software engineering services for product companies, enterprises, and innovative startups across diverse industries. We deliver cutting-edge software solutions tailored to your business needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/#industries">
                <Button variant="outline" size="lg">
                  View Industries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category) => {
        const categoryServices = getServicesByCategory(category.id);
        
        return (
          <section key={category.id} className="py-20 px-4 bg-background">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                    {category.name}
                  </span>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Link
                        key={service.id}
                        to={`/service/${service.id}`}
                        className="group bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <ServiceIcon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        {service.subServices && service.subServices.length > 0 && (
                          <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            {service.subServices.length} Services
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-12 md:p-16 overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Looking for Expert IT Services?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Our team will elevate your project to the next level. Contact us to discuss your requirements.
              </p>
              <Link to="/contact">
                <Button variant="glow" size="lg" className="group">
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

