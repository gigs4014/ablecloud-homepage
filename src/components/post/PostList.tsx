import { useMemo, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Pagination } from 'antd';

import { Post } from '@/types';

import { Button, CustomLink } from '../common';
import PostListItem from './PostListItem';

export interface PostListProps {
  posts: Post[];
  categories: string[];
}

function PostList({ posts, categories }: PostListProps) {
  const router = useRouter();

  const [page, setPage] = useState<number>(1);

  const postList: Post[][] = useMemo(() => {
    const postArray: Post[][] = [];

    // posts 를 10개씩 담고있는 2중 배열을 만드는 로직
    posts.forEach((post, index) => {
      const postIndex = Math.floor(index / 10);
      if (postArray[postIndex] === undefined) {
        postArray[postIndex] = [];
      }
      postArray[postIndex].push(post);
    });

    return postArray;
  }, [posts]);

  return (
    <article className='m-auto min-h-[700px] w-full max-w-[900px] px-8 pt-36 pb-16'>
      <div className='text-[14px] font-medium'>
        {router.pathname.includes('/blog/admin') && (
          <div className='mb-4 flex justify-end'>
            <Link href='/blog/admin/write'>
              <Button style={{ background: '#0085F2' }}>작성</Button>
            </Link>
          </div>
        )}
        <div className='flex  border-y-1 border-solid border-black bg-white px-10 py-5'>
          <div className='h-5 w-[10%]'>번호</div>
          <div className='h-5 w-[10%] text-[#0085F2]'>카테고리</div>
          <div className='h-5 w-[70%]'>제목</div>
          <div className='h-5 w-[10%]'>업로드일</div>
        </div>
        {postList.length > 0 &&
          postList[page - 1].map((post, index) => (
            <div className=' h-full w-full' key={post.slug}>
              <CustomLink
                href={`/${[...post.categories, post.slug].join('/')}`}
                hoverBehavior='none'>
                <PostListItem post={post} index={posts.length - index - (page - 1) * 10} />
              </CustomLink>
            </div>
          ))}
      </div>
      <Pagination
        defaultCurrent={page}
        total={posts.length}
        onChange={page => {
          setPage(page);
        }}
        className='mt-5 flex justify-center'
      />
    </article>
  );
}

export default PostList;
