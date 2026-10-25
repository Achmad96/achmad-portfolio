import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  let username = "";
  let messages = "";

  const contentType = req.headers.get("content-type") || "";

  try {
    if (contentType.includes("application/json")) {
      const json = await req.json();
      username = json.username || "";
      messages = json.messages || "";
    } else {
      const reqBody = await req.formData();
      username = (reqBody.get("username") as string) || "";
      messages = (reqBody.get("messages") as string) || "";
    }
  } catch (err) {
    return NextResponse.json(
      { success: false, messages: "Failed to parse request body" },
      { status: 400 }
    );
  }

  if (!username || !messages) {
    return NextResponse.json(
      {
        success: false,
        messages: "Please enter your name/username and message",
      },
      { status: 400 },
    );
  }

  if (!process.env.NEXT_GMAIL_FROM_EMAIL || !process.env.NEXT_GMAIL_TO_EMAIL) {
    // If mail env vars are not set in production or local, return a mock success message
    console.log(`[Contact Form Received] From: ${username}, Message: ${messages}`);
    return NextResponse.json({
      success: true,
      messages: "Message received (offline delivery log)",
    });
  }

  const emailOptions = {
    from: process.env.NEXT_GMAIL_FROM_EMAIL,
    to: process.env.NEXT_GMAIL_TO_EMAIL,
    subject: `New portfolio inquiry from ${username}`,
    text: messages,
  };

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.NEXT_GMAIL_FROM_EMAIL,
        pass: process.env.NEXT_GMAIL_PASS,
      },
    });

    const res = await transporter.sendMail(emailOptions);
    if (!res) {
      return NextResponse.json(
        {
          success: false,
          messages: "Failed to send email",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        success: false,
        messages: error?.message || "Failed to send email",
      },
      { status: 500 },
    );
  }
}
