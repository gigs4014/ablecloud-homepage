import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { RowSmallCard } from '@/components/common';
import { Container } from '@/components/layout';

import SolutionContentRowCard from './SolutionContentRowCard';

export interface SolutionContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
}

const SolutionContent = memo<PropsWithChildren<SolutionContentProps>>(
  ({ title, description, className, children }) => {
    return (
      <section
        className={cls`group relative flex w-full flex-col items-center overflow-hidden pb-16 ${
          className ? className : 'text-[#444444]'
        }`}>
        <Container.PageWidth>
          <header className='flex flex-col items-center px-8 text-center'>
            {typeof title === 'string' ? (
              <p className={'m-0 mb-[25px]  p-0 text-[30px] font-[500] leading-[43.44px]'}>
                {title}
              </p>
            ) : (
              title
            )}
            {typeof description === 'string' ? (
              <p className='m-0 mb-[25px] max-w-[960px] p-0 text-[16px] font-[400] leading-[23.17px]'>
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
) as NamedExoticComponent<PropsWithChildren<SolutionContentProps>> & {
  RowCard: typeof SolutionContentRowCard;
  RowSmallCard: typeof RowSmallCard;
};

SolutionContent.displayName = 'SolutionContent';

SolutionContent.RowCard = SolutionContentRowCard;
SolutionContent.RowSmallCard = RowSmallCard;

export default SolutionContent;
