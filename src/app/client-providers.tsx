"use client";

import Header from "@/components/Header";
import { HeroUIProvider } from "@heroui/react";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <Header />

        {children}
      </HeroUIProvider>
    </SessionProvider>
  );
}
