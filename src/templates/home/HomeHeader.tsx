// import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/Ri';
import { ReactNode } from 'react';

import Image from 'next/image';

import Slider from 'react-slick';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { Button, CustomLink } from '@/components/common';

export interface SliderData {
  bgImage: string;
  contentImage: StaticImageData;
  href: string;
  title: string;
  description: string;
  isBlank?: boolean;
}

export interface HomeHeaderProps extends BaseComponentProps {
  title?: string;
  description?: ReactNode;
  headerExtra?: ReactNode;
  bgImage?: string;
  textColor?: string;
  sliderData: SliderData[];
  href?: string;
}

export default function HomeHeader({
  className,
  sliderData,
  textColor = 'text-white',
}: HomeHeaderProps) {
  const options = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Slider {...options} className='not-prose'>
      {sliderData.map(({ title, description, bgImage, contentImage, href, isBlank }, index) => {
        return (
          <div key={index} className={cls`relative !flex h-[560px] w-full bg-cover ${bgImage}`}>
            <div className='m-auto flex w-full max-w-page-full items-center justify-between'>
              <div className='mx-[40px] text-white'>
                <div className='mb-[32px] max-w-[455px] text-[32px] font-extrabold leading-[43.57px]'>
                  {title}
                </div>
                <div className='mb-[32px] max-w-[650px] text-[16px] leading-[24.52px]'>
                  {description}
                </div>
                <CustomLink href={href} isBlank={isBlank}>
                  <Button
                    className={'mt-5 w-full max-w-[240px] !border-[white] !text-[white]'}
                    bordered>
                    자세히보기
                  </Button>
                </CustomLink>
              </div>
              <div className='hidden lg:flex'>
                <Image src={contentImage} />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
