// src/app/apple-icon.tsx
import { ImageResponse } from 'next/server';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
    const brandBlue = '#0000f0';
    const brandWhite = '#ffffff';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: brandBlue,
          borderRadius: 36, // Standard for Apple icons
        }}
      >
        <svg
          width="120"
          height="120"
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
      </div>
    ),
    size
  );
}
