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
  title: "JT Mebel - Producent Certyfikowanych Mebli Szkolnych | Kartuzy",
  description: "JT Mebel Sp. z o.o. - producent certyfikowanych mebli szkolnych i przedszkolnych z Kartuz. Wyposażyliśmy tysiące sal lekcyjnych w kraju i za granicą. Darmowa dostawa od 5000 zł.",
  keywords: "meble szkolne, krzesła szkolne, stoły szkolne, meble przedszkolne, monitory interaktywne, tablice szkolne, JT Mebel, Kartuzy",
  authors: [{ name: "JT Mebel Sp. z o.o." }],
  openGraph: {
    title: "JT Mebel - Producent Certyfikowanych Mebli Szkolnych",
    description: "Producent certyfikowanych mebli szkolnych i przedszkolnych z Kartuz. Tysiące wyposażonych sal lekcyjnych.",
    locale: "pl_PL",
    type: "website",
  },
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
