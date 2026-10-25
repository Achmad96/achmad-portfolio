import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const username = process.env.DUOLINGO_USERNAME || "Achmad96";

  const fallbackData = {
    success: true,
    username,
    name: "Achmad",
    streak: 0,
    totalXp: 3689,
    profileUrl: `https://www.duolingo.com/profile/${username}`,
    courses: [
      {
        title: "English",
        xp: 3689,
        learningLanguage: "en",
      },
    ],
    languages: [
      {
        name: "Indonesian",
        level: "Native / Bilingual",
        progress: 100,
        badge: "Native",
        color: "from-emerald-500 to-teal-500",
      },
      {
        name: "English",
        level: "Professional Working",
        progress: 88,
        xp: 3689,
        badge: "Active Course",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Japanese",
        level: "Elementary",
        progress: 40,
        badge: "Learning",
        color: "from-purple-500 to-indigo-500",
      },
    ],
  };

  try {
    const res = await fetch(
      `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(username)}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "application/json",
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!res.ok) {
      console.warn(`[Duolingo API] HTTP ${res.status} from Duolingo server.`);
      return NextResponse.json(fallbackData);
    }

    const json = await res.json();
    const user = json?.users?.[0];

    if (!user) {
      console.warn(`[Duolingo API] No user found for ${username}`);
      return NextResponse.json(fallbackData);
    }

    const totalXp = Number(user.totalXp) || 3689;
    const streak = Number(user.streak) || 0;
    const courses = Array.isArray(user.courses)
      ? user.courses.map((c: any) => ({
          title: c.title || c.learningLanguage,
          xp: c.xp || 0,
          learningLanguage: c.learningLanguage,
        }))
      : fallbackData.courses;

    // Find English or Japanese course XP
    const englishCourse = courses.find(
      (c: any) =>
        c.learningLanguage === "en" || c.title?.toLowerCase() === "english"
    );
    const japaneseCourse = courses.find(
      (c: any) =>
        c.learningLanguage === "ja" || c.title?.toLowerCase() === "japanese"
    );

    const languages = [
      {
        name: "Indonesian",
        level: "Native / Bilingual",
        progress: 100,
        badge: "Native",
        color: "from-emerald-500 to-teal-500",
      },
      {
        name: "English",
        level: "Professional Working",
        progress: 88,
        xp: englishCourse?.xp || totalXp || 3689,
        badge: "Duolingo Active",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Japanese",
        level: "Elementary",
        progress: 40,
        xp: japaneseCourse?.xp || undefined,
        badge: "Learning",
        color: "from-purple-500 to-indigo-500",
      },
    ];

    return NextResponse.json({
      success: true,
      username: user.username || username,
      name: user.name || "Achmad",
      streak,
      totalXp,
      profileUrl: `https://www.duolingo.com/profile/${user.username || username}`,
      picture: user.picture
        ? user.picture.startsWith("//")
          ? `https:${user.picture}`
          : user.picture
        : null,
      courses,
      languages,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("[Duolingo API Error]:", error?.message || error);
    return NextResponse.json(fallbackData);
  }
}

