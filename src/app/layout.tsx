import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadanas.dev"),
  title: "Muhammad Anas — Software Engineer",
  description:
    "Full-stack engineer with production experience across Laravel, Vue.js, and Next.js. Building scalable APIs, real-time systems, and complete frontend applications.",
  openGraph: {
    title: "Muhammad Anas — Software Engineer",
    description:
      "Full-stack engineer with production experience across Laravel, Vue.js, and Next.js. Building scalable APIs, real-time systems, and complete frontend applications.",
    url: "https://muhammadanas.dev",
    siteName: "Muhammad Anas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Anas — Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Anas — Software Engineer",
    description:
      "Full-stack engineer with production experience across Laravel, Vue.js, and Next.js. Building scalable APIs, real-time systems, and complete frontend applications.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
