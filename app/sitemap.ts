import type { MetadataRoute } from 'next';

const BASE_URL = 'https://marche-adidogome.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'ee'];
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 1,
  }));
}
