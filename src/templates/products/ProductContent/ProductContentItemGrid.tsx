import { memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

export interface ProductContentGridItem {
  title: string;
  summary?: string;
  description?: string;
  href: string;
}

export interface ProductContentItemGridProps extends BaseComponentProps {
  items: Array<ProductContentGridItem>;
}

const ProductContentItemGrid = memo(({ items, className }: ProductContentItemGridProps) => {
  return (
    <div className={cls`not-prose py-8 ${className}`}>
      <ul className=' grid gap-x-2 gap-y-2 md:grid-cols-2'>
        {items.map(({ title, summary, description, href }, index) => (
          <li key={`${title}-${index}`}>
            <CustomLink
              href={href}
              className='flex items-center font-bold before:mr-2 before:text-lime-500 before:icon-[task_alt]'>
              {`${title}${summary && '- ' + summary}`}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
});

ProductContentItemGrid.displayName = 'ProductContentItemGrid';

export default ProductContentItemGrid;
