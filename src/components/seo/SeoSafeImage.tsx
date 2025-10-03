'use client';
import Image, { ImageProps } from 'next/image';
export default function SeoSafeImage(props: ImageProps & { alt?: string }) {
  const { alt = '', ...rest } = props as ImageProps;
  return <Image alt={alt} {...rest} />;
}
