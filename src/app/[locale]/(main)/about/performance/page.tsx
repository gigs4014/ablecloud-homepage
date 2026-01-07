import Image from 'next/image';

import {
  aboutPerformanceCardsData,
  aboutPerformanceHeaderData,
  aboutPerformanceUseCaseCardsData,
} from '@/constants/about';

import { AboutCards, AboutUseCase } from '@/templates/about';
import { ContentWrapper, MainPageHeader } from '@/templates/common';

export default function AboutPerformance() {
  return (
    <>
      <MainPageHeader headerData={aboutPerformanceHeaderData} />
      <ContentWrapper type='default' bgClassName='bg-[#161616]'>
        <AboutCards
          cardsData={aboutPerformanceCardsData}
          title='가상데스크톱을 위한 최적의 플랫폼'
          girdColsClassName={'grid-cols-1 xsm:grid-cols-[repeat(auto-fit,_minmax(272px,1fr))]'}
        />
      </ContentWrapper>
      <ContentWrapper type='default' bgClassName='bg-[#161616]' isNonePaddingTop={true}>
        <AboutUseCase
          description={
            <>
              ABLESTACK은 효율적인 교육환경 제공을 위해 <strong>Tilon DStation</strong>를 사용하여
              경남정보대학에 가상데스크톱 환경을 구축하여 교육현장에 활용 중입니다.
            </>
          }>
          <div className='flex flex-col xl:flex-row gap-6 py-[10px]'>
            <iframe
              className='xl:flex-1'
              height={400}
              src='https://www.youtube.com/embed/4xAH-T0Ta_w'
              title='[틸론 2022 Tilon Tech DAY] Istation'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
            <div className='flex flex-col gap-[10px]'>
              <div className='flex flex-col items-start gap-6 py-5'>
                <div className='text-[#0085F2]'>경남정보대학</div>
                <div>교육용 가상화 데스크톱(VDI) 구축</div>
              </div>
              <div className='flex flex-col xsm:flex-row gap-4'>
                {aboutPerformanceUseCaseCardsData.map((v, idx) => (
                  <div
                    key={idx}
                    className='flex flex-col items-center xl:min-w-[338px] xsm:max-w-[338px] w-full bg-[#1B1B1B] border border-[#333] rounded-[20px] text-center py-[25px] px-[39px] gap-[15px]'>
                    <Image src={v.imgSrc} alt='' />
                    <div>{v.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AboutUseCase>
      </ContentWrapper>
    </>
  );
}
