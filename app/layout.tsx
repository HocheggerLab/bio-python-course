import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/layout/Navigation";
import Footer from "@/layout/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  /* metadataBase makes every relative URL in the metadata absolute, which is
     what Open Graph and Twitter cards need — without it a shared link shows no
     preview. It also gives each page a canonical URL. */
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Python for Biologists",
    template: "%s — Python for Biologists",
  },
  description:
    "A practical programming course for biology students. No prior coding experience required!",
  keywords: [
    "Python for biology",
    "learn Python biologists",
    "DNA sequence analysis Python",
    "pandas for biologists",
    "bioinformatics course",
    "data analysis life sciences",
  ],
  authors: [{ name: "Helfrid Hochegger", url: "https://www.hocheggerlab.org/" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Python for Biologists",
    title: "Python for Biologists",
    description:
      "A free, practical programming course built on real biological data — DNA, pollinator surveys, neurons and cancer genomics. No prior coding experience required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python for Biologists",
    description:
      "A free programming course built on real biological data. No prior coding experience required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${sans.variable} ${mono.variable}`}>
      <body className="bg-bio-darkest text-white min-h-screen" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
