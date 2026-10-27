import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.HEYGEN_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      available: false,
      message: "No HEYGEN_API_KEY configured in .env.local. Running in interactive simulated avatar & text mode.",
      fallback: true,
    });
  }

  try {
    // Request a new session streaming token from HeyGen API
    const response = await fetch("https://api.heygen.com/v1/streaming.create_token", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({
        available: false,
        message: `HeyGen API responded with status ${response.status}: ${errorText}`,
        fallback: true,
      });
    }

    const data = await response.json();
    return NextResponse.json({
      available: true,
      token: data.data?.token || data.token,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { available: false, message: errMessage, fallback: true },
      { status: 500 }
    );
  }
}
