'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('nav');

  const switchLocale = () => {
    const nextLocale = locale === 'fr' ? 'ee' : 'fr';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={switchLocale}
      aria-label={t('switchLang')}
      className="text-sm font-medium text-gold-light hover:text-gold border border-gold-light/30 hover:border-gold px-3 py-1.5 rounded-full transition-colors"
    >
      {t('switchLang')}
    </button>
  );
}
