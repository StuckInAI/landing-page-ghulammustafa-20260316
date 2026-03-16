import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LaunchPad — Build Products That Matter',
  description: 'The all-in-one platform to launch, grow, and scale your next big idea. Join thousands of builders already using LaunchPad.',
  keywords: 'SaaS, product launch, startup, growth, analytics',
  openGraph: {
    title: 'LaunchPad — Build Products That Matter',
    description: 'The all-in-one platform to launch, grow, and scale your next big idea.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
