export const metadata = {
  title: {
    template: "%s | NextMUI Blog",
    default: "Blog Categories | NextMUI - Next.js + Material-UI Showcase",
  },
  description:
    "Explore our comprehensive blog covering Technology, Development, Design, Business, Marketing, and Lifestyle topics. Stay updated with the latest insights and trends.",
  keywords:
    "blog, technology, development, design, business, marketing, lifestyle, Next.js, Material-UI, React, tutorials, guides",
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
    title: "Blog Categories | NextMUI - Next.js + Material-UI Showcase",
    description:
      "Explore our comprehensive blog covering Technology, Development, Design, Business, Marketing, and Lifestyle topics.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "NextMUI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Categories | NextMUI",
    description:
      "Explore our comprehensive blog covering Technology, Development, Design, Business, Marketing, and Lifestyle topics.",
    creator: "@nextmui",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs`,
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
