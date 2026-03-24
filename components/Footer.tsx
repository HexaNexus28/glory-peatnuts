'use client';

import { useTranslations } from 'next-intl';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppURL, buildQuickMessage } from '@/lib/whatsapp';

export default function Footer() {
  const t = useTranslations('footer');

  const handleContact = () => {
    window.open(
      buildWhatsAppURL(buildQuickMessage('vos produits')),
      '_blank'
    );
  };

  return (
    <footer className="bg-earth text-white/70 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <h3 className="text-gold font-bold text-lg">{t('name')}</h3>
        <p className="text-sm">{t('address')}</p>
        <p className="text-sm">{t('hours')}</p>
        <button
          onClick={handleContact}
          aria-label={t('whatsapp')}
          className="inline-flex items-center gap-2 text-green-wa hover:text-green-wa-dark text-sm transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          {t('whatsapp')}
        </button>
        <p className="text-xs text-white/40 pt-4">
          &copy; {new Date().getFullYear()} {t('name')}. {t('rights')}.
        </p>
      </div>
    </footer>
  );
}
