import { useEffect, useState } from 'react';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-4 animate-slide-up">
          <span className="text-foreground">Top 1% Tech Talent in</span>
        </h1>
        
        <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient glow-text">{displayText}</span>
          <span className="animate-blink text-primary">|</span>
        </h2>
        
        <h3 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-foreground">with 500+ Developers</span>
        </h3>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="xl" className="group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Let's Talk
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
