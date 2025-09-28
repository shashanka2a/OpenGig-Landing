import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenGig - Automate Client Onboarding into Developer-Ready Briefs',
  description: 'Transform chaotic client requirements into structured, actionable project briefs with AI-powered automation. Save 10+ hours per project and standardize your client onboarding process.',
  keywords: ['client onboarding', 'project management', 'automation', 'AI', 'developer briefs', 'workflow automation', 'project briefs'],
  authors: [{ name: 'OpenGig' }],
  creator: 'OpenGig',
  publisher: 'OpenGig',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://opengig.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OpenGig - Automate Client Onboarding into Developer-Ready Briefs',
    description: 'Transform chaotic client requirements into structured, actionable project briefs with AI-powered automation.',
    url: 'https://opengig.com',
    siteName: 'OpenGig',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OpenGig - Automate Client Onboarding',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenGig - Automate Client Onboarding into Developer-Ready Briefs',
    description: 'Transform chaotic client requirements into structured, actionable project briefs with AI-powered automation.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
