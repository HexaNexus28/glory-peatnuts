'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Product } from '@/data/products';
import WhatsAppIcon from './WhatsAppIcon';

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

export default function ProductCard({ product, onOrder }: ProductCardProps) {
  const t = useTranslations('products');
  const locale = useLocale();

  const displayName = locale === 'ee' && product.nameLocal ? product.nameLocal : product.name;
  const displayDesc = locale === 'ee' && product.descriptionLocal ? product.descriptionLocal : product.description;

  const badgeLabel = product.badge ? t(product.badge) : null;
  const badgeColor =
    product.badge === 'bestseller'
      ? 'bg-gold text-white'
      : product.badge === 'nouveau'
      ? 'bg-blue-500 text-white'
      : 'bg-red-500 text-white';

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] bg-gold-pale">
        <Image
          src={product.image}
          alt={`${displayName} — Marché Adidogomé, Lomé`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badgeLabel && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${badgeColor}`}>
            {badgeLabel}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-earth mb-1">{displayName}</h3>
        <p className="text-muted text-sm mb-3 flex-1">{displayDesc}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-gold font-bold text-lg">
            {product.price.toLocaleString('fr-FR')} FCFA
          </span>
          <span className="text-muted text-sm">/ {product.unit}</span>
        </div>

        {product.available ? (
          <button
            onClick={() => onOrder(product)}
            aria-label={`${t('order')} ${displayName}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-green-wa hover:bg-green-wa-dark text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            <WhatsAppIcon />
            {t('order')}
          </button>
        ) : (
          <span className="w-full text-center py-3 px-6 rounded-full bg-gray-200 text-gray-500 font-medium">
            {t('unavailable')}
          </span>
        )}
      </div>
    </div>
  );
}
