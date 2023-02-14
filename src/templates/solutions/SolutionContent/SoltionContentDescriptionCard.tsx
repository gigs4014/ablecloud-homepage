import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

interface CardProps extends BaseComponentProps {
  title: string;
  image?: ReactNode;
  containerClassName?: string;
  description?: ReactNode;
  linkText?: ReactNode;
  hoverBehavoir?: 'none' | 'scale';
}

export default function DescriptionCard({
  containerClassName,
  title,
  image,
  description,
  linkText,
  hoverBehavoir = 'none',
}: CardProps) {
  return (
    <Container.Card
      className={`m-auto min-h-[311px] w-full pt-[20px] pb-[58px] text-center shadow-none ${containerClassName}`}
      hoverBehavior={hoverBehavoir}>
      {image && <div className='m-auto flex max-w-[150px]'>{image}</div>}

      <div className={'pt-[66px]'}>
        <div className={'mb-[26px] text-[20px] font-[500] leading-[28.96px]'}>{title}</div>
        {description && description}
        {linkText && (
          <div className='flex items-center justify-center space-x-4 text-primary after:ml-2 after:icon-[east]'>
            {linkText}
          </div>
        )}
      </div>
    </Container.Card>
  );
}
