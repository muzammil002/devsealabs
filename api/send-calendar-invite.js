// Backend API endpoint to send calendar invites via email
// This can be deployed to Vercel, Netlify Functions, or any Node.js server

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    toEmail,
    toName,
    fromName,
    fromEmail,
    startDateTime,
    endDateTime,
    notes,
    icsContent
  } = req.body;

  try {
    // Configure your email transporter
    // For Gmail, you'll need an App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_APP_PASSWORD // Gmail App Password
      }
    });

    // Email options
    const mailOptions = {
      from: `"DevSeaLabs" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: 'Meeting Invitation: Contact - DevSeaLabs',
      text: `Hello ${toName},\n\nYou have a meeting scheduled with DevSeaLabs.\n\nMeeting Details:\nDate & Time: ${new Date(startDateTime).toLocaleString()}\nDuration: 15 minutes\n\nPlease find the calendar invitation attached.\n\nBest regards,\nDevSeaLabs Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Meeting Invitation</h2>
          <p>Hello ${toName},</p>
          <p>You have a meeting scheduled with DevSeaLabs.</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Date & Time:</strong> ${new Date(startDateTime).toLocaleString()}</p>
            <p><strong>Duration:</strong> 15 minutes</p>
            <p><strong>Meeting Type:</strong> Web conferencing details provided upon confirmation.</p>
          </div>
          <p>Please find the calendar invitation attached. You can add it to your calendar.</p>
          <p>Best regards,<br>DevSeaLabs Team</p>
        </div>
      `,
      icalEvent: {
        filename: 'meeting.ics',
        method: 'REQUEST',
        content: icsContent
      },
      attachments: [
        {
          filename: 'meeting.ics',
          content: icsContent,
          contentType: 'text/calendar; charset=utf-8; method=REQUEST'
        }
      ]
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Calendar invite sent successfully' 
    });
  } catch (error) {
    console.error('Error sending calendar invite:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}

