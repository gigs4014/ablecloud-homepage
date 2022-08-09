import { useEffect } from 'react';

import { TNullable } from '@/types';

export function useScrollDown(ref: React.MutableRefObject<TNullable<HTMLDivElement>>) {
  useEffect(() => {
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (ref.current) {
        if (currentScrollPos !== 0) {
          ref.current.style.background = '#FFFFFF';
        } else {
          ref.current.style.background = 'none';
        }
      }
    };

    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, [ref]);
}

export default useScrollDown;
