import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const rotatingWords = [
  'Web Development',
  'Mobile Apps',
  'Cloud Solutions',
  'AI & ML',
  'DevOps',
  'Data Analytics',
];

export const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">Trusted by 1000+ Companies Worldwide</span>
        </div>

        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 animate-slide-up leading-tight">
          <span className="text-foreground">Top 1% Tech Talent in</span>
        </h1>
        
        <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient glow-text">{displayText}</span>
          <span className="animate-blink text-primary">|</span>
        </h2>
        
        <h3 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-4 text-foreground/80 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          with <span className="text-primary">500+</span> Expert Developers
        </h3>

        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Scale your development team with world-class engineers. Staff augmentation, dedicated teams, and custom software solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/contact">
            <Button variant="glow" size="xl" className="group shadow-lg">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="hero" size="xl" className="group">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Expert Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-background/50">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
