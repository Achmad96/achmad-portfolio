import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IArticleContent {
  content: string;
  headingMap: any;
}

const ArticleContent = ({ content, headingMap }: IArticleContent) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => {
          const text = props.children?.toString() || "";
          return (
            <h1
              {...props}
              id={text ? headingMap[text] : undefined}
              className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-10 mb-4 tracking-tight scroll-mt-28"
            >
              {props.children}
            </h1>
          );
        },
        h2: ({ node, ...props }) => {
          const text = props.children?.toString() || "";
          return (
            <h2
              {...props}
              id={text ? headingMap[text] : undefined}
              className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-3 tracking-tight scroll-mt-28"
            >
              {props.children}
            </h2>
          );
        },
        h3: ({ node, ...props }) => {
          const text = props.children?.toString() || "";
          return (
            <h3
              {...props}
              id={text ? headingMap[text] : undefined}
              className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mt-6 mb-2 tracking-tight scroll-mt-28"
            >
              {props.children}
            </h3>
          );
        },
        p: ({ node, ...props }) => (
          <p
            {...props}
            className="text-neutral-700 dark:text-neutral-300 leading-relaxed my-4 text-sm sm:text-base"
          >
            {props.children}
          </p>
        ),
        a: ({ node, ...props }) => (
          <a
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 dark:text-teal-400 font-medium underline underline-offset-4 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            {props.children}
          </a>
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            {...props}
            className="border-l-4 border-teal-500/80 bg-neutral-50 dark:bg-neutral-900/40 pl-4 py-2 my-5 italic text-neutral-700 dark:text-neutral-300 rounded-r-lg"
          >
            {props.children}
          </blockquote>
        ),
        ul: ({ node, ...props }) => (
          <ul
            {...props}
            className="list-disc list-outside pl-6 space-y-1.5 my-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300"
          >
            {props.children}
          </ul>
        ),
        ol: ({ node, ...props }) => (
          <ol
            {...props}
            className="list-decimal list-outside pl-6 space-y-1.5 my-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300"
          >
            {props.children}
          </ol>
        ),
        pre: ({ node, ...props }) => (
          <pre
            {...props}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-100 p-4 overflow-x-auto my-5 text-xs sm:text-sm font-mono shadow-inner"
          >
            {props.children}
          </pre>
        ),
        code: ({ node, className, ...props }: any) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code
                {...props}
                className="px-1.5 py-0.5 rounded text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-850 text-teal-700 dark:text-teal-300 border border-neutral-200/80 dark:border-neutral-800"
              >
                {props.children}
              </code>
            );
          }
          return <code className={className} {...props}>{props.children}</code>;
        },
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <table
              {...props}
              className="w-full text-xs sm:text-sm text-left border-collapse"
            >
              {props.children}
            </table>
          </div>
        ),
        th: ({ node, ...props }) => (
          <th
            {...props}
            className="bg-neutral-100 dark:bg-neutral-900 px-4 py-2.5 font-semibold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800"
          >
            {props.children}
          </th>
        ),
        td: ({ node, ...props }) => (
          <td
            {...props}
            className="px-4 py-2 border-b border-neutral-200/60 dark:border-neutral-800/60 text-neutral-700 dark:text-neutral-300"
          >
            {props.children}
          </td>
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default ArticleContent;
