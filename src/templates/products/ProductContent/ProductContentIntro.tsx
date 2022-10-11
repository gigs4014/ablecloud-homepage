import { ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface ProductContentIntroProps extends BaseComponentProps {
  title: ReactNode;
  description: ReactNode;
}

const ProductContentIntro = memo<ProductContentIntroProps>(({ title, className, description }) => {
  return (
    <div className={cls`${className}`}>
      <p className={'text-[30px] font-[500] leading-[43px]'}>{title}</p>
      <div className='mb-8'>{description}</div>
    </div>
  );
});

ProductContentIntro.displayName = 'ProductContentIntro';

export default ProductContentIntro;
