'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppURL, buildQuickMessage } from '@/lib/whatsapp';

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    { name: t('t1_name'), text: t('t1_text'), location: t('t1_location') },
    { name: t('t2_name'), text: t('t2_text'), location: t('t2_location') },
    { name: t('t3_name'), text: t('t3_text'), location: t('t3_location') },
  ];

  const handleCTA = () => {
    window.open(
      buildWhatsAppURL(buildQuickMessage('Arachides & Atsɔmo')),
      '_blank'
    );
  };

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-earth mb-2">{t('title')}</h2>
          <p className="text-muted">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="text-earth text-sm sm:text-base mb-4 italic">&ldquo;{item.text}&rdquo;</p>
              <div>
                <p className="font-bold text-earth">{item.name}</p>
                <p className="text-muted text-sm">{item.location}</p>
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
