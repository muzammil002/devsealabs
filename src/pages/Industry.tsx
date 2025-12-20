import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { getIndustryById, industries } from '@/data/industries';
import NotFound from './NotFound';

export default function Industry() {
  const { id } = useParams<{ id: string }>();
  const industry = id ? getIndustryById(id) : undefined;

  // Scroll to top on page load and handle hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    
    // Remove hash from URL immediately to prevent issues
    if (hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    if (hash === '#industries') {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const industriesSection = document.getElementById('industries');
        if (industriesSection) {
          industriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      // Always scroll to top on new industry page
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!industry) {
    return <NotFound />;
  }

  const IndustryIcon = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/#industries" className="text-muted-foreground hover:text-primary transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{industry.name}</span>
          </div>
          
          <div className="max-w-5xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <IndustryIcon className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1 pt-2">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Industry Expertise
                </span>
                <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
                  {industry.name}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
                  {industry.fullDescription}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/#services">
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                About This Industry
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Industry Overview
              </h2>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                {industry.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                What We Offer
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive software development services tailored to the {industry.name.toLowerCase()} industry
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-card border border-border p-5 rounded-xl flex items-start gap-3 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Solutions Section */}
      {industry.projectTypes && industry.projectTypes.length > 0 && (
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                  Our Work
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Projects & Solutions We've Delivered
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  We've successfully developed and deployed custom digital solutions for {industry.name.toLowerCase()} organizations. Below are the types of platforms and systems we've built to address industry-specific challenges.
                </p>
              </div>

              <div className="space-y-6">
                {industry.projectTypes.map((project, index) => (
                  <div 
                    key={index}
                    className="group bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                  >
                    {/* Number Badge */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-primary/10 rounded-br-2xl flex items-center justify-center">
                      <span className="font-heading font-bold text-2xl text-primary">{index + 1}</span>
                    </div>
                    
                    <div className="pl-20">
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
                        {project.title}
                      </h3>
                      
                      <div className="mb-8 bg-muted/30 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Purpose</h4>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {project.purpose}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {project.keyFeatures.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            Business Value
                          </h4>
                          <ul className="space-y-3">
                            {project.businessValue.map((value, vIndex) => (
                              <li key={vIndex} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies & Benefits */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                Our Expertise
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Technologies & Benefits
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Technologies */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-3">
                  {industry.technologies.map((tech, index) => {
                    const techId = tech.toLowerCase().replace(/\s+/g, '-').replace('.', '').replace('/', '-');
                    return (
                      <Link
                        key={index}
                        to={`/technology/${techId}`}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                      >
                        {tech}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {industry.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                Why Choose Us
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Why {industry.name} Teams Choose Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine deep industry expertise with cutting-edge technology to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Tailored Solutions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We build platforms that match your workflows and business structures—not the other way around. Every solution is customized to your specific needs.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Remote Expertise</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our distributed teams bring global perspectives, 24/7 productivity, and cost-efficiency. We work seamlessly across time zones to deliver faster results.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Industry Knowledge</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We stay current with industry regulations, best practices, and emerging technologies to ensure our solutions are compliant and future-ready.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Data Security First</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All platforms are developed with encryption, access controls, and regular security audits. We prioritize security and compliance in every project.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Scalability & Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  From MVPs to enterprise-grade platforms, we offer lifetime support and iterative enhancements. Your solution grows with your business.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Proven Track Record</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With 500+ developers and years of experience, we've successfully delivered projects for organizations across 50+ countries in this industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <section id="industries" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-xs mb-3 inline-block">
                Explore More
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Other Industries We Serve
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how we help organizations across various industries transform their operations with custom software solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.filter(ind => ind.id !== industry.id).slice(0, 6).map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <Link
                    key={ind.id}
                    to={`/industry/${ind.id}`}
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
                        <IndIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                          {ind.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {ind.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link to="/#industries">
                <Button variant="outline" size="lg">
                  View All Industries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-12 md:p-16 overflow-hidden max-w-4xl mx-auto">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Ready to Transform Your <span className="text-gradient">{industry.name}</span> Operations?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve your business goals. Our team is ready to provide custom solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" size="lg" className="group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/#services">
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

