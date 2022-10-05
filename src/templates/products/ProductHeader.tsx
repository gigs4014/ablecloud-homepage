import { ReactNode, useEffect, useRef, useState } from 'react';

import { BaseComponentProps, TNullable } from '@/types';
import { cls } from '@/utils';

export interface ProductHeaderProps extends BaseComponentProps {
  title?: string;
  description: string;
  image?: ReactNode;
  bgImage?: string;
  multiBgImage?: string;
  textColor?: string;
  imagePosition?: 'first' | 'last';
}

export default function ProductHeader({
  title,
  description,
  image,
  bgImage,
  multiBgImage,
  className,
  textColor = 'text-white',
  imagePosition = 'first',
}: ProductHeaderProps) {
  const [isCurrentScrollTop, setIsCurrentScrollTop] = useState<boolean>(true);

  const productHeaderRef = useRef<TNullable<HTMLDivElement>>(null);

  useEffect(() => {
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (productHeaderRef.current) {
        if (currentScrollPos === 0) {
          setIsCurrentScrollTop(true);
        } else {
          setIsCurrentScrollTop(false);
        }
      }
    };

    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, [productHeaderRef]);

  return (
    <header
      ref={productHeaderRef}
      className={cls`relative flex h-[670px] w-full justify-center bg-cover py-16  ${
        multiBgImage ? multiBgImage : bgImage
      } ${className}`}>
      <div
        className={cls`mt-5 flex max-w-page-full
        items-center px-8`}>
        {imagePosition === 'first' && (
          <section className='mt-[90px] hidden w-1/2 items-center justify-center overflow-visible md:flex lg:flex'>
            {image}
          </section>
        )}

        {/* info */}
        <section
          className={`mx-auto mt-12 w-full md:w-1/2 ${textColor} ${image ? 'md:ml-12' : ''}
          `}>
          <p className={'text-[42px] font-[900] leading-[52.42px]'}>{title}</p>
          <div className={'text-[18px] font-[400] leading-[26.06px]'}>{description}</div>
        </section>

        {imagePosition === 'last' && (
          <section className='hidden w-1/2 items-center justify-center overflow-visible md:flex lg:flex'>
            {image}
          </section>
        )}
      </div>
    </header>
  );
}
