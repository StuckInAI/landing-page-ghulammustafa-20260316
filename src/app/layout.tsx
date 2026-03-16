import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LaunchPad — Build Faster, Ship Smarter',
  description:
    'LaunchPad helps modern teams build, ship, and scale products faster than ever before. Start your free trial today.',
  keywords: 'productivity, SaaS, team collaboration, project management',
  openGraph: {
    title: 'LaunchPad — Build Faster, Ship Smarter',
    description:
      'LaunchPad helps modern teams build, ship, and scale products faster than ever before.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
