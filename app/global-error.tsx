'use client';

import { Error } from '@/components/error';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { fonts } from '@/lib/fonts';
import { log } from '@/lib/logger';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

interface GlobalErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    log.error(`${error.message} ${error.stack}`);
  }, [error]);

  return (
    <html lang="en">
      <body className={cn(fonts, 'mx-auto min-h-screen max-w-screen-md bg-background px-4 py-8')}>
        <Header />
        <main className="mb-16 mt-24 text-center">
          <Error code={500} description="Oops! Something went wrong." />
        </main>
        <Footer />
      </body>
    </html>
  );
}
