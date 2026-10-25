"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArticleType } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IPaginationComponents {
  articles: ArticleType[];
  searchParams?: string;
  nextCursor: string | null;
  hasMore: boolean;
}

const PREV_CURSORS_NAME = "previousCursors";

const PaginationComponent = ({
  articles,
  nextCursor,
  hasMore,
  searchParams,
}: IPaginationComponents) => {
  const router = useRouter();
  const startCursor = articles[0]?.id || "";
  const [prevCursors, setPrevCursors] = useState<string[]>([]);

  useEffect(() => {
    try {
      const items: string[] = JSON.parse(
        localStorage.getItem(PREV_CURSORS_NAME) as string
      );
      if (items) setPrevCursors(items);
    } catch {
      // ignore JSON parse error
    }

    if (!searchParams) {
      setPrevCursors(() => []);
      localStorage.setItem(PREV_CURSORS_NAME, "[]");
      return;
    }
    const handleDelete = () => localStorage.setItem(PREV_CURSORS_NAME, "[]");
    window.addEventListener("beforeunload", handleDelete);
    return () => window.removeEventListener("beforeunload", handleDelete);
  }, [searchParams]);

  useEffect(() => {
    if (!searchParams) {
      localStorage.setItem(PREV_CURSORS_NAME, JSON.stringify(prevCursors));
    }
  }, [prevCursors, searchParams]);

  const handlePreviousClick = () => {
    const lastIndex = prevCursors.length - 1;
    router.replace(`?startCursor=${prevCursors[lastIndex]}`);
    setPrevCursors((prev) => prev.slice(0, lastIndex));
  };

  const handleNextClick = () => {
    if (prevCursors.includes(startCursor)) return;
    setPrevCursors((prev) => [...prev, startCursor]);
    router.replace(`?startCursor=${nextCursor}`);
  };

  if (!hasMore && prevCursors.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      <button
        disabled={prevCursors.length < 1}
        onClick={handlePreviousClick}
        aria-label="Previous Page"
        className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <span className="px-4 py-2 rounded-xl text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-neutral-700 dark:text-neutral-300">
        Page {prevCursors.length + 1}
      </span>

      <button
        disabled={!hasMore}
        onClick={handleNextClick}
        aria-label="Next Page"
        className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PaginationComponent;
