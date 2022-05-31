import {
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
  RefObject,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { useMountEffect } from '@/hooks/utils';
import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

function CarouselItem({ children, className }: PropsWithChildren<BaseComponentProps>) {
  return <li className={cls`snap-center snap-always ${className}`}>{children}</li>;
}

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

    const stopAutoScroll = useCallback(() => {
      if (autoScrollIntervalId.current) {
        // console.log('carousel auto scroll stop');
        clearInterval(autoScrollIntervalId.current);
        autoScrollIntervalId.current = undefined;
      }
    }, []);

    const startAutoScroll = useCallback(() => {
      if (elementRef.current === null || autoScrollIntervalId.current !== undefined) return;
      // console.log('carousel auto scroll start');

      elementRef.current.scrollBy({
        behavior: 'smooth',
        left: 10,
      });

      // console.log('carousel auto scroll add interval');
      autoScrollIntervalId.current = setInterval(() => {
        // console.log('carousel auto scroll interval');
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
          left: 10,
        });
      }, autoScrollInterval);

      return stopAutoScroll;
    }, [autoScrollInterval, stopAutoScrollOnEnd]);

    // refresh autoScrollInterval when startAutoScroll changes
    useEffect(() => {
      if (autoScrollIntervalId.current) {
        stopAutoScroll();
        startAutoScroll();
      }
    }, [startAutoScroll]);

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
      [startAutoScroll],
    );

    return (
      <ul
        className={cls`flex snap-x snap-mandatory space-x-8 overflow-x-scroll scroll-smooth px-8 scrollbar-none ${className}`}
        ref={elementRef}>
        {children}
      </ul>
    );
  },
) as ForwardRefExoticComponent<CarouselProps & RefAttributes<CarouselRef>> & {
  Item: typeof CarouselItem;
};

Carousel.displayName = 'Carousel';
Carousel.Item = CarouselItem;

export default Carousel;
