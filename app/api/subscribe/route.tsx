import { supabase } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { fid, topic } = await req.json();

  // Upsert user
  await supabase.from('users').upsert(
    { fid, last_active: new Date() },
    { onConflict: 'fid' }
  );

  // Add subscription
  const { data: topicData } = await supabase
    .from('topics')
    .select('id')
    .eq('name', topic)
    .single();

  await supabase.from('subscriptions').upsert({
    fid,
    topic_id: topicData?.id
  });

  return NextResponse.json({ success: true });
}