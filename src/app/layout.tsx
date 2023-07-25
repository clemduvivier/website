import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clément Duvivier Website',
  description: 'Get to know everything about Clément Duvivier and his work in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
