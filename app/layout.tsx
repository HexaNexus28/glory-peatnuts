import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://marche-adidogome.vercel.app'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
