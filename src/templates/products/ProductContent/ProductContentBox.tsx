import { PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface ProductContentBoxProps extends BaseComponentProps {
  title?: ReactNode;
}

const ProductContentBox = memo<PropsWithChildren<ProductContentBoxProps>>(
  ({ title, className, children }) => {
    return (
      <div className={cls`${className}`}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    );
  },
);

ProductContentBox.displayName = 'ProductContentBox';

export default ProductContentBox;
