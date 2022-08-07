import { PropsWithChildren, memo } from 'react';

import { v4 as uuid } from 'uuid';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

interface ProductDescription {
  title: string;
  descriptions: string[];
}
export interface ProductContentDescriptionProps extends BaseComponentProps {
  contents: ProductDescription[];
}

const ProductContentDescription = memo<PropsWithChildren<ProductContentDescriptionProps>>(
  ({ contents, className }) => {
    return (
      <div className={cls`${className}`}>
        {contents.map(content => (
          <ul key={uuid()} className={'py-[20px]'}>
            <li className='m-0 text-[20px] font-[500]'>{content.title}</li>
            {content.descriptions.map(description => (
              <li key={uuid()} className='m-0 pl-[16px] text-[16px] font-[400]'>
                {'・ ' + description}
              </li>
            ))}
          </ul>
        ))}
      </div>
    );
  },
);

ProductContentDescription.displayName = 'ProductContentDescription';

export default ProductContentDescription;
