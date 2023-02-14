import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { cls } from '@/utils';

import { usePostContext } from './PostContext';
import PostMetadata from './PostMetadata';

function PostHeader({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  const { title } = usePostContext();

  return (
    <header {...props} className={cls`flex flex-col items-center ${className}`}>
      <h1>{title}</h1>

      <PostMetadata />

      {/* share */}
      <div></div>
    </header>
  );
}

export default PostHeader;
