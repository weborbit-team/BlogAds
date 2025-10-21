import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider, Layout } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    process.env.NEXT_PUBLIC_SITE_NAME ||
    "NextMUI - Next.js + Material-UI Showcase",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Professional Next.js 15 and Material-UI v7 showcase featuring responsive design, dark theme, and modern React patterns",
  keywords:
    process.env.NEXT_PUBLIC_KEYWORDS ||
    "Next.js,Material-UI,React,TypeScript,Dark Theme,Responsive Design,Web Development",
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR || "NextMUI Team" }],
  creator: process.env.NEXT_PUBLIC_AUTHOR || "NextMUI Team",
  publisher: process.env.NEXT_PUBLIC_AUTHOR || "NextMUI Team",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextmui-showcase.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      process.env.NEXT_PUBLIC_SITE_NAME ||
      "NextMUI - Next.js + Material-UI Showcase",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Professional Next.js 15 and Material-UI v7 showcase featuring responsive design, dark theme, and modern React patterns",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "https://nextmui-showcase.vercel.app",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "NextMUI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      process.env.NEXT_PUBLIC_SITE_NAME ||
      "NextMUI - Next.js + Material-UI Showcase",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Professional Next.js 15 and Material-UI v7 showcase featuring responsive design, dark theme, and modern React patterns",
    creator: "@nextmui",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
