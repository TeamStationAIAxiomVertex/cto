// src/app/icon.tsx
import { ImageResponse } from 'next/server';

export const size = { width: 64, height: 64 }; // favicon base size
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
          background: '#0ea5e9', // brand color
          color: '#fff',
          fontSize: 38,
          fontWeight: 700,
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        }}
      >
        TS
      </div>
    ),
    size
  );
}
