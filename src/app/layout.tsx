// Root layout: fonts, metadata, the <html>/<body>/<main> shell with the site footer, and the hidden new-tab note.
import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/content/site";
import { NEW_TAB_NOTE_ID } from "@/lib/externalLink";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Share image and favicon come from opengraph-image.tsx and icon.tsx next to this file.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
        <Footer />
        <span id={NEW_TAB_NOTE_ID} hidden>
          {site.newTabNote}
        </span>
      </body>
    </html>
  );
}
