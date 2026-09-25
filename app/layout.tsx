import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bensu Özdemir — Software & Digital Products",
  description:
    "Personal portfolio of Bensu Özdemir, a Computer Science graduate interested in software engineering, digital products and emerging technology.",
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
