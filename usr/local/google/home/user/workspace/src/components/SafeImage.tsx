import Image from 'next/image';
import type { ImageProps } from 'next/image';

const SafeImage = (props: ImageProps) => {
  const { src } = props;

  if (!src) {
    return null;
  }

  // Check if the src is a string and if it is a remote URL
  const isRemote = typeof src === 'string' && src.startsWith('http');

  // If it's a remote image or an imported static image object, use the default Image component
  return <Image {...props} unoptimized={isRemote} />;
};

export default SafeImage;
