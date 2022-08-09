import { ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

export interface PartnerContentLogoBoxProps extends BaseComponentProps {
  image: ReactNode;
  title: string;
}

const PartnerContentLogoBox = memo<PartnerContentLogoBoxProps>(({ title, image, className }) => {
  return (
    <Container.Card
      hoverBehavoir={'none'}
      className={`bg-white p-[32px] text-center shadow-none ${className}`}>
      {image && <div className={'mb-[20px] flex items-center justify-center'}>{image}</div>}

      <p className={'m-0 mb-[8px] p-0 text-[16px]  font-[500] leading-[23.17px]'}>{title}</p>
    </Container.Card>
  );
});

PartnerContentLogoBox.displayName = 'PartnerContentLogoBox';

export default PartnerContentLogoBox;
