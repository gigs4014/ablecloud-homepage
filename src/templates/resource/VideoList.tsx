'use client';

import { useMemo, useState } from 'react';

import { Pagination } from '@/components/ui';

const LIMIT = 12;

export function VideoList({ videosData }: { videosData: string[] }) {
  const [page, setPage] = useState<number>(1);

  const videoList = useMemo(() => {
    const chunkedArray = [];

    for (let i = 0; i < videosData.length; i += LIMIT) {
      chunkedArray.push(videosData.slice(i, i + LIMIT));
    }

    return chunkedArray[page - 1];
  }, [videosData, page]);

  return (
    <div className='w-full'>
      <div className='w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {videoList.map((v, idx) => {
          return (
            <div key={idx} className='flex items-center justify-center'>
              <iframe className='aspect-video w-full max-w-[464px]' allow='fullscreen' src={v} />
            </div>
          );
        })}
      </div>
      <Pagination count={videosData.length} limit={LIMIT} page={page} setPage={setPage} />
    </div>
  );
}
