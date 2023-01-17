import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { Container } from '@/components/layout';

import PartnerContentDescription from './PartnerContentDescription';
import PartnerContentLogoBox from './PartnerContentLogoBox';

export interface PartnerContentProps extends BaseComponentProps {
  title?: ReactNode;
  titleClassName?: string;
  description?: ReactNode;
}

const PartnerContent = memo<PropsWithChildren<PartnerContentProps>>(
  ({ title, description, className, children, titleClassName }) => {
    return (
      <section
        className={cls`not-prose group relative flex w-full flex-col items-center overflow-hidden pb-8 ${
          className ? className : 'text-[#444444]'
        }`}>
        <Container.PageWidth>
          <header className='flex flex-col items-center px-8 text-center'>
            {typeof title === 'string' ? (
              <p className={cls`text-[30px] font-[500] leading-[43.44px] ${titleClassName}`}>
                {title}
              </p>
            ) : (
              title
            )}
            {typeof description === 'string' ? (
              <p className='mb-[30px] max-w-[960px] whitespace-pre-line p-0 text-[16px] font-[400] leading-[23.17px]'>
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
) as NamedExoticComponent<PropsWithChildren<PartnerContentProps>> & {
  Description: typeof PartnerContentDescription;
  LogoBox: typeof PartnerContentLogoBox;
};

PartnerContent.displayName = 'PartnerContent';

PartnerContent.Description = PartnerContentDescription;
PartnerContent.LogoBox = PartnerContentLogoBox;

export default PartnerContent;
