import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

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
      next: { revalidate: 600 }, // Cache for 10 minutes
    });

    if (!res.ok) {
      console.warn(`[LeetCode API] HTTP ${res.status} from LeetCode GraphQL.`);
      return NextResponse.json(fallbackData);
    }

    const json = await res.json();
    const matchedUser = json?.data?.matchedUser;

    if (!matchedUser) {
      console.warn(`[LeetCode API] User ${username} not found.`);
      return NextResponse.json(fallbackData);
    }

    const acSubmissions: Array<{ difficulty: string; count: number }> =
      matchedUser?.submitStats?.acSubmissionNum || [];

    const totalSolved =
      acSubmissions.find((s) => s.difficulty === "All")?.count ?? 0;
    const easySolved =
      acSubmissions.find((s) => s.difficulty === "Easy")?.count ?? 0;
    const mediumSolved =
      acSubmissions.find((s) => s.difficulty === "Medium")?.count ?? 0;
    const hardSolved =
      acSubmissions.find((s) => s.difficulty === "Hard")?.count ?? 0;

    return NextResponse.json({
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
    });
  } catch (error: any) {
    console.error("[LeetCode API Error]:", error?.message || error);
    return NextResponse.json(fallbackData);
  }
}

