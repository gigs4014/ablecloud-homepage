import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { ItemCard, RowSmallCard } from '@/components/common';
import { Container } from '@/components/layout';

import ProductContentBox from './ProductContentBox';
import ProductContentGoDetail from './ProductContentGoDetail';
import ProductContentIntro from './ProductContentIntro';
import ProductContentItemGrid from './ProductContentItemGrid';

export interface ProductContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
  image?: ReactNode;
  imagePosition?: 'first' | 'last';
  addNode?: ReactNode;
}

const ProductContent = memo<PropsWithChildren<ProductContentProps>>(
  ({ title, description, image, imagePosition = 'last', className, children, addNode }) => {
    return (
      <section className={cls`group relative flex w-full flex-col items-center pb-16 ${className}`}>
        {/* ::before */}
        {/* <div className='group-odd:absolute group-odd:inset-0 group-odd:-z-10 group-odd:-skew-y-2 group-odd:bg-slate-100' /> */}

        <Container.PageWidth>
          <header className='flex flex-col items-center px-8 text-center'>
            {typeof title === 'string' ? <h2>{title}</h2> : title}
            {typeof description === 'string' ? (
              <p className='max-w-screen-md'>{description}</p>
            ) : (
              <div className='max-w-screen-md'>{description}</div>
            )}
          </header>
          {image && (
            <section className='flex w-full items-center justify-between space-x-8'>
              {imagePosition === 'first' && <div className='w-1/2'>{image}</div>}

              <div className='flex w-1/2 flex-col'>{children}</div>

              {imagePosition === 'last' && <div className='w-1/2'>{image}</div>}
            </section>
          )}
          {addNode && (
            <section className='flex w-full items-center justify-between space-x-8'>
              {addNode}
            </section>
          )}
        </Container.PageWidth>
      </section>
    );
  },
) as NamedExoticComponent<PropsWithChildren<ProductContentProps>> & {
  Box: typeof ProductContentBox;
  ItemGrid: typeof ProductContentItemGrid;
  GoDetail: typeof ProductContentGoDetail;
  RowSmallCard: typeof RowSmallCard;
  Intro: typeof ProductContentIntro;
  Item: typeof ItemCard;
};

ProductContent.displayName = 'ProductContent';

ProductContent.Box = ProductContentBox;
ProductContent.ItemGrid = ProductContentItemGrid;
ProductContent.GoDetail = ProductContentGoDetail;
ProductContent.RowSmallCard = RowSmallCard;
ProductContent.Intro = ProductContentIntro;
ProductContent.Item = ItemCard;

export default ProductContent;
