export const metadata = {
  title: {
    template: "%s | ReadGo Blog",
    default: "Blog Categories | ReadGo - Modern Blog Platform",
  },
  description:
    "Explore our comprehensive blog covering Technology, Development, Design, Business, Marketing, and Lifestyle topics. Stay updated with the latest insights and trends.",
  keywords:
    "blog, technology, development, design, business, marketing, lifestyle, Next.js, Material-UI, React, tutorials, guides",
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR || "ReadGo Team" }],
  creator: process.env.NEXT_PUBLIC_AUTHOR || "ReadGo Team",
  publisher: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo",
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
    title: "Blog Categories | ReadGo - Modern Blog Platform",
    description:
      "Explore our comprehensive blog covering Technology, Development, Design, Business, Marketing, and Lifestyle topics.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs`,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Categories | ReadGo",
    description:
      "Explore our comprehensive blog covering Technology, Development, Design, Business, Marketing, and Lifestyle topics.",
    creator: "@readgo",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs`,
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
