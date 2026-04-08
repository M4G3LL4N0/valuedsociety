import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

// Load Inter font locally
const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter.var.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Virtus | Become a Better Person",
  description:
    "Virtus helps people become more valuable members of their communities through education, reflection, and practical character development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
