import { NextResponse } from "next/server";
import pool from "@/lib/db";

const VALID_SOURCES = ["hero", "cta", "pricing", "footer", "pricing-starter", "pricing-pro"];

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source, token } = body;

    if (!token || typeof token !== "string") {
      return NextResponse.json({ error: "Verification required" }, { status: 400 });
    }

    const isHuman = await verifyTurnstile(token);
    if (!isHuman) {
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 403 });
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (!source || !VALID_SOURCES.includes(source)) {
      return NextResponse.json({ error: "Invalid source" }, { status: 400 });
    }

    await pool.execute(
      "INSERT INTO waitlist (email, source) VALUES (?, ?)",
      [email.toLowerCase().trim(), source]
    );

    return NextResponse.json({ message: "You're on the list!" }, { status: 201 });
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as { code: string }).code === "ER_DUP_ENTRY"
    ) {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 200 }
      );
    }

    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
