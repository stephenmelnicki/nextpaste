'use server';

import { db } from '@/lib/db';
import { track } from '@vercel/analytics/server';
import { redirect } from 'next/navigation';

export async function createPaste(contents: string) {
  const paste = await db.paste.create({
    data: {
      contents,
    },
  });

  await track('paste created', { id: paste.id, size: contents.length });

  redirect(`/pastes/${paste.id}`);
}
