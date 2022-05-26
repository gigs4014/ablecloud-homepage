import { BaseComponentProps } from '@/types';

import { CustomLink } from '@/components/common';

export interface PostBreadcrumbProps extends BaseComponentProps {
  paths: string[];
}

export default function PostBreadcrumb({ paths, className }: PostBreadcrumbProps) {
  return (
    <nav className={`inline-flex ${className}`}>
      {paths.map((curr, i, arr) => (
        <span
          key={curr}
          className='flex items-center text-gray-300 after:px-2 after:text-gray-400 after:icon-[navigate\_next] last:text-black last:after:hidden'>
          <CustomLink
            href={`/blog/${arr.slice(undefined, i + 1).join('/')}`}
            className='first-letter:uppercase'>
            {curr}
          </CustomLink>
        </span>
      ))}
    </nav>
  );
}
