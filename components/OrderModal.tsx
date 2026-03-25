'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';
import { buildWhatsAppURL, buildOrderMessage } from '@/lib/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

interface OrderModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function OrderModal({ product, onClose }: OrderModalProps) {
  const t = useTranslations('order_modal');
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  if (!product) return null;

  const variants = product.variants || [{ label: product.unit, price: product.price }];

  const handleSend = () => {
    if (selectedVariant === null || !name.trim()) return;

    const variant = variants[selectedVariant];
    const message = buildOrderMessage(product.name, variant.label, name.trim(), address.trim());
    const url = buildWhatsAppURL(message);
    window.open(url, '_blank');
    onClose();
    setSelectedVariant(null);
    setName('');
    setAddress('');
  };

  const canSend = selectedVariant !== null && name.trim().length > 0;

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[999]"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[1000] max-h-[85vh] overflow-y-auto p-5 sm:p-6"
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-earth">{t('title')}</h2>
              <button
                onClick={onClose}
                aria-label={t('close')}
                className="text-muted hover:text-earth p-1"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="font-bold text-earth text-lg mb-4">{product.name}</p>

            <div className="mb-4">
              <p className="text-sm font-medium text-muted mb-2">{t('select_variant')}</p>
              <div className="flex flex-col gap-2">
                {variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    className={`flex items-center p-3 rounded-xl border-2 transition-colors ${
                      selectedVariant === i
                        ? 'border-gold bg-gold-pale'
                        : 'border-gray-200 hover:border-gold-light'
                    }`}
                  >
                    <span className="font-medium text-earth">{v.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-muted mb-1">{t('name_label')}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('name_placeholder')}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none text-earth"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-muted mb-1">{t('address_label')}</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={t('address_placeholder')}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none text-earth"
              />
            </div>

            <button
              onClick={handleSend}
              disabled={!canSend}
              aria-label={t('send')}
              className={`w-full inline-flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-full text-lg transition-colors ${
                canSend
                  ? 'bg-green-wa hover:bg-green-wa-dark text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <WhatsAppIcon className="w-6 h-6" />
              {t('send')}
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
