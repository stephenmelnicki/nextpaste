import { Error } from '@/components/error';

export default function NotFound() {
  return (
    <main className="mb-16 mt-24 text-center">
      <Error code={404} description="Couldn't find what you're looking for." />
    </main>
  );
}
