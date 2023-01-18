import { useEffect, useState } from 'react';

import Link from 'next/link';

import { ReactNode } from '@mdx-js/react/lib';
import { NextSeo } from 'next-seo';

import { Button, CustomLink, CustomSlider } from '@/components/common';
import { CommonDemoContent, HomeContent, HomeHeaderProps, HomeTemplate } from '@/templates';

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

interface LogoData {
  title: string;
  src: ReactNode;
  href?: string;
}

const headerContents = (fontSize: string): HomeHeaderProps[] => [
  {
    title: 'Cloud Innovation 2023',
    description: (
      <div className={`m-0 p-0 ${fontSize} font-[400] leading-[26.06px]`}>
        <p className='m-auto w-full max-w-[350px]'>
          에이블클라우드의 국산 HCI 솔루션 ‘ABLESTACK’ 그리고 Eco System 솔루션 소개 세미나
        </p>
        <br />
        <p> Cloud Innovation 2023에 참석해주신 모든 분들께 감사의 인사를 드립니다.</p>
      </div>
    ),
    bgImage: 'bg-home-header-bg-3',
    headerExtra: (
      <Link
        href={'https://www.ablestor.com/_app/view/landing/review/cloud_innovation.php'}
        passHref>
        <a target={'_blank'}>
          <Button bordered style={{ color: '#ffffff', border: '1px solid white' }}>
            행사 자세히 알아보기
          </Button>
        </a>
      </Link>
    ),
  },
  // {
  //   title: '',
  //   description: ``,
  //   bgImage: 'bg-home-header-bg',
  // },
];

const imageSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 1000,
  width: 850,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const logos: Array<LogoData> = [
  {
    title: '지엔텔',
    src: <Logo_Article_4_1 />,
    href: 'http://www.lgntel.com/',
  },
  {
    title: '지오멕스소프트',
    src: <Logo_Article_4_2 />,
    href: 'http://www.lgntel.com/',
  },
  {
    title: '한국세무사회',
    src: <Logo_Article_4_3 />,
    href: 'http://www.lgntel.com/',
  },
  {
    title: '근로복지공단',
    src: <Logo_Article_4_4 />,
    href: 'https://www.comwel.or.kr/',
  },
  {
    title: '대검찰청',
    src: <Logo_Article_4_5 />,
    href: 'https://www.spo.go.kr/',
  },
  // {
  //   title: '부안군',
  //   src: Logo_buan,
  //   href: 'https://www.buan.go.kr/',
  // },
  // {
  //   title: '춘천시',
  //   src: Logo_chuncheon,
  //   href: 'https://www.chuncheon.go.kr/',
  // },

  // {
  //   title: '다이소',
  //   src: Logo_daiso,
  //   href: 'https://www.daiso.co.kr/',
  // },
  // {
  //   title: '광주문화재단',
  //   src: Logo_gjcf,
  //   href: 'http://www.gjcf.or.kr/',
  // },

  // {
  //   title: '고령군',
  //   src: Logo_goryeong,
  //   href: 'https://www.goryeong.go.kr/',
  // },
  // {
  //   title: '경상남도',
  //   src: Logo_gyeongnam,
  //   href: 'https://www.gyeongnam.go.kr/',
  // },
  // {
  //   title: '인천광역시 교육청',
  //   src: Logo_incheon_edu,
  //   href: 'https://www.ice.go.kr/',
  // },
  // {
  //   title: '인터넷 토마토',
  //   src: Logo_internet_tomato,
  //   href: 'https://www.emato.net/',
  // },
  // {
  //   title: '전주시',
  //   src: Logo_jeonju,
  //   href: 'https://www.jeonju.go.kr/',
  // },
  // {
  //   title: '전라남도 교육청',
  //   src: Logo_jeonnam_edu,
  //   href: 'https://www.jne.go.kr/',
  // },
  // {
  //   title: '한국 스마트그리드 사업단',
  //   src: Logo_ksgl,
  //   href: 'https://www.smartgrid.or.kr',
  // },
  // {
  //   title: 'kt ucloud biz',
  //   src: Logo_kt_ucloud,
  //   href: 'https://cloud.kt.com/',
  // },

  // {
  //   title: '여주대학교',
  //   src: Logo_yit,
  //   href: 'https://www.yit.ac.kr/',
  // },
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
            <CustomLink href={'/'}>
              <HomeContent.ItemGrid
                containerClassName='border-borderGrayColor border-1'
                title='단일 클라우드 플랫폼'
                image={<Logo_Article_2_1 />}
                linkText={<span>에이블클라우드가 하는 일</span>}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href={'/'}>
              <HomeContent.ItemGrid
                containerClassName='border-borderGrayColor border-1'
                title='웹기반 통합 관리 플랫폼'
                image={<Logo_Article_2_2 />}
                linkText={<span>자세히 알아보기</span>}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href={'/'}>
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
              에이블스택과 함께하는 파트너 입니다.
            </p>
          }>
          <div className={'w-full'}>
            <CustomSlider settingsOverrides={imageSliderSettings}>
              <Logo_Article_4_1 />
              <Logo_Article_4_2 />
              <Logo_Article_4_3 />
              <Logo_Article_4_4 />
              <Logo_Article_4_5 />
            </CustomSlider>
          </div>
          <div className='flex justify-center'>
            <CustomLink href='/stories' hoverBehavior='none'>
              <Button solid className='mt-12'>
                파트너 확인하기
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
        <HomeContent
          className={'bg-backgroundBlue pb-0 text-white'}
          title='ABLESTACK 하드웨어 플랫폼'
          description={
            <p className='max-w-page mt-3.5 w-full text-[16px] font-[400] leading-[23.17px] '>
              ABLESTACK은 소프트웨어 HCI 플랫폼으로, 고객사에 성공적으로 HCI 기반 클라우드 환경을
              구성하기 위해서는 ABLESTACK이 설치되어 실행되는 서버 하드웨어가 필요합니다.
              ABLESTACK은 자사 어플라이언스와 함께 다양한 OEM 파트너, 서드파티 서버 공급업체의 서버
              플랫폼과 호환됩니다.
            </p>
          }>
          <div className='flex justify-center'>
            <CustomLink href='/stories' hoverBehavior='none'>
              <Button bordered className='mt-12 bg-white'>
                어플라이언스 보러가기
              </Button>
            </CustomLink>
          </div>
        </HomeContent>
      </HomeTemplate>
    </>
  );
}
