import { DetailedHTMLProps, HTMLAttributes } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/types';
import { cls } from '@/utils';

import BackButton from '@/public/images/blog/BackButton.png';

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
        <Link href={'/blog'}>
          <div className='flex cursor-pointer items-center'>
            <div className='h-full'>
              <Image src={BackButton} />
            </div>
            <span className='ml-4 text-[14px]'>목록보기</span>
          </div>
        </Link>

        <PostHeader className='mt-4' />

        <div className='mt-6 h-[1px] bg-[#ccc]' />

        <PostContent className='w-full flex-1' />

        <PostFooter />
      </article>
    </PostContextProvider>
  );
}

export default PostArticle;
