import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface HomeHeaderProps extends BaseComponentProps {
  title?: string;
  description: ReactNode;
  headerExtra?: ReactNode;
  bgImage?: string;
  textColor?: string;
}

export default function HomeHeader({
  title,
  description,
  headerExtra,
  bgImage,
  className,
  textColor = 'text-white',
}: HomeHeaderProps) {
  return (
    <header
      className={cls`relative flex min-h-[560px] w-full justify-center bg-cover py-16 ${bgImage} ${className}`}>
      <div className='flex max-w-page-full items-center space-x-8 px-8'>
        {/* info */}
        <section className={`${textColor} text-center`}>
          <p className={'m-0 mb-[40px] p-0 text-[42px] font-[800] leading-[52.42px]'}>{title}</p>
          {typeof description === 'string' ? (
            <p className={'m-0 p-0 text-[18px] font-[400] leading-[26.06px]'}>{description}</p>
          ) : (
            description
          )}

          {headerExtra && <div className={'mt-[40px]'}>{headerExtra}</div>}
        </section>
      </div>
    </header>
  );
}
