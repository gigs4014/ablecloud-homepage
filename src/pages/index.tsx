import { useRef } from 'react';

import Image, { ImageProps } from 'next/image';

import { ReactNode } from '@mdx-js/react/lib';

import { useScrollEvent } from '@/hooks/common';
import { useMountEffect } from '@/hooks/utils';

import { Button, Carousel, CarouselRef, CustomLink } from '@/components/common';
import { AspectRatioImage } from '@/components/common/Image/Image';
import { Container } from '@/components/layout';

import HEADER_MAIN from '@/public/images/header/header_main.png';
import Logo_buan from '@/public/images/logos/logo_buan.jpg';
import Logo_chuncheon from '@/public/images/logos/logo_chuncheon.jpg';
import Logo_comwel from '@/public/images/logos/logo_comwel.jpg';
import Logo_daiso from '@/public/images/logos/logo_daiso.jpg';
import Logo_gjcf from '@/public/images/logos/logo_gjcf.jpg';
import Logo_gntel_lg from '@/public/images/logos/logo_gntel_lg.png';
import Logo_goryeong from '@/public/images/logos/logo_goryeong.png';
import Logo_gyeongnam from '@/public/images/logos/logo_gyeongnam.jpg';
import Logo_incheon_edu from '@/public/images/logos/logo_incheon_edu.jpg';
import Logo_internet_tomato from '@/public/images/logos/logo_internet_tomato.png';
import Logo_jeonju from '@/public/images/logos/logo_jeonju.jpg';
import Logo_jeonnam_edu from '@/public/images/logos/logo_jeonnam_edu.jpg';
import Logo_ksgl from '@/public/images/logos/logo_ksgl.png';
import Logo_kt_ucloud from '@/public/images/logos/logo_kt_ucloud.png';
import Logo_prosecutor_lg from '@/public/images/logos/logo_prosecutor_lg.png';
import Logo_yit from '@/public/images/logos/logo_yit.jpg';

interface LogoData {
  title: string;
  src: ImageProps['src'];
  href?: string;
}
const logos: Array<LogoData> = [
  {
    title: '부안군',
    src: Logo_buan,
    href: 'https://www.buan.go.kr/',
  },
  {
    title: '춘천시',
    src: Logo_chuncheon,
    href: 'https://www.chuncheon.go.kr/',
  },
  {
    title: '근로복지공단',
    src: Logo_comwel,
    href: 'https://www.comwel.or.kr/',
  },
  {
    title: '다이소',
    src: Logo_daiso,
    href: 'https://www.daiso.co.kr/',
  },
  {
    title: '광주문화재단',
    src: Logo_gjcf,
    href: 'http://www.gjcf.or.kr/',
  },
  {
    title: '지엔텔',
    src: Logo_gntel_lg,
    href: 'http://www.lgntel.com/',
  },
  {
    title: '고령군',
    src: Logo_goryeong,
    href: 'https://www.goryeong.go.kr/',
  },
  {
    title: '경상남도',
    src: Logo_gyeongnam,
    href: 'https://www.gyeongnam.go.kr/',
  },
  {
    title: '인천광역시 교육청',
    src: Logo_incheon_edu,
    href: 'https://www.ice.go.kr/',
  },
  {
    title: '인터넷 토마토',
    src: Logo_internet_tomato,
    href: 'https://www.emato.net/',
  },
  {
    title: '전주시',
    src: Logo_jeonju,
    href: 'https://www.jeonju.go.kr/',
  },
  {
    title: '전라남도 교육청',
    src: Logo_jeonnam_edu,
    href: 'https://www.jne.go.kr/',
  },
  {
    title: '한국 스마트그리드 사업단',
    src: Logo_ksgl,
    href: 'https://www.smartgrid.or.kr',
  },
  {
    title: 'kt ucloud biz',
    src: Logo_kt_ucloud,
    href: 'https://cloud.kt.com/',
  },
  {
    title: '대검찰청',
    src: Logo_prosecutor_lg,
    href: 'https://www.spo.go.kr/',
  },
  {
    title: '여주대학교',
    src: Logo_yit,
    href: 'https://www.yit.ac.kr/',
  },
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
        <header className='relative -top-16 flex max-h-128 items-center justify-center overflow-y-hidden'>
          <div className='w-screen flex-1'>
            <Image
              src={HEADER_MAIN}
              layout='responsive'
              alt='비행기가 좌하단에서 우상단으로 날아가고 우상단 모서리에 태극기가 펄럭임. 안창남 비행사의 모습이 희미하게 태극기 아래에 보임'
            />
          </div>
        </header>

        <Container.Article>
          {/* 제품 소개 */}
          <Container.PageWidth seperateWithPeer>
            <header className='max-w-screen-md self-center'>
              <h2>Culpa minim tempor.</h2>
              <p>
                Laborum laborum nulla Lorem ad Lorem nulla fugiat consectetur dolore. Officia
                eiusmod ex pariatur velit. Eiusmod cillum aute sunt excepteur do dolor voluptate.
                Sint fugiat ex ullamco amet minim irure ullamco ipsum voluptate ullamco. Minim
                proident dolore adipisicing incididunt.
              </p>
            </header>

            <section className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <CustomLink hoverBehavoir='none'>
                <Box
                  title='Ut ea dolore minim'
                  image={'/images/main/main_1.jpg'}
                  description='Adipisicing occaecat enim tempor minim. Elit cillum in exercitation Lorem minim do voluptate minim elit proident.'
                  linkText={<span>Learn more</span>}
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <Box
                  title='Do dolore sunt id'
                  image={'/images/main/main_2.jpg'}
                  description='Nisi adipisicing ullamco eiusmod eiusmod reprehenderit. Nulla sunt deserunt reprehenderit in amet sint dolore minim.'
                  linkText={<span>Learn more</span>}
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <Box
                  title='Commodo in ad sint'
                  image={'/images/main/main_3.jpg'}
                  description='Do nisi eiusmod quis excepteur cillum sunt consectetur do. Velit labore minim deserunt ex.'
                  linkText={<span>Learn more</span>}
                />
              </CustomLink>
            </section>
          </Container.PageWidth>

          {/* 차별점 */}
          <Container.PageWidth seperateWithPeer>
            <h2>에이블 클라우드를 선택해야 하는 이유</h2>

            <section className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
              <CustomLink hoverBehavoir='none'>
                <RowBoxSmall
                  title='Laborum proident'
                  image={'/images/main/main_4.jpg'}
                  description='Tempor qui eiusmod eiusmod ut ipsum ut sunt adipisicing pariatur aute.'
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <RowBoxSmall
                  title='Laborum reprehenderit'
                  image={'/images/main/main_5.jpg'}
                  description='Nulla veniam amet esse aliqua amet laborum labore laborum pariatur proident id sit.'
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <RowBoxSmall
                  title='Consequat veniam aliquip'
                  image={'/images/main/main_6.jpg'}
                  description='Aliqua duis enim non et dolor labore aliquip anim consectetur sint nostrud nostrud.'
                />
              </CustomLink>

              <CustomLink hoverBehavoir='none'>
                <RowBoxSmall
                  title='Aliquip Lorem culpa'
                  image={'/images/main/main_7.jpg'}
                  description='Minim qui sint cillum ea pariatur voluptate in mollit. Deserunt dolore dolore aute nostrud.'
                />
              </CustomLink>
            </section>
          </Container.PageWidth>

          {/* 성공 사례 / 솔루션 */}
          <Container.PageWidth seperateWithPeer>
            <h2>성공 사례</h2>
            <p className='mt-4'>Anim enim duis deserunt veniam do aliquip tempor velit.</p>

            <section className='not-prose relative mt-8 w-screen self-center'>
              <Carousel
                autoScrollInterval={5000}
                stopAutoScrollOnEnd
                ref={carouselRef}
                className='space-x-16 px-8'>
                {logos.map(({ src, title, href }, index) => (
                  <Carousel.Item key={index} className='flex-shrink-0'>
                    <AspectRatioImage src={src} alt={`${title} 로고`} height={64} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </section>

            <CustomLink href='/stories' hoverBehavoir='none'>
              <Button bordered className='mt-12'>
                성공 사례 보기
              </Button>
            </CustomLink>
          </Container.PageWidth>

          {/* 데모 & Contact */}
          <Container.PageWidth seperateWithPeer>
            <h2>지금 바로 시작하십시오</h2>

            <div className='mt-4 flex w-full justify-center space-x-8'>
              <CustomLink href='/demo' hoverBehavoir='none'>
                <Button>데모 요청하기</Button>
              </CustomLink>

              <CustomLink href='/company/contact' hoverBehavoir='none'>
                <Button bordered>문의하기</Button>
              </CustomLink>
            </div>
          </Container.PageWidth>
        </Container.Article>
      </section>
    </>
  );
}

interface BoxProps {
  title: string;
  image: ReactNode;
  description: string;
  linkText?: ReactNode;
}

export function Box({ title, image, description, linkText }: BoxProps) {
  return (
    <Container.Card className='h-full space-y-4 border-0.5 border-gray-200 p-4 text-center'>
      <h3>{title}</h3>

      {/* image */}
      <div className='h-40 w-full bg-gray-400' />

      <p>{description}</p>

      <div className='flex items-center justify-center space-x-4 text-sky-500 after:ml-2 after:icon-[east]'>
        {linkText}
      </div>
    </Container.Card>
  );
}

export function RowBoxSmall({ title, image, description, linkText }: BoxProps) {
  return (
    <Container.Card className='flex flex-1 items-center justify-between space-x-6 border-0.5 border-gray-200 p-4'>
      {/* image */}
      <div className='h-32 w-32 flex-shrink-0 bg-gray-400' />

      <div className='space-y-2 self-start text-left'>
        <h4 className='font-medium'>{title}</h4>

        <p>{description}</p>
      </div>

      <div className='flex items-center justify-center space-x-4 text-sky-500 after:ml-2 after:icon-[east]'>
        {linkText}
      </div>
    </Container.Card>
  );
}
