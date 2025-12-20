import { Code2, Smartphone, Cloud, Brain, Wrench, Palette, Bot, Cpu, MessageSquare, Sparkles, Globe, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const aiServices = [
  {
    id: 'ai-machine-learning',
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom ML models, predictive analytics, and intelligent automation for your business.',
    highlight: true,
  },
  {
    id: 'llm-solutions',
    icon: MessageSquare,
    title: 'LLM & ChatBot Solutions',
    description: 'GPT-4, Claude integrations, RAG systems, and conversational AI tailored to your needs.',
    highlight: true,
  },
  {
    id: 'ai-machine-learning',
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, video analytics, and visual inspection systems.',
    highlight: true,
  },
  {
    id: 'ai-machine-learning',
    icon: Bot,
    title: 'AI Agents & Automation',
    description: 'Autonomous AI agents that handle complex workflows and business processes.',
    highlight: true,
  },
];

const services = [
  {
    id: 'custom-software-development',
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Full-stack solutions from server-side logic to engaging interfaces.',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, scalable web applications using modern frameworks.',
  },
  {
    id: 'backend-development',
    icon: Database,
    title: 'Backend Development',
    description: 'Robust server-side APIs, microservices, and backend systems.',
  },
  {
    id: 'staff-augmentation',
    icon: Users,
    title: 'Staff Augmentation',
    description: 'Scale your team with top-tier developers, engineers, and specialists on-demand.',
    highlight: true,
  },
  {
    id: 'cloud-services',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'AWS, Azure, GCP architecture and migration services.',
  },
  {
    id: 'devops',
    icon: Wrench,
    title: 'DevOps Services',
    description: 'CI/CD pipelines, infrastructure automation, and cloud deployment.',
  },
  {
    id: 'dedicated-team',
    icon: Brain,
    title: 'Dedicated Software Teams',
    description: 'Complete development teams dedicated to your projects and goals.',
    highlight: true,
  },
];

const teamTypes = [
  {
    icon: Brain,
    title: 'AI/ML Engineers',
    description: 'Data scientists and ML engineers building intelligent solutions for your business.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developers',
    description: 'Versatile developers handling everything from backend to frontend.',
  },
  {
    icon: Cloud,
    title: 'Cloud Engineers',
    description: 'Expert cloud architects specializing in AWS, Azure, and GCP.',
  },
  {
    icon: Wrench,
    title: 'DevOps Engineers',
    description: 'CI/CD, automation, and infrastructure experts.',
  },
  {
    icon: Palette,
    title: 'UI/UX Designers',
    description: 'Creative designers crafting user-centered digital experiences.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Developers',
    description: 'iOS, Android, and cross-platform mobile experts.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background to-gray-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* AI Services - Featured */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mb-4">
                <span className="text-primary font-medium uppercase tracking-wider text-xs">AI & ML Services</span>
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mt-2 mb-4">
                AI-Powered <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Transform your business with cutting-edge artificial intelligence and machine learning. We build custom AI solutions that deliver real results.
              </p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <Link to="/services">
                <Button variant="glow" className="group shadow-lg">
                  View All Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" className="group">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group relative glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden border border-border/50 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300 shadow-sm">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Services */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mb-4">
            <span className="text-primary font-medium uppercase tracking-wider text-xs">Development Services</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Full-Stack <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className={`group relative glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden border border-border/50 hover:shadow-xl hover:-translate-y-1 ${
                service.highlight ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-transparent' : ''
              }`}
            >
              {service.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 shadow-sm ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 group-hover:bg-primary/30 glow' 
                    : 'bg-primary/10 group-hover:scale-110 group-hover:bg-primary/20'
                }`}>
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Staff Augmentation & Dedicated Team Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mb-4">
            <span className="text-primary font-medium uppercase tracking-wider text-xs">Team Services</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Staff Augmentation & <span className="text-gradient">Dedicated Teams</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed">
            Scale your development team quickly with our top-tier talent. We provide staff augmentation services and dedicated software teams to help you meet your project goals without the overhead of full-time hiring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamTypes.map((team, index) => (
            <Link
              key={index}
              to="/service/staff-augmentation"
              className="group relative glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden border border-border/50 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-sm">
                    <team.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {team.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {team.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
