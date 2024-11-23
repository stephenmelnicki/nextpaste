import arcjet, { detectBot, slidingWindow } from '@/lib/arcjet';
import { log } from '@/lib/logger';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!_next/static|_next/image|ingest|favicon.ico).*)'],
};

const aj = arcjet
  .withRule(
    detectBot({
      mode: 'LIVE', // TODO: use "LIVE"
      allow: [
        'CATEGORY:SEARCH_ENGINE', // allow search engines
        'CATEGORY:PREVIEW', // allow preview links
        'CATEGORY:MONITOR', // allow uptime monitoring services
      ],
    }),
  )
  .withRule(slidingWindow({ mode: 'LIVE', interval: 60, max: 10 }));

export async function middleware(request: NextRequest) {
  const decision = await aj.protect(request);

  if (decision.isDenied() && decision.reason.isBot()) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  } else if (decision.isDenied() && decision.reason.isRateLimit()) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  } else if (decision.isErrored()) {
    log.error('arcjet error:', decision.reason);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }

  return NextResponse.next();
}
