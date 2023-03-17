import { Fragment, ReactNode, useRef } from 'react';

import { CustomLink } from '@/components/common';
import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';
import Image from 'next/image';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/Ri';

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
  const slideRef1 = useRef<HTMLDivElement>(null);
  const slideRef2 = useRef<HTMLDivElement>(null);
  const slideRef3 = useRef<HTMLDivElement>(null);
  const slideRef4 = useRef<HTMLDivElement>(null);

  const leftVal = ['left-[200%]', 'left-[0]', 'left-[300%]', 'left-[100%]'];

  let idx: number = 0;

  const leftMove = () => {
    clearInterval(slideInterval);
    idx++;
    slideInterval = setInterval(slide, 4500);
  }
  const slide = () => {
    const target: any = [slideRef1.current, slideRef2.current, slideRef3.current, slideRef4.current];

    if (target[idx]) {
      target[idx % 4].style.transition = "4s";
      target[(idx + 1) % 4].style.transition = "4s";
      target[idx % 4].style.left = "-100%";
      target[(idx + 1) % 4].style.left = "0";

      target[(idx + 2) % 4].style.transition = "none";
      target[(idx + 2) % 4].style.left = '100%';
      idx++;
    }
  }

  let slideInterval = setInterval(slide, 4500);

  let slideLeng: Array<number> = [1, 0];

  return (
    <header
      className={cls`not-prose relative flex h-full min-h-[670px] w-full justify-center overflow-hidden bg-cover ${bgImage} ${className}`}>
      <div className='w-full h-full absolute' >
        {slideLeng.map(v => {
          return (
            <Fragment key={v}>
              <div className={`slide w-full h-full absolute ${leftVal[v]}`} ref={v ? slideRef1 : slideRef3}>
                <div className='z-10 flex items-center justify-center h-full'>
                  <section className={`${textColor} text-center justify-center flex w-[547px] flex-wrap absolute top-[225px]`}>
                    <div className='slide-cont px-2 pt-2 mr-2'><Image src={slideImg} /></div>
                    <div className='slide-cont slide-font text-[22px] font-[700] leading-[26px] text-left px-3 py-1'>
                      CLOUD<br />INFINITY<br />CONFERENCE
                    </div>
                    <p className='slide-font leading-[29px] text-[22px] font-[400] flex-none mt-4'>함께할 때 무한히 확장되는 가능성, ABLESTACK 에코 플랫폼</p>
                    <p className='slide-font leading-[36px] text-[24px] font-[700] my-10'>2023.03.22 (수) 14:00 <br />더 세인트 구로 그랜드볼룸(6F)</p>
                    <CustomLink className='hover:text-white' href={href}><button className='slide-cont slide-font radius w-[261px] h-[48px] mr-6'>사전 신청 하기</button></CustomLink>
                    <CustomLink className='hover:text-white' href={href2}><button className='slide-cont slide-font radius w-[261px] h-[48px]'>자세히 보기</button></CustomLink>
                  </section>
                </div>
              </div>

              <div className={`absolute w-full h-full ${leftVal[v + 2]}`} ref={v ? slideRef2 : slideRef4}>
                <video muted autoPlay loop playsInline className='absolute h-full w-full object-cover'>
                  <source src={bgVideo} type='video/mp4' />
                </video>
                <div className='z-10 flex max-w-page-full items-center space-x-8 px-8'>
                  {/* info */}
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
            </Fragment>
          )
        }
        )}
      </div>


      {<div className='absolute bottom-[20px] flex'>
        <RiArrowLeftSLine className={`${textColor} text-[40px] cursor-[pointer]`} onClick={leftMove} />
        <input type="radio" className='mr-[10px]' name='slide' checked />

        <input type="radio" name='slide' />
        <RiArrowRightSLine className={`${textColor} text-[40px] cursor-[pointer]`} />
      </div>}
    </header>
  );
}
