import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(1, "Message is required").max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

    if (!host || !port || !user || !pass || !to) {
      return NextResponse.json(
        { error: "Server not configured for email" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const html = `
      <div>
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: {
        name: name,
        address: user,
      },
      replyTo: email,
      to,
      subject: `[Portfolio] ${subject}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected error", details: (error as Error).message },
      { status: 500 }
    );
  }
}


