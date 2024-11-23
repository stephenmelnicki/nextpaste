import { getPaste } from '@/app/actions/pastes/get';
import { Card } from '@/components/ui/card';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PasteById({ params }: PageProps) {
  const { id } = await params;
  const paste = await getPaste(id);

  if (paste === null) {
    return notFound();
  }

  return (
    <main className="my-8">
      <Card className="overflow-auto px-4 py-2">
        <pre>{paste.contents}</pre>
      </Card>
    </main>
  );
}
