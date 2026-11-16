import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // --- Validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // --- Nodemailer transporter (Gmail + App Password) ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // তোমার Gmail: injamamulh544@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (16-digit)
      },
    });

    // --- Email to YOU (notification) ---
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // তোমার নিজের Gmail-এ আসবে
      replyTo: email,             // Reply করলে visitor-এর email-এ যাবে
      subject: `📩 New Message from ${name} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1117; color: #e6edf3; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1f6feb, #3fb950); padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 22px; color: #fff;">📬 New Portfolio Message</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #8b949e; font-size: 13px; width: 80px;">Name</td>
                <td style="padding: 10px 0; font-weight: 600; color: #e6edf3;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8b949e; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; color: #3fb950;">
                  <a href="mailto:${email}" style="color: #3fb950;">${email}</a>
                </td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 20px; background: #161b22; border-radius: 8px; border-left: 3px solid #1f6feb;">
              <p style="margin: 0 0 8px; color: #8b949e; font-size: 13px;">MESSAGE</p>
              <p style="margin: 0; color: #e6edf3; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="margin-top: 24px; color: #8b949e; font-size: 12px;">
              — Sent from your portfolio contact form. Reply to this email to respond directly to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
