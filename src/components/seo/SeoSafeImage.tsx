
'use client';

import Image, { ImageProps } from 'next/image';

export default function SeoSafeImage(props: ImageProps) {
  return (
    <Image
      {...props}
      loading={props.loading ?? 'lazy'}
      alt={props.alt ?? 'Illustrative image'}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
