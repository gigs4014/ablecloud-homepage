import { ReactNode, useEffect, useRef, useState } from 'react';

import { BaseComponentProps, TNullable } from '@/types';
import { cls } from '@/utils';

export interface ProductHeaderProps extends BaseComponentProps {
  title?: string;
  summary?: string;
  description: string;
  headerExtra?: ReactNode;
  image?: ReactNode;
  bgImage?: string;
  textColor?: string;
}

export default function ProductHeader({
  title,
  summary,
  description,
  headerExtra,
  image,
  bgImage,
  className,
  textColor = 'text-white',
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
      className={cls`relative flex ${
        isCurrentScrollTop ? 'h-[670px]' : 'h-[560px]'
      } w-full justify-center bg-cover py-16 ${bgImage} ${className}`}>
      <div
        className={`flex ${
          isCurrentScrollTop ? 'mt-[100px]' : 'mt-[20px]'
        } max-w-page-full items-center space-x-8 px-8`}>
        {/* image */}
        <section className='hidden w-1/2 overflow-visible md:block lg:block'>{image}</section>

        {/* info */}
        <section className={`w-full md:w-1/2 lg:w-1/2 ${textColor} `}>
          <p className={'whitespace-nowrap text-[42px] font-[900] leading-[52.42px]'}>{title}</p>
          <h1>{summary}</h1>
          <p className={'text-[18px] font-[400] leading-[26.06px]'}>{description}</p>
          <div>{headerExtra}</div>
        </section>
      </div>
    </header>
  );
}
