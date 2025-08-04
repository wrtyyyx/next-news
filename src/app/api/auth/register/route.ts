import { userRegister } from "@/services/auth/sign-up";
export async function POST(request: Request) {
  const { email, password, name } = await request.json();
  if (!email || !password || !name) {
    return new Response("Email, password and name are required", {
      status: 400,
    });
  }

  try {
    await userRegister(email, password, name, "user");
    return new Response("User registered successfully", { status: 201 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(errorMessage, { status: 500 });
  }
}
