import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Lee Flannery - DevRel & Solutions Engineer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 80px",
      }}
    >
      {/* Left side - Photo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "320px",
          height: "320px",
          borderRadius: "24px",
          overflow: "hidden",
          border: "4px solid #60a5fa",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://leeflannery.com/images/lee-usa-hawaii-yellow.jpg"
          alt="Lee Flannery"
          width={320}
          height={320}
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Right side - Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flex: 1,
          paddingLeft: "60px",
        }}
      >
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Lee Flannery
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#60a5fa",
            marginBottom: "24px",
          }}
        >
          DevRel & Solutions Engineer
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            marginBottom: "32px",
          }}
        >
          Two decades shipping production code
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
            color: "#f472b6",
            fontWeight: "600",
          }}
        >
          leeflannery.com
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
