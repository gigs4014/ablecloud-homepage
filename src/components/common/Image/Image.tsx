import { useState } from 'react';

import Image, { ImageProps } from 'next/image';

export function AspectRatioImage({ onLoadingComplete, width, height, ...props }: ImageProps) {
  const [ratio, setRatio] = useState<number>();

  const computedWidth = width ?? (ratio && typeof height === 'number' ? height / ratio : undefined);
  const computedHeight = height ?? (ratio && typeof width === 'number' ? width * ratio : undefined);

  return (
    <Image
      {...props}
      onLoadingComplete={result => {
        onLoadingComplete?.(result);
        const { naturalHeight, naturalWidth } = result;
        setRatio(naturalHeight / naturalWidth);
      }}
      width={computedWidth}
      height={computedHeight}
    />
  );
}
