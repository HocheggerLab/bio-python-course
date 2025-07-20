import type { Metadata } from "next";
import Navigation from "@/layout/Navigation";
import Footer from "@/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Python for Biologists",
  description: "A practical programming course for Year 3 Biology, Biochemistry, and Neuroscience students. No prior coding experience required!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-bio-dark to-bio-darker text-white min-h-screen">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
