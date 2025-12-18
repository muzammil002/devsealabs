import { Code2, Smartphone, Cloud, Brain, Wrench, Palette, Bot, Cpu, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const aiServices = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom ML models, predictive analytics, and intelligent automation for your business.',
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: 'LLM & ChatBot Solutions',
    description: 'GPT-4, Claude integrations, RAG systems, and conversational AI tailored to your needs.',
    highlight: true,
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, video analytics, and visual inspection systems.',
    highlight: true,
  },
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    description: 'Autonomous AI agents that handle complex workflows and business processes.',
    highlight: true,
  },
];

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Full-stack solutions from server-side logic to engaging interfaces.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'iOS, Android, and cross-platform apps that deliver exceptional experiences.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'AWS, Azure, GCP architecture and migration services.',
  },
  {
    icon: Sparkles,
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge technology.',
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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* AI Services - Featured */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">AI & ML Services</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2">
                AI-Powered Solutions
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Transform your business with cutting-edge artificial intelligence and machine learning. We build custom AI solutions that deliver real results.
              </p>
            </div>
            <Link to="/case-studies">
              <Button variant="glow" className="mt-4 md:mt-0 group">
                View AI Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => (
              <div 
                key={index}
                className="group relative glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors glow">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Development Services</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">
              Full-Stack Expertise
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
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
