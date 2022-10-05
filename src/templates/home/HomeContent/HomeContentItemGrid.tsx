import { memo } from 'react';

import { ReactNode } from '@mdx-js/react/lib';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

export interface HomeContentGridItemProps extends BaseComponentProps {
  title: string;
  image: ReactNode;
  containerClassName?: string;
  linkText?: ReactNode;
  hoverBehavoir?: 'none' | 'scale';
}

const HomeContentItemGrid = memo(
  ({
    containerClassName,
    title,
    image,
    linkText,
    hoverBehavoir = 'none',
  }: HomeContentGridItemProps) => {
    return (
      <Container.Card
        hoverBehavoir={hoverBehavoir}
        className={`h-full px-[16px] pt-[35px] pb-[58px]  text-center shadow-none ${containerClassName}`}>
        <div className={'mb-6 text-xl'}>{title}</div>

        <div className='flex h-[257px] items-center justify-center'>{image}</div>

        <div className='mt-[72px] flex items-center justify-center space-x-4 text-[14px] text-[#3281c4]'>
          {linkText} →
        </div>
      </Container.Card>
    );
  },
);

HomeContentItemGrid.displayName = 'HomeContentItemGrid';

export default HomeContentItemGrid;
