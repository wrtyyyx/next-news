import { getDatabase } from "@/lib/mongodb";
import { compare } from "bcryptjs";
import type { User } from "@/types/User";

export async function userLogin(
  email: string,
  password: string,
): Promise<Omit<User, "passwordHash"> | null> {
  const db = await getDatabase();
  const col = db.collection<User>("users");

  const user = await col.findOne({ email });
  if (!user) return null;

  const valid = await compare(password, user.passwordHash);
  if (!valid) return null;

  const { ...safe } = user;
  return safe;
}
