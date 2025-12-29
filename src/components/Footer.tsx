import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="DevSeaLabs Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-heading font-bold text-xl text-foreground">devsealabs</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Your trusted partner for software development services, staff augmentation, and dedicated development teams.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/devsealabs/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/devsealabs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Staff Augmentation', id: 'staff-augmentation' },
                { label: 'Dedicated Teams', id: 'dedicated-team' },
                { label: 'Custom Software Development', id: 'custom-software-development' },
                { label: 'Web Development', id: 'web-development' },
                { label: 'Backend Development', id: 'backend-development' },
                { label: 'Cloud Solutions', id: 'cloud-services' },
                { label: 'AI & Machine Learning', id: 'ai-machine-learning' },
                { label: 'LLM & ChatBot Solutions', id: 'llm-solutions' },
                { label: 'DevOps Services', id: 'devops' },
              ].map((item) => (
                <li key={item.id}>
                  <Link to={`/service/${item.id}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/#industries" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">hello@devsealabs.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">123 Tech Street, Silicon Valley, CA 94000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 DevSeaLabs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
