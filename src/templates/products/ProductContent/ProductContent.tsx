import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { ActionCard, ItemCard, RowSmallCard, RowSummaryCard } from '@/components/common';
import { Container } from '@/components/layout';

import ProductContentBox from './ProductContentBox';
import ProductContentDescription from './ProductContentDescription';
import ProductContentGoDetail from './ProductContentGoDetail';
import ProductContentIntro from './ProductContentIntro';
import ProductContentItemGrid from './ProductContentItemGrid';

export interface ProductContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
  image?: ReactNode;
  imagePosition?: 'first' | 'last';
}

const ProductContent = memo<PropsWithChildren<ProductContentProps>>(
  ({ title, description, image, imagePosition = 'last', className, children }) => {
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
          {image ? (
            <section className='flex w-full items-center justify-between space-x-8'>
              {imagePosition === 'first' && (
                <div className='hidden w-1/2 overflow-visible md:block lg:block'>{image}</div>
              )}

              <div className='flex w-full flex-col md:w-1/2 lg:w-1/2'>{children}</div>

              {imagePosition === 'last' && (
                <div className='hidden w-1/2 overflow-visible md:block lg:block'>{image}</div>
              )}
            </section>
          ) : (
            <>{children}</>
          )}
        </Container.PageWidth>
      </section>
    );
  },
) as NamedExoticComponent<PropsWithChildren<ProductContentProps>> & {
  ActionCard: typeof ActionCard;
  Box: typeof ProductContentBox;
  Description: typeof ProductContentDescription;
  ItemGrid: typeof ProductContentItemGrid;
  GoDetail: typeof ProductContentGoDetail;
  RowSmallCard: typeof RowSmallCard;
  RowSummaryCard: typeof RowSummaryCard;
  Intro: typeof ProductContentIntro;
  Item: typeof ItemCard;
};

ProductContent.displayName = 'ProductContent';

ProductContent.ActionCard = ActionCard;
ProductContent.Box = ProductContentBox;
ProductContent.Description = ProductContentDescription;
ProductContent.ItemGrid = ProductContentItemGrid;
ProductContent.GoDetail = ProductContentGoDetail;
ProductContent.RowSmallCard = RowSmallCard;
ProductContent.RowSummaryCard = RowSummaryCard;
ProductContent.Intro = ProductContentIntro;
ProductContent.Item = ItemCard;

export default ProductContent;
