import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="h-16 w-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
        <Compass className="h-8 w-8 animate-pulse" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-teal-600 dark:text-teal-400 uppercase tracking-widest font-semibold">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          The page or article you are looking for doesn&apos;t exist or may have been moved.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 px-6 py-2.5 text-xs font-semibold transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
