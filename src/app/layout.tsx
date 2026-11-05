import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faeem | The ASCII Squirrel",
  description:
    "An interactive ASCII world portfolio by Faeem. A tiny adventure game, a living digital world.",
  keywords: ["Faeem", "developer", "portfolio", "Python", "web development", "ASCII art", "creative coding"],
  openGraph: {
    title: "Faeem | The ASCII Squirrel",
    description: "Explore a tiny ASCII forest and discover projects with a squirrel guide.",
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