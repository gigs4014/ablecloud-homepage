import { memo } from 'react';

import { ReactNode } from '@mdx-js/react/lib';

import { BaseComponentProps } from '@/types';

export interface CompanyContentImageItemProps extends BaseComponentProps {
  title: string;
  image: ReactNode;
  containerClassName?: string;
}

const CompanyContentImageItem = memo(
  ({ containerClassName, title, image }: CompanyContentImageItemProps) => {
    return (
      <div className={`bg-none px-4 pt-8 text-center ${containerClassName}`}>
        <div className='flex h-[257px] items-center justify-center'>{image}</div>
        <p className='pt-20 text-[18px] font-[400] leading-[26.06px]'>{title}</p>
      </div>
    );
  },
);

CompanyContentImageItem.displayName = 'CompanyContentImageItem';

export default CompanyContentImageItem;
