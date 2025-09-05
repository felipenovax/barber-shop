import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js with Chakra UI',
  description:
    'A modern web application built with Next.js, TypeScript, and Chakra UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#313131' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
