import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MemoVerse",
  description:
    "Memoverse: Elevate Your Note-Taking Experience to the Next Level. Unleash your creativity and organization with Memoverse, a cutting-edge note-taking platform designed to transform the way you capture and manage ideas. Experience seamless integration, innovative features, and customizable tools that make note-taking an effortless journey. Explore Memoverse today for a smarter, more efficient way to store, organize, and retrieve your thoughts.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
