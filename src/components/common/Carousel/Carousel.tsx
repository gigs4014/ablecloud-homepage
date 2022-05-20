import { useEffect, useRef } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface CarouselProps extends BaseComponentProps {
  children?: React.ReactNode;
}

function Carousel({ className, children }: CarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const interval = setInterval(() => {
      if (!carouselRef.current) {
        clearInterval(interval);
        return;
      }

      carouselRef.current.scrollBy({
        behavior: 'smooth',
        left: 1,
      });
    }, 7.5 * 1000);

    carouselRef.current.scrollBy({
      behavior: 'smooth',
      left: 1,
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <ul
      className={cls`flex snap-x snap-mandatory space-x-8 overflow-x-scroll scroll-smooth px-8 scrollbar-none ${className}`}
      ref={carouselRef}>
      {children}
    </ul>
  );
}

export default Carousel;
