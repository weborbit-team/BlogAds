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
  title: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo - Modern Blog Platform",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Discover captivating stories, cutting-edge insights, and inspiring content from passionate writers worldwide",
  keywords:
    process.env.NEXT_PUBLIC_KEYWORDS ||
    "Blog,Reading,Stories,Articles,Content,Writers,Publishing,Modern Blog Platform",
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR || "ReadGo Team" }],
  creator: process.env.NEXT_PUBLIC_AUTHOR || "ReadGo Team",
  publisher: process.env.NEXT_PUBLIC_AUTHOR || "ReadGo Team",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://read-go.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo - Modern Blog Platform",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Discover captivating stories, cutting-edge insights, and inspiring content from passionate writers worldwide",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://read-go.vercel.app",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo - Modern Blog Platform",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Discover captivating stories, cutting-edge insights, and inspiring content from passionate writers worldwide",
    creator: "@readgo",
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
