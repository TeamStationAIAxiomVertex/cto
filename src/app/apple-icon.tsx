// src/app/apple-icon.tsx
import { ImageResponse } from 'next/og';

// ImageResponse runs on Edge runtime
export const runtime = 'edge';

// Apple touch icon is typically 180x180
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  const bg = '#0B0B0C'; // brand background
  const fg = '#FFFFFF'; // brand foreground

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: bg,
          color: fg,
          fontWeight: 800,
          fontSize: 96,
          letterSpacing: -2,
        }}
      >
        TS
      </div>
    ),
    { ...size }
  );
}
