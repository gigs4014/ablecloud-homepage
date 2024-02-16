import Image from 'next/image';
import Link from 'next/link';

import { NextSeo } from 'next-seo';

import Arrow_Icon from '@/public/images/blog/arrow.svg';
import Logo_Article_1_1 from '@/public/images/blog/ebook_1.png';

export default function VideoPage() {
  return (
    <>
      <NextSeo
        title='에이블클라우드 백서 / eBook'
        description='에이블클라우드 백서 / eBook'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/video',
          images: [
            {
              url: '',
              alt: '에이블클라우드 백서 / eBook',
            },
          ],
        }}
      />

      <div className='h-full min-h-[800px] w-full max-w-[1200px] pt-36 pb-12'>
        <div className='flex justify-center pb-6 text-[30px] font-bold'>백서 / eBook</div>
        <div className='px-8'>
          <div className='max-w-[379px] border border-[#D4D4D4]'>
            <Image src={Logo_Article_1_1} />
            <div className='flex flex-col gap-[10px] p-[16px]'>
              <div className='text-[12px] text-[#919191]'>ABLESTACK Technical White Paper</div>
              <div className='text-[16px] font-bold'>Blade Server? 이제는 HCI</div>
              <div className='text-[14px]'>
                블레이드 서버 또는 HCI 중 어떤 것을 도입해야 할까요?
              </div>
              <Link href='https://ablestor.com/public/upload/pdf/ABLESTACK_Technical_White_Paper.pdf'>
                <a
                  className='flex h-[47px] cursor-pointer items-center gap-[10px] text-[14px] font-bold text-[#0085F2]'
                  target='_blank'>
                  백서 바로보기
                  <Arrow_Icon />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
