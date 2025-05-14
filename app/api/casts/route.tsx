import { fetchTopCasts } from '@/lib/neynar';
import { NextResponse } from 'next/server';

export async function GET() {
  const casts = await fetchTopCasts(3);
  return NextResponse.json(casts);
}