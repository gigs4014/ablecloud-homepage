import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface InterViewHeaderProps extends BaseComponentProps {
  title: string;
  description: ReactNode;
  image?: ReactNode;
  bgImage?: string;
  textColor?: string;
}

export default function InterViewHeader({
  title,
  description,
  image,
  bgImage,
  className,
  textColor = 'text-white',
}: InterViewHeaderProps) {
  return (
    <header
      className={cls`relative flex h-[560px] w-full justify-center bg-cover py-16 ${bgImage} ${className}`}>
      <div className='flex w-full max-w-page-full items-center justify-between space-x-8 px-8'>
        {/* info */}
        <section className={`w-full md:w-1/2 lg:w-1/2 ${textColor} `}>
          <p className={'whitespace-nowrap text-[42px] font-[900] leading-[52.42px]'}>{title}</p>
          {typeof description === 'string' ? (
            <p className={'text-[18px] font-[400] leading-[26.06px]'}>{description}</p>
          ) : (
            description
          )}
        </section>
        {/* image */}
        <section className='hidden w-1/2 overflow-visible md:flex md:justify-end lg:flex lg:justify-end'>
          {image}
        </section>
      </div>
    </header>
  );
}
