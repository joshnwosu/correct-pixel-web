import { NextResponse } from 'next/server';

type ContactRequest = {
  fullName?: string;
  phone?: string;
  budget?: string;
  message?: string;
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
  budget,
  message,
}: Required<ContactRequest>) => {
  return [
    'New Correct Pixel project inquiry',
    '',
    `Name: ${fullName}`,
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
  budget,
  message,
}: Required<ContactRequest>) => {
  const rows = [
    ['Name', fullName],
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
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@correctpixel.com';
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || 'Correct Pixel <onboarding@resend.dev>';

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          'Contact form email is not configured. Add RESEND_API_KEY in the deployment environment.',
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
  const phone = body.phone?.trim() || '';
  const budget = body.budget?.trim() || 'Not provided';
  const message = body.message?.trim() || '';

  if (!fullName || !message) {
    return NextResponse.json(
      { message: 'Name and message are required.' },
      { status: 400 }
    );
  }

  const payload = {
    from: fromEmail,
    to: [toEmail],
    subject: `New project inquiry from ${fullName}`,
    text: formatPlainMessage({ fullName, phone, budget, message }),
    html: formatHtmlMessage({ fullName, phone, budget, message }),
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Resend contact email failed:', error);

    return NextResponse.json(
      { message: 'Unable to send your message right now.' },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: 'Message sent. We will get back to you shortly.',
  });
}
