'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppURL, buildQuickMessage } from '@/lib/whatsapp';

export default function HowItWorks() {
  const t = useTranslations('how_it_works');

  const steps = [
    {
      number: '1',
      title: t('step1_title'),
      desc: t('step1_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
    },
    {
      number: '2',
      title: t('step2_title'),
      desc: t('step2_desc'),
      icon: <WhatsAppIcon className="w-8 h-8" />,
    },
    {
      number: '3',
      title: t('step3_title'),
      desc: t('step3_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  const handleCTA = () => {
    window.open(
      buildWhatsAppURL(buildQuickMessage('Arachides & Atsɔmo')),
      '_blank'
    );
  };

  return (
    <section className="bg-gold-pale py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-earth mb-2">{t('title')}</h2>
          <p className="text-muted mb-10">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-earth mb-1">{step.title}</h3>
              <p className="text-muted text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={handleCTA}
          aria-label={t('cta')}
          className="inline-flex items-center gap-2 bg-green-wa hover:bg-green-wa-dark text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          <WhatsAppIcon />
          {t('cta')}
        </button>
      </div>
    </section>
  );
}
