import type { Metadata } from 'next';
import Script from 'next/script'
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Lumina - OpenTelemetry-Native AI Observability',
  description:
    'Production-grade observability for AI systems. Real-time traces, cost anomaly detection, and semantic regression testing built for backend engineers.',
  keywords: ['AI observability', 'LLM monitoring', 'OpenTelemetry', 'RAG tracing', 'AI DevOps'],
  authors: [{ name: 'Lumina' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uselumina.io',
    title: 'Lumina - OpenTelemetry-Native AI Observability',
    description: 'Production-grade observability for AI systems. Built for backend engineers.',
    siteName: 'Lumina',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lumina AI Observability',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina - OpenTelemetry-Native AI Observability',
    description: 'Production-grade observability for AI systems. Built for backend engineers.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Script
          id="apollo-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
                o.async=!0,
                o.defer=!0,
                o.onload=function(){
                  window.trackingFunctions.onLoad({appId:"69920b5e16b7ed00159eea02"})
                },
                document.head.appendChild(o)
              }
              initApollo();
            `
          }}
        />
      </body>
    </html>
  );
}
