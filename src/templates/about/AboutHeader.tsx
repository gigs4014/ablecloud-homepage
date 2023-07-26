import Image from 'next/image';

import { cls } from '@/utils';

interface AboutHeaderProps {
  bgImage: string;
  contentImage: StaticImageData;
  title: string;
  description: string;
}

const AboutHeader = ({ headerData }: { headerData: AboutHeaderProps }) => {
  const { bgImage, contentImage, description, title } = headerData;

  return (
    <div className={cls`relative !flex h-[560px] w-full bg-cover ${bgImage}`}>
      <div className='m-auto flex w-full max-w-page-full items-center justify-between'>
        <div className='mx-[40px] text-white'>
          <div className='mb-[32px] max-w-[455px] text-[32px] font-extrabold leading-[43.57px]'>
            {title}
          </div>
          <div className='mb-[32px] max-w-[594px] text-[16px] leading-[24.52px]'>{description}</div>
        </div>
        <div className='hidden lg:flex'>
          <Image src={contentImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
