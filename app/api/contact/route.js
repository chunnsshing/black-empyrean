import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM || 'The Empyrean <onboarding@resend.dev>';
const TO   = process.env.RESEND_TO   || 'contact@theempyrean.org';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, company, email, type, message } = body ?? {};

  if (!name?.trim() || !email?.trim() || !type || !message?.trim()) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 });
  }

  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `[Empyrean] New enquiry from ${name}${company ? ` · ${company}` : ''} (${type.toUpperCase()})`,
    text: [
      `Name:    ${name}`,
      company ? `Company: ${company}` : null,
      `Email:   ${email}`,
      `Type:    ${type}`,
      ``,
      message,
    ].filter(Boolean).join('\n'),
  });

  return Response.json({ ok: true });
}