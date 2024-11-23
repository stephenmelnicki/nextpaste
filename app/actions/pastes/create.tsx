'use server';

import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

export async function createPaste(contents: string) {
  const paste = await db.paste.create({
    data: {
      contents,
    },
  });

  redirect(`/pastes/${paste.id}`);
}
