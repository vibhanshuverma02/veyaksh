import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VEYAKSH — See. Sense. Understand.',
  description: 'VEYAKSH — AI, IoT, Computer Vision and Edge Intelligence.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
