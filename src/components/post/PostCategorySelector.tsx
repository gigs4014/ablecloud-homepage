import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

import { useRouter } from 'next/router';

import { upperFirst } from 'lodash';
import useSwr from 'swr';

export interface PostCategorySelectorProps
  extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {}

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());

function PostCategorySelector({ onChange, ...props }: PostCategorySelectorProps) {
  const router = useRouter();
  const { data, error } = useSwr<{ categories: string[][] }>(
    '/api/posts/categories?basePath=blog',
    fetcher,
  );

  if (error) {
    return null;
  }

  if (!data) {
    // loading
    return null;
  }

  const { categories } = data;

  return (
    <select
      {...props}
      onChange={e => {
        onChange?.(e);
        const { value } = e.currentTarget;
        router.push(`/${['blog', value].join('/')}`);
      }}>
      <option value=''>전체</option>
      {categories.map(category => (
        <option value={category.join('/')} key={category.at(-1)}>
          {upperFirst(category.at(-1))}
        </option>
      ))}
    </select>
  );
}

export default PostCategorySelector;
