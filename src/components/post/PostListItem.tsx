import { useMemo } from 'react';

import dayjs from 'dayjs';

import { BaseComponentProps, Post } from '@/types';

import { PostContextProvider } from './PostContext';

export interface PostPreviewProps extends BaseComponentProps {
  post: Post;
  index?: number;
}

function PostListItem({ post, index, className }: PostPreviewProps) {
  const date = useMemo(() => {
    return dayjs(post.date).format('YYYY-MM-DD');
  }, [post.date]);

  const category = useMemo(() => {
    if (post.categories.includes('event')) {
      return '이벤트';
    } else if (post.categories.includes('news')) {
      return '뉴스';
    } else if (post.categories.includes('notice')) {
      return '공지사항';
    }
    return '';
  }, [post.categories]);

  return (
    <PostContextProvider value={post}>
      <div className='flex h-auto border-b-1 border-dotted border-[#C7C7C7] bg-white px-5 py-5 hover:bg-gray-50 md:px-10'>
        <div className='m-auto mr-4 w-[10%]'>{index}</div>
        <div className='hidden w-[10%] text-[#0085F2] lg:block'>{category}</div>
        <div className='m-auto w-[90%] md:w-[85%] lg:w-[70%]'>{post.slug}</div>
        <div className='hidden w-[15%] md:block'>{date}</div>
      </div>
    </PostContextProvider>
  );
}

export default PostListItem;
