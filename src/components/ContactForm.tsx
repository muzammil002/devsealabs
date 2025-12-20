import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email is required'),
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  phone: z.string()
    .optional()
    .refine((val) => {
      if (!val || val === '') return true;
      return /^[\d\s\-\+\(\)]+$/.test(val) && val.length <= 20;
    }, {
      message: 'Please enter a valid phone number (max 20 characters)',
    }),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5frqtbt';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dwgh9uf';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '_Ezsu9qvdwDcYqEy4';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on blur for better UX
    reValidateMode: 'onChange', // Re-validate on change after first error
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not provided',
        phone: data.phone || 'Not provided',
        subject: data.subject,
        message: data.message,
        to_email: 'muzammilofficial9@gmail.com',
        reply_to: data.email,
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error: any) {
      console.error('EmailJS error:', error);
      
      // Show error message
      toast.error(
        error.text || 'Failed to send message. Please try again or email us directly at muzammilofficial9@gmail.com',
        {
          duration: 5000,
        }
      );
      
      // Don't redirect to mailto automatically - let user decide
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="John Doe"
            className={`mt-2 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
              <span>⚠</span>
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="john@example.com"
            className={`mt-2 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
              <span>⚠</span>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            {...register('company')}
            placeholder="Company Name"
            className="mt-2"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+1 (555) 123-4567"
            className={`mt-2 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
              <span>⚠</span>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          {...register('subject')}
          placeholder="What is this regarding?"
          className={`mt-2 ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <span>⚠</span>
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us about your project or inquiry..."
          className={`mt-2 min-h-[150px] ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <span>⚠</span>
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="glow"
        size="lg"
        className="w-full group"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        Or email us directly at{' '}
        <a
          href="mailto:muzammilofficial9@gmail.com"
          className="text-primary hover:underline"
        >
          muzammilofficial9@gmail.com
        </a>
      </p>
      
    </form>
  );
};

