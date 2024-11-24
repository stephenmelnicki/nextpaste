import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-6 flex flex-col-reverse flex-wrap items-center justify-center gap-4 text-sm sm:mt-8 sm:flex-row sm:justify-between">
      <span className="py-2">&copy; 2024 Stephen Melnicki</span>
      <nav>
        <ul className="flex flex-row items-center justify-center gap-4">
          <li>
            <Button variant="link">
              <Link href="https://github.com/stephenmelnicki/nextpaste" rel="noopener noreferrer" target="_blank">
                Source
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link">
              <Link
                href="https://raw.githubusercontent.com/stephenmelnicki/nextpaste/main/LICENSE"
                rel="noopener noreferrer"
                target="_blank"
              >
                License
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
