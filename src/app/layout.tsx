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

export const metadata: Metadata = {
  title: "LaunchNow — Smarter Launchpad for macOS",
  description:
    "LaunchNow streamlines the macOS Launchpad with customizable grids, organized settings, and secure backups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} bg-[var(--launch-surface)] text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
