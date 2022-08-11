import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { Container } from '@/components/layout';

export interface InterViewContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
}

const InterViewContent = memo<PropsWithChildren<InterViewContentProps>>(
  ({ title, description, className, children }) => {
    return (
      <section className={cls`group relative flex w-full flex-col items-center pb-16 ${className}`}>
        <Container.PageWidth>
          <header className='flex flex-col items-center px-8 text-center'>
            {typeof title === 'string' ? <h2>{title}</h2> : title}
            {typeof description === 'string' ? (
              <p className='max-w-screen-md'>{description}</p>
            ) : (
              description
            )}
          </header>

          {children}
        </Container.PageWidth>
      </section>
    );
  },
) as NamedExoticComponent<PropsWithChildren<InterViewContentProps>> & {};

InterViewContent.displayName = 'InterViewContent';

export default InterViewContent;
