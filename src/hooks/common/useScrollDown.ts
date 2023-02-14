import { useEffect, useState } from 'react';

import { TNullable } from '@/types';

export function useScrollDown(ref: React.MutableRefObject<TNullable<HTMLDivElement>>) {
  const [isCurrentScrollTop, setIsCurrentScrollTop] = useState<boolean | undefined>();

  useEffect(() => {
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (ref.current) {
        if (currentScrollPos === 0) {
          setIsCurrentScrollTop(true);
          ref.current.style.background = 'none';
          ref.current.style.boxShadow = 'none';
        } else {
          setIsCurrentScrollTop(false);
          ref.current.style.background = '#FFFFFF';
          ref.current.style.boxShadow = '0px 2px 4px 0px #00000033';
        }
      }
    };

    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, [ref]);

  return isCurrentScrollTop;
}

export default useScrollDown;
