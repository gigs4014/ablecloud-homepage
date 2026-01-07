import { Button } from '@/components/ui';

import { BlogData } from '@/types/resource';

import { Link } from '@/i18n/routing';

export function HomeBlogCards({
  title,
  postsData,
  detailText,
}: {
  title: string;
  postsData: BlogData[];
  detailText: string;
}) {
  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
        {title}
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6'>
        {postsData.map((v, idx) => {
          return (
            <Link
              href={`/resource/blog/${v.metaData.id}`}
              key={v.metaData.id}
              className={`group flex items-center py-4 sm:items-start flex-row sm:flex-col sm:py-0 ${idx === 0 ? 'border-y border-y-[#eee]' : 'border-b border-b-[#eee]'} sm:border-none`}>
              <div className='relative max-h-[80px] sm:max-h-[200px] h-full min-w-[134px] max-w-[134px] sm:min-w-full sm:max-w-full overflow-hidden rounded-[12px] border border-[#1E1E1E1A] border-opacity-10'>
                <img
                  src={v.metaData.mainImgSrc}
                  className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                />
              </div>
              <div className='w-full px-3 pt-2 pb-2 sm:pt-4'>
                <div className='font-bold sm:truncate'>{v.metaData.title}</div>
                <div className='mt-2 text-[#aaa] text-[14px] font-medium'>
                  {v.metaData.updatedAt}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Button
        className='border border-[#202020]'
        text={detailText}
        href='/resource/blog'
        color='white'
      />
    </div>
  );
}
