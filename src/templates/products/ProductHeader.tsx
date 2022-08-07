import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types';
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
  return (
    <header
      className={cls`relative flex h-[560px] w-full justify-center bg-cover py-16 ${bgImage} ${className}`}>
      {/* ::before */}
      <div className='absolute inset-0 -top-full -z-10 ' />

      <div className='flex max-w-page-full items-center space-x-8 px-8'>
        {/* image */}
        <section className='w-1/2 overflow-visible'>{image}</section>

        {/* info */}
        <section className={`w-1/2 ${textColor} `}>
          <p className={'text-[42px] font-[900] leading-[52.42px]'}>{title}</p>
          <h1>{summary}</h1>
          <p className={'text-[18px] font-[400] leading-[26.06px]'}>{description}</p>
          <div>{headerExtra}</div>
        </section>
      </div>
    </header>
  );
}
