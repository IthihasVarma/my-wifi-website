import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuralWiFi - AI-Powered Wireless Intelligence",
  description: "Next-generation WiFi testing, AI-driven network optimization, and real-time simulation environments. Engineering the future of wireless intelligence.",
  keywords: ["wifi", "ai", "network", "mesh", "optimization", "speed test", "deep tech", "wireless"],
  authors: [{ name: "NeuralWiFi" }],
  openGraph: {
    title: "NeuralWiFi - AI-Powered Wireless Intelligence",
    description: "Next-generation WiFi testing and AI-driven network optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
