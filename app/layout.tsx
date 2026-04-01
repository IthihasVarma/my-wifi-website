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
  title: "CandelaField - Mobile Companion for Network Testing",
  description: "Monitor, diagnose, and control your Candela network tests from anywhere. The ultimate companion app for field technicians and network engineers.",
  keywords: ["Candela", "network testing", "WiFi", "LANforge", "field testing", "network monitoring", "B2B"],
  authors: [{ name: "Candela Technologies" }],
  openGraph: {
    title: "CandelaField - Mobile Companion for Network Testing",
    description: "Monitor, diagnose, and control your Candela network tests from anywhere.",
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
