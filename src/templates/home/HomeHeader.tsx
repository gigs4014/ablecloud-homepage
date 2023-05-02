import { ReactNode } from 'react';

// import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/Ri';
import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface HomeHeaderProps extends BaseComponentProps {
  title?: string;
  description?: ReactNode;
  headerExtra?: ReactNode;
  bgImage?: string;
  textColor?: string;
  bgVideo?: any;
  slideImg?: any;
  href?: string;
  href2?: string;
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
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <header
      className={cls`not-prose relative flex h-full min-h-[670px] w-full justify-center overflow-hidden bg-cover ${bgImage} ${className}`}>
      {/* <Slider {...options}> */}
      {/* <div className='slide relative h-full h-[670px] w-full'>
        <div className='z-10 flex h-full items-center justify-center pt-14'>
          <section className={`${textColor} grid w-[340px] grid-cols-6 text-center md:w-[547px]`}>
            <div className='col-span-4 mr-2 bg-[#350069] px-2 pt-2'>
              <Image src={slideImg} />
            </div>
            <div className='slide-font col-span-2 bg-[#350069] px-3 py-1 text-left text-[14px] font-[700] leading-[18px] md:text-[22px] md:leading-[26px]'>
              CLOUD
              <br />
              INFINITY
              <br />
              CONFERENCE
            </div>
            <p className='slide-font col-span-6 mt-4 flex-none text-[14px] font-[400] leading-[15px] md:text-[22px] md:leading-[29px]'>
              함께할 때 무한히 확장되는 가능성, ABLESTACK 에코 플랫폼
            </p>
            <p className='slide-font col-span-6 my-6 text-[16px] font-[700] leading-[25px] md:my-10 md:text-[24px] md:leading-[36px]'>
              2023.03.22 (수) 14:00 <br />더 세인트 구로 그랜드볼룸(6F)
            </p>
            <a className='col-span-3 pr-3' href={href}>
              <button className='slide-cont slide-font radius h-[35px] w-full bg-white text-[18px] leading-[21px] text-[rgb(123,1,244)] md:h-[48px]'>
                사전 신청 하기
              </button>
            </a>
            <a className='col-span-3 pl-3' href={href2}>
              <button className='slide-cont slide-font radius h-[35px] w-full bg-[rgb(123,1,244)] text-[18px] md:h-[48px]'>
                자세히 보기
              </button>
            </a>
          </section>
        </div>
      </div> */}

      <div className='relative h-[670px] w-full'>
        <video muted autoPlay loop playsInline className='absolute h-full w-full object-cover'>
          <source src={bgVideo} type='video/mp4' />
        </video>
        <div className='z-11 relative flex h-full w-full items-center justify-center space-x-8 px-8'>
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
      {/* </Slider> */}
    </header>
  );
}
