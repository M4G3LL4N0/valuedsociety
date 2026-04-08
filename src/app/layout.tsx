import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
