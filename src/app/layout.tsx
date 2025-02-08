import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JBECP - Parsers",
  description: "Join our community of blockchain developers building the next generation of decentralized applications",
  metadataBase: new URL('http://localhost:3000'),
  icons: {
    icon: [
      { url: '/parser-logo.png', type: 'image/png' },
    ],
    shortcut: ['/parser-logo.png'],
    apple: [
      { url: '/parser-logo.png' },
    ],
  },
  openGraph: {
    images: [
      {
        url: "/parser-logo.png",
        width: 800,
        height: 600,
        alt: "JBECP Parsers",
      },
    ],
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
        <link rel="icon" href="/triangle.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
