import type React from "react"
import type { Metadata } from "next"
import { Inter, Reem_Kufi, Amiri, EB_Garamond, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/app/contexts/LanguageContext"
import { Navbar } from "@/components/Navbar"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const reemKufi = Reem_Kufi({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-reem-kufi",
})

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "Muhajir Haroun | DO IT CARPENTRY",
  description:
    "Custom carpentry that blends Islamic tradition with modern functionality.",
  generator: "v0.app",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ebGaramond.variable} ${playfair.variable} ${reemKufi.variable} ${amiri.variable} font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
