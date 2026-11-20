import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ameena & Abdulla | Wedding Invitation",
  description:
    "With joy, we invite you to celebrate the wedding of Dr. Ameena P A and Abdulla Srambikal on 27 December 2026.",
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
