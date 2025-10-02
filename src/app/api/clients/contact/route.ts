import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    // 🟢 Log / Save / Send Email (for now just log)
    console.log("📩 New Message:", { name, email, message });

    return NextResponse.json(
      { message: "✅ Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact POST handler:", error);
    return NextResponse.json(
      { message: "❌ Server error, please try again!" },
      { status: 500 }
    );
  }
}
