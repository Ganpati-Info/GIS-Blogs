import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blogs.ganpatiinfosolutions.com"),

  title: {
    default: "Ganpati Info Solutions Blog",
    template: "%s | Ganpati Info Solutions Blog",
  },

  description:
    "Expert insights on AI, software development, cloud computing, cybersecurity, and digital transformation.",

  keywords: [
    "AI",
    "Software Development",
    "Cloud Computing",
    "Cybersecurity",
    "Digital Transformation",
    "Ganpati Info Solutions",
    "blogs",
    "technical blogs"
  ],

  authors: [
    {
      name: "Ganpati Info Solutions",
    },
  ],

  creator: "Ganpati Info Solutions",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ganpati Info Solutions Blog",
    description:
      "Expert insights on AI, software development, cloud computing, cybersecurity, and digital transformation.",
    url: "https://blogs.ganpatiinfosolutions.com",
    siteName: "Ganpati Info Solutions Blog",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ganpati Info Solutions Blog",
    description:
      "Expert insights on AI, software development, cloud computing, cybersecurity, and digital transformation.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#25499F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
