import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Post } from '@/types';
import { cls } from '@/utils';

import PostContent from './PostContent';
import { PostContextProvider } from './PostContext';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

export interface PostArticleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  post: Post;
}

function PostArticle({ post, className, ...props }: PostArticleProps) {
  return (
    <PostContextProvider value={post}>
      <article
        {...props}
        className={cls`prose w-full !max-w-[836px] py-40 px-8 prose-headings:font-bold ${className}`}>
        <PostHeader />

        <PostContent className='w-full flex-1' />

        <PostFooter />
      </article>
    </PostContextProvider>
  );
}

export default PostArticle;
