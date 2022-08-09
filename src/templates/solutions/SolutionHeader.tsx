import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface SolutionHeaderProps extends BaseComponentProps {
  title: string;
  description: ReactNode;
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
      <div className='flex max-w-page-full items-center space-x-8 px-8'>
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
        <section className='hidden w-1/2 overflow-visible md:block lg:block'>{image}</section>
      </div>
    </header>
  );
}
