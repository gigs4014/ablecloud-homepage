import { useRef } from 'react';

import Image from 'next/image';

import { ReactNode } from '@mdx-js/react/lib';

import { useScrollEvent } from '@/hooks/common';
import { useMountEffect } from '@/hooks/utils';

import { Button, Carousel, CarouselRef, CustomLink } from '@/components/common';
import { Container } from '@/components/layout';

import Logo_Article_3_1 from '@/public/images/new/home/article_3_1.svg';
import Logo_Article_3_2 from '@/public/images/new/home/article_3_2.svg';
import Logo_Article_3_3 from '@/public/images/new/home/article_3_3.svg';
import Logo_Article_3_4 from '@/public/images/new/home/article_3_4.svg';
import Logo_Article_4_1 from '@/public/images/new/home/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/home/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/home/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/home/article_4_4.svg';
import Logo_Article_4_5 from '@/public/images/new/home/article_4_5.svg';
// New Image
import HOME_FIRST_BG from '@/public/images/new/home/home_first_bg.png';
import Logo_NewConceptDataCenter from '@/public/images/new/home/new_concept_data_center.svg';
import Logo_SingleCloudPlatForm from '@/public/images/new/home/single_cloud-platform.svg';
import Logo_WebTotalManagementPlatform from '@/public/images/new/home/web_total_management_platform.svg';
import Logo_Product_Default from '@/public/images/new/product_default.svg';

interface LogoData {
  title: string;
  src: ReactNode;
  href?: string;
}
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
        <header className='relative  flex max-h-128 items-center justify-center overflow-y-hidden'>
          <div className={`w-screen flex-1 `}>
            <Image
              src={HOME_FIRST_BG}
              layout='responsive'
              alt='비행기가 좌하단에서 우상단으로 날아가고 우상단 모서리에 태극기가 펄럭임. 안창남 비행사의 모습이 희미하게 태극기 아래에 보임'
            />
          </div>
        </header>

        <Container.Article className='text-center'>
          {/* 제품 소개 */}
          <Container.PageWidth seperateWithPeer>
            <header className='max-w-screen-md self-center'>
              <div className={'text-[30px] font-[500]'}>SDDC를 실현하는 HCI 플랫폼</div>

              <p>
                가상화 및 소프트웨어 정의 기술을 이용한 하이퍼 컨버지드 인프라 플랫폼 ABLESTACK을
                통해 컴퓨팅, 스토리지, 가상화, 네트워크를 사용하고 관리할 수 있는 엔터프라이즈
                클라우드 데이터센터를 구축할 수 있습니다.
              </p>
            </header>

            <section className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <CustomLink hoverBehavoir='none'>
                <Box
                  title='단일 클라우드 플랫폼'
                  image={<Logo_SingleCloudPlatForm />}
                  linkText={<span>에이블클라우드가 하는 일</span>}
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <Box
                  title='웹기반 통합 관리 플랫폼'
                  image={<Logo_WebTotalManagementPlatform />}
                  linkText={<span>자세히 알아보기</span>}
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <Box
                  title='새로운 개념의 데이터센터'
                  image={<Logo_NewConceptDataCenter />}
                  linkText={<span>지금 시작하기</span>}
                />
              </CustomLink>
            </section>
          </Container.PageWidth>

          {/* 차별점 */}
          <Container.PageWidth seperateWithPeer>
            <div className={'text-[30px] font-[500]'}>ABLESTACK을 선택해야 하는 이유</div>
            <section className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
              <CustomLink hoverBehavoir='none'>
                <RowBoxSmall
                  title='단순한 구조'
                  image={<Logo_Article_3_1 />}
                  description='서버, 네트워크, 스토리지를 하나의 장비로 통합하여
                  물리적인 인프라 구조를 단순화합니다.'
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <RowBoxSmall
                  title='확장성이 우수한 유연 인프라'
                  image={<Logo_Article_3_2 />}
                  description='인프라를 추가적으로 확장해야할 때, 무중단 상태로
                  서버를 추가할 수 있습니다.'
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <RowBoxSmall
                  title='자동 자가 복구'
                  image={<Logo_Article_3_3 />}
                  description='물리적인 장애 발생 시에도 중지되지 않으며,
                  일정 시간 경과 후 자가 복구를 실시합니다.'
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <RowBoxSmall
                  title='기존 인프라 대비 80% 절감'
                  image={<Logo_Article_3_4 />}
                  description='서버, 네트워크, 스토리지를 하나의 장비로 통합하여
                  물리적인 인프라 구조를 단순화합니다.'
                />
              </CustomLink>
            </section>
          </Container.PageWidth>

          {/* 파트너 */}
          <Container.PageWidth seperateWithPeer>
            <div className={'text-[30px] font-[500]'}>
              국내 최초의 HCI, ABLESTACK을 선택한 기업들
            </div>
            <p className='mt-4'>에이블스택과 함께하는 파트너 입니다.</p>

            <section className='not-prose relative mt-8 w-screen self-center'>
              <Carousel
                autoScrollInterval={5000}
                stopAutoScrollOnEnd
                ref={carouselRef}
                className='space-x-16 px-8'>
                {logos.map(({ src, title, href }, index) => (
                  <Carousel.Item key={index} className='flex-shrink-0'>
                    {src}
                  </Carousel.Item>
                ))}
              </Carousel>
            </section>

            <CustomLink href='/stories' hoverBehavoir='none'>
              <Button solid className='mt-12'>
                파트너 확인하기
              </Button>
            </CustomLink>
          </Container.PageWidth>

          {/* 데모 & Contact */}
          <Container.PageWidth seperateWithPeer>
            <div className={'text-[30px] font-[500]'}>
              보다 더 자세한 자료와 컨설팅을 받아보세요.
            </div>

            <p className='mt-3.5'>
              단순한 구조로 IT 서비스에 필요한 모든 인프라를 제공할 뿐만 아니라, <br /> 단 1시간
              이내에 사용자 사이트에 HCI 인프라를 구성하고 클라우드 서비스를 시작할 수 있습니다.
              <br />
              에이블스택을 바로 사용해보세요.
            </p>

            <div className={'flex gap-10'}>
              <RowBoxAction
                title={'Case Study'}
                image={<Logo_Product_Default />}
                description={'에이블스택을 최대로 활용하는 파트너사들의 케이스를 확인해보세요.'}
                buttonTitle={'지금 시작하기'}
                href={''}
              />
              <RowBoxAction
                title={'데모 체험'}
                image={<Logo_Product_Default />}
                description={'에이블스택을 먼저 체험하고, 사용해보세요.'}
                buttonTitle={'기술 지원 및 데모 요청'}
                href={''}
              />
              <RowBoxAction
                title={'전문가와 상담'}
                image={<Logo_Product_Default />}
                description={
                  '에이블스택 전문가와 직접 상담해보세요. 여러분에게 최적화된 솔루션 구축을 약속드려요.'
                }
                buttonTitle={'문의하러 가기'}
                href={''}
              />
            </div>
            {/* <div className='mt-4 flex w-full justify-center space-x-8'>
              <CustomLink href='/demo' hoverBehavoir='none'>
                <Button>데모 요청하기</Button>
              </CustomLink>

              <CustomLink href='/company/contact' hoverBehavoir='none'>
                <Button bordered>문의하기</Button>
              </CustomLink>
            </div> */}
          </Container.PageWidth>
          <Container.PageWidth containerClassName={'bg-backgroundBlue'} className={'text-white'}>
            <div className={'text-[30px] font-[500]'}>ABLESTACK 하드웨어 플랫폼</div>

            <p className='mt-3.5'>
              ABLESTACK은 소프트웨어 HCI 플랫폼으로, 고객사에 성공적으로 HCI 기반 클라우드 환경을
              구성하기 위해서는 <br /> ABLESTACK이 설치되어 실행되는 서버 하드웨어가 필요합니다.
              ABLESTACK은 자사 어플라이언스와 함께
              <br /> 다양한 OEM 파트너, 서드파티 서버 공급업체의 서버 플랫폼과 호환됩니다.
            </p>

            <CustomLink href='/stories' hoverBehavoir='none'>
              <Button bordered className='mt-12 bg-white'>
                어플라이언스 보러가기
              </Button>
            </CustomLink>
          </Container.PageWidth>
        </Container.Article>
      </section>
    </>
  );
}

interface BoxProps {
  title: string;
  image: ReactNode;
  description?: string;
  linkText?: ReactNode;
}

export function Box({ title, image, linkText }: BoxProps) {
  return (
    <Container.Card className='border-borderGrayColor h-full space-y-4 border-1 p-4 text-center'>
      <h3>{title}</h3>

      {/* image */}
      {/* <div className='h-40 w-full bg-gray-400' /> */}
      <div className='flex items-center justify-center'>{image}</div>

      <div className='flex items-center justify-center space-x-4 text-primary after:ml-2 after:icon-[east]'>
        {linkText}
      </div>
    </Container.Card>
  );
}

export function RowBoxSmall({ title, image, description, linkText }: BoxProps) {
  return (
    <Container.Card className='flex flex-1 items-center justify-between space-x-6 border-0.5 border-gray-200 p-4'>
      {/* image */}
      <div className='flex items-center justify-center'>{image}</div>

      <div className='space-y-2 self-start text-left'>
        <h4 className='font-medium'>{title}</h4>

        <p>{description}</p>
      </div>

      <div className='flex items-center justify-center space-x-4'>{linkText}</div>
    </Container.Card>
  );
}

export function RowBoxAction({
  title,
  image,
  description,
  buttonTitle,
  href,
}: {
  title: string;
  image: ReactNode;
  description: string;
  buttonTitle: string;
  href: string;
}) {
  return (
    <Container.Card className='border-borderGrayColor h-full border-1 text-center'>
      {image}

      <div className={'px-[60px] pb-10 pt-8'}>
        <div className={'mb-6 text-xl'}>{title}</div>

        <div className='mb-[40px] text-base'>{description}</div>
        <Button bordered onClick={() => {}}>
          {buttonTitle}
        </Button>
      </div>
    </Container.Card>
  );
}
