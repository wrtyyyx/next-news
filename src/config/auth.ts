import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import { compare } from "bcryptjs";
import { User } from "@/types/User";

const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@site.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "••••••••",
        },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db(process.env.NEXT_PUBLIC_MONGODB_DB);
        const email = credentials!.email.trim().toLowerCase();

        console.log("Searching for user with email:", email);

        const user = await db
          .collection<User>("users")
          .findOne({ email: email });

        console.log("User found:", user);
        if (!user) {
          throw new Error("No user found with that email");
        }

        const isValid = await compare(credentials!.password, user.passwordHash);
        if (!isValid) {
          throw new Error("Password incorrect");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as User).role;
      return token;
    },
    async session({ session, token }) {
      if (token.role) session.user!.role = token.role as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/signin",
    signOut: "/signin",
    signUp: "/signup",
  },
};

export default authConfig;
