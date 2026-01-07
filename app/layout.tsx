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
  title: "Lumina - OpenTelemetry-Native AI Observability",
  description: "The first OpenTelemetry-native observability platform for production AI systems. Get real-time traces, cost anomaly detection, and semantic regression testing—built for backend engineers.",
  keywords: ["OpenTelemetry", "AI observability", "LLM monitoring", "AI tracing", "cost tracking", "semantic testing", "production AI", "backend engineering"],
  authors: [{ name: "Lumina" }],
  openGraph: {
    title: "Lumina - OpenTelemetry-Native AI Observability",
    description: "Stop debugging AI failures with grep and jq. Built for backend engineers who demand reliability.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina - OpenTelemetry-Native AI Observability",
    description: "Stop debugging AI failures with grep and jq. Built for backend engineers who demand reliability.",
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
