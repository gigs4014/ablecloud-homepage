import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import ProductContentBox from './ProductContentBox';
import ProductContentGoDetail from './ProductContentGoDetail';
import ProductContentItemGrid from './ProductContentItemGrid';

export interface ProductContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
  image: ReactNode;
  imagePosition?: 'first' | 'last';
}

const ProductContent = memo<PropsWithChildren<ProductContentProps>>(
  ({ title, description, image, imagePosition = 'last', className, children }) => {
    return (
      <article className={cls`group relative flex w-full flex-col items-center py-16 ${className}`}>
        {/* ::before */}
        <div className='group-odd:absolute group-odd:inset-0 group-odd:-z-10 group-odd:-skew-y-2 group-odd:bg-slate-100' />

        <header className='max-w-page-full px-8 pb-16 text-center'>
          {typeof title === 'string' ? <h2>{title}</h2> : title}
          {typeof description === 'string' ? (
            <p className='max-w-screen-md'>{description}</p>
          ) : (
            <div className='max-w-screen-md'>{description}</div>
          )}
        </header>

        <section className='flex w-full max-w-page-full items-center justify-between space-x-8 px-8'>
          {imagePosition === 'first' && <div className='w-1/2'>{image}</div>}

          <div className='flex w-1/2 flex-col'>{children}</div>

          {imagePosition === 'last' && <div className='w-1/2'>{image}</div>}
        </section>
      </article>
    );
  },
) as NamedExoticComponent<PropsWithChildren<ProductContentProps>> & {
  Box: typeof ProductContentBox;
  ItemGrid: typeof ProductContentItemGrid;
  GoDetail: typeof ProductContentGoDetail;
};

ProductContent.displayName = 'ProductContent';

ProductContent.Box = ProductContentBox;
ProductContent.ItemGrid = ProductContentItemGrid;
ProductContent.GoDetail = ProductContentGoDetail;

export default ProductContent;
