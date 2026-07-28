import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const forwarded = request.headers.get("x-forwarded-for");

    const ip = forwarded?.split(",")[0]?.trim() ?? "Unknown";

    const response = await fetch(process.env.NEWSLETTER_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        source: "GIS Blog",
        ip,
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
