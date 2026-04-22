import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const alt = 'Correct Pixel - Brand, Product UI, and Website Studio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fbfbfa',
          backgroundImage:
            'radial-gradient(#d7d7d2 1.6px, transparent 1.6px)',
          backgroundSize: '22px 22px',
          display: 'flex',
          padding: 56,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            border: '6px solid #111',
            borderRadius: 18,
            background: '#fff',
            boxShadow: '14px 14px 0 #111',
            width: '100%',
            height: '100%',
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 0, position: 'relative' }}>
              <div
                style={{
                  width: 92,
                  height: 92,
                  background: '#ffe45c',
                  border: '5px solid #111',
                  borderRadius: 12,
                }}
              />
              <div
                style={{
                  width: 92,
                  height: 92,
                  background: '#fff',
                  border: '5px solid #111',
                  borderRadius: 12,
                  marginLeft: -38,
                  marginTop: 38,
                }}
              />
            </div>
            <div
              style={{
                background: '#111',
                color: '#fff',
                borderRadius: 10,
                padding: '14px 20px',
                fontSize: 32,
                fontWeight: 900,
              }}
            >
              CP
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#777',
                fontSize: 28,
                fontStyle: 'italic',
                fontWeight: 700,
              }}
            >
              &quot;Brand, product UI, and web systems&quot;
            </p>
            <h1
              style={{
                margin: '18px 0 0',
                color: '#111',
                fontSize: 86,
                lineHeight: 0.92,
                letterSpacing: -4,
                fontWeight: 900,
                maxWidth: 900,
              }}
            >
              {siteConfig.name} makes brands worth clicking.
            </h1>
          </div>
        </div>
      </div>
    ),
    size
  );
}
