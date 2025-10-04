import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Ensure your global CSS is imported

import Navbar from "../app/Navbar/page"; // ✅ Navbar component
import Footer from "../app/Footer/page"; // ✅ Footer component (make sure path sahi hai)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Core Consulting",
  description:
    "Official website for Continuity & Resilience - Empowering your future!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* ✅ Navbar */}
          <Navbar />

          {/* ✅ Main content */}
          <main className="flex-grow">{children}</main>

          {/* ✅ Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
