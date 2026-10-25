"use client";

import { HeadingMapStruct } from "@/types";
import { formatSlug } from "@/lib/utils";
import { mergeHeadings } from "@/utils/MergeHeadings";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { debounce } from "lodash";
import { AlignLeft, Share2, Check, Copy, User } from "lucide-react";
import { toast } from "sonner";

interface IArticleSide {
  title: string;
  headings: HeadingMapStruct[];
}

const ArticleSide = ({ title, headings }: IArticleSide) => {
  const mergedHeadings = mergeHeadings(headings);
  const [elementOnRead, setElementOnRead] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleScroll = useCallback(
    debounce((event: any) => {
      const scrollTop = event.target.documentElement.scrollTop;
      const headingElements = document.querySelectorAll('[id^="h-"]');
      headingElements.forEach((element) => {
        const elementTop = Math.round(
          element.getBoundingClientRect().top + scrollTop
        );
        if (scrollTop >= elementTop - 120) {
          setElementOnRead(element.id);
        }
      });
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Article link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <aside className="sticky top-28 space-y-6">
      {/* Table of Contents Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-5 backdrop-blur-sm space-y-3.5 transition-colors">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 border-b border-neutral-200 dark:border-neutral-800/80 pb-3">
          <AlignLeft className="h-4 w-4" />
          <span>Table of Contents</span>
        </div>

        {!mergedHeadings || mergedHeadings.length === 0 ? (
          <p className="text-xs text-neutral-500 py-2 italic">
            No sections in this article.
          </p>
        ) : (
          <nav className="space-y-1 max-h-[50vh] overflow-y-auto pr-1 text-xs">
            {mergedHeadings.map((heading: HeadingMapStruct) => {
              const targetId = `h-${formatSlug(heading.text)}`;
              const isActive = elementOnRead === targetId;

              return (
                <div key={heading.id} className="space-y-1">
                  <Link
                    to={targetId}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`block py-1.5 px-2.5 rounded-lg cursor-pointer transition-all ${
                      isActive
                        ? "text-teal-600 dark:text-teal-400 font-semibold bg-teal-500/10 border-l-2 border-teal-500"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                    }`}
                  >
                    {heading.text}
                  </Link>

                  {heading.sub && heading.sub.length > 0 && (
                    <div className="pl-3 ml-2 border-l border-neutral-200 dark:border-neutral-800 space-y-1">
                      {heading.sub.map((sub: HeadingMapStruct) => {
                        const subTargetId = `h-${formatSlug(sub.text)}`;
                        const isSubActive = elementOnRead === subTargetId;

                        return (
                          <Link
                            key={sub.id}
                            to={subTargetId}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className={`block py-1 px-2 rounded-md cursor-pointer transition-all text-[11px] ${
                              isSubActive
                                ? "text-teal-600 dark:text-teal-400 font-medium bg-teal-500/10"
                                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                          >
                            {sub.text}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>

      {/* Author Mini Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-5 backdrop-blur-sm space-y-3 transition-colors">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-sm">
            AR
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
              Achmad Raihan
            </h4>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              Software &amp; AI Engineer
            </p>
          </div>
        </div>

        <button
          onClick={handleCopyLink}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-medium">Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
              <span>Share this Article</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default ArticleSide;
