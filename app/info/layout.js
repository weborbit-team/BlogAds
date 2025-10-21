export const metadata = {
  title: "Technology Stack Info | NextMUI - Next.js + Material-UI Showcase",
  description:
    "Learn about Next.js and Material-UI technologies. Discover the benefits of server-side rendering, static site generation, Material Design components, and modern React development patterns.",
  keywords:
    "Next.js, Material-UI, React, SSR, SSG, Material Design, TypeScript, web development, frontend framework, component library",
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR || "NextMUI Team" }],
  creator: process.env.NEXT_PUBLIC_AUTHOR || "NextMUI Team",
  publisher: process.env.NEXT_PUBLIC_SITE_NAME || "NextMUI",
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
  openGraph: {
    title: "Technology Stack Info | NextMUI - Next.js + Material-UI Showcase",
    description:
      "Learn about Next.js and Material-UI technologies. Discover the benefits of server-side rendering, static site generation, and Material Design components.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/info`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "NextMUI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Stack Info | NextMUI",
    description:
      "Learn about Next.js and Material-UI technologies. Discover the benefits of modern React development.",
    creator: "@nextmui",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/info`,
  },
};

export default function InfoLayout({ children }) {
  return children;
}
