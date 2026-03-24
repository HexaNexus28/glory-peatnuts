export interface Product {
  id: string;
  name: string;
  nameLocal?: string;
  description: string;
  descriptionLocal?: string;
  price: number;
  unit: string;
  variants?: { label: string; price: number }[];
  image: string;
  badge?: 'bestseller' | 'nouveau' | 'promo';
  available: boolean;
}

export const products: Product[] = [
  {
    id: 'arachides-grillees',
    name: 'Arachides Grillées',
    nameLocal: 'Azĩ Sise',
    description: 'Arachides fraîchement grillées chaque matin au marché. Croquantes et savoureuses.',
    descriptionLocal: 'Azĩ siwo wosine yeye ŋdi sia ŋdi le asi la me.',
    price: 500,
    unit: 'tas',
    variants: [
      { label: 'Petit tas', price: 500 },
      { label: 'Grand tas', price: 1000 },
      { label: '1 kg', price: 2500 },
    ],
    image: '/images/arachides/arachides-grillees.jpg',
    badge: 'bestseller',
    available: true,
  },
  {
    id: 'atsomo',
    name: 'Atsɔmo',
    nameLocal: 'Atsɔmo',
    description: 'Atsɔmo frais préparé de façon traditionnelle. Un délice togolais authentique.',
    descriptionLocal: 'Atsɔmo yeye siwo wowɔ le mɔnu xoxo dzi.',
    price: 500,
    unit: 'portion',
    variants: [
      { label: 'Petite portion', price: 500 },
      { label: 'Grande portion', price: 1000 },
    ],
    image: '/images/atsomo/atsomo.jpg',
    available: true,
  },
];
