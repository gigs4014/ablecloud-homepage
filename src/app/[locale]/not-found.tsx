import Image from 'next/image';

import { Footer, Header } from '@/components/layout';
import { Button } from '@/components/ui';

import notFoundSrc from '@/public/images/common/not-found.png';

export default function NotFound() {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex-1 bg-white'>
        <Header isBgBlack />
        <div className='flex flex-col items-center text-center pt-[100px] md:pt-[160px]'>
          <div className='flex flex-col gap-5'>
            <Image src={notFoundSrc} alt='' />
            <div className='text-[#444444] font-medium'>페이지를 찾을 수 없습니다.</div>
          </div>
          <Button href='/' text=' 메인 페이지로 이동' className='mt-[35px]' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
