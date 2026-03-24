'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppURL, buildQuickMessage } from '@/lib/whatsapp';

export default function FinalCTA() {
  const t = useTranslations('final_cta');

  const handleOrder = () => {
    window.open(
      buildWhatsAppURL(buildQuickMessage('Arachides & Atsɔmo')),
      '_blank'
    );
  };

  return (
    <section className="bg-gold-pale py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-earth mb-3">{t('title')}</h2>
          <p className="text-muted mb-8">{t('subtitle')}</p>

          <button
            onClick={handleOrder}
            aria-label={t('cta')}
            className="inline-flex items-center gap-3 bg-green-wa hover:bg-green-wa-dark text-white font-bold py-4 px-10 rounded-full text-lg transition-colors shadow-lg"
          >
            <WhatsAppIcon className="w-7 h-7" />
            {t('cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
