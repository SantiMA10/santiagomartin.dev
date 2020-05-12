export const getLiveState = async (): Promise<{ live: boolean }> => {
  const response = await fetch(
    "https://api.twitch.tv/kraken/streams/30664176",
    {
      headers: {
        "Client-ID": process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
        accept: "application/vnd.twitchtv.v5+json",
      },
    }
  );

  if (!response.ok) {
    console.error("Unable to fetch data from Twitch", await response.json());
    return { live: false };
  }

  return { live: !!(await response.json()).stream };
};
