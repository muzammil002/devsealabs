import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '#about' },
  { 
    label: 'Services', 
    href: '#services',
    dropdown: [
      'AI & Machine Learning',
      'LLM Solutions',
      'Web Development',
      'Mobile Development',
      'Cloud Solutions',
      'DevOps Services',
    ]
  },
  { label: 'Case Studies', href: '/case-studies', isRoute: true },
  { 
    label: 'Technologies', 
    href: '#technologies',
    dropdown: ['GPT-4 / Claude', 'TensorFlow', 'PyTorch', 'Python', 'React', 'AWS']
  },
  { label: 'Industries', href: '#industries' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4'}`}>
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-xl">D</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">devsealabs</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.isRoute ? (
                <Link to={item.href}>
                  <Button 
                    variant="nav" 
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Button 
                  variant="nav" 
                  size="sm"
                  className="flex items-center gap-1"
                  asChild
                >
                  <a href={item.href}>
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3 h-3" />}
                  </a>
                </Button>
              )}
              
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg py-2 animate-fade-in">
                  {item.dropdown.map((subItem) => (
                    <a 
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <Button variant="contact" size="default" className="hidden lg:flex">
          Contact Us
        </Button>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass rounded-2xl mt-2 p-4 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link 
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <Button variant="contact" className="mt-2">Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
