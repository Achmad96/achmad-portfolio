import { ArticleType } from "@/types";
import Link from "next/link";
import { BlurImageDataType, getBlurDataImage } from "@/app/actions";
import { ImageWithBlur } from "@/components/ImageComponent";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const ArticleCard = async (article: ArticleType) => {
  const blurImageData = (await getBlurDataImage(
    article.cover
  )) as BlurImageDataType;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden hover:border-teal-500/50 dark:hover:border-teal-400/50 hover:shadow-xl dark:hover:shadow-teal-950/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      <figure className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <ImageWithBlur
          blurImageData={blurImageData}
          alt={article.title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {article.tags && article.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1 z-10">
            {article.tags.slice(0, 2).map((tag) => (
              <span
                key={tag.id}
                className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-neutral-950/80 text-white backdrop-blur-md border border-white/10"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </figure>

      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <Calendar className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
            <time>{article.createdAt}</time>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>
        </div>

        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs">
          <span className="font-medium text-neutral-600 dark:text-neutral-400">
            {article.author?.name || "Achmad Raihan"}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform">
            <span>Read Article</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
