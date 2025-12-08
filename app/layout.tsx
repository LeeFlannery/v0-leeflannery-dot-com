import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Lee Flannery | Developer Relations & Solutions Engineer",
  description:
    "Two decades shipping production code. Creator of Full Stack Drip, teaching modern web development and AI tools.",
  keywords: ["developer relations", "DevRel", "solutions engineer", "AI platform", "Next.js", "TypeScript"],
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Lee Flannery | Developer Relations & Solutions Engineer",
    description:
      "Two decades shipping production code. Creator of Full Stack Drip, teaching modern web development and AI tools.",
    url: "https://leeflannery.com",
    siteName: "Lee Flannery",
    images: [
      {
        url: "/images/lee-usa-hawaii-yellow.jpg",
        width: 1200,
        height: 1200,
        alt: "Lee Flannery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Flannery | Developer Relations & Solutions Engineer",
    description:
      "Two decades shipping production code. Creator of Full Stack Drip, teaching modern web development and AI tools.",
    images: ["/images/lee-usa-hawaii-yellow.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KGSRDG121C" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KGSRDG121C');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
