'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { products, Product } from '@/data/products';
import ProductCard from './ProductCard';
import OrderModal from './OrderModal';

export default function ProductGrid() {
  const t = useTranslations('products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const availableProducts = products.filter((p) => p.available);

  return (
    <section id="products" className="py-12 sm:py-16 px-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {availableProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} onOrder={setSelectedProduct} />
            </motion.div>
          ))}
        </div>
      </div>

      <OrderModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
