import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DreamUI - A Comprehensive UI System',
  description: 'DreamUI is a comprehensive UI system with vanilla Web Components and React wrappers. Beautiful, accessible, and production-ready.',
  openGraph: {
    title: 'DreamUI - A Comprehensive UI System',
    description: 'Beautiful, accessible UI components for modern web applications',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreamUI',
    description: 'A comprehensive UI system for modern web applications',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
