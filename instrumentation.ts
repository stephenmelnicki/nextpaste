import { init } from '@sentry/nextjs';

const opts = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
};

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    init(opts);
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    init(opts);
  }
}
