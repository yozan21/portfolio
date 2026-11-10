// Share preview image (LinkedIn, Slack, iMessage, X): name and tagline in the hero's layout, rendered at build time.
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { loadFont } from "@/lib/loadFont";

export const alt = `${site.name}. ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og cannot read CSS variables; these mirror :root in globals.css.
const colors = { bg: "#0a0a0a", text: "#ededed", muted: "#a1a1aa", accent: "#c8f31d", glow: "#2a3214" };

export default async function Image() {
  const [outfit, geist] = await Promise.all([
    loadFont("Outfit-Light.ttf"),
    loadFont("Geist-Regular.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: colors.bg,
          backgroundImage: `radial-gradient(800px 520px at 0 0, ${colors.glow}, transparent 70%)`,
          color: colors.text,
          fontFamily: "Geist",
        }}
      >
        <div style={{ width: 24, height: 24, borderRadius: 12, background: colors.accent }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {site.name.split(" ").map((word) => (
            <div
              key={word}
              style={{ fontFamily: "Outfit", fontWeight: 300, fontSize: 150, lineHeight: 0.92, letterSpacing: "-0.03em" }}
            >
              {word}
            </div>
          ))}
          <div style={{ marginTop: 40, fontSize: 34, lineHeight: 1.4, color: colors.muted, maxWidth: 820 }}>
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: outfit, weight: 300, style: "normal" },
        { name: "Geist", data: geist, weight: 400, style: "normal" },
      ],
    },
  );
}
