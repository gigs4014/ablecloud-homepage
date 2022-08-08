import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { DescriptionCard, SmallCard } from '@/components/common';
import { Container } from '@/components/layout';

import CompanyContentImageItem from './CompanyContentImageItem';

export interface CompanyContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
}

const CompanyContent = memo<PropsWithChildren<CompanyContentProps>>(
  ({ title, description, className, children }) => {
    return (
      <section className={cls`group relative flex w-full flex-col items-center pb-16 ${className}`}>
        <Container.PageWidth>
          <header className='flex flex-col items-center px-8 text-center'>
            {typeof title === 'string' ? <h2>{title}</h2> : title}
            {typeof description === 'string' ? (
              <p className='max-w-screen-md'>{description}</p>
            ) : (
              <div className='max-w-screen-md'>{description}</div>
            )}
          </header>

          {children}
        </Container.PageWidth>
      </section>
    );
  },
) as NamedExoticComponent<PropsWithChildren<CompanyContentProps>> & {
  DescriptionCard: typeof DescriptionCard;
  SmallCard: typeof SmallCard;
  ImageItam: typeof CompanyContentImageItem;
};

CompanyContent.displayName = 'CompanyContent';

CompanyContent.DescriptionCard = DescriptionCard;
CompanyContent.SmallCard = SmallCard;
CompanyContent.ImageItam = CompanyContentImageItem;

export default CompanyContent;
