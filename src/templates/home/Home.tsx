import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/types';

import { Button } from '@/components/common';
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
        <div className='not-prose relative flex h-[560px] justify-center bg-home-header-bg-6 bg-cover'>
          <div className='flex w-page-full flex-col gap-[50px] pt-[120px]'>
            <div className='flex flex-col items-start gap-[40px] px-4'>
              <div className='max-w-[454px] text-[30px] font-extrabold leading-normal text-white lg:text-[36px]'>
                외산 가상화 구독형 라이선스를 단일 HCI 플랫폼으로
              </div>
              <div className='max-w-[431px] text-[14px] text-white lg:text-[18px]'>
                ABLESTACK은 모든 기능이 단일 영구 라이선스로 제공되며 기존의 외산 구독형 가상화
                인프라를 쉽게 전환할 수 있어 최소 35% 비용을 절감할 수 있습니다.
              </div>
              <div>
                <Button
                  className='border-1 border-white !bg-transparent px-[72px] text-[16px] !font-bold text-white'
                  onClick={() => {
                    window.open(
                      'https://ablestor.com/public/upload/pdf/ABLESTACK_VMWare.pdf',
                      '_blank',
                    );
                  }}>
                  자세히보기
                </Button>
              </div>
            </div>

            {/* <ImageSlider /> */}
          </div>
        </div>
        {/* <CustomSlider settingsOverrides={headerSliderSettings}>
          {headerContents.map(headerContent => (
            <HomeHeader key={uuid()} {...headerContent} />
          ))}
        </CustomSlider> */}

        {children}
      </Container.Article>
    </>
  );
}

export default HomeTemplate;
