"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { signOut, useSession } from "next-auth/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Header() {
  const session = useSession();
  console.log("Session data:", session);

  console.log(session);
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <AcmeLogo />
          <p className="font-bold text-inherit">Newses news</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        {session.data?.user?.role === "admin" && (
          <NavbarItem>
            <Link href="/create" color="foreground">
              Create news
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session.status === "authenticated" ? (
          <>
            <Link href="/profile">Profile</Link>
            <Link onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Link>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/signin">Sign In</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/signup" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
