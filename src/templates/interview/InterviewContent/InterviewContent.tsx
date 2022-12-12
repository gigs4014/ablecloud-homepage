import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { Container } from '@/components/layout';

export interface InterViewContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
}

export interface InterViewClientContentProps {
  clinetImage: JSX.Element;
  introduceDescription: ReactNode;
  introduceImage?: JSX.Element;
  assignmentDescription?: ReactNode;
  solutionDescription?: ReactNode;
}

const InterViewContent = memo<PropsWithChildren<InterViewContentProps>>(
  ({ title, description, className, children }) => {
    return (
      <section
        className={cls`not-prose group relative flex flex-col items-center overflow-hidden text-[#444444] ${className}`}>
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

export const InterViewClientContent = ({
  clinetImage,
  introduceDescription,
  introduceImage,
  assignmentDescription,
  solutionDescription,
}: InterViewClientContentProps) => {
  return (
    <section className='not-prose m-auto min-h-[800px] max-w-page-full px-8 text-[#444444] xl:px-0'>
      <div className='mt-16'>{clinetImage}</div>
      <div className='mt-12'>
        <div className='text-[24px] font-bold'>고객소개</div>
        <div className='mt-12 w-full lg:w-[954px]'>{introduceDescription}</div>
        <div className='mt-8 h-auto max-w-full bg-[#F7F7F7] p-4'>{introduceImage}</div>
      </div>
      <div className='mt-14'>
        <div className='text-[24px] font-bold'>당면과제</div>
        <div className='mt-12 w-full lg:w-[954px]'>{assignmentDescription}</div>
      </div>
      <div className='my-14'>
        <div className='text-[24px] font-bold'>적용솔루션</div>
        <div className='mt-12 w-full lg:w-[954px]'>{solutionDescription}</div>
      </div>
    </section>
  );
};

InterViewContent.displayName = 'InterViewContent';

export default InterViewContent;
