import { ArticleFormType } from "@/types";
import { getPublishedArticles } from "@/lib/NotionService";

import ArticleCard from "@/components/ArticleCard";
import PaginationComponent from "@/components/PaginationComponent";
import { isValidUUID } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

const PAGE_SIZE = 6;

export const revalidate = 3600;

interface IArticlesPage {
  searchParams: Promise<{
    startCursor?: string;
  }>;
}

const ArticlesPage = async ({ searchParams }: IArticlesPage) => {
  const resolvedParams = await searchParams;
  const startCursor = resolvedParams?.startCursor;
  const { articles, nextCursor, hasMore } = (await getPublishedArticles(
    PAGE_SIZE,
    isValidUUID(startCursor) ? startCursor : undefined
  )) as ArticleFormType;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header & Back Link */}
      <div className="flex flex-col items-start space-y-4 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors group mb-2"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        <span className="text-xs font-mono tracking-widest text-teal-600 dark:text-teal-400 uppercase font-semibold">
          Writing &amp; Technical Notes
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Articles &amp; Research
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Deep-dives, architecture breakdowns, machine learning experiments, and insights into building high-performance systems.
        </p>
      </div>

      {/* Grid or Empty State */}
      {articles.length === 0 ? (
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 p-12 text-center space-y-3">
          <BookOpen className="h-8 w-8 text-neutral-400 mx-auto" />
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">No articles published yet</h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            Check back soon for upcoming articles on computer vision, anomaly detection, and web architecture.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <PaginationComponent
        articles={articles}
        nextCursor={nextCursor}
        hasMore={hasMore}
        searchParams={startCursor}
      />
    </div>
  );
};

export default ArticlesPage;
