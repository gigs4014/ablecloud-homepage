import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls, pseudo } from '@/utils';

export interface ProductContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
  image: ReactNode;
  imagePosition?: 'first' | 'last';
}

const oddBefore = pseudo('odd:before');

const ProductContent = memo<PropsWithChildren<ProductContentProps>>(
  ({ title, description, image, imagePosition = 'last', className, children }) => {
    return (
      <article
        className={cls`relative flex w-full flex-col items-center py-16 ${oddBefore`absolute inset-0 -z-10 -skew-y-2 bg-slate-100`} ${className}`}>
        <header className='max-w-page-full text-center'>
          {typeof title === 'string' ? <h2>{title}</h2> : title}
          {typeof description === 'string' ? (
            <p className='max-w-screen-md'>{description}</p>
          ) : (
            <div className='max-w-screen-md'>{description}</div>
          )}
        </header>

        <section className='flex w-full max-w-page-full items-center justify-between space-x-8'>
          {imagePosition === 'first' && <div className='w-1/2'>{image}</div>}

          <div className='flex w-1/2 flex-col'>{children}</div>

          {imagePosition === 'last' && <div className='w-1/2'>{image}</div>}
        </section>
      </article>
    );
  },
) as NamedExoticComponent<PropsWithChildren<ProductContentProps>> & {
  Box: typeof ContentBox;
};

ProductContent.displayName = 'ProductContent';

interface ContentBoxProps extends BaseComponentProps {
  title?: ReactNode;
}

export const ContentBox = memo<PropsWithChildren<ContentBoxProps>>(
  ({ title, className, children }) => {
    return (
      <div className={`${className}`}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    );
  },
);

ContentBox.displayName = 'ContentBox';

ProductContent.Box = ContentBox;

export default ProductContent;