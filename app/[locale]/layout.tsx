import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { routing } from '@/i18n/routing';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'arachides Lomé',
      'atsɔmo Togo',
      'marché Adidogomé',
      'arachides grillées Lomé',
      'nourriture Lomé',
      'azĩ Lomé',
    ],
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_TG' : locale === 'en' ? 'en_US' : 'ee_TG',
      siteName: 'Arachides & Atsɔmo Adidogomé',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

function LocalBusinessSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Arachides & Atsɔmo Adidogomé',
    description:
      'Arachides grillées et atsɔmo frais au marché Adidogomé, Lomé, Togo.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Marché Adidogomé',
      addressLocality: 'Lomé',
      addressCountry: 'TG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '6.1725',
      longitude: '1.2314',
    },
    openingHours: 'Mo-Sa 07:00-18:00',
    priceRange: 'FCFA 500-2500',
    telephone: '+22890517827',
    url: 'https://glory-nine.vercel.app',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'ee' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-cream text-earth`}>
        <LocalBusinessSchema />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
