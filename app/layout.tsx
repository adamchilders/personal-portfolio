import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Adam Childers - Full Stack Developer",
  description: "Full stack web developer with a passion for building high-quality web applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${jetbrainsMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
