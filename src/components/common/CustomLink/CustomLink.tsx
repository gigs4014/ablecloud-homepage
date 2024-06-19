import { ReactNode, useMemo } from 'react';

import Link, { LinkProps } from 'next/link';

import { useMediaQuery } from 'react-responsive';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface CustomLinkProps extends BaseComponentProps, Omit<LinkProps, 'href'> {
  href?: LinkProps['href'];
  children: ReactNode;
  style?: React.CSSProperties;
  /**
   * @default color (change to rgb(96, 165, 250))
   */
  hoverBehavior?: 'color' | 'underline' | 'none';
  linkBy?: 'anchor' | 'event';
  isBlank?: boolean;
}

export default function CustomLink({
  href,
  children,
  className: givenClassName,
  style,
  hoverBehavior = 'color',
  linkBy = 'anchor',
  isBlank,
  ...linkProps
}: CustomLinkProps) {
  const bigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const className = useMemo(
    () =>
      cls`hover:cursor-pointer ${{
        'hover:text-primary': href && hoverBehavior === 'color',
        'hover:underline': href && hoverBehavior === 'underline',
      }} ${givenClassName}`,
    [href, givenClassName, hoverBehavior],
  );

  // Must add passHref to Link
  if (href === undefined) {
    return (
      <div className={bigScreen ? className : ''} style={style}>
        {children}
      </div>
    );
  }

  if (linkBy === 'event') {
    return (
      <Link href={href} passHref {...linkProps}>
        <div className={bigScreen ? className : ''} style={style}>
          {children}
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} passHref {...linkProps}>
      <a
        target={isBlank ? '_blank' : undefined}
        className={bigScreen ? className : ''}
        style={style}>
        {children}
      </a>
    </Link>
  );
}
