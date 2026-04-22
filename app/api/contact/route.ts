import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactRequest = {
  fullName?: string;
  email?: string;
  phone?: string;
  budget?: string;
  message?: string;
};

type SmtpError = Error & {
  code?: string;
  responseCode?: number;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const formatPlainMessage = ({
  fullName,
  phone,
  email,
  budget,
  message,
}: Required<ContactRequest>) => {
  return [
    'New Correct Pixel project inquiry',
    '',
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Budget: ${budget}`,
    '',
    'Message:',
    message,
  ].join('\n');
};

const formatHtmlMessage = ({
  fullName,
  phone,
  email,
  budget,
  message,
}: Required<ContactRequest>) => {
  const rows = [
    ['Name', fullName],
    ['Email', email],
    ['Phone', phone || 'Not provided'],
    ['Budget', budget],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.55;">
      <h1 style="margin: 0 0 16px; font-size: 24px;">New Correct Pixel project inquiry</h1>
      <table style="width: 100%; max-width: 640px; border-collapse: collapse; margin-bottom: 24px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="text-align: left; width: 140px; padding: 12px; border: 1px solid #ddd; background: #fbfbfa;">${escapeHtml(label)}</th>
                  <td style="padding: 12px; border: 1px solid #ddd;">${escapeHtml(value)}</td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
      <h2 style="margin: 0 0 8px; font-size: 18px;">Message</h2>
      <div style="max-width: 640px; padding: 16px; border: 1px solid #ddd; background: #fbfbfa; white-space: pre-wrap;">${escapeHtml(
        message
      )}</div>
    </div>
  `;
};

export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com';
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@correctpixel.com';
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    (smtpUser ? `Correct Pixel <${smtpUser}>` : '');

  const missingConfig = [
    ['SMTP_USER', smtpUser],
    ['SMTP_PASS', smtpPass],
    ['CONTACT_FROM_EMAIL', fromEmail],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingConfig.length > 0) {
    return NextResponse.json(
      {
        message: `Contact form email is not configured. Missing: ${missingConfig.join(
          ', '
        )}.`,
      },
      { status: 503 }
    );
  }

  let body: ContactRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const fullName = body.fullName?.trim() || '';
  const email = body.email?.trim() || '';
  const phone = body.phone?.trim() || '';
  const budget = body.budget?.trim() || 'Not provided';
  const message = body.message?.trim() || '';

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { message: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const payload = {
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `New project inquiry from ${fullName}`,
    text: formatPlainMessage({ fullName, email, phone, budget, message }),
    html: formatHtmlMessage({ fullName, email, phone, budget, message }),
  };

  try {
    await transporter.sendMail(payload);
  } catch (error) {
    console.error('Zoho SMTP contact email failed:', error);
    const smtpError = error as SmtpError;

    if (smtpError.code === 'EAUTH' || smtpError.responseCode === 535) {
      return NextResponse.json(
        {
          message:
            'Zoho rejected the SMTP login. Check SMTP_USER and SMTP_PASS in .env.local; SMTP_PASS must be a Zoho app password.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: 'Unable to send your message right now.' },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: 'Message sent. We will get back to you shortly.',
  });
}
