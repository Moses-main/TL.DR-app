import { NeynarAPIClient } from '@neynar/nodejs-sdk';

export const neynarClient = new NeynarAPIClient(
  process.env.NEYNAR_API_KEY!
);

export async function fetchTopCasts(limit: number = 3) {
  return await neynarClient.fetchRecentCasts({
    limit,
    timeWindow: '7d',
    orderBy: 'likes'
  });
}