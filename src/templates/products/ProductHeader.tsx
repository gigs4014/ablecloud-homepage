import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types';
import { cls, pseudo } from '@/utils';

export interface ProductHeaderProps extends BaseComponentProps {
  title?: string;
  summary: string;
  description: string;
  headerExtra?: ReactNode;
  image?: ReactNode;
}

const before = pseudo('before');

export default function ProductHeader({
  title,
  summary,
  description,
  headerExtra,
  image,
  className,
}: ProductHeaderProps) {
  return (
    <header
      className={cls`relative flex w-full justify-center py-16 ${before`absolute inset-0 -top-full -z-10 -skew-y-2 bg-slate-100`} ${className}`}>
      <div className='flex max-w-page-full space-x-8'>
        {/* info */}
        <section className='w-1/2'>
          <h4>{title}</h4>
          <h1>{summary}</h1>
          <h3>{description}</h3>
          <div>{headerExtra}</div>
        </section>

        {/* image */}
        <section className='w-1/2 overflow-visible'>{image}</section>
      </div>
    </header>
  );
}
