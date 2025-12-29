import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

export default function TermsOfService() {
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
            <span className="text-foreground font-medium">Terms of Service</span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Terms of Service
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
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the DevSeaLabs website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DevSeaLabs provides software development services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Custom software development</li>
                  <li>Web and mobile application development</li>
                  <li>Staff augmentation services</li>
                  <li>Dedicated development teams</li>
                  <li>Cloud solutions and DevOps services</li>
                  <li>AI and machine learning solutions</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">3. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on DevSeaLabs' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">4. Service Agreements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All services provided by DevSeaLabs are subject to separate service agreements that will be executed between DevSeaLabs and the client. These Terms of Service govern the use of our website and general interactions, while specific project terms will be outlined in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The materials on DevSeaLabs' website, including but not limited to text, graphics, logos, images, and software, are the property of DevSeaLabs and are protected by copyright and trademark laws. Unless otherwise specified in a service agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All custom software developed for clients becomes the property of the client upon full payment</li>
                  <li>DevSeaLabs retains rights to any pre-existing code, frameworks, or tools used in development</li>
                  <li>Open-source components are subject to their respective licenses</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">6. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Invoices are due within the timeframe specified in the service agreement</li>
                  <li>Late payments may incur interest charges</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevSeaLabs agrees to maintain the confidentiality of all client information and project details. We will not disclose any confidential information to third parties without prior written consent, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">8. Warranties and Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The materials on DevSeaLabs' website are provided on an 'as is' basis. DevSeaLabs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Implied warranties or conditions of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of intellectual property or other violation of rights</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">9. Limitations of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall DevSeaLabs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevSeaLabs' website, even if DevSeaLabs or a DevSeaLabs authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">10. Revisions and Errata</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials appearing on DevSeaLabs' website could include technical, typographical, or photographic errors. DevSeaLabs does not warrant that any of the materials on its website are accurate, complete, or current. DevSeaLabs may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in the jurisdiction where DevSeaLabs operates.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevSeaLabs may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-foreground font-medium mb-2">DevSeaLabs</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:hello@devsealabs.com" className="text-primary hover:underline">hello@devsealabs.com</a></p>
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




