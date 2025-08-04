import "../styles/global.css";
import ClientProviders from "./client-providers";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk" className="h-full bg-gray-50">
      <body className="flex flex-col min-h-screen font-sans text-gray-900">
        <ClientProviders>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="mt-auto bg-gray-200 fixed bottom-0 text-center py-4 w-full">
            © {new Date().getFullYear()} Ваш проєкт. Всі права захищені.
          </footer>
        </ClientProviders>
      </body>
    </html>
  );
}
