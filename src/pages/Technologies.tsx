import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { technologies, technologyCategories, getTechnologiesByCategory } from '@/data/technologies';

export default function Technologies() {
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
            <span className="text-foreground font-medium">Technologies</span>
          </div>
          
          <div className="max-w-5xl">
            <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
              Technologies
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Technologies We Use
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              We leverage cutting-edge technologies across frontend, backend, mobile, cloud, and more to build scalable, secure, and high-performance solutions for our clients.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies by Category */}
      {technologyCategories.map((category) => {
        const categoryTechnologies = getTechnologiesByCategory(category.id);
        
        if (categoryTechnologies.length === 0) return null;
        
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
                  {categoryTechnologies.map((tech) => (
                    <Link
                      key={tech.id}
                      to={`/technology/${tech.id}`}
                      className="group bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {tech.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
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
                Ready to Build with These Technologies?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Our expert team is proficient in these technologies and ready to help you build your next project.
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

