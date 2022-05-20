import { RefObject, forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';

import { useMountEffect } from '@/hooks/utils';
import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface CarouselProps extends BaseComponentProps {
  children?: React.ReactNode;

  /**
   * @default false
   */
  autoScrollOnMount?: boolean;

  /**
   * @default true
   */
  stopAutoScrollOnEnd?: boolean;

  /**
   * @default 5000 ms
   */
  autoScrollInterval?: number;
}

export interface CarouselRef {
  startAutoScroll: () => void;
  stopAutoScroll: () => void;
  elementRef: RefObject<HTMLUListElement>;
}

const Carousel = forwardRef<CarouselRef, CarouselProps>(
  (
    {
      className,
      children,
      autoScrollOnMount = false,
      stopAutoScrollOnEnd = true,
      autoScrollInterval = 5000,
    },
    ref,
  ) => {
    const elementRef = useRef<HTMLUListElement>(null);
    const prevCarouselPosition = useRef<number>(0);
    const autoScrollIntervalId = useRef<NodeJS.Timeout>();

    const stopAutoScroll = useCallback(
      () => autoScrollIntervalId.current && clearInterval(autoScrollIntervalId.current),
      [],
    );

    const startAutoScroll = useCallback(() => {
      if (elementRef.current === null || autoScrollIntervalId.current !== undefined) return;

      elementRef.current.scrollBy({
        behavior: 'smooth',
        left: 1,
      });

      autoScrollIntervalId.current = setInterval(() => {
        if (!elementRef.current) {
          stopAutoScroll();
          return;
        }

        if (stopAutoScrollOnEnd) {
          if (prevCarouselPosition.current === elementRef.current.scrollLeft) {
            stopAutoScroll();
            return;
          }
        }

        prevCarouselPosition.current = elementRef.current.scrollLeft;

        elementRef.current.scrollBy({
          behavior: 'smooth',
          left: 1,
        });
      }, autoScrollInterval);
    }, [stopAutoScroll, autoScrollInterval, stopAutoScrollOnEnd]);

    // refresh autoScrollInterval when startAutoScroll changes
    useEffect(() => {
      if (autoScrollIntervalId.current) {
        stopAutoScroll();
        startAutoScroll();
      }
    }, [stopAutoScroll, startAutoScroll]);

    useMountEffect(() => {
      // start autoScroll when component is mounted && autoScroll is true
      if (autoScrollOnMount) {
        startAutoScroll();
      }

      // stop autoScroll when component is unmounted
      return stopAutoScroll;
    });

    useImperativeHandle(
      ref,
      () => ({
        startAutoScroll,
        stopAutoScroll,
        elementRef,
      }),
      [startAutoScroll, stopAutoScroll],
    );

    return (
      <ul
        className={cls`flex snap-x snap-mandatory space-x-8 overflow-x-scroll scroll-smooth px-8 scrollbar-none ${className}`}
        ref={elementRef}>
        {children}
      </ul>
    );
  },
);

Carousel.displayName = 'Carousel';

export default Carousel;
