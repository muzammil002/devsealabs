import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { IndustriesSection } from '@/components/IndustriesSection';
import { ArrowRight, Brain, Cpu, MessageSquare, BarChart3, Eye, Zap, Bot, Database, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'ai-customer-support',
    title: 'AI-Powered Customer Support Platform',
    category: 'LLM & Conversational AI',
    description: 'Built an intelligent customer support system using GPT-4 and custom fine-tuned models that handles 80% of customer queries automatically.',
    challenge: 'A major e-commerce company was struggling with high support ticket volumes, long response times, and inconsistent customer experience across channels.',
    solution: 'We developed a multi-channel AI assistant powered by LLMs with RAG (Retrieval Augmented Generation) for accurate, context-aware responses. The system integrates with their knowledge base and escalates complex issues to human agents.',
    results: [
      { metric: '80%', label: 'Automated Resolution' },
      { metric: '3 min', label: 'Avg Response Time' },
      { metric: '45%', label: 'Cost Reduction' },
      { metric: '4.8/5', label: 'Customer Satisfaction' },
    ],
    technologies: ['GPT-4', 'LangChain', 'Vector DB', 'Python', 'FastAPI'],
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics for Supply Chain',
    category: 'Machine Learning',
    description: 'Developed ML models that predict demand with 94% accuracy, optimizing inventory management and reducing waste.',
    challenge: 'A logistics company faced challenges with inventory forecasting, leading to either stockouts or overstock situations costing millions annually.',
    solution: 'We built a comprehensive ML pipeline using time series forecasting, incorporating external factors like weather, events, and market trends. The system provides real-time predictions and automated reorder suggestions.',
    results: [
      { metric: '94%', label: 'Prediction Accuracy' },
      { metric: '$2.5M', label: 'Annual Savings' },
      { metric: '30%', label: 'Inventory Reduction' },
      { metric: '99.2%', label: 'Stock Availability' },
    ],
    technologies: ['TensorFlow', 'Prophet', 'Apache Spark', 'AWS SageMaker', 'PostgreSQL'],
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Quality Control',
    category: 'Deep Learning & Vision',
    description: 'Implemented real-time defect detection system using computer vision, achieving 99.7% accuracy in manufacturing QC.',
    challenge: 'A manufacturing client needed to automate quality control to reduce manual inspection costs and improve defect detection rates.',
    solution: 'We developed a custom CNN-based vision system with edge deployment capabilities. The system analyzes products on the assembly line in real-time, flagging defects instantly.',
    results: [
      { metric: '99.7%', label: 'Detection Accuracy' },
      { metric: '50ms', label: 'Processing Time' },
      { metric: '60%', label: 'Labor Cost Savings' },
      { metric: '0.1%', label: 'False Positive Rate' },
    ],
    technologies: ['PyTorch', 'YOLO', 'OpenCV', 'NVIDIA Jetson', 'TensorRT'],
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'llm-document-processing',
    title: 'Intelligent Document Processing',
    category: 'LLM & NLP',
    description: 'Created an AI system that extracts, classifies, and processes documents with 95% accuracy, reducing manual processing time by 85%.',
    challenge: 'A financial services firm processed thousands of documents daily, requiring extensive manual review and data entry.',
    solution: 'We built an end-to-end document intelligence platform using LLMs for understanding context, combined with OCR and custom extraction models for structured data capture.',
    results: [
      { metric: '95%', label: 'Extraction Accuracy' },
      { metric: '85%', label: 'Time Saved' },
      { metric: '10x', label: 'Throughput Increase' },
      { metric: '$1.8M', label: 'Annual Savings' },
    ],
    technologies: ['Claude API', 'Tesseract', 'spaCy', 'AWS Textract', 'MongoDB'],
    icon: Database,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'recommendation-engine',
    title: 'AI Recommendation Engine',
    category: 'Machine Learning',
    description: 'Built a personalized recommendation system that increased user engagement by 200% and revenue by 35%.',
    challenge: 'An online marketplace wanted to improve product discovery and increase conversion rates through personalization.',
    solution: 'We implemented a hybrid recommendation system combining collaborative filtering, content-based filtering, and deep learning models to provide highly personalized suggestions.',
    results: [
      { metric: '200%', label: 'Engagement Increase' },
      { metric: '35%', label: 'Revenue Growth' },
      { metric: '4.5x', label: 'Click-through Rate' },
      { metric: '50M+', label: 'Daily Predictions' },
    ],
    technologies: ['TensorFlow', 'Redis', 'Apache Kafka', 'Python', 'Kubernetes'],
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'autonomous-agents',
    title: 'AI Agents for Business Automation',
    category: 'LLM & Autonomous AI',
    description: 'Developed autonomous AI agents that handle complex business workflows, from research to report generation.',
    challenge: 'A consulting firm needed to automate repetitive research and analysis tasks to focus their team on high-value strategic work.',
    solution: 'We created a suite of AI agents using LangGraph and custom tool integrations that can autonomously gather data, analyze trends, and generate comprehensive reports.',
    results: [
      { metric: '70%', label: 'Time Saved' },
      { metric: '24/7', label: 'Availability' },
      { metric: '100+', label: 'Reports/Week' },
      { metric: '92%', label: 'Quality Score' },
    ],
    technologies: ['GPT-4', 'LangGraph', 'Crew AI', 'Python', 'Neo4j'],
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
];

const aiServices = [
  {
    icon: Brain,
    title: 'Custom LLM Solutions',
    description: 'Fine-tuned language models, RAG systems, and conversational AI tailored to your business.',
  },
  {
    icon: Cpu,
    title: 'Machine Learning Engineering',
    description: 'End-to-end ML pipelines from data preparation to production deployment.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and video analytics solutions.',
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Case Studies</span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mt-4 mb-6">
              AI & ML Solutions That <span className="text-gradient">Drive Results</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Explore how we help businesses transform with cutting-edge AI, Machine Learning, and LLM technologies. Real solutions, measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Banner */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:max-w-xl">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Looking for AI & ML Expertise?
                </h2>
                <p className="text-muted-foreground">
                  DevSeaLabs is your trusted partner for artificial intelligence and machine learning solutions. From concept to production, we build AI that delivers real business value.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {aiServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">{service.title}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-primary font-medium bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  {/* Floating Icon */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center glow animate-float">
                    <study.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-card border border-border rounded-xl p-4">
                      <h4 className="font-medium text-foreground text-sm mb-2">The Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4">
                      <h4 className="font-medium text-foreground text-sm mb-2">Our Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="font-heading font-bold text-xl md:text-2xl text-primary">
                          {result.metric}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs text-foreground bg-muted px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustriesSection />

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
                Ready to Build Your <span className="text-gradient">AI Solution</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how AI and Machine Learning can transform your business. Our team of experts is ready to help you navigate the AI landscape and build solutions that deliver real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" size="lg" className="group">
                  Start a Project
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