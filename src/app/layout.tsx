import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mando — Developer & Hardware Hacker",
  description:
    "Portfolio of Mando. Python developer, IoT builder, and full-stack engineer. Minimal terminal-style portfolio with a living ASCII background.",
  keywords: ["Mando", "developer", "portfolio", "Python", "ESP32", "IoT", "hardware", "Textual", "ASCII art"],
  openGraph: {
    title: "Mando — Developer & Hardware Hacker",
    description: "Python developer, IoT builder, and full-stack engineer. A minimal terminal-style portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
