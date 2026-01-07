import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Lumina - Lightweight Observability for LLM Applications",
  description: "Track costs, latency, and quality across your AI systems with minimal overhead. OpenTelemetry-compatible observability platform built for production LLM applications.",
  keywords: ["LLM", "observability", "AI monitoring", "cost tracking", "latency", "OpenTelemetry", "machine learning", "AI analytics"],
  authors: [{ name: "Lumina Team" }],
  openGraph: {
    title: "Lumina - Lightweight Observability for LLM Applications",
    description: "Track costs, latency, and quality across your AI systems with minimal overhead.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina - Lightweight Observability for LLM Applications",
    description: "Track costs, latency, and quality across your AI systems with minimal overhead.",
  },
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
        {children}
      </body>
    </html>
  );
}
