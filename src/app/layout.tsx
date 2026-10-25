import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { heroImage } from "@/data/media";
import { siteConfig } from "@/data/site";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.legalName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  openGraph: {
    type: "website",
    siteName: siteConfig.legalName,
    title: `${siteConfig.legalName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: heroImage.src, alt: heroImage.alt }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-chalk font-sans text-walnut">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
