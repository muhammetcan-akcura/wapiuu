import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wapiuu.com'),
  title: {
    default: "Wapiuu - Telegram Bulk Messaging and CRM Automation System",
    template: "%s | Wapiuu"
  },
  description: "With Wapiuu, send bulk messages to thousands of people via Telegram. Easy connection with QR code, automated replies, and detailed reporting. Try for free for 14 days.",
  keywords: [
    "telegram bulk message",
    "wapiuu", 
    "telegram crm",
    "bulk messaging",
    "telegram automation",
    "customer messaging",
    "telegram marketing",
    "automated replies",
    "telegram business",
    "customer communication"
  ],
  authors: [{ name: "Wapiuu Team", url: "https://wapiuu.com" }],
  creator: "Wapiuu",
  publisher: "Wapiuu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wapiuu.com",
    title: "Wapiuu - Telegram Bulk Messaging System",
    description: "Reach thousands of customers simultaneously with Telegram. Easy setup with QR code, powerful reporting.",
    siteName: "Wapiuu",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wapiuu - Telegram Bulk Messaging System",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wapiuu - Telegram Automation",
    description: "Telegram bulk messaging and CRM automation system",
    creator: "@wapiuu",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: "https://wapiuu.com",
    languages: {
      'en-US': 'https://wapiuu.com',
      'tr-TR': 'https://wapiuu.com/tr',
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://wapiuu.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2AABEE" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Wapiuu",
              "description": "Telegram bulk messaging and CRM automation system",
              "url": "https://wapiuu.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "299",
                "priceCurrency": "TRY",
                "priceValidUntil": "2024-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
      </head>
      <body className={spaceGrotesk.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}