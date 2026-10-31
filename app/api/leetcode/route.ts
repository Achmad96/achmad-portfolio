import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  const username = process.env.LEETCODE_USERNAME || "achmad-raihan";

  const fallbackData = {
    success: true,
    username,
    realName: "Achmad Raihan",
    ranking: 0,
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    profileUrl: `https://leetcode.com/u/${username}/`,
    isFallback: true,
  };

  try {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          profile {
            ranking
            realName
            userAvatar
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[LeetCode API] HTTP ${res.status} from LeetCode GraphQL.`);
      return NextResponse.json(fallbackData, {
        headers: {
          "Cache-Control":
            "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
        },
      });
    }

    const json = await res.json();
    const matchedUser = json?.data?.matchedUser;

    if (!matchedUser) {
      console.warn(`[LeetCode API] User ${username} not found.`);
      return NextResponse.json(fallbackData, {
        headers: {
          "Cache-Control":
            "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
        },
      });
    }

    const acSubmissions: Array<{ difficulty: string; count: number }> =
      matchedUser?.submitStatsGlobal?.acSubmissionNum ||
      matchedUser?.submitStats?.acSubmissionNum ||
      [];

    const findCount = (diff: string) =>
      acSubmissions.find(
        (s) => s.difficulty?.toLowerCase() === diff.toLowerCase()
      )?.count ?? 0;

    const totalSolved = findCount("All");
    const easySolved = findCount("Easy");
    const mediumSolved = findCount("Medium");
    const hardSolved = findCount("Hard");

    return NextResponse.json(
      {
        success: true,
        username,
        realName: matchedUser?.profile?.realName || "Achmad Raihan",
        ranking: matchedUser?.profile?.ranking || 0,
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,
        profileUrl: `https://leetcode.com/u/${username}/`,
        userAvatar: matchedUser?.profile?.userAvatar || null,
        lastUpdated: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control":
            "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
        },
      }
    );
  } catch (error: any) {
    console.error("[LeetCode API Error]:", error?.message || error);
    return NextResponse.json(fallbackData, {
      headers: {
        "Cache-Control":
          "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
      },
    });
  }
}

