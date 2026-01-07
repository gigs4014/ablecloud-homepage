import Image from 'next/image';

import {
  aboutEffectCardsData,
  aboutEffectHeaderData,
  aboutEffectUseCaseCardsData,
} from '@/constants/about';

import { AboutCards, AboutUseCase } from '@/templates/about';
import { ContentWrapper, MainPageHeader } from '@/templates/common';

import useCaseMainSrc from '@/public/images/about/about-effect-usecase-main.png';

export default function AboutEffect() {
  return (
    <>
      <MainPageHeader headerData={aboutEffectHeaderData} />
      <ContentWrapper type='default' bgClassName='bg-[#161616]'>
        <AboutCards
          cardsData={aboutEffectCardsData}
          title='영상감시 시스템을 위한 최적의 가상화 및 HCI 플랫폼'
          girdColsClassName={'grid-cols-1 xsm:grid-cols-[repeat(auto-fit,_minmax(345px,1fr))]'}
        />
      </ContentWrapper>
      <ContentWrapper type='default' bgClassName='bg-[#161616]' isNonePaddingTop={true}>
        <AboutUseCase
          description={
            'ABLESTACK은 상주시청의 도시 안전을 위한 영상감시 시스템의 효율적 운영을 위해 도입되어 운용 중입니다.'
          }>
          <div className='flex flex-col xl:flex-row gap-6 py-[10px]'>
            <div className='flex-1 flex items-center justify-center'>
              <Image src={useCaseMainSrc} alt='' />
            </div>
            <div className='flex flex-col flex-1 gap-[10px]'>
              <div className='flex flex-col items-start gap-6 py-5'>
                <div className='text-[#0085F2]'>상주시청</div>
                <div>영상 감시 인프라 HCI 전환</div>
              </div>
              <div className='grid grid-cols-1 xsm:grid-cols-[repeat(auto-fit,_minmax(218px,1fr))] gap-5'>
                {aboutEffectUseCaseCardsData.map((v, idx) => (
                  <div
                    key={idx}
                    className='flex flex-col items-center bg-[#1B1B1B] border border-[#333] rounded-[20px] text-center py-[25px] px-[39px] gap-[15px]'>
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
