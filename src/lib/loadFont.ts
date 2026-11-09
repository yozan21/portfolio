/** Font loader for next/og images; cached so the image routes can be prerendered at build time. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Reads a font file from src/assets/fonts.
 * @param file - File name, e.g. "Geist-Regular.ttf".
 * @returns The font bytes, in the form ImageResponse accepts.
 */
export async function loadFont(file: string): Promise<ArrayBuffer> {
  "use cache";
  const data = await readFile(join(process.cwd(), "src/assets/fonts", file));
  return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
}
