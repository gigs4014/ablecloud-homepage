import { useRef } from 'react';

import { useScrollEvent } from '@/hooks/common';
import { useMountEffect } from '@/hooks/utils';

import { CarouselRef, DescriptionCard, SmallCard } from '@/components/common';
import { Container } from '@/components/layout';

import Logo_Article_2_1 from '@/public/images/new/company/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/company/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/company/article_2_3.svg';
import Logo_Article_4_1 from '@/public/images/new/company/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/company/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/company/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/company/article_4_4.svg';
import Logo_Article_4_5 from '@/public/images/new/company/article_4_5.svg';
import Logo_Article_4_6 from '@/public/images/new/company/article_4_6.svg';
import Logo_Article_4_7 from '@/public/images/new/company/article_4_7.svg';
import Logo_Article_5_1 from '@/public/images/new/company/article_5_1.svg';
import Logo_Article_5_2 from '@/public/images/new/company/article_5_2.svg';
import Logo_Article_5_3 from '@/public/images/new/company/article_5_3.svg';
import Logo_Article_6_1 from '@/public/images/new/company/article_6_1.svg';
import Logo_Article_6_2 from '@/public/images/new/company/article_6_2.svg';
import Logo_Article_6_3 from '@/public/images/new/company/article_6_3.svg';
import Logo_Article_6_4 from '@/public/images/new/company/article_6_4.svg';

export default function CompanyPage() {
  const carouselRef = useRef<CarouselRef>(null);

  const { addScrollEvent } = useScrollEvent();

  useMountEffect(() => {
    if (carouselRef.current && carouselRef.current.elementRef.current) {
      const carousel = carouselRef.current;
      const carouselElement = carouselRef.current.elementRef.current;
      return addScrollEvent('carousel auto scroll', carouselElement.offsetTop, () =>
        carousel.startAutoScroll(),
      );
    }
  });

  return (
    <>
      <section className='w-full'>
        {/* Head image */}
        <div className='flex h-[512px] w-full items-center justify-center bg-company-header-bg bg-cover'></div>

        <Container.Article className='text-center'>
          <Container.PageWidth containerClassName={'bg-backgroudGray'}>
            <header className='max-w-screen-md self-center'>
              <div className={'text-[30px] font-[900] leading-[37.44px] text-primary'}>
                Software Defined Data Center
              </div>

              <p className={'text-[18px] font-[400] leading-[26.06px]'}>
                우리는 단일 클라우드 플랫폼인 ABLESTACK을 통해 <br /> 데이터센터에 필요한 인프라와
                관리체계, 그리고 다양한 플랫폼을 제공함으로써 <br />
                소프트웨어로 정의된 새로운 개념의 데이터센터를 실현하고 고객에게 제공합니다.
              </p>
            </header>

            <section className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <DescriptionCard
                title='기업 클라우드 구축 '
                image={<Logo_Article_2_1 />}
                description={
                  <p className={'whitespace-nowrap text-[16px] font-[400]'}>
                    가상화, 소프트웨어 정의 기술로 단순화 되고
                    <br />
                    안정적인 인프라를 기업에 제공하여
                    <br />
                    레거시 인프라를 현대화 합니다.
                  </p>
                }
              />

              <DescriptionCard
                title='다양한 애플리케이션 제공'
                image={<Logo_Article_2_2 />}
                description={
                  <p className={'whitespace-nowrap text-[16px] font-[400]'}>
                    가상머신, 컨테이너 인프라 뿐 아니라 배포
                    <br />
                    자동화, 가상데스크톱, 빅데이터, 인공지능
                    <br />
                    등의 다양한 플랫폼을 통합하여 제공합니다.
                  </p>
                }
              />

              <DescriptionCard
                title='파트너 생태계 구성'
                image={<Logo_Article_2_3 />}
                description={
                  <p className={'whitespace-nowrap text-[16px] font-[400]'}>
                    다양한 파트너 솔루션 지원을 통해
                    <br />
                    ABLESTACK 만으로 모든 애플리케이션을
                    <br />
                    적용할 수 있도록 파트너들과 생태계를 구성합니다.
                  </p>
                }
              />
            </section>
          </Container.PageWidth>

          <Container.PageWidth>
            <div className={'text-[30px] font-[500] leading-[43.44px]'}>History</div>
            <div className={'flex justify-between px-[210px]'}>
              <div className={'text-left'}>
                <p className={'text-[24px] font-[700] leading-[34.75px]'}>2021</p>
                <p className={'text-[18px] font-[400] leading-[26.06px]'}>에이블클라우드의 출발</p>
                <p className={'my-0 text-[140px] font-[400] leading-[162.4px]'}>21</p>
                <p className={'leading-[26.06px text-[18px] font-[400]'}>
                  에이블클라우드는 21년에
                  <br />
                  설립된 회사입니다.
                </p>
              </div>
              <div className={'text-right'}>
                <p className={'text-[24px] font-[700] leading-[34.75px]'}>2022</p>
                <p className={'text-[18px] font-[400] leading-[26.06px]'}>현재 업적까지 단</p>
                <p className={'my-0 text-[140px] font-[400] leading-[162.4px] text-primary'}>1</p>
                <p className={'leading-[26.06px text-[18px] font-[400]'}>
                  에이블클라우드의
                  <br />
                  이유있는 자신감,
                </p>
              </div>
            </div>
            <div className={'flex justify-center gap-[16px] px-[170px]'}>
              <SmallCard className={`bg-[#83D1FF]`} value={'1'} title={'Major Upgrade'} />
              <SmallCard className={`bg-[#3CA3FF]`} value={'5'} title={'파트너'} />
              <SmallCard className={`bg-[#3281C4]`} value={'20'} title={'고객'} />
              <SmallCard className={`bg-[#104C95]`} value={'40'} title={'호스트'} />
              <SmallCard className={`bg-[#12426B]`} value={'100'} title={'가상머신'} />
              <SmallCard className={`bg-[#001F39]`} value={'2PB'} title={'스토리지'} />
            </div>
          </Container.PageWidth>

          {/* 데모 & Contact */}
          <Container.PageWidth containerClassName={'bg-backgroudGray'}>
            <div className={'text-[30px] font-[500]'}>ABLECLOUD가 시도하는 새로운 기업 인프라</div>

            <p className='mt-[18px] mb-[8px] text-[18px] font-[400]'>
              우리는 ABLESTACK을 어디서나 어느 애플리케이션 및 워크로드를 실행할 수 있는 클라우드
              인프라, 스토리지, 데이터베이스를 제공하며,
              <br />
              빅데이터, 인공지능, IoT를 위한 다양한 플랫폼을 제공할 수 있는 클라우드 단일 플랫폼으로
              개발하고 발전시킵니다.
            </p>

            <div className={'flex justify-center gap-[40px]'}>
              <Logo_Article_4_1 />
              <Logo_Article_4_2 />
              <Logo_Article_4_3 />
              <Logo_Article_4_4 />
              <Logo_Article_4_5 />
              <Logo_Article_4_6 />
            </div>
            <Logo_Article_4_7 />
          </Container.PageWidth>
          <Container.PageWidth>
            <div className={'text-[30px] font-[500]'}>단순함을 추구합니다.</div>

            <section className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <DescriptionCard
                containerClassName={'bg-backgroudGray'}
                title='하이퍼 컨버징'
                image={<Logo_Article_5_1 />}
                description={
                  <p className={'whitespace-nowrap text-[16px] font-[400]'}>
                    서버, 스토리지, 네트워크 장비를 따로 구입
                    <br />
                    하여 구성하는 인프라는 더 이상 그만.
                    <br />
                    x86 서버 로만 단순하게 구성한
                    <br />
                    인프라를 추구합니다.
                  </p>
                }
              />

              <DescriptionCard
                containerClassName={'bg-backgroudGray'}
                title='10분 내 구성'
                image={<Logo_Article_5_2 />}
                description={
                  <p className={'whitespace-nowrap text-[16px] font-[400]'}>
                    마법사를 통해 클라우드 환경을 <br />
                    단 10분 만에, <br />
                    그리고 쉽게 구성할 수 있어야 합니다. <br />
                  </p>
                }
              />

              <DescriptionCard
                containerClassName={'bg-backgroudGray'}
                title='원클릭 배포'
                image={<Logo_Article_5_3 />}
                description={
                  <p className={'whitespace-nowrap text-[16px] font-[400]'}>
                    사용자가 직접 단 한번의 클릭으로
                    <br />
                    가상머신과 컨테이너,
                    <br />
                    그리고 필요한 플랫폼과 애플리케이션을
                    <br />
                    배포할 수 있습니다.
                  </p>
                }
              />
            </section>
          </Container.PageWidth>
          <Container.PageWidth containerClassName={'bg-backgroudGray'}>
            <div className={'text-[30px] font-[500]'}>인증 및 특허권</div>
            <div className={'mt-[80px] flex justify-center gap-[133px]'}>
              <div>
                <Logo_Article_6_1 />
                <p>기업부설연구소 인정서</p>
              </div>
              <div>
                <Logo_Article_6_2 />
                <p>소프트웨어품질인정서</p>
              </div>
              <div>
                <Logo_Article_6_3 />
                <p>저작권 등록증</p>
              </div>
              <div>
                <Logo_Article_6_4 />
                <p>특허출원</p>
              </div>
            </div>
          </Container.PageWidth>
        </Container.Article>
      </section>
    </>
  );
}
