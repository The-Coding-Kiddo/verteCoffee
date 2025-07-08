import type { Metadata } from 'next'
import { ThemeProvider } from '../components/theme-provider'
import { LanguageProvider } from '../lib/i18n/language-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verte Coffee',
  description: 'Artisanal Cold Brew Coffee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <LanguageProvider>
          {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
