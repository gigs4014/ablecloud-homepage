import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/types';

import { Button } from '@/components/common';
import ImageSlider from '@/components/common/ImageSlider/ImageSlider';
import { Container } from '@/components/layout';

import { HomeHeaderProps } from './HomeHeader';

export interface HomeTemplateProps extends BaseComponentProps {
  enableProseSpacing?: boolean;
  headerContents: HomeHeaderProps[];
}

const headerSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 10000,
};

function HomeTemplate({
  children,
  className,
  enableProseSpacing = true,
  headerContents,
}: PropsWithChildren<HomeTemplateProps>) {
  return (
    <>
      <Container.Article enableProseSpacing={enableProseSpacing} className={className}>
        {/* <CustomSlider settingsOverrides={headerSliderSettings}> */}

        <div className='not-prose relative h-[560px] bg-home-header-bg-4 bg-cover'>
          <div className='flex flex-col items-center justify-center gap-[50px] pt-[120px]'>
            <div className='flex flex-col items-center gap-4 px-4'>
              <div className='text-center text-[30px] font-extrabold text-white lg:text-[42px]'>
                CLOUD INFINITY CONFERENCE 2024
              </div>
              <div className='text-center text-[22px] font-bold text-[#18EE94] lg:text-[30px]'>
                클라우드 인피니티 컨퍼런스 2024에 귀하를 초대합니다.
              </div>
            </div>
            <Button
              className='!bg-[#18EE94] px-[72px] text-[16px] !font-bold text-black'
              onClick={() => {
                window.open('https://cic2024.framer.website/', '_blank');
              }}>
              사전 신청 하기
            </Button>

            <ImageSlider />
          </div>
        </div>

        {/* {headerContents.map(headerContent => (
          <HomeHeader key={uuid()} {...headerContent} />
        ))} */}
        {/* </CustomSlider> */}

        {children}
      </Container.Article>
    </>
  );
}

export default HomeTemplate;
