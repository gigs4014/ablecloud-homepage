import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { ActionCard, RowSummaryCard } from '@/components/common';
import { Container } from '@/components/layout';

import HomeContentItemGrid from './HomeContentItemGrid';

export interface HomeContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
}

const HomeContent = memo<PropsWithChildren<HomeContentProps>>(
  ({ title, description, className, children }) => {
    return (
      <section className={cls`group relative flex w-full flex-col items-center pb-16 ${className}`}>
        <Container.PageWidth>
          <header className='flex flex-col items-center px-8 text-center'>
            {typeof title === 'string' ? (
              <p className={'m-0 mb-[25px] p-0 text-[30px] font-[500] leading-[43.44px]'}>
                {title}
              </p>
            ) : (
              title
            )}
            {typeof description === 'string' ? (
              <p className='m-0 mb-[25px] p-0 text-[16px] font-[400] leading-[23.17px]'>
                {description}
              </p>
            ) : (
              description
            )}
          </header>

          {children}
        </Container.PageWidth>
      </section>
    );
  },
) as NamedExoticComponent<PropsWithChildren<HomeContentProps>> & {
  ActionCard: typeof ActionCard;
  RowSummaryCard: typeof RowSummaryCard;
  ItemGrid: typeof HomeContentItemGrid;
};

HomeContent.displayName = 'HomeContent';

HomeContent.ActionCard = ActionCard;
HomeContent.RowSummaryCard = RowSummaryCard;
HomeContent.ItemGrid = HomeContentItemGrid;

export default HomeContent;
