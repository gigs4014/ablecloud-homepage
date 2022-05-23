import { ReactNode, useMemo } from 'react';

import Link, { LinkProps } from 'next/link';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface CustomLinkProps extends BaseComponentProps, Omit<LinkProps, 'href'> {
  href?: LinkProps['href'];
  children: ReactNode;
  style?: React.CSSProperties;
  /**
   * @default color (change to rgb(96, 165, 250))
   */
  hoverBehavoir?: 'color' | 'underline' | 'none';
}

export default function CustomLink({
  href,
  children,
  className: givenClassName,
  style,
  hoverBehavoir = 'color',
  ...linkProps
}: CustomLinkProps) {
  const className = useMemo(
    () =>
      cls`${{
        'hover:text-blue-400': href && hoverBehavoir === 'color',
        'hover:underline': href && hoverBehavoir === 'underline',
      }} ${givenClassName}`,
    [href, givenClassName, hoverBehavoir],
  );

  // Must add passHref to Link
  if (href) {
    return (
      <Link href={href} passHref {...linkProps}>
        <a className={className} style={style}>
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
}
