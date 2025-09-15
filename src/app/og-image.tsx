
// src/app/og-image.tsx
import { ImageResponse } from 'next/server';

export const alt = 'TeamStation AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  const brandBlue = '#0000f0';
  const brandWhite = '#ffffff';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: brandBlue,
          color: 'white',
          position: 'relative',
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-left white square */}
          <rect x="25" y="15" width="25" height="25" fill={brandWhite} />
          {/* Top-right blue square (background shows through) */}

          {/* Bottom-left blue square (background shows through) */}
          <rect x="25" y="40" width="25" height="25" fill={brandBlue} />

          {/* Bottom-right white square */}
          <rect x="50" y="40" width="25" height="25" fill={brandWhite} />
          
          {/* Main vertical stem of 't' */}
          <path d="M50 40 H75 V85 A25 25 0 0 1 50 65 V40 Z" fill={brandWhite} />
        </svg>
        <div style={{
          position: 'absolute',
          bottom: 60,
          left: 60,
          right: 60,
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: brandWhite,
            margin: 0,
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
          }}>
            TeamStation AI
          </h1>
          <p style={{
            fontSize: 32,
            color: brandWhite,
            opacity: 0.8,
            margin: '10px 0 0',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
          }}>
            Nearshore Software Development: The CTO Co-Pilot Field Manual
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
