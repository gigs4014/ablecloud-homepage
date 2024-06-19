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
      hoverBehavior={'none'}
      className={`bg-white text-center shadow-none ${className} flex h-[150px] max-h-[150px] flex-col justify-center`}>
      {image ? (
        <div className={'flex min-h-[51px] items-center justify-center'}>{image}</div>
      ) : (
        <div className='min-h-[51px]'></div>
      )}

      <p
        className={
          'm-0 flex h-[50px] max-h-[50px] items-center justify-center p-0 text-[16px] font-[500] leading-[23.17px]'
        }>
        {title}
      </p>
    </Container.Card>
  );
});

PartnerContentLogoBox.displayName = 'PartnerContentLogoBox';

export default PartnerContentLogoBox;
