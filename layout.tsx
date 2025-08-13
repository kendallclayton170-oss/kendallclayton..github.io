import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Libre_Baskerville } from "next/font/google"
import "./globals.css"

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Countdown to Us 💕",
  description: "A romantic countdown until we meet again",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${libreBaskerville.variable} antialiased`}>
      <body className="font-serif">{children}</body>
    </html>
  )
}
