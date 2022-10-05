import { ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

export interface PartnerContentDescriptionProps extends BaseComponentProps {
  title: string;
  description?: ReactNode;
}

const PartnerContentDescription = memo<PartnerContentDescriptionProps>(
  ({ title, description, className }) => {
    return (
      <Container.Card
        hoverBehavoir={'none'}
        className={`not-prose m-auto flex max-w-[500px] flex-col items-center justify-center border-1 border-borderGray bg-white p-[32px] text-center shadow-none ${className}`}>
        <p className={'m-0 mb-[10px] p-0 text-[18px] font-[500] leading-[26.06px]'}>{title}</p>

        {typeof description === 'string' ? (
          <p className={'m-0 max-w-80 text-center text-[16px] font-[400] leading-[23.17px]'}>
            {description}
          </p>
        ) : (
          description
        )}
      </Container.Card>
    );
  },
);

PartnerContentDescription.displayName = 'PartnerContentDescription';

export default PartnerContentDescription;
