import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface CardProps extends BaseComponentProps {
  hoverBehavoir?: 'none' | 'scale';
}

export function Card({
  hoverBehavoir = 'scale',
  className,
  children,
}: PropsWithChildren<CardProps>) {
  const hoverStyle = cls`${{
    'transition-all hover:-translate-y-1 hover:scale-102 hover:shadow-xl':
      hoverBehavoir === 'scale',
  }}`;

  return (
    <section
      className={cls`h-full w-full overflow-hidden rounded-md bg-white  ${hoverStyle} ${className}`}>
      {children}
    </section>
  );
}
