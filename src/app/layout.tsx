import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Google Clone",
  description: "The Google Clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer />
        </body>
    </html>
  );
}
