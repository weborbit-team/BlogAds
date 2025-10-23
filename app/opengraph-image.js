import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ReadGo - Modern Blog Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #4d1a75 0%, #5a189a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Logo-inspired icon */}
        <div
          style={{
            width: 80,
            height: 80,
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
            border: "2px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div
            style={{
              width: 40,
              height: 50,
              background: "white",
              borderRadius: 4,
              position: "relative",
            }}
          />
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          ReadGo
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Modern Blog Platform
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
