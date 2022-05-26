import { ReactNode, useRef } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { useScrollEvent } from '@/hooks/common';
import { useMountEffect } from '@/hooks/utils';
import { cls } from '@/utils';

import { Button, Carousel, CarouselRef, CustomLink, CustomLinkProps } from '@/components/common';
import { Container } from '@/components/layout';

import HEADER_MAIN from '@/public/images/header/header_main.png';

const pageContainerProps = {
  className: 'my-12 flex flex-col',
  containerClassName: 'even:bg-slate-100',
};

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
      <Head>
        <title>Create Next App</title>
      </Head>

      <section className='w-full'>
        {/* Head image */}
        <header className='flex max-h-128 items-center justify-center overflow-y-hidden'>
          <div className='w-screen flex-1'>
            <Image
              src={HEADER_MAIN}
              layout='responsive'
              alt='비행기가 좌하단에서 우상단으로 날아가고 우상단 모서리에 태극기가 펄럭임. 안창남 비행사의 모습이 희미하게 태극기 아래에 보임'
            />
          </div>
        </header>

        <article className='prose flex max-w-none flex-col text-center prose-headings:m-0'>
          {/* 제품 소개 */}
          <Container.Page {...pageContainerProps}>
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
              <Box
                title='Ut ea dolore minim'
                image={'/images/main/main_1.png'}
                description='Adipisicing occaecat enim tempor minim. Elit cillum in exercitation Lorem minim do voluptate minim elit proident.'
                linkProps={{ children: <span>Learn more</span> }}
              />

              <Box
                title='Do dolore sunt id'
                image={'/images/main/main_2.png'}
                description='Nisi adipisicing ullamco eiusmod eiusmod reprehenderit. Nulla sunt deserunt reprehenderit in amet sint dolore minim.'
                linkProps={{ children: <span>Learn more</span> }}
              />

              <Box
                title='Commodo in ad sint'
                image={'/images/main/main_3.png'}
                description='Do nisi eiusmod quis excepteur cillum sunt consectetur do. Velit labore minim deserunt ex.'
                linkProps={{ children: <span>Learn more</span> }}
              />
            </section>
          </Container.Page>

          {/* 차별점 */}
          <Container.Page {...pageContainerProps}>
            <h2>에이블 클라우드를 선택해야 하는 이유</h2>

            <section className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
              <RowBoxSmall
                title='Laborum proident'
                image={'/images/main/main_4.png'}
                description='Tempor qui eiusmod eiusmod ut ipsum ut sunt adipisicing pariatur aute.'
                linkProps={{ children: null }}
              />

              <RowBoxSmall
                title='Laborum reprehenderit'
                image={'/images/main/main_5.png'}
                description='Nulla veniam amet esse aliqua amet laborum labore laborum pariatur proident id sit.'
                linkProps={{ children: null }}
              />

              <RowBoxSmall
                title='Consequat veniam aliquip'
                image={'/images/main/main_6.png'}
                description='Aliqua duis enim non et dolor labore aliquip anim consectetur sint nostrud nostrud.'
                linkProps={{ children: null }}
              />

              <RowBoxSmall
                title='Aliquip Lorem culpa'
                image={'/images/main/main_7.png'}
                description='Minim qui sint cillum ea pariatur voluptate in mollit. Deserunt dolore dolore aute nostrud.'
                linkProps={{ children: null }}
              />
            </section>
          </Container.Page>

          {/* 성공 사례 / 솔루션 */}
          <section
            className={cls`${pageContainerProps.className} ${pageContainerProps.containerClassName}`}>
            <Container.Page>
              <h2>성공 사례</h2>
              <p className='mt-4'>Anim enim duis deserunt veniam do aliquip tempor velit.</p>
            </Container.Page>

            <section className='not-prose mt-8 w-full self-center'>
              <Carousel autoScrollInterval={7000} stopAutoScrollOnEnd ref={carouselRef}>
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <li
                      className='flex h-16 w-48 flex-shrink-0 snap-center snap-always items-center justify-center bg-slate-200'
                      key={index}>
                      <p>LOGO {index}</p>
                    </li>
                  ))}
              </Carousel>
            </section>

            <Container.Page>
              <Button bordered className='mt-12'>
                성공 사례 보기
              </Button>
            </Container.Page>
          </section>

          {/* 데모 & Contact */}
          <Container.Page {...pageContainerProps}>
            <h2>지금 바로 시작하십시오</h2>

            <div className='mt-4 flex w-full justify-center space-x-8'>
              <Button>데모 요청하기</Button>

              <Button bordered>문의하기</Button>
            </div>
          </Container.Page>
        </article>
      </section>
    </>
  );
}

interface BoxProps {
  title: string;
  image: ReactNode;
  description: string;
  linkProps: CustomLinkProps;
}

function Box({ title, image, description, linkProps }: BoxProps) {
  return (
    <CustomLink
      hoverBehavoir='none'
      className='flex flex-1 flex-col justify-between space-y-4 rounded-md border-0.5 border-gray-200 bg-white p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-102 hover:shadow-xl'>
      <div className='space-y-4'>
        <h3>{title}</h3>

        {/* image */}
        {/* {image} */}
        <div className='h-40 w-full bg-gray-400' />

        <p>{description}</p>
      </div>

      <div className='flex items-center justify-center space-x-4 text-sky-500'>
        {linkProps.children}

        {/* right arrow */}
        <p>go</p>
      </div>
    </CustomLink>
  );
}

function RowBoxSmall({ title, image, description }: BoxProps) {
  return (
    <CustomLink
      hoverBehavoir='none'
      className='flex flex-1 items-center justify-between space-x-6 rounded-md border-0.5 border-gray-200 bg-white p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-102 hover:shadow-xl'>
      {/* image */}
      {/* {image} */}
      <div className='h-32 w-32 flex-shrink-0 bg-gray-400' />

      <div className='space-y-2 self-start text-left'>
        <h4>{title}</h4>

        <p>{description}</p>
      </div>

      <div className='flex items-center justify-center space-x-4 text-sky-500'>
        {/* right arrow */}
        <p>go</p>
      </div>
    </CustomLink>
  );
}
