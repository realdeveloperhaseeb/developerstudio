import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/*
  Root-level OpenGraph image. Every page inherits this by default (each
  landing page can still override with its own opengraph-image.tsx).
  Whenever someone shares developerstudio.org on WhatsApp, LinkedIn,
  X, Slack, or Facebook, they see this 1200×630 branded card instead
  of a fallback favicon or nothing at all.

  Rendered with Next.js's ImageResponse (Satori under the hood), so
  it's a real PNG at build time — no static file to hand-design.
*/

export const alt = `${site.name}. ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #000000 0%, #062b1f 55%, #047857 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft green glow */}
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: "9999px",
            background: "radial-gradient(closest-side, rgba(16,185,129,0.45), transparent)",
          }}
        />

        {/* Top row: logo mark + brand name */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "linear-gradient(140deg, #10b981, #059669)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 900,
              letterSpacing: -2,
              boxShadow: "inset 0 2px 0 rgba(255,255,255,0.3)",
            }}
          >
            DS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.5 }}>
              {site.name}
            </div>
            <div style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", letterSpacing: 3 }}>
              UK · UAE · GLOBAL
            </div>
          </div>
        </div>

        {/* Big pitch */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Grow your business{" "}
            <span
              style={{
                color: "#6ee7b7",
                borderBottom: "6px solid #10b981",
                paddingBottom: 4,
              }}
            >
              from zero
            </span>
            .
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.75)",
              marginTop: 20,
              lineHeight: 1.4,
            }}
          >
            Digital marketing agency for law firms, roofing companies & UAE brands.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                display: "flex",
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: "#10b981",
              }}
            />
            developerstudio.org
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <span>Web · SEO · Ads · Social</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
