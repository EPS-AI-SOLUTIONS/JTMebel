import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "JT Mebel - Meble dla Edukacji i Biura",
  description: "Producent mebli dla przedszkoli, szkół i biur. Ponad 20 lat doświadczenia. Darmowa dostawa od 5000 zł.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
