import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf7f2",
          borderRadius: "8px",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 25C14 25 5 20.5 5 12.5C5 7.8 8.8 4 13.5 4C13.5 4 14 4 14 4C14 4 14.5 4 14.5 4C19.2 4 23 7.8 23 12.5C23 20.5 14 25 14 25Z"
            stroke="#4F6B5A"
            strokeWidth="2"
          />
          <path d="M14 25V10" stroke="#4F6B5A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size
  );
}
