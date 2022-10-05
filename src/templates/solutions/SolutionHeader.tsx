import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface SolutionHeaderProps extends BaseComponentProps {
  title: string;
  description: string;
  image?: ReactNode;
  bgImage?: string;
  textColor?: string;
}

export default function SolutionHeader({
  title,
  description,
  image,
  bgImage,
  className,
  textColor = 'text-white',
}: SolutionHeaderProps) {
  return (
    <header
      className={cls`relative flex h-[560px] w-full justify-center bg-cover py-16 ${bgImage} ${className}`}>
      <div className='flex max-w-page-full items-center space-x-16'>
        {/* info */}
        <section className={`px-8 md:w-1/2 lg:w-1/2 ${textColor} `}>
          <p className={'whitespace-nowrap text-[42px] font-[900] leading-[52.42px]'}>{title}</p>
          {typeof description === 'string' ? (
            <p className={'text-[18px] font-[400] leading-[26.06px]'}>{description}</p>
          ) : (
            description
          )}
        </section>
        {/* image */}
        <section className='mt-[70px] hidden w-1/2 overflow-visible md:flex md:justify-end lg:flex lg:justify-end'>
          {image}
        </section>
      </div>
    </header>
  );
}
