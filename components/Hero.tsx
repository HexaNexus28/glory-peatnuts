'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppURL, buildQuickMessage } from '@/lib/whatsapp';
import LanguageSwitcher from './LanguageSwitcher';

export default function Hero() {
  const t = useTranslations('hero');

  const handleOrder = () => {
    window.open(
      buildWhatsAppURL(buildQuickMessage('Arachides & Atsɔmo')),
      '_blank'
    );
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-earth text-white px-4 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-earth to-earth-mid opacity-90" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-2"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gold-light text-lg sm:text-xl mb-4"
        >
          {t('subtitle')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleOrder}
            aria-label={t('cta_primary')}
            className="inline-flex items-center justify-center gap-2 bg-green-wa hover:bg-green-wa-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-colors"
          >
            <WhatsAppIcon className="w-6 h-6" />
            {t('cta_primary')}
          </button>

          <button
            onClick={scrollToProducts}
            aria-label={t('cta_secondary')}
            className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-earth font-bold py-4 px-8 rounded-full text-lg transition-colors"
          >
            {t('cta_secondary')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
