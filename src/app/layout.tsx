import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faeem Ahmed — Developer & Hardware Hacker",
  description:
    "Portfolio of Faeem Ahmed. Python developer, IoT builder, and full-stack engineer. Terminal-style portfolio with a living ASCII background.",
  keywords: ["Faeem Ahmed", "developer", "portfolio", "Python", "ESP32", "IoT", "hardware", "Textual", "ASCII art"],
  openGraph: {
    title: "Faeem Ahmed — Developer & Hardware Hacker",
    description: "Python developer, IoT builder, and full-stack engineer. A terminal-style portfolio.",
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
