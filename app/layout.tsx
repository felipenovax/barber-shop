import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Barber Shop',
  description:
    'Barber Home, o seu barbeiro delivery. Na sua casa ou na barbearia.',
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
