"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import type { SpotifyNowPlayingResponse } from "@/lib/spotify";

export default function SpotifyStatus({
  className = "",
}: {
  className?: string;
}) {
  const [data, setData] = useState<SpotifyNowPlayingResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSpotify = async () => {
    try {
      const res = await fetch("/api/spotify");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch {
      // ignore network errors
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpotify();

    // Poll every 20s when window is visible
    const interval = setInterval(() => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        fetchSpotify();
      }
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const isPlaying = data?.isPlaying;
  const hasTrack = Boolean(data?.title && data?.artist);

  return (
    <div
      className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 max-w-sm ${className}`}
    >
      {/* Icon / Album Art */}
      <div className="relative shrink-0 flex items-center justify-center">
        {hasTrack && data?.albumImageUrl ? (
          <div className="relative h-9 w-9 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <Image
              src={data.albumImageUrl}
              alt={data.title || "Album Art"}
              fill
              sizes="36px"
              className={`object-cover ${isPlaying ? "animate-pulse" : "opacity-80"}`}
            />
          </div>
        ) : (
          <div className="h-9 w-9 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-[#1DB954]">
            <SiSpotify className={`h-5 w-5 ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "6s" }} />
          </div>
        )}

        {/* Live Audio Waves Animation */}
        {isPlaying && (
          <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-neutral-950 p-0.5 border border-neutral-800">
            <span className="h-2 w-2 rounded-full bg-[#1DB954] animate-ping opacity-75" />
          </span>
        )}
      </div>

      {/* Track Details */}
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold">
          {isPlaying ? (
            <>
              {/* Animated Equalizer Waves */}
              <div className="flex items-end gap-[2px] h-3">
                <span className="w-[2px] bg-[#1DB954] rounded-full animate-[bounce_1s_infinite_100ms] h-full" />
                <span className="w-[2px] bg-[#1DB954] rounded-full animate-[bounce_1s_infinite_300ms] h-2/3" />
                <span className="w-[2px] bg-[#1DB954] rounded-full animate-[bounce_1s_infinite_200ms] h-4/5" />
              </div>
              <span className="text-[#1DB954]">Listening to Spotify</span>
            </>
          ) : (
            <span className="text-neutral-500 flex items-center gap-1">
              <SiSpotify className="h-3 w-3 text-neutral-400" />
              <span>{hasTrack ? "Recently Played" : "Offline &bull; Spotify"}</span>
            </span>
          )}
        </div>

        {hasTrack ? (
          <a
            href={data?.songUrl || "https://open.spotify.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1 text-xs truncate mt-0.5"
            title={`${data?.title} by ${data?.artist}`}
          >
            <span className="font-semibold text-neutral-900 dark:text-neutral-100 truncate group-hover/link:text-[#1DB954] transition-colors">
              {data?.title}
            </span>
            <span className="text-neutral-400 text-[11px] truncate shrink-0">
              &bull; {data?.artist}
            </span>
            <ExternalLink className="h-3 w-3 text-neutral-400 opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0 ml-0.5" />
          </a>
        ) : (
          <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
            {loading ? "Checking Spotify..." : "Not currently playing"}
          </span>
        )}
      </div>
    </div>
  );
}
