import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OpenGig - The Complete Business Platform for Freelancers",
  description: "Stop relying on Fiverr and Upwork. Build your own professional client portal with streamlined project management, automated workflows, and seamless client communication.",
  keywords: ["freelance", "business platform", "client portal", "project management", "freelancer tools", "freelance business", "client management", "project workflow"],
  authors: [{ name: "OpenGig Team" }],
  creator: "OpenGig",
  publisher: "OpenGig",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "OpenGig - The Complete Business Platform for Freelancers",
    description: "Stop relying on Fiverr and Upwork. Build your own professional client portal with streamlined project management, automated workflows, and seamless client communication.",
    type: "website",
    locale: "en_US",
    siteName: "OpenGig",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenGig - The Complete Business Platform for Freelancers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenGig - The Complete Business Platform for Freelancers",
    description: "Stop relying on Fiverr and Upwork. Build your own professional client portal with streamlined project management, automated workflows, and seamless client communication.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}