import type { Metadata, Viewport } from 'next';
import React from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: 'Next Paste',
  description: 'A simple paste service built with Next.js and Vercel',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fonts, 'mx-auto min-h-screen max-w-screen-md bg-background px-4 py-8')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
