// Favicon: initials on the accent color, rendered at build time.
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { loadFont } from "@/lib/loadFont";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// next/og cannot read CSS variables; these mirror :root in globals.css.
const colors = { bg: "#0a0a0a", accent: "#34d399" };

export default async function Icon() {
  const spaceGrotesk = await loadFont("SpaceGrotesk-SemiBold.ttf");
  const initials = site.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: colors.accent,
          color: colors.bg,
          fontFamily: "Space Grotesk",
          fontSize: 34,
          letterSpacing: "-0.04em",
        }}
      >
        {initials}
      </div>
    ),
    { ...size, fonts: [{ name: "Space Grotesk", data: spaceGrotesk, weight: 600, style: "normal" }] },
  );
}
