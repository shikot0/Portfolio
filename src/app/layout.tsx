import type { Metadata } from 'next';
import {Analytics} from '@vercel/analytics/react'
import './globals.css'


export const metadata: Metadata = {
  title: "Sheikh Tijan Ceesay",
  description: "View Sheikh Tijan Ceesay's portfolio",
  keywords: ['sheikh tijan ceesay', 'sheikh', 'tijan', 'ceesay'],
  authors: {url: 'https://github.com/shikot0', name: 'Sheikh Tijan Ceesay'},
  icons: [{ rel: "icon", url: "/icon.png" }],
  openGraph: {
    type: 'website',
    url: 'sheikh-tijan-ceesay.vercel.app',
    title: "Sheikh Tijan Ceesay's portfolio",
    siteName: 'Sheikh Tijan Ceesay',
    description: "View Sheikh Tijan Ceesay's portfolio",
    images: [{
      url: "/og-image.png",
      width: 400,
      height: 400
    }]
  },
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
