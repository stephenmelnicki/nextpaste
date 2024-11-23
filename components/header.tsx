import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="flex justify-between">
      <hgroup className="flex-1">
        <h1 className="text-3xl font-bold">
          <Link href="/">Next Paste</Link>
        </h1>
        <p className="mt-1 text-gray-600">A simple paste service built with Next.js and Vercel</p>
      </hgroup>
      <nav>
        <ThemeToggle />
      </nav>
    </header>
  );
}
