
'use client';

import Image, { ImageProps } from 'next/image';

export default function SeoSafeImage(props: ImageProps) {
  const { loading, priority, ...rest } = props;

  // Priority images should not be lazy-loaded.
  // If `priority` is true, let Next.js handle the loading behavior.
  // Otherwise, default to lazy loading.
  const loadingProp = priority ? undefined : loading ?? 'lazy';

  return (
    <Image
      {...rest}
      priority={priority}
      loading={loadingProp}
      alt={props.alt ?? 'Illustrative image'}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
