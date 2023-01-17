import { ReactNode } from 'react';

import Image from 'next/image';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import BackButton from '@/public/images/new/interview/BackButton.png';

export interface InterViewHeaderProps extends BaseComponentProps {
  title: string;
  description: ReactNode;
  image?: ReactNode;
  bgImage?: string;
  textColor?: string;
}

export interface ClientHeader {
  title: string;
  bgImage: ReactNode;
}

export function InterViewClientHeader({ title, bgImage }: ClientHeader) {
  return (
    <>
      <header className={`relative flex h-[410px] justify-center bg-cover ${bgImage} `}>
        <div className='flex w-full max-w-page-full'>
          <section className='ml-8 mt-32'>
            <div onClick={() => history.back()} className='flex'>
              <div className=' h-full '>
                <Image src={BackButton} />
              </div>
              <label className='ml-4 text-[14px] text-white'>모든 성공사례</label>
            </div>
            <p className='mt-16 text-[42px] font-black text-white'>{title}</p>
          </section>
        </div>
      </header>
    </>
  );
}

export default function InterViewHeader({
  title,
  description,
  image,
  bgImage,
  className,
}: InterViewHeaderProps) {
  return (
    <header
      className={cls`relative flex h-[560px] w-full justify-center bg-cover py-16 ${bgImage} ${className}`}>
      <div className='flex max-w-page-full items-center justify-between space-x-8 px-8'>
        {/* info */}
        <section className={`w-full text-[#444444] md:w-1/2 lg:w-1/2 `}>
          <p className={'whitespace-nowrap text-[42px] font-[900] leading-[52.42px]'}>{title}</p>
          {typeof description === 'string' ? (
            <p className={'text-[18px] font-[400] leading-[26.06px]'}>{description}</p>
          ) : (
            description
          )}
        </section>
        {/* image */}
        <section className='hidden w-1/2 overflow-visible md:flex md:justify-end lg:flex lg:justify-end'>
          {image}
        </section>
      </div>
    </header>
  );
}
