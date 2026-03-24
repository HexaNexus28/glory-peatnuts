'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const icons = [
  // Leaf/Fresh
  <svg key="fresh" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37M17 8l-5 5m0 0l-2-2m2 2V8" /><path strokeLinecap="round" strokeLinejoin="round" d="M20 4l-2 2m0 0l2 2m-2-2h-4m4-2v4" /></svg>,
  // Lightning/Fast
  <svg key="fast" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  // Truck/Delivery
  <svg key="delivery" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>,
  // Star/Quality
  <svg key="quality" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
];

export default function ProofBar() {
  const t = useTranslations('proof');

  const proofs = [
    { title: t('fresh'), desc: t('fresh_desc'), icon: icons[0] },
    { title: t('fast'), desc: t('fast_desc'), icon: icons[1] },
    { title: t('delivery'), desc: t('delivery_desc'), icon: icons[2] },
    { title: t('quality'), desc: t('quality_desc'), icon: icons[3] },
  ];

  return (
    <section className="bg-gold-pale py-6 px-4 overflow-x-auto">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-6 sm:gap-8 justify-start sm:justify-center min-w-max sm:min-w-0">
          {proofs.map((proof, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-2"
            >
              <div className="text-gold flex-shrink-0">{proof.icon}</div>
              <div>
                <p className="font-bold text-earth text-sm sm:text-base">{proof.title}</p>
                <p className="text-muted text-xs sm:text-sm">{proof.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
