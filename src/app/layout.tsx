import { Session } from 'inspector/promises'
import '../styles/global.css'
import ClientProviders from './client-providers'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk" className="h-full bg-gray-50">
      <head />
      <body className="flex flex-col  font-sans text-gray-900">

          <ClientProviders>
            {/* Основной контейнер с отступами и центровкой */}
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            {/* Футер */}
            <footer className="mt-auto bg-gray-200 text-center py-4 w-full">
              © {new Date().getFullYear()} Ваш проект. Всі права захищені.
            </footer>
          </ClientProviders>


      </body>
    </html>
  )
}