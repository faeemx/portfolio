import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://portfolio-faeemx.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mando | ~/dev",
    template: "%s | Mando",
  },
  description:
    "18-year-old developer building real-time TUIs, ESP32 hardware, and web experiments with live Discord presence.",
  keywords: [
    "Mando",
    "faeemaxn",
    "developer",
    "portfolio",
    "Python",
    "ESP32",
    "IoT",
    "hardware",
    "Textual",
    "ASCII art",
    "Next.js",
    "creative coding",
  ],
  authors: [{ name: "Mando", url: "https://github.com/faeemx" }],
  creator: "Mando",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Mando | ~/dev",
    description:
      "18-year-old developer building real-time TUIs, ESP32 hardware, and web experiments with live Discord presence.",
    url: siteUrl,
    siteName: "Mando Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mando | ~/dev",
    description:
      "18-year-old developer building real-time TUIs, ESP32 hardware, and web experiments with live Discord presence.",
    creator: "@faeemaxn",
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
