import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Lee Flannery | Developer Relations & Solutions Engineer",
  description:
    "Solutions engineer with 25 years of experience. Creator of Full Stack Drip, teaching modern web development and AI tools.",
  keywords: ["developer relations", "DevRel", "solutions engineer", "AI platform", "Next.js", "TypeScript"],
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
