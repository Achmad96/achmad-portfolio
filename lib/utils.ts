import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const isValidUUID = (uuid?: string): boolean => {
  return uuid
    ? /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        uuid
      )
    : false;
};

const formatDescription = (description: any): string => {
  if (!description?.rich_text) return "";
  const fullText = description.rich_text
    .map((word: any) => word.plain_text)
    .join("");
  const words = fullText.split(" ");
  const wordLimit = 100;
  const charLimit = 540;

  let truncated =
    words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : fullText;

  if (truncated.length > charLimit) {
    const truncatedByChars = truncated.slice(0, charLimit);
    const lastSpaceIndex = truncatedByChars.lastIndexOf(" ");
    truncated =
      (lastSpaceIndex > 0
        ? truncatedByChars.slice(0, lastSpaceIndex)
        : truncatedByChars) + "...";
  }
  return truncated;
};

const formatDate = (date: string): string => {
  const currentDate = new Date(date);
  if (isNaN(currentDate.getTime())) return date;
  return currentDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

/**
 * Deterministic slug generator for headings and URLs.
 * Strips punctuation and symbols so anchor IDs match reliably.
 */
const formatSlug = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Lightweight debounce function replacing heavy external lodash dependency.
 */
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

export { cn, isValidUUID, formatDescription, formatDate, formatSlug, debounce };
