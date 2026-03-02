import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Anas — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Teal accent bar */}
        <div
          style={{
            width: 64,
            height: 4,
            background: "#2dd4bf",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f1f5f9",
            marginBottom: 16,
            letterSpacing: "-2px",
          }}
        >
          Muhammad Anas
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#2dd4bf",
            marginBottom: 24,
            fontWeight: 600,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#94a3b8",
            letterSpacing: "1px",
          }}
        >
          Laravel · Next.js · Vue.js · TypeScript
        </div>
        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#334155",
          }}
        >
          manas-engineer.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
