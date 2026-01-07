'use client';

import { useMemo, useState } from 'react';

import { Pagination } from '@/components/ui';

import { BlogData } from '@/types/resource';

import { Link } from '@/i18n/routing';

const LIMIT = 10;

export function BlogList({ postsData }: { postsData: BlogData[] }) {
  const [page, setPage] = useState<number>(1);

  const postList = useMemo(() => {
    const chunkedArray = [];

    for (let i = 0; i < postsData.length; i += LIMIT) {
      chunkedArray.push(postsData.slice(i, i + LIMIT));
    }

    return chunkedArray[page - 1];
  }, [postsData, page]);

  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[960px] w-full flex flex-col'>
        <div className='flex items-center h-[56px] text-center border-t-2 border-[#202020] bg-[#f6f7f8] border-b border-b-[#eee]'>
          <div className='min-w-[70px]'>번호</div>
          <div className='flex-1'>제목</div>
        </div>
        {postList.map(v => {
          return (
            <Link
              href={`/resource/blog/${v.metaData.id}`}
              key={v.metaData.id}
              className='flex items-center min-h-[56px] border-b border-b-[#eee]'>
              <div className='min-w-[70px] text-center'>{v.metaData.id}</div>
              <div className='flex-1 px-1 sm:px-6'>{v.metaData.title}</div>
            </Link>
          );
        })}
        <Pagination count={postsData.length} limit={LIMIT} page={page} setPage={setPage} />
      </div>
    </div>
  );
}
