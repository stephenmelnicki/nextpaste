import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-6 flex flex-col-reverse flex-wrap items-center justify-center gap-4 text-sm text-gray-600 sm:mt-8 sm:flex-row sm:justify-between">
      <span>&copy; 2024 Stephen Melnicki</span>
      <nav>
        <ul className="flex flex-row items-center justify-center gap-4">
          <li>
            <Link
              className="p-2 hover:text-blue-600 hover:underline"
              href="https://github.com/stephenmelnicki/nextpaste"
              rel="noopener noreferrer"
              target="_blank"
            >
              Source
            </Link>
          </li>
          <li>
            <Link
              className="p-2 hover:text-blue-600 hover:underline"
              href="https://raw.githubusercontent.com/stephenmelnicki/nextpaste/main/LICENSE"
              rel="noopener noreferrer"
              target="_blank"
            >
              License
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
