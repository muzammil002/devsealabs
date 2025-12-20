import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Privacy Policy</span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
              
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevSeaLabs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in a variety of ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact information you provide when contacting us or using our services.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">7. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">8. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-foreground font-medium mb-2">DevSeaLabs</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:muzammilofficial9@gmail.com" className="text-primary hover:underline">muzammilofficial9@gmail.com</a></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

