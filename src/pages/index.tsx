import { useEffect, useState } from 'react';

import { NextSeo } from 'next-seo';

import { Button, CustomLink } from '@/components/common';
import {
  CommonDemoContent,
  HomeContent,
  HomeHeaderProps,
  HomeTemplate,
  SliderData,
} from '@/templates';

import Logo_Article_2_1 from '@/public/images/new/home/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/home/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/home/article_2_3.svg';
import Logo_Article_3_1 from '@/public/images/new/home/article_3_1.svg';
import Logo_Article_3_2 from '@/public/images/new/home/article_3_2.svg';
import Logo_Article_3_3 from '@/public/images/new/home/article_3_3.svg';
import Logo_Article_3_4 from '@/public/images/new/home/article_3_4.svg';
import Logo_Article_4_1 from '@/public/images/new/home/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/home/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/home/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/home/article_4_4.svg';
import Logo_Article_4_5 from '@/public/images/new/home/article_4_5.svg';
import Header_Content_1 from '@/public/images/new/home/header-image-1.png';
import Header_Content_2 from '@/public/images/new/home/header-image-2.png';
import Header_Content_3 from '@/public/images/new/home/header-image-3.png';

const sliderData: SliderData[] = [
  {
    title: '단일 플랫폼으로 기존의 복잡한 인프라에 대한 고민 해결',
    description:
      'ABLESTACK은 서버, 스토리지, 네트워크 인프라를 제공하는 단일 HCI 플랫폼으로 기존 인프라 대비 IT운영 비용이 최대 80% 절감됩니다.',
    href: '/about/infra',
    bgImage: 'bg-home-header-bg-1',
    contentImage: Header_Content_1,
  },
  {
    title: '단일 플랫폼으로 기존의 복잡한 인프라에 대한 고민 해결',
    description:
      'ABLESTACK은 서버, 스토리지, 네트워크 인프라를 제공하는 단일 HCI 플랫폼으로 기존 인프라 대비 IT운영 비용이 최대 80% 절감됩니다.',
    href: '/about/performance',
    bgImage: 'bg-home-header-bg-2',
    contentImage: Header_Content_2,
  },
  {
    title: '영상감시 인프라, HCI를 통해 공간 절약,기존장비 재활용으로 혁신',
    description:
      'ABLESTACK는 단일 HCI 플랫폼을 통해 영상감시 인프라를 단순화 시켜 공간을 절약하면서도 높은 성능을 제공하며, 기존 장비와의 호환성 제공으로 기존 영상데이터의 안정적 운영을 보장합니다.',
    href: '/about/effect',
    bgImage: 'bg-home-header-bg-3',
    contentImage: Header_Content_3,
  },
];

const headerContents = (fontSize: string): HomeHeaderProps[] => [
  {
    sliderData: sliderData,
  },
];

export default function HomePage() {
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    const width = window.outerWidth;
    if (width <= 407) setFontSize('text-[14px]');
    else setFontSize('text-[18px]');
  }, []);

  return (
    <>
      <NextSeo
        title='HCI 솔루션 개발 전문기업 에이블 클라우드'
        description='하이퍼컨버지드인프라(HCI) 개발 전문업체입니다.'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/',
          images: [
            {
              url: '',
              alt: '에이블클라우드',
            },
          ],
        }}
      />
      <HomeTemplate headerContents={headerContents(fontSize)}>
        <HomeContent
          title='SDDC를 실현하는 HCI 플랫폼'
          description={
            <p className='m-0 mb-[25px] p-0 text-[16px] font-[400] leading-[23.17px]'>
              가상화 및 소프트웨어 정의 기술을 이용한 하이퍼 컨버지드 인프라 플랫폼 ABLESTACK을 통해
              컴퓨팅, 스토리지, 가상화, 네트워크를 사용하고 관리할 수 있는 엔터프라이즈 클라우드
              데이터센터를 구축할 수 있습니다.
            </p>
          }>
          <div className='mt-8 grid w-full max-w-page-full grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3'>
            <CustomLink href={'/company'}>
              <HomeContent.ItemGrid
                containerClassName='border-borderGrayColor border-1'
                title='단일 클라우드 플랫폼'
                image={<Logo_Article_2_1 />}
                linkText={<span>에이블클라우드가 하는 일</span>}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href={'/products/ablestack'}>
              <HomeContent.ItemGrid
                containerClassName='border-borderGrayColor border-1'
                title='웹기반 통합 관리 플랫폼'
                image={<Logo_Article_2_2 />}
                linkText={<span>자세히 알아보기</span>}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href={'/solutions'}>
              <HomeContent.ItemGrid
                containerClassName='border-borderGrayColor border-1'
                title='새로운 개념의 데이터센터'
                image={<Logo_Article_2_3 />}
                linkText={<span>지금 시작하기</span>}
                hoverBehavior={'scale'}
              />
            </CustomLink>
          </div>
        </HomeContent>

        <HomeContent
          className={'bg-backgroudGray text-[#444444]'}
          title='ABLESTACK을 선택해야 하는 이유'>
          <section className='mx-4 mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <HomeContent.RowSummaryCard
              title='단순한 구조'
              image={<Logo_Article_3_1 />}
              description='서버, 네트워크, 스토리지를 하나의 장비로 통합하여
                  물리적인 인프라 구조를 단순화합니다.'
            />

            <HomeContent.RowSummaryCard
              title='확장성이 우수한 유연 인프라'
              image={<Logo_Article_3_2 />}
              description='인프라를 추가적으로 확장해야할 때, 무중단 상태로
                  서버를 추가할 수 있습니다.'
            />

            <HomeContent.RowSummaryCard
              title='자동 자가 복구'
              image={<Logo_Article_3_3 />}
              description='물리적인 장애 발생 시에도 중지되지 않으며,
                  일정 시간 경과 후 자가 복구를 실시합니다.'
            />

            <HomeContent.RowSummaryCard
              title='기존 인프라 대비 80% 절감'
              image={<Logo_Article_3_4 />}
              description='서버, 네트워크, 스토리지를 하나의 장비로 통합하여
                  물리적인 인프라 구조를 단순화합니다.'
            />
          </section>
        </HomeContent>

        <HomeContent
          title='국내 최초의 HCI, ABLESTACK을 선택한 기업들'
          description={
            <p className='m-0 mb-[50px] p-0 text-[16px] font-[400] leading-[23.17px]'>
              에이블스택을 사용 후 혁신을 이룩한 기업들 입니다.
            </p>
          }>
          <div className={'grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-5'}>
            <Logo_Article_4_1 />
            <Logo_Article_4_2 />
            <Logo_Article_4_3 />
            <Logo_Article_4_4 />
            <Logo_Article_4_5 />
          </div>
          <div className='flex justify-center'>
            <CustomLink href='/interview' hoverBehavior='none'>
              <Button solid style={{ backgroundColor: '#2BBBE6' }} className='mt-12'>
                성공사례 확인하기
              </Button>
            </CustomLink>
          </div>
        </HomeContent>

        {/* 데모 & Contact */}
        <HomeContent
          className={'bg-backgroudGray text-[#444444]'}
          title='보다 더 자세한 자료와 컨설팅을 받아보세요.'
          description={
            <p className='m-0 mb-[25px] mt-3.5 p-0 text-[16px] font-[400] leading-[23.17px]'>
              단순한 구조로 IT 서비스에 필요한 모든 인프라를 제공할 뿐만 아니라, 단 1시간 이내에
              사용자 사이트에 HCI 인프라를 구성하고 클라우드 서비스를 시작할 수 있습니다.
              에이블스택을 바로 사용해보세요.
            </p>
          }>
          <CommonDemoContent />
        </HomeContent>
        {/* <HomeContent
          className={'bg-backgroundBlue pb-0 text-white'}
          title='I Station, 가상화 데스크톱 결합 HCI 어플라이언스'
          description={
            <p className='mt-3.5 w-full max-w-[900px] text-[16px] font-[400] leading-[23.17px] '>
              Isation은 통합 하이퍼 컨버지드 인프라(Hyper-Converged Infrastucture)로서, 컴퓨팅,
              스토리지, 네트워크 기능을 단일 어플라이언스로 통합하여 쉽고 빠른 클라우드 가상화 구축
              환경을 제공합니다.
            </p>
          }>
          <div className='flex justify-center'>
            <CustomLink hoverBehavior='none'>
              <Button bordered className='mt-12 bg-white'>
                Isation 보러가기
              </Button>
            </CustomLink>
          </div>
        </HomeContent> */}
      </HomeTemplate>
    </>
  );
}
