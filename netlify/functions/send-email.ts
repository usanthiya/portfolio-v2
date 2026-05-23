import { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';

const handler: Handler = async (event) => {
  // CORS Headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'SendGrid API key not configured on the server. Please add SENDGRID_API_KEY to your environment variables.' }),
    };
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields: name, email, and message are required.' }),
      };
    }

    sgMail.setApiKey(apiKey);

    const mailOptions = {
      to: 'santhiyaudhya1@gmail.com', // Your verified target email address
      from: 'santhiyaudhya1@gmail.com', // Must be a verified Sender Identity in your SendGrid settings
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px; margin-top: 0;">New Contact Message</h2>
          <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 15px 0;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p style="margin: 15px 0;"><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #7c3aed; border-radius: 4px; white-space: pre-wrap; font-style: italic;">
            ${message}
          </div>
        </div>
      `,
    };

    await sgMail.send(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error: any) {
    console.error('SendGrid Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message || 'Failed to send email via SendGrid.' }),
    };
  }
};

export { handler };
