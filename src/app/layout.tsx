import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manas-engineer.vercel.app"),
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230f172a'/><text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' fill='%232dd4bf' font-family='system-ui,sans-serif' font-weight='700' font-size='13'>MA</text></svg>",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect width='180' height='180' rx='32' fill='%230f172a'/><text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' fill='%232dd4bf' font-family='system-ui,sans-serif' font-weight='700' font-size='72'>MA</text></svg>",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
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
