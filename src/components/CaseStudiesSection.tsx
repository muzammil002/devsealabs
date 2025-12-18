import { ArrowRight, Brain, MessageSquare, BarChart3, Eye, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'AI Customer Support Platform',
    category: 'LLM & Conversational AI',
    description: 'Built an intelligent support system using GPT-4 that handles 80% of queries automatically.',
    metrics: ['80% Automation', '45% Cost Reduction', '4.8/5 Rating'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    icon: MessageSquare,
  },
  {
    title: 'Predictive Analytics Engine',
    category: 'Machine Learning',
    description: 'ML models predicting demand with 94% accuracy, optimizing inventory and reducing waste.',
    metrics: ['94% Accuracy', '$2.5M Saved', '30% Less Waste'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    icon: BarChart3,
  },
  {
    title: 'Computer Vision QC System',
    category: 'Deep Learning & Vision',
    description: 'Real-time defect detection achieving 99.7% accuracy in manufacturing quality control.',
    metrics: ['99.7% Detection', '50ms Speed', '60% Cost Saved'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    icon: Eye,
  },
  {
    title: 'Intelligent Document Processing',
    category: 'LLM & NLP',
    description: 'AI system extracting and processing documents with 95% accuracy, saving 85% processing time.',
    metrics: ['95% Accuracy', '85% Time Saved', '10x Throughput'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    icon: Brain,
  },
  {
    title: 'AI Recommendation Engine',
    category: 'Machine Learning',
    description: 'Personalized recommendations increasing user engagement by 200% and revenue by 35%.',
    metrics: ['200% Engagement', '35% Revenue Up', '50M+ Daily'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    icon: Sparkles,
  },
  {
    title: 'Autonomous AI Agents',
    category: 'LLM & Autonomous AI',
    description: 'AI agents handling complex business workflows from research to report generation.',
    metrics: ['70% Time Saved', '24/7 Available', '92% Quality'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    icon: Bot,
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Case Studies</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
              AI & ML Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              See how we help businesses transform with cutting-edge AI, Machine Learning, and LLM technologies.
            </p>
          </div>
          <Link to="/case-studies">
            <Button variant="hero" className="mt-4 md:mt-0 group">
              View All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link 
              to="/case-studies"
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
                <span className="absolute bottom-4 left-4 text-xs text-primary font-medium bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  {study.category}
                </span>
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <study.icon className="w-5 h-5 text-primary" />
                </div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};