import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  let username = "";
  let email = "";
  let profileUrl = "";
  let messages = "";
  let honey = "";

  const contentType = req.headers.get("content-type") || "";

  try {
    if (contentType.includes("application/json")) {
      const json = await req.json();
      username = json.username?.trim() || "";
      email = json.email?.trim() || "";
      profileUrl = json.profileUrl?.trim() || "";
      messages = json.messages?.trim() || "";
      honey = json._honey?.trim() || "";
    } else {
      const reqBody = await req.formData();
      username = ((reqBody.get("username") as string) || "").trim();
      email = ((reqBody.get("email") as string) || "").trim();
      profileUrl = ((reqBody.get("profileUrl") as string) || "").trim();
      messages = ((reqBody.get("messages") as string) || "").trim();
      honey = ((reqBody.get("_honey") as string) || "").trim();
    }
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to parse request payload." },
      { status: 400 }
    );
  }

  // Honeypot anti-spam check: if bot filled this hidden field, silently exit
  if (honey) {
    console.warn(`[Anti-Spam] Bot submission caught by honeypot: ${username} <${email}>`);
    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  }

  if (!username || !messages) {
    return NextResponse.json(
      {
        success: false,
        message: "Please enter your name/organization and a message.",
      },
      { status: 400 }
    );
  }

  const rawUser = process.env.NEXT_GMAIL_FROM_EMAIL;
  const rawPass = process.env.NEXT_GMAIL_PASS;
  const rawTo = process.env.NEXT_GMAIL_TO_EMAIL;

  // Clean strings (strip enclosing quotes and spaces)
  const user = rawUser?.replace(/^["']|["']$/g, "").trim();
  // App passwords from Google are 16 characters often grouped with spaces like 'abcd efgh ijkl mnop'
  const pass = rawPass?.replace(/^["']|["']$/g, "").replace(/\s+/g, "").trim();
  const to = (rawTo?.replace(/^["']|["']$/g, "").trim()) || user;

  if (!user || !pass) {
    console.warn(
      `[Contact Form Local Log] Mail credentials not set. From: ${username} <${email || "no-email"}> [${profileUrl || "no-profile"}]: "${messages}"`
    );
    return NextResponse.json({
      success: true,
      message: "Message received (offline/development mode).",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const safeUsername = username.replace(/["\r\n]/g, "");
    const formattedProfile = profileUrl ? (profileUrl.startsWith("http") ? profileUrl : `https://${profileUrl}`) : null;

    const emailOptions = {
      from: `"${safeUsername}" <${user}>`,
      to,
      replyTo: email || undefined,
      subject: `Portfolio Inquiry from ${safeUsername}${profileUrl ? ` (${profileUrl})` : ""}`,
      text: `New Portfolio Message:\n---------------------\nName: ${safeUsername}\nEmail: ${email || "Not specified"}\nProfile / Org: ${profileUrl || "Not specified"}\n\nMessage:\n${messages}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin-top: 0; font-size: 20px; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            New Inquiry from Portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;"><strong>From:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${safeUsername}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">
                ${email ? `<a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a>` : "<em>Not provided</em>"}
              </td>
            </tr>
            ${
              formattedProfile
                ? `<tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Profile / Org:</strong></td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">
                      <a href="${formattedProfile}" target="_blank" rel="noopener noreferrer" style="color: #0d9488; text-decoration: none;">${profileUrl}</a>
                    </td>
                  </tr>`
                : ""
            }
          </table>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${messages}</div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent via Achmad Raihan's Portfolio Contact Form
          </p>
        </div>
      `,
    };

    await transporter.sendMail(emailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! Thank you for reaching out.",
    });
  } catch (error: any) {
    console.error("[Contact API] Error sending email:", error);

    const isBadCredentials =
      error?.code === "EAUTH" ||
      error?.responseCode === 535 ||
      (typeof error?.message === "string" && error.message.includes("535"));

    const responseMessage = isBadCredentials
      ? "Gmail authentication failed (BadCredentials). Please update your 16-character App Password in .env, or email directly at work.achmadraihan@gmail.com."
      : "Could not send message through the mail server. Please email directly at work.achmadraihan@gmail.com.";

    return NextResponse.json(
      {
        success: false,
        message: responseMessage,
      },
      { status: 500 }
    );
  }
}
