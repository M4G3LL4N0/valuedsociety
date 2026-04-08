import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValuedSociety | Become Someone Who Matters",
  description:
    "ValuedSociety helps people become more valuable members of their communities through education, reflection, and real-world character development.",
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
