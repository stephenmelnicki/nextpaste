'use server';

import { db } from '@/lib/db';

interface Paste {
  id: string;
  contents: string;
  createdAt: Date;
}

export async function getPaste(id: string): Promise<Paste | null> {
  return await db.paste.findFirst({ where: { id } });
}
