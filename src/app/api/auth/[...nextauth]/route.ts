import  authConfig  from "@/config/auth";
import NextAuth from "next-auth";
const handler = NextAuth(authConfig)

export { handler as GET, handler as POST };