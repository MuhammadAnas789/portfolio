import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manas-engineer.vercel.app"),

  title: {
    default: "Muhammad Anas — Software Engineer | Laravel, Next.js, Vue.js",
    template: "%s | Muhammad Anas",
  },

  description:
    "Muhammad Anas is a Software Engineer based in Lahore, Pakistan, specializing in Laravel, Next.js, Vue.js, TypeScript, and full-stack web development. Available for new opportunities.",

  keywords: [
    "Muhammad Anas",
    "Muhammad Anas software engineer",
    "Muhammad Anas developer",
    "Muhammad Anas Laravel",
    "Muhammad Anas portfolio",
    "software engineer Pakistan",
    "Laravel developer Pakistan",
    "Laravel developer Lahore",
    "full stack developer Laravel Vue.js",
    "Next.js developer Pakistan",
    "PHP developer",
    "TypeScript developer",
    "Vue.js developer",
    "full stack web developer",
    "API developer Laravel",
    "WebSocket developer",
    "SystemsD engineer",
  ],

  authors: [{ name: "Muhammad Anas", url: "https://manas-engineer.vercel.app" }],
  creator: "Muhammad Anas",
  publisher: "Muhammad Anas",

  alternates: {
    canonical: "https://manas-engineer.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manas-engineer.vercel.app",
    siteName: "Muhammad Anas — Software Engineer",
    title: "Muhammad Anas — Software Engineer | Laravel, Next.js, Vue.js",
    description:
      "Software Engineer specializing in Laravel, Next.js, Vue.js, and TypeScript. Building production-grade web applications and APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Anas — Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Anas — Software Engineer | Laravel, Next.js, Vue.js",
    description:
      "Software Engineer specializing in Laravel, Next.js, Vue.js, and TypeScript. Building production-grade web applications and APIs.",
    images: ["/og-image.png"],
    creator: "@muhammadanas",
  },

  // HOW TO VERIFY WITH GOOGLE SEARCH CONSOLE:
  // 1. Go to https://search.google.com/search-console
  // 2. Add property: https://manas-engineer.vercel.app
  // 3. Choose "HTML tag" verification method
  // 4. Copy the content value from the meta tag shown
  // 5. Replace GOOGLE_VERIFICATION_TOKEN below with that value
  // 6. Deploy and click Verify in Search Console
  verification: {
    google: "GOOGLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
