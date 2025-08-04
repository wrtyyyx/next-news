import SignUpView from "@/sections/signup/signup-view";
import React from "react";

export const metadata = {
  title: "Sign Up",
  description: "User sign up page",
};
const page = () => {
  return (
    <div>
      <SignUpView />
    </div>
  );
};

export default page;
