import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ClientLayoutContent } from "./client-layout-content"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lozinr.com"),
  title: {
    default: "Lozinr | Award-Winning Logo & Brand Identity Design Agency",
    template: "%s | Lozinr",
  },
  description:
    "Lozinr is a premier branding agency specializing in logo design, visual identity systems, and strategic brand development for global startups and established businesses.",
  keywords: [
    "logo design",
    "lozinr",
    "branding",
    "designer",
    "adnan akif",
    "brand identity",
    "branding agency",
    "graphic design",
    "visual identity",
    "Lozinr design",
    "corporate branding",
    "startup branding",
  ],
  authors: [{ name: "Lozinr" }],
  creator: "Lozinr",
  publisher: "Lozinr",
  formatDetection: { email: true, telephone: true, address: true },
  icons: {
    icon: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Lozinr-Favicon.png",
    shortcut: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Lozinr-Favicon.png",
    apple: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Lozinr-Favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lozinr.com",
    title: "Lozinr | Award-Winning Logo & Brand Identity Design Agency",
    description:
      "Strategic logo design and brand identity systems crafted for clarity, consistency, and lasting impact.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lozinr Design Agency",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lozinr | Award-Winning Logo & Brand Identity Design Agency",
    description:
      "Strategic logo design and brand identity systems crafted for clarity, consistency, and lasting impact.",
    images: ["/og-image.jpg"],
    creator: "@lozinrdesign",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://lozinr.com",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
  themeColor: "#ffffff",
}

// Enable streaming for faster first byte
export const revalidate = 3600 // Cache for 1 hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className={`font-sans antialiased overflow-x-hidden relative min-h-screen`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="theme">
          <ClientLayoutContent>{children}</ClientLayoutContent>
        </ThemeProvider>
      </body>
    </html>
  )
}
