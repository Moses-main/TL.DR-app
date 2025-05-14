import { supabase } from "@/lib/db";
import { neynarClient } from "@/lib/neynar";

export async function generateWeeklyDigest() {
  // 1. Fetch data
  const [topCasts, { data: trendingChannels }] = await Promise.all([
    neynarClient.fetchTopCasts(3),
    supabase
      .from("channels")
      .select("name, growth")
      .order("growth", { ascending: false })
      .limit(1),
  ]);

  // 2. Generate digest text
  const digestText = `
    📰 Your Farcaster TLDR:
    🔥 Top Cast: ${topCasts[0].text}
    📈 Trending: ${trendingChannels[0].name} (+${trendingChannels[0].growth}%)
  `;

  // 3. Post to Farcaster
  await neynarClient.publishCast(
    process.env.FARCASTER_BOT_SIGNER_UUID!,
    digestText,
  );

  // 4. Store in DB
  await supabase.from("digests").insert({
    content: { topCasts, trendingChannels },
  });
}

// Manual trigger for testing
// generateWeeklyDigest();
