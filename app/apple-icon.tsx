import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: 'linear-gradient(135deg, #2C1810 0%, #5C3420 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 900,
            color: '#C8922A',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
