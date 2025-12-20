import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { services } from '@/data/services';
import { technologies } from '@/data/technologies';

type DropdownItem = { label: string; id: string } | string;

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
  dropdown?: DropdownItem[];
}

// Get all services for dropdown
const serviceDropdownItems = services
  .filter(service => ['staff-augmentation', 'dedicated-team', 'custom-software-development', 'web-development', 'backend-development', 'cloud-services', 'ai-machine-learning', 'llm-solutions', 'devops'].includes(service.id))
  .map(service => ({ label: service.title, id: service.id }));

// Get featured technologies for dropdown - mix of popular technologies
const technologyDropdownItems = [
  { label: 'React', id: 'react' },
  { label: 'Angular', id: 'angular' },
  { label: 'Vue.js', id: 'vuejs' },
  { label: 'Node.js', id: 'nodejs' },
  { label: 'Python', id: 'python' },
  { label: 'Java', id: 'java' },
  { label: '.NET', id: 'dotnet' },
  { label: 'AWS', id: 'aws' },
  { label: 'Azure', id: 'azure' },
  { label: 'GCP', id: 'gcp' },
  { label: 'Flutter', id: 'flutter' },
  { label: 'React Native', id: 'react-native' },
];

const navItems: NavItem[] = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/#about', isRoute: true },
  { 
    label: 'Services', 
    href: '/services',
    isRoute: true,
    dropdown: serviceDropdownItems
  },
  { label: 'Case Studies', href: '/case-studies', isRoute: true },
  { 
    label: 'Technologies', 
    href: '/technologies',
    isRoute: true,
    dropdown: technologyDropdownItems
  },
  { label: 'Industries', href: '/#industries', isRoute: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (itemLabel: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay before closing
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4'}`}>
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-xl">D</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">devsealabs</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.isRoute ? (
                <Link 
                  to={item.href}
                  onClick={(e) => {
                    // Handle hash navigation - if we're not on home page, navigate first
                    if (item.href.includes('#')) {
                      const [path, hash] = item.href.split('#');
                      if (window.location.pathname !== path && path === '/') {
                        // Navigate to home page first, then scroll will happen via useEffect
                        // Let the Link handle navigation, useEffect will handle scroll
                      }
                    }
                  }}
                >
                  <Button 
                    variant="nav" 
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3 h-3" />}
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
                <div 
                  className="absolute top-full left-0 mt-2 w-56 glass rounded-lg py-2 animate-fade-in z-50"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown.map((subItem) => {
                    const isObject = typeof subItem === 'object';
                    const label = isObject ? subItem.label : subItem;
                    const href = isObject 
                      ? (item.label === 'Services' ? `/service/${subItem.id}` : `/technology/${subItem.id}`)
                      : '#';
                    return isObject ? (
                      <Link
                        key={subItem.id}
                        to={href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {label}
                      </Link>
                    ) : (
                      <a 
                        key={label}
                        href={href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <Link to="/contact">
          <Button variant="contact" size="default" className="hidden lg:flex">
            Contact Us
          </Button>
        </Link>

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
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="contact" className="mt-2 w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
