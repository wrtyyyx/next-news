'use client'

import Header from "@/components/Header"
import { HeroUIProvider } from "@heroui/react"
import type { ReactNode } from 'react'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <Header />

      {children}
    </HeroUIProvider>
  )
}