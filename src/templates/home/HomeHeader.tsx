import { ReactNode } from 'react';

import Image from 'next/image';

import Slider from 'react-slick';

// import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/Ri';
import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

export interface HomeHeaderProps extends BaseComponentProps {
  title?: string;
  description?: ReactNode;
  headerExtra?: ReactNode;
  bgImage?: string;
  textColor?: string;
  bgVideo?: any;
  slideImg?: any;
  href?: URL;
  href2?: URL;
}

export default function HomeHeader({
  title,
  description,
  headerExtra,
  bgImage,
  className,
  bgVideo,
  slideImg,
  href,
  href2,
  textColor = 'text-white',
}: HomeHeaderProps) {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <header
      className={cls`not-prose relative flex h-full min-h-[670px] w-full justify-center overflow-hidden bg-cover ${bgImage} ${className}`}>
      <Slider {...options}>
        <div className='relative h-full min-h-[670px] w-full'>
          <video muted autoPlay loop playsInline className='absolute h-full w-full object-cover'>
            <source src={bgVideo} type='video/mp4' />
          </video>
          <div className='z-10 flex max-w-page-full items-center space-x-8 px-8'>
            <section className={`${textColor} text-center`}>
              <p className={'m-0 pt-24 pb-8 text-[42px] font-[800] leading-[52.42px]'}>{title}</p>
              {typeof description === 'string' ? (
                <p className={'m-0 text-[18px] font-[400] leading-[26.06px]'}>{description}</p>
              ) : (
                description
              )}
              {headerExtra && <div className={'mt-[40px] bg-transparent'}>{headerExtra}</div>}
            </section>
          </div>
        </div>

        <div className='slide relative h-full min-h-[670px] w-full'>
          <div className='z-10 flex h-full items-center justify-center'>
            <section
              className={`${textColor} absolute top-[225px] flex w-[547px] flex-wrap justify-center text-center`}>
              <div className='slide-cont mr-2 px-2 pt-2'>
                <Image src={slideImg} />
              </div>
              <div className='slide-cont slide-font px-3 py-1 text-left text-[22px] font-[700] leading-[26px]'>
                CLOUD
                <br />
                INFINITY
                <br />
                CONFERENCE
              </div>
              <p className='slide-font mt-4 flex-none text-[22px] font-[400] leading-[29px]'>
                함께할 때 무한히 확장되는 가능성, ABLESTACK 에코 플랫폼
              </p>
              <p className='slide-font my-10 text-[24px] font-[700] leading-[36px]'>
                2023.03.22 (수) 14:00 <br />더 세인트 구로 그랜드볼룸(6F)
              </p>
              <CustomLink className='hover:text-white' href={href}>
                <button className='slide-cont slide-font radius mr-6 h-[48px] w-[261px]'>
                  사전 신청 하기
                </button>
              </CustomLink>
              <CustomLink className='hover:text-white' href={href2}>
                <button className='slide-cont slide-font radius h-[48px] w-[261px]'>
                  자세히 보기
                </button>
              </CustomLink>
            </section>
          </div>
        </div>
      </Slider>
    </header>
  );
}
