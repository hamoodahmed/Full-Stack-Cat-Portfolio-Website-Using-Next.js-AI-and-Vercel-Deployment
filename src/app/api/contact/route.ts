import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, interest } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Attempt to save to Supabase (if configured)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const isSupabaseConfigured =
      supabaseUrl && !supabaseUrl.includes("placeholder");

    if (isSupabaseConfigured) {
      const { error: dbError } = await supabase
        .from("contact_messages")
        .insert([{ name, email, subject, message, interest }]);

      if (dbError) {
        console.error("Supabase error:", dbError);
        // Don't fail the request — fallback to console log
      }
    } else {
      // Development mode — log to console
      console.log("📬 New Contact Message (Dev Mode):");
      console.log({ name, email, subject, message, interest });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received! We'll get back to you within 24 hours. 🐾",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API is running 🐾" },
    { status: 200 }
  );
}
