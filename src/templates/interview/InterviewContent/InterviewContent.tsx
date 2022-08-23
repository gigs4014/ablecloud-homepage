import { Container } from '@/components/layout';
import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';
import { memo, NamedExoticComponent, PropsWithChildren, ReactNode } from 'react';



export interface InterViewContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
}

const InterViewContent = memo<PropsWithChildren<InterViewContentProps>>(
  ({ title, description, className, children }) => {
    return (
      <section className={cls`group relative flex w-full flex-col items-center pb-16 overflow-hidden ${className}`}>
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
) as NamedExoticComponent<PropsWithChildren<InterViewContentProps>> & {};

InterViewContent.displayName = 'InterViewContent';

export default InterViewContent;
