import { notFound } from "next/navigation";
import { ArticleType } from "@/types";

import { getHeadings, getSingleArticlePage } from "@/lib/NotionService";
import { ImageWithBlur } from "@/components/ImageComponent";
import { BlurImageDataType, getBlurDataImage } from "@/app/actions";

import slugify from "slugify";
import ArticleContent from "@/components/ArticleContent";
import ArticleSide from "@/components/ArticleSide";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export const revalidate = 3600;

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { article, markdown } = await getSingleArticlePage(slug);
  if (!article) return notFound();

  const blurImageData = (await getBlurDataImage(
    article.cover
  )) as BlurImageDataType;
  const headings = await getHeadings(article.id);
  const headingMap = (headings || []).reduce((acc: any, heading: any) => {
    if (heading?.text) {
      acc[heading.text] = slugify("h-" + heading.text, {
        lower: true,
        strict: true,
      });
    }
    return acc;
  }, {});

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Back Link */}
      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>All Articles</span>
        </Link>
        <span>/</span>
        <span className="truncate max-w-[200px] sm:max-w-xs text-neutral-800 dark:text-neutral-200">
          {article.title}
        </span>
      </div>

      {/* Article Header */}
      <header className="space-y-6 mb-8">
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.2]">
          {article.title}
        </h1>

        {/* Author & Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xs">
              AR
            </div>
            <div>
              <span className="font-semibold text-neutral-900 dark:text-white block">
                {article.author?.name || "Achmad Raihan"}
              </span>
              <span className="text-[11px] text-neutral-500">
                Information Systems &bull; UINSA
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
            <Calendar className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            <time>{article.createdAt}</time>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {article.cover && (
        <figure className="relative aspect-[21/9] sm:aspect-[2/1] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg mb-12 bg-neutral-100 dark:bg-neutral-900">
          <ImageWithBlur
            blurImageData={blurImageData}
            alt={article.title}
            fill={true}
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </figure>
      )}

      {/* Content Layout with Responsive Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Markdown Body */}
        <div className="lg:col-span-8 w-full max-w-none">
          {markdown.parent ? (
            <div className="leading-relaxed">
              <ArticleContent
                content={markdown.parent}
                headingMap={headingMap}
              />
            </div>
          ) : (
            <p className="text-neutral-500 italic py-8">Article is Empty</p>
          )}

          {/* Bottom Back Button */}
          <div className="pt-10 mt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all articles</span>
            </Link>

            <Link
              href="/"
              className="text-xs font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              Back to Portfolio &rarr;
            </Link>
          </div>
        </div>

        {/* Right Sticky Table of Contents */}
        <div className="lg:col-span-4 hidden lg:block">
          <ArticleSide title={article.title} headings={headings || []} />
        </div>
      </div>
    </main>
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { article }: { article: ArticleType } = (await getSingleArticlePage(
    slug
  )) as { article: ArticleType };
  if (!article) notFound();
  return {
    title: `${article.title} | Achmad Raihan`,
  };
};

export default ArticlePage;
