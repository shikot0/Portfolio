import './globals.css'
import type { Metadata } from 'next';
import {Analytics} from '@vercel/analytics/react'


export const metadata: Metadata = {
  title: "Sheikh Tijan Ceesay",
  description: "View Sheikh Tijan Ceesay's portfolio",
  icons: [{ rel: "icon", url: "/icon.png" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
    </html>
  )
}
