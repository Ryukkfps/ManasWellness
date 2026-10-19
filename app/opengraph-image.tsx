import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          background: "#faf7f2",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 25C14 25 5 20.5 5 12.5C5 7.8 8.8 4 13.5 4C13.5 4 14 4 14 4C14 4 14.5 4 14.5 4C19.2 4 23 7.8 23 12.5C23 20.5 14 25 14 25Z"
            stroke="#4F6B5A"
            strokeWidth="1.6"
          />
          <path d="M14 25V10" stroke="#4F6B5A" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <div style={{ fontSize: 56, color: "#2B2F2C", fontWeight: 500 }}>Manaswellness</div>
        <div style={{ fontSize: 24, color: "#5E655F" }}>A gentle space to feel heard</div>
      </div>
    ),
    size
  );
}
