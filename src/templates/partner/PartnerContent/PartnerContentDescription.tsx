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
        className={`flex flex-col items-center justify-center border-1 border-borderGray bg-white p-[32px] text-center shadow-none ${className}`}>
        <p className={'m-0 mb-[8px] p-0 text-[18px] font-[500] leading-[23.17px]'}>{title}</p>

        {typeof description === 'string' ? (
          <p className={'m-0 p-0  text-[16px] font-[400] leading-[23.17px]'}>{description}</p>
        ) : (
          description
        )}
      </Container.Card>
    );
  },
);

PartnerContentDescription.displayName = 'PartnerContentDescription';

export default PartnerContentDescription;
