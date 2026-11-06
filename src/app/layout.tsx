import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://faeem.space";

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mando | ~/dev — Python, TUIs & ESP32 Hardware",
    template: "%s | Mando",
  },
  description:
    "18-year-old developer building real-time Python TUIs, ESP32 IoT hardware, and full-stack web systems with live Discord presence.",
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
    "FastAPI",
    "Scrapy",
    "Next.js",
    "TUI",
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
    title: "Mando | ~/dev — Python, TUIs & ESP32 Hardware",
    description:
      "18-year-old developer building real-time Python TUIs, ESP32 IoT hardware, and full-stack web systems with live Discord presence.",
    url: siteUrl,
    siteName: "Mando Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mando | ~/dev — Python, TUIs & ESP32 Hardware",
    description:
      "18-year-old developer building real-time Python TUIs, ESP32 IoT hardware, and full-stack web systems with live Discord presence.",
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
