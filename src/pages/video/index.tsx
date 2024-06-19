import { NextSeo } from 'next-seo';

const videoList = [
  'https://www.youtube.com/embed/6xLcY16LpgM',
  'https://www.youtube.com/embed/GHl3-2tg2b0',
];

export default function VideoPage() {
  return (
    <>
      <NextSeo
        title='에이블스택 소개'
        description='에이블스택 소개'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/video',
          images: [
            {
              url: '',
              alt: '에이블스택 소개',
            },
          ],
        }}
      />

      <div className='h-full min-h-[800px] w-full max-w-[1200px] pt-36 pb-12'>
        <div className='flex justify-center pb-6 text-[30px] font-bold'>튜토리얼 영상</div>
        <div className='px-8'>
          <div className='py-8 text-[24px] font-bold'>에이블스택 소개</div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {videoList.map((link, index) => {
              return (
                <div key={index} className='flex items-center justify-center'>
                  <iframe
                    className='h-[242px] w-full max-w-[379px]'
                    allow='fullscreen'
                    src={link}></iframe>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
