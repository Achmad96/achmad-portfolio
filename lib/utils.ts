import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const isValidUUID = (uuid?: string): boolean => {
  return uuid
    ? uuid.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      )?.length === 1
    : false;
};

const formatDescription = (description: any): string => {
  description = description.rich_text
    .map((word: any) => word.plain_text)
    .join("");
  const words = description.split(" ");
  const wordLimit = 100,
    charLimit = 540;
  let truncatedDescription;
  if (words.length > wordLimit) {
    truncatedDescription = words.slice(0, wordLimit).join(" ") + "...";
  } else {
    truncatedDescription = description;
  }
  if (truncatedDescription.length > charLimit) {
    const truncatedByChars = truncatedDescription.slice(0, charLimit);
    const lastSpaceIndex = truncatedByChars.lastIndexOf(" ");
    truncatedDescription = truncatedByChars.slice(0, lastSpaceIndex) + "...";
  }
  return truncatedDescription;
};

const formatDate = (date: string): string => {
  const currentDate = new Date(date);
  return currentDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatSlug = (str: string): string => {
  return str.replace(/\s+/g, "-").toLowerCase();
};

export { cn, isValidUUID, formatDescription, formatDate, formatSlug };
