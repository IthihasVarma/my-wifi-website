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
  title: "My Wifi - Speed Test & Troubleshooting",
  description: "Real-time Wi‑Fi speed test, troubleshooting answers, and upgrade guidance. Test your network, find solutions, and optimize your WiFi experience.",
  keywords: ["wifi", "speed test", "network", "troubleshooting", "broadband", "wifi analyzer"],
  authors: [{ name: "My Wifi" }],
  openGraph: {
    title: "My Wifi - Speed Test & Troubleshooting",
    description: "Real-time Wi‑Fi speed test, troubleshooting answers, and upgrade guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
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
