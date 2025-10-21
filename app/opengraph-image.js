import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'NextMUI - Next.js + Material-UI Showcase';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1976d2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          NextMUI
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#e3f2fd',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Next.js + Material-UI Showcase
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}