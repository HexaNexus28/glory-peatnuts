'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppURL, buildQuickMessage } from '@/lib/whatsapp';

export default function Location() {
  const t = useTranslations('location');

  const cards = [
    {
      title: t('address_title'),
      text: t('address_text'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: t('hours_title'),
      text: t('hours_text'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t('contact_title'),
      text: t('contact_text'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: t('delivery_title'),
      text: t('delivery_text'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  const handleCTA = () => {
    window.open(
      buildWhatsAppURL(buildQuickMessage('vos produits')),
      '_blank'
    );
  };

  return (
    <section className="bg-earth text-white py-12 sm:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-2">{t('title')}</h2>
          <p className="text-white/70">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-earth-mid rounded-2xl p-5 flex items-start gap-4"
            >
              <div className="text-gold flex-shrink-0">{card.icon}</div>
              <div>
                <h3 className="font-bold text-gold mb-1">{card.title}</h3>
                <p className="text-white/80 text-sm">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleCTA}
            aria-label={t('cta')}
            className="inline-flex items-center gap-2 bg-green-wa hover:bg-green-wa-dark text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            <WhatsAppIcon />
            {t('cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
