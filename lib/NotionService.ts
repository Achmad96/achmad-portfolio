import { Client } from "@notionhq/client";
import { cache } from "react";
import { NotionToMarkdown } from "notion-to-md";
import type {
  AuthorType,
  ArticleType,
  ArticleFormType,
  TagType,
  HeadingMapStruct,
  HeadingType,
} from "@/types";
import { formatDate } from "@/lib/utils";

const API_KEY = process.env.NEXT_NOTION_API_KEY;
const DATABASE_ID = process.env.NEXT_NOTION_DATABASE_ID;

const client = new Client({ auth: API_KEY || "dummy_key" });
const notionToMarkdown = new NotionToMarkdown({ notionClient: client });

const getCover = (page: any): string => {
  if (!page.cover) return "";
  return page.cover.type === "file"
    ? (page.cover.file?.url as string) || ""
    : (page.cover.external?.url as string) || "";
};

const getHeadingsMap = (
  block: any
): {
  heading_1: HeadingMapStruct;
  heading_2: HeadingMapStruct;
  heading_3: HeadingMapStruct;
} => {
  return {
    heading_1: {
      id: block.id,
      text: block.heading_1?.rich_text?.[0]?.plain_text || "",
      type: "heading_1",
    },
    heading_2: {
      id: block.id,
      text: block.heading_2?.rich_text?.[0]?.plain_text || "",
      type: "heading_2",
    },
    heading_3: {
      id: block.id,
      text: block.heading_3?.rich_text?.[0]?.plain_text || "",
      type: "heading_3",
    },
  };
};

const getHeadings = async (pageId: string): Promise<HeadingMapStruct[]> => {
  if (!API_KEY) return [];
  try {
    const response = await client.blocks.children.list({
      block_id: pageId,
    });
    const headings = response.results
      .filter(
        (block: any) =>
          block.type === "heading_1" ||
          block.type === "heading_2" ||
          block.type === "heading_3"
      )
      .map((block: any) => getHeadingsMap(block)[block.type as HeadingType])
      .filter((h) => Boolean(h.text));
    return headings;
  } catch (error) {
    console.warn(`[NotionService] Failed to fetch headings for page ${pageId}:`, error);
    return [];
  }
};

const getAuthorById = async (user_id?: string): Promise<AuthorType> => {
  if (!user_id || !API_KEY) {
    return {
      id: "author",
      name: "Achmad Raihan",
      avatar: "/profile-avatar.png",
    };
  }
  try {
    const response = await client.users.retrieve({ user_id });
    return {
      id: response.id,
      name: (response as any).name || "Achmad Raihan",
      avatar: (response as any).avatar_url || "/profile-avatar.png",
    };
  } catch {
    return {
      id: user_id,
      name: "Achmad Raihan",
      avatar: "/profile-avatar.png",
    };
  }
};

const transformPageToArticleForm = async (page: any): Promise<ArticleType> => {
  const { properties } = page;
  const { Title, Tags, Author, Published, Slug, CreatedAt } = properties || {};
  return {
    id: page.id as string,
    cover: getCover(page),
    title: Title?.title?.[0]?.plain_text || "Untitled Article",
    tags: (Tags?.multi_select as TagType[]) || [],
    author: await getAuthorById(Author?.created_by?.id),
    published: Boolean(Published?.checkbox),
    slug: Slug?.formula?.string || Slug?.rich_text?.[0]?.plain_text || page.id,
    createdAt: CreatedAt?.created_time ? formatDate(CreatedAt.created_time) : "",
  };
};

const getPublishedArticles = cache(
  async (
    pageSize: number,
    startCursor: string | undefined = undefined
  ): Promise<ArticleFormType> => {
    if (!API_KEY || !DATABASE_ID) {
      return {
        articles: [],
        hasMore: false,
        nextCursor: null,
      };
    }

    try {
      const response = await client.databases.query({
        database_id: DATABASE_ID,
        start_cursor: startCursor,
        page_size: pageSize,
        filter: {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            property: "CreatedAt",
            direction: "ascending",
          },
        ],
      });

      const articles = await Promise.all(
        response.results.map(transformPageToArticleForm)
      );

      return {
        articles,
        hasMore: response.has_more,
        nextCursor: response.next_cursor,
      };
    } catch (error) {
      console.warn("[NotionService] Failed to query published articles:", error);
      return {
        articles: [],
        hasMore: false,
        nextCursor: null,
      };
    }
  }
);

const getSingleArticlePage = cache(async (slug: string) => {
  if (!API_KEY || !DATABASE_ID) {
    return { error: "Notion credentials not configured" };
  }

  try {
    const response = await client.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    if (!response.results[0]) {
      return { error: "Article not found" };
    }

    const page = response.results[0];
    const markdownBlocks = await notionToMarkdown.pageToMarkdown(page.id);
    const markdown = notionToMarkdown.toMarkdownString(markdownBlocks);
    const article = await transformPageToArticleForm(page);

    return {
      article,
      markdown,
    };
  } catch (error) {
    console.warn(`[NotionService] Failed to fetch article "${slug}":`, error);
    return { error: "Failed to load article" };
  }
});

export { getPublishedArticles, getHeadings, getSingleArticlePage };
