import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Get the secret from the request body
    const body = await request.json();
    const { secret } = body;

    // Check for the secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Revalidate the ISR page
    revalidatePath("/isr");

    return NextResponse.json(
      { revalidated: true, now: Date.now() },
      { status: 200 }
    );
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
