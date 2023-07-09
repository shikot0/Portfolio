import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Sheikh's portfolio",
  description: "View Sheikh Tijan Ceesay's portfolio",
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
