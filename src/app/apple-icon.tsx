// src/app/apple-icon.tsx
import { ImageResponse } from 'next/server';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
          background: '#0ea5e9',
          color: '#fff',
          fontSize: 108,
          fontWeight: 800,
          letterSpacing: -2,
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        }}
      >
        TS
      </div>
    ),
    size
  );
}
