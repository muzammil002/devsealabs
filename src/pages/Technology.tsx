import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { getTechnologyById, technologies } from '@/data/technologies';
import NotFound from './NotFound';

export default function Technology() {
  const { id } = useParams<{ id: string }>();
  const technology = id ? getTechnologyById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!technology) {
    return <NotFound />;
  }

  const relatedTechnologies = technologies
    .filter(t => t.category === technology.category && t.id !== technology.id)
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
            <Link to="/technologies" className="text-muted-foreground hover:text-primary transition-colors">
              Technologies
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{technology.name}</span>
          </div>
          
          <div className="max-w-5xl">
            <div className="mb-8">
              <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                Technology
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
                {technology.name}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
                {technology.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/technologies">
                <Button variant="outline" size="lg">
                  View All Technologies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      {technology.useCases && technology.useCases.length > 0 && (
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Applications
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Use Cases
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Common applications and scenarios where {technology.name} excels
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technology.useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className="group bg-card border border-border p-5 rounded-xl hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground font-medium">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {technology.benefits && technology.benefits.length > 0 && (
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Advantages
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Key Benefits
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {technology.benefits.map((benefit, index) => (
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

      {/* Related Technologies */}
      {technology.relatedTechnologies && technology.relatedTechnologies.length > 0 && (
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Ecosystem
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Related Technologies
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Technologies commonly used together with {technology.name}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {technology.relatedTechnologies.map((relatedTech, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {relatedTech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Technologies from Same Category */}
      {relatedTechnologies.length > 0 && (
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Explore More
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Related Technologies
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedTechnologies.map((relatedTech) => (
                  <Link
                    key={relatedTech.id}
                    to={`/technology/${relatedTech.id}`}
                    className="group bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedTech.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {relatedTech.description}
                    </p>
                  </Link>
                ))}
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
                Ready to Build with <span className="text-gradient">{technology.name}</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Our expert team has extensive experience with {technology.name} and can help you build scalable, high-performance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" size="lg" className="group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/technologies">
                  <Button variant="hero" size="lg">
                    View All Technologies
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



