import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "LaunchNow — Smarter Launchpad for macOS";
const description =
  "LaunchNow streamlines the macOS Launchpad with customizable grids, organized settings, and secure backups.";
const url = "https://launchnow.app";
const ogImage = "/image/0.png";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "LaunchNow",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "LaunchNow interface preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: "/icon/64.png",
    shortcut: "/icon/64.png",
    apple: "/icon/64.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} bg-[var(--launch-surface)] text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
