import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { Container } from '@/components/layout';

export interface InterViewContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
}

export interface InterViewClientContentProps {
  clinetImage?: any;
  description?: any;
}

export const InterViewClientContent = ({
  clinetImage,
  description,
}: InterViewClientContentProps) => {
  return (
    <section className='m-auto min-h-[800px] max-w-page-full px-8'>
      <div className='mt-[55.5px]'>{clinetImage}</div>
      <div className='mt-[33.5px] w-full text-[#444444] sm:w-[500px]'>{description}</div>
      <div className='mt-[37.5px] text-[24px] text-[#444444]'>회사</div>
    </section>
  );
};

const InterViewContent = memo<PropsWithChildren<InterViewContentProps>>(
  ({ title, description, className, children }) => {
    return (
      <section
        className={cls`not-prose group relative flex flex-col items-center overflow-hidden ${className}`}>
        <Container.PageWidth>
          <header className='flex flex-col items-center px-8 text-center'>
            {typeof title === 'string' ? (
              <p className={'m-0 p-0 text-[30px] font-[500] leading-[43.44px]'}>{title}</p>
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
