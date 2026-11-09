// Share preview image (LinkedIn, Slack, iMessage, X): name and tagline in the hero's layout, rendered at build time.
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { loadFont } from "@/lib/loadFont";

export const alt = `${site.name}. ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og cannot read CSS variables; these mirror :root in globals.css.
const colors = { bg: "#0a0a0a", text: "#ededed", muted: "#a1a1aa", accent: "#34d399" };

export default async function Image() {
  const [spaceGrotesk, geist] = await Promise.all([
    loadFont("SpaceGrotesk-SemiBold.ttf"),
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
          color: colors.text,
          fontFamily: "Geist",
        }}
      >
        <div style={{ width: 24, height: 24, borderRadius: 4, background: colors.accent }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {site.name.split(" ").map((word) => (
            <div
              key={word}
              style={{ fontFamily: "Space Grotesk", fontSize: 150, lineHeight: 0.88, letterSpacing: "-0.045em" }}
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
        { name: "Space Grotesk", data: spaceGrotesk, weight: 600, style: "normal" },
        { name: "Geist", data: geist, weight: 400, style: "normal" },
      ],
    },
  );
}
