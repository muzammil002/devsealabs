import { Link } from 'react-router-dom';
import { technologies } from '@/data/technologies';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  cloud: 'Cloud',
  crm: 'CRM',
  devops: 'DevOps',
  other: 'Other',
};

export const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Technologies</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Our Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.
          </p>
          <Link to="/technologies">
            <Button variant="outline" size="lg" className="group">
              View All Technologies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Link
                key={tech.id}
                to={`/technology/${tech.id}`}
                className="group glass px-6 py-3 rounded-full hover:border-primary/50 cursor-pointer transition-all duration-300"
              >
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {categoryLabels[tech.category] || tech.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
