import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Arachides & Atsɔmo Frais — Marché Adidogomé, Lomé';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #2C1810 0%, #5C3420 50%, #2C1810 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Top gold bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#C8922A',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 12,
              background: '#C8922A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 900,
              color: '#2C1810',
            }}
          >
            M
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: '#C8922A',
            textAlign: 'center',
            lineHeight: 1.1,
            display: 'flex',
          }}
        >
          Arachides & Atsɔmo Frais
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#E8B04A',
            marginTop: 16,
            display: 'flex',
          }}
        >
          Direct du Marché Adidogomé, Lomé
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
            marginTop: 24,
            textAlign: 'center',
            maxWidth: 800,
            display: 'flex',
          }}
        >
          Commandez en 2 clics sur WhatsApp — Livraison possible dans Lomé
        </div>

        {/* WhatsApp badge */}
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: '#25D366',
            padding: '14px 32px',
            borderRadius: 50,
            fontSize: 22,
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
          Commander sur WhatsApp
        </div>

        {/* Bottom gold bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#C8922A',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
