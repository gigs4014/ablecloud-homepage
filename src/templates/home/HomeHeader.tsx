import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface HomeHeaderProps extends BaseComponentProps {
  title?: string;
  description?: ReactNode;
  headerExtra?: ReactNode;
  bgImage?: string;
  textColor?: string;
  bgVideo?: any;
}

export default function HomeHeader({
  title,
  description,
  headerExtra,
  bgImage,
  className,
  bgVideo,
  textColor = 'text-white',
}: HomeHeaderProps) {
  return (
    <>
      <header
        className={cls`not-prose relative flex h-full min-h-[670px] w-full justify-center overflow-hidden bg-cover ${bgImage} ${className}`}>
        <video muted autoPlay loop playsInline className='absolute h-full w-full object-cover'>
          <source src={bgVideo} type='video/mp4' />
        </video>
        <div className='z-10 flex max-w-page-full items-center space-x-8 px-8'>
          {/* info */}
          <section className={`${textColor} text-center`}>
            <p className={'m-0 pt-24 pb-8 text-[42px] font-[800] leading-[52.42px]'}>{title}</p>
            {typeof description === 'string' ? (
              <p className={'m-0 text-[18px] font-[400] leading-[26.06px]'}>{description}</p>
            ) : (
              description
            )}

            {headerExtra && <div className={'mt-[40px] bg-transparent'}>{headerExtra}</div>}
          </section>
        </div>
      </header>
    </>
  );
}
