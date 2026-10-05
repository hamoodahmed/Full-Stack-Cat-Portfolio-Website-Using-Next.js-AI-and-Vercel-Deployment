import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Whiskers | Cat Portfolio — Full-Stack Next.js App",
  description:
    "Welcome to Whiskers — a premium cat portfolio built with React, Next.js, TypeScript & Supabase. Discover adorable cat stories, galleries, blog posts and more.",
  keywords: [
    "cat portfolio",
    "whiskers",
    "cats",
    "cat blog",
    "pet portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "full-stack",
  ],
  authors: [{ name: "Whiskers Team" }],
  openGraph: {
    title: "Whiskers | Cat Portfolio",
    description: "A premium full-stack cat portfolio built with Next.js & TypeScript",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whiskers | Cat Portfolio",
    description: "A premium full-stack cat portfolio built with Next.js & TypeScript",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
