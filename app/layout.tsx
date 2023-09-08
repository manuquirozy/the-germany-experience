import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import HamburgerMenu from './components/HamburgerMenu';

export const metadata: Metadata = {
  title: 'The Germany Experience',
  description: 'Our trip to Germanny',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <HamburgerMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
