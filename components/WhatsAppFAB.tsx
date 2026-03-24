'use client';

import { useTranslations } from 'next-intl';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppURL, buildQuickMessage } from '@/lib/whatsapp';

export default function WhatsAppFAB() {
  const t = useTranslations('whatsapp_fab');

  const handleClick = () => {
    window.open(
      buildWhatsAppURL(buildQuickMessage('Arachides & Atsɔmo')),
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label={t('label')}
      className="fixed bottom-6 right-6 z-[1000] w-14 h-14 sm:w-16 sm:h-16 bg-green-wa hover:bg-green-wa-dark text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse-wa transition-colors"
    >
      <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
    </button>
  );
}
