import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Lee Flannery | Developer Relations & Solutions Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0f4c81",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 100px",
          fontFamily: "serif",
        }}
      >
        {/* Left: headshot + text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", flex: 1 }}>
          {/* Avatar */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "60px",
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.4)",
              display: "flex",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://leeflannery.com/lee-headshot.png"
              width={120}
              height={120}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>

          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                fontSize: "72px",
                fontWeight: "700",
                color: "white",
                lineHeight: 1,
                letterSpacing: "-1px",
              }}
            >
              Lee Flannery
            </div>
            <div
              style={{
                fontSize: "32px",
                color: "rgba(255,255,255,0.85)",
                fontWeight: "400",
                lineHeight: 1.3,
              }}
            >
              DevRel & Solutions Engineer
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: "12px",
              padding: "12px 24px",
              fontSize: "28px",
              fontWeight: "600",
              color: "white",
              letterSpacing: "0.5px",
            }}
          >
            leeflannery.com
          </div>
        </div>

        {/* Right: Full Stack Drip logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "260px",
            height: "260px",
            borderRadius: "32px",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://leeflannery.com/full-stack-drip-logo.png"
            width={260}
            height={260}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
