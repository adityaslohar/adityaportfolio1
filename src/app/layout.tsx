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
  title: "Aditya Lohar | Front-End Developer (React / Next.js / TypeScript)",
  description:
    "Portfolio of Aditya Lohar, a Front-End Developer with ~2.5 years of experience building real business software: high-traffic booking platforms, multi-tenant CRM/HRMs, and enterprise tools serving 200+ daily employees.",
  keywords: [
    "Aditya Lohar",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "AI Twin",
  ],
  authors: [{ name: "Aditya Lohar" }],
  openGraph: {
    title: "Aditya Lohar | Front-End Developer",
    description: "Front-End Developer specializing in React, Next.js, TypeScript, and high-scale enterprise applications.",
    type: "website",
    url: "https://adityalohar.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-[#070a12] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300`}
      >
        {children}
      </body>
    </html>
  );
}
