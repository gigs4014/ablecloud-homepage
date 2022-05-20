import { ReactNode, useMemo } from 'react';

import Link, { LinkProps } from 'next/link';

import { cls } from '@/utils';

export interface CustomLinkProps extends Omit<LinkProps, 'href'> {
  href?: LinkProps['href'];
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
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
  hoverBehavoir,
  ...linkProps
}: CustomLinkProps) {
  const className = useMemo(
    () =>
      cls`${{
        'hover:text-blue-400': hoverBehavoir === 'color',
        'hover:underline': hoverBehavoir === 'underline',
      }} ${givenClassName}`,
    [givenClassName, hoverBehavoir],
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
