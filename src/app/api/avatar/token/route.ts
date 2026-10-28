import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.HEYGEN_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      available: false,
      message: "Running in interactive digital avatar mode.",
      fallback: true,
    });
  }

  try {
    // Request a new session streaming token from live streaming service
    const response = await fetch("https://api.heygen.com/v1/streaming.create_token", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json({
        available: false,
        message: "Live stream initialization unavailable. Digital avatar active.",
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
