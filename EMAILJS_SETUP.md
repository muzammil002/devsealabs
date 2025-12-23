# EmailJS Setup Instructions

To enable email sending from the contact form, follow these steps:

## 1. Sign up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## 2. Create an Email Service

1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note your **Service ID** (e.g., `service_abc123`)

## 3. Create an Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})
Company: {{company}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Set the "To Email" field to: `muzammilofficial9@gmail.com`
5. Note your **Template ID** (e.g., `template_xyz789`)

## 4. Get Your Public Key

1. Go to "Account" → "General" in your EmailJS dashboard
2. Copy your **Public Key** (e.g., `abc123xyz789`)

## 5. Configure Environment Variables

Create a `.env` file in the root of your project:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Restart Your Development Server

After adding the environment variables, restart your dev server:

```bash
npm run dev
```

## Alternative: Direct Configuration

If you prefer not to use environment variables, you can directly edit `src/components/ContactForm.tsx` and replace:

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

With your actual credentials.

## Testing

Once configured, test the form by:
1. Filling out the contact form
2. Submitting it
3. Checking your email inbox at `muzammilofficial9@gmail.com`

## Fallback

If EmailJS is not configured, the form will automatically fall back to opening the user's email client with a pre-filled message.



