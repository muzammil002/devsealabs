# Calendar Invite Email Setup

To send calendar invites via email (not just download), you need to set up a backend service since EmailJS doesn't support email attachments.

## Option 1: Use Resend (Recommended - Easiest)

Resend is a modern email API that supports attachments and is easy to set up.

### Setup Steps:

1. **Sign up for Resend**
   - Go to [https://resend.com](https://resend.com)
   - Sign up for a free account (100 emails/day free)

2. **Get API Key**
   - Go to API Keys in Resend dashboard
   - Create a new API key
   - Copy the key

3. **Install Resend**
   ```bash
   npm install resend
   ```

4. **Create API Route** (if using Next.js/Vercel)
   Create `api/send-calendar-invite.js`:
   ```javascript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   export default async function handler(req, res) {
     if (req.method !== 'POST') {
       return res.status(405).json({ error: 'Method not allowed' });
     }
   
     const { toEmail, toName, icsContent, startDateTime } = req.body;
   
     try {
       const { data, error } = await resend.emails.send({
         from: 'DevSeaLabs <onboarding@resend.dev>', // Update with your verified domain
         to: toEmail,
         subject: 'Meeting Invitation: Contact - DevSeaLabs',
         html: `
           <h2>Meeting Invitation</h2>
           <p>Hello ${toName},</p>
           <p>You have a meeting scheduled with DevSeaLabs.</p>
           <p>Please find the calendar invitation attached.</p>
         `,
         attachments: [
           {
             filename: 'meeting.ics',
             content: Buffer.from(icsContent).toString('base64'),
           },
         ],
       });
   
       if (error) throw error;
       return res.status(200).json({ success: true, data });
     } catch (error) {
       return res.status(500).json({ success: false, error: error.message });
     }
   }
   ```

5. **Update CalendarBooking Component**
   Add this function to send calendar invite:
   ```typescript
   const sendCalendarInvite = async (icsContent: string) => {
     try {
       const response = await fetch('/api/send-calendar-invite', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           toEmail: bookingData.email,
           toName: bookingData.name,
           icsContent: icsContent,
           startDateTime: startDateTime.toISOString(),
         }),
       });
       
       const result = await response.json();
       if (result.success) {
         toast.success('Calendar invite sent to your email!');
       }
     } catch (error) {
       console.error('Error sending calendar invite:', error);
     }
   };
   ```

6. **Add Environment Variable**
   Create `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

## Option 2: Use Nodemailer with Gmail

1. **Install Nodemailer**
   ```bash
   npm install nodemailer
   ```

2. **Get Gmail App Password**
   - Go to Google Account settings
   - Enable 2-Step Verification
   - Generate an App Password for "Mail"
   - Copy the 16-character password

3. **Create API Route**
   Use the `api/send-calendar-invite.js` file provided in the project.

4. **Add Environment Variables**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-app-password
   ```

## Option 3: Use SendGrid

1. **Sign up for SendGrid**
   - Go to [https://sendgrid.com](https://sendgrid.com)
   - Free tier: 100 emails/day

2. **Get API Key**
   - Create API key in SendGrid dashboard

3. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

4. **Create API Route**
   Similar structure but using SendGrid SDK

## Current Implementation

Currently, the calendar booking:
- ✅ Downloads ICS file automatically
- ✅ Sends notification email via EmailJS
- ✅ Provides Google Calendar link
- ❌ Cannot send calendar invite as email attachment (EmailJS limitation)

To enable email calendar invites, choose one of the options above and update the `handleBooking` function in `CalendarBooking.tsx` to call the API endpoint.



