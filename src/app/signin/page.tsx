import SignInView from "@/sections/signin/signin-view";
import React from "react";

export const metadata = {
  title: "Sign In",
  description: "User sign in page",
};
export default async function SignInPage() {
  return (
    <div>
      <SignInView />
    </div>
  );
}
