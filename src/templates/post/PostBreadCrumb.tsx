import { BaseComponentProps } from '@/types';

import { CustomLink } from '@/components/common';

export interface BreadCrumbProps extends BaseComponentProps {
  paths: string[];
}

export default function Breadcrumb({ paths, className }: BreadCrumbProps) {
  return (
    <nav className={`not-prose inline-flex ${className}`}>
      {paths.map((curr, i, arr) => (
        <span
          key={curr}
          className='flex items-center text-sky-300 after:px-2 after:text-black after:icon-[navigate\_next] last:after:hidden'>
          <CustomLink href={`/${arr.slice(undefined, i + 1).join('/')}`}>{curr}</CustomLink>
        </span>
      ))}
    </nav>
  );
}
