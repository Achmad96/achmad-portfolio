import "server-only";
import { getPlaiceholder } from "plaiceholder";

export type BlurImageDataType = {
  img: {
    src: string;
    height: number;
    width: number;
  };
  color?: {
    r: number;
    g: number;
    b: number;
    hex: string;
  };
  base64: string;
  message: string;
};

export async function getBlurDataImage(
  src: string
): Promise<BlurImageDataType | null> {
  if (!src) return null;
  try {
    const res = await fetch(src);
    if (!res.ok) {
      return null;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const {
      metadata: { height, width },
      base64,
      color,
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
      message: "Success",
      base64,
      color,
      img: { src, height, width },
    };
  } catch (error) {
    console.warn(`[getBlurDataImage] Failed to generate placeholder for image: ${src}`);
    return null;
  }
}
