export default function manifest() {
  return {
    name:
      process.env.NEXT_PUBLIC_SITE_NAME ||
      "NextMUI - Next.js + Material-UI Showcase",
    short_name: "NextMUI",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Professional Next.js 15 and Material-UI v7 showcase featuring responsive design, dark theme, and modern React patterns",
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
    ],
  };
}
