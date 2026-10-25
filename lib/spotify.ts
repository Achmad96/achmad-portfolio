const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export type SpotifyNowPlayingResponse = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

const getAccessToken = async () => {
  if (!client_id || !client_secret || !refresh_token) {
    return null;
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export const getNowPlaying = async (): Promise<SpotifyNowPlayingResponse> => {
  try {
    const tokenData = await getAccessToken();

    if (!tokenData || !tokenData.access_token) {
      return { isPlaying: false };
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      cache: "no-store",
    });

    if (response.status === 204 || response.status > 400) {
      return await getRecentlyPlayed(tokenData.access_token);
    }

    const song = await response.json();

    if (!song || !song.item) {
      return await getRecentlyPlayed(tokenData.access_token);
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      .map((_artist: any) => _artist.name)
      .join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images?.[0]?.url;
    const songUrl = song.item.external_urls?.spotify;

    return {
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    };
  } catch {
    return { isPlaying: false };
  }
};

const getRecentlyPlayed = async (
  access_token: string
): Promise<SpotifyNowPlayingResponse> => {
  try {
    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return { isPlaying: false };
    }

    const data = await response.json();
    const track = data.items?.[0]?.track;

    if (!track) {
      return { isPlaying: false };
    }

    return {
      isPlaying: false,
      title: track.name,
      artist: track.artists
        .map((_artist: any) => _artist.name)
        .join(", "),
      album: track.album.name,
      albumImageUrl: track.album.images?.[0]?.url,
      songUrl: track.external_urls?.spotify,
    };
  } catch {
    return { isPlaying: false };
  }
};
