import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMAT Quant: Integers and Divisibility",
  description:
    "A focused GMAT lesson on integers, divisibility, prime factorization, GCF, LCM, remainders, parity, and units digit patterns.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
