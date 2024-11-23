import Link from 'next/link';
import { Fragment } from 'react';

interface ErrorProps {
  code: number;
  description: string;
}

export function Error({ code, description }: ErrorProps) {
  return (
    <Fragment>
      <h2 className="text-7xl font-bold">{code}</h2>
      <p className="mt-6 leading-7">{description}</p>
      <div className="mt-16">
        <Link className="text-gray-600 hover:text-blue-600 hover:underline" href="/">
          Back to the Homepage
        </Link>
      </div>
    </Fragment>
  );
}
