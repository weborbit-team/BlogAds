export default function manifest() {
  return {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "ReadGo - Modern Blog Platform",
    short_name: "ReadGo",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Discover captivating stories, cutting-edge insights, and inspiring content from passionate writers worldwide",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#1976d2",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/readgo-logo.svg",
        sizes: "120x40",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
