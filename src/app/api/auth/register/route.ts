import { userRegister } from "@/services/auth/sign-up";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { email, password, name } = await request.json();
  if (!email || !password || !name) {
    return new Response("Email, password and name are required", {
      status: 400,
    });
  }

  try {
    await userRegister(email, password, name, "user");
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 },
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { message: msg || "Internal server error" },
      { status: 409 },
    );
  }
}
