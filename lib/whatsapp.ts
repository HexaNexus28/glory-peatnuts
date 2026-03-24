const PHONE = '22890517827';

export function buildWhatsAppURL(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${PHONE}?text=${encoded}`;
}

export function buildOrderMessage(
  productName: string,
  variantLabel: string,
  price: number,
  name: string,
  address?: string
): string {
  const lines = [
    'Bonjour ! Je voudrais commander :',
    '',
    `• ${productName} — ${variantLabel} — ${price.toLocaleString('fr-FR')} FCFA`,
    '',
    `Nom : ${name}`,
  ];

  if (address && address.trim()) {
    lines.push(`Adresse : ${address}`);
  }

  return lines.join('\n');
}

export function buildQuickMessage(productName: string): string {
  return `Bonjour ! Je suis intéressé(e) par ${productName}. Pouvez-vous me donner plus d'informations ?`;
}
