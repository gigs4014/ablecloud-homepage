import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface ArticleProps extends BaseComponentProps {
  enableHeadingMargin?: boolean;
}

export function Article({
  enableHeadingMargin = false,
  className,
  children,
}: PropsWithChildren<ArticleProps>) {
  return (
    <article
      className={cls`prose-lg w-full max-w-none text-center ${
        !enableHeadingMargin && 'prose-headings:m-0'
      } ${className}`}>
      {children}
    </article>
  );
}
