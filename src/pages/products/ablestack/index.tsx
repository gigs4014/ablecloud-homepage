import React from 'react';

import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { Button, CustomLink, SvgIcon } from '@/components/common';
import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/product/ablestack/article_1_1.png';
import Logo_Article_3_5 from '@/public/images/new/product/ablestack/article_3_5.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/article_4_1.png';
import Logo_Article_5_5 from '@/public/images/new/product/ablestack/article_5_5.png';
import Logo_Article_6_1 from '@/public/images/new/product/ablestack/article_6_1.png';

// const Logo_Article_1_1 = React.lazy(
//   () => import('@/public/images/new/product/ablestack/article_1_1.svg'),
// );
const Logo_Article_3_1 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_3_1.svg'),
);
const Logo_Article_3_2 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_3_2.svg'),
);
const Logo_Article_3_3 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_3_3.svg'),
);
const Logo_Article_3_4 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_3_4.svg'),
);
// const Logo_Article_3_5 = React.lazy(
//   () => import('@/public/images/new/product/ablestack/article_3_5.svg'),
// );
// const Logo_Article_4_1 = React.lazy(
//   () => import('@/public/images/new/product/ablestack/article_4_1.svg'),
// );
const Logo_Article_4_2 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_4_2.svg'),
);
const Logo_Article_4_3 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_4_3.svg'),
);
const Logo_Article_4_4 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_4_4.svg'),
);

const Logo_Article_5_1 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_5_1.svg'),
);
const Logo_Article_5_2 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_5_2.svg'),
);
const Logo_Article_5_3 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_5_3.svg'),
);
const Logo_Article_5_4 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_5_4.svg'),
);
// const Logo_Article_5_5 = React.lazy(
//   () => import('@/public/images/new/product/ablestack/article_5_5.svg'),
// );
// const Logo_Article_6_1 = React.lazy(
//   () => import('@/public/images/new/product/ablestack/article_6_1.svg'),
// );
const Logo_Article_6_2 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_6_2.svg'),
);
const Logo_Article_6_3 = React.lazy(
  () => import('@/public/images/new/product/ablestack/article_6_3.svg'),
);

const headerContent: ProductHeaderProps = {
  title: 'ABLESTACK HCI',
  description: `ABLESTACK은 엔터프라이즈 클라우드 환경을 구축하는
  HCI (Hyper Converged Infrastructure) 플랫폼입니다.
  단 하나의 플랫폼으로 가상머신, 앱, 가상화/클라우드 등 
  사용하고 관리할 수 있습니다. 상용 x86 서버에 10G Network를 연결하고
  ABLESTACK을 설치하면 지금 바로 핵심 인프라를 포함하여
  모든 서비스를 시작할 수 있습니다.
  `,
  image: (
    <div className='mb-8 max-w-[420px]'>
      <Image src={Logo_Article_1_1} />
    </div>
  ),
  bgImage: 'bg-ablestack-header-bg',
};

export default function AblestackPage() {
  return (
    <>
      <NextSeo
        title=''
        description='HCI 가상화 인프라 AbleStack'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/products/ablestack',
          images: [
            {
              url: '',
              alt: 'HCI 가상화 인프라 AbleStack',
            },
          ],
        }}
      />
      <ProductTemplate {...headerContent}>
        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          title='ABLESTACK HCI'
          description={
            <p className={'mt-5 mb-10 leading-normal'}>
              복잡한 구조의 전통적 기업 데이터센터의 문제점을 해결하고, IT 환경의 급속한 발전으로
              인해 발생하는 문제점을 해결하기 위해 단일 서버 구성으로 모든 인프라와 플랫폼을 실행할
              수 있도록 고안된 HCI 플랫폼 입니다.
            </p>
          }>
          <div className={'flex w-full justify-center'}>
            <CustomLink href='/products' hoverBehavior='none'>
              <Button solid>개요 보러가기</Button>
            </CustomLink>
          </div>
        </ProductContent>

        <ProductContent image={<Image src={Logo_Article_3_5} loading={'lazy'} />}>
          <ProductContent.Intro
            title='ABLESTACK 인프라스트럭처'
            description={
              <p className='mt-[24px] text-[16px] font-[400] leading-[23.17px]'>
                ABLESTACK으로 구성된 클라우드 환경을 통해 스토리지, 가상머신, 컨테이너, 네트워크
                등의 인프라를 생성하여 사용할 수 있습니다.
              </p>
            }
          />
          <div className='flex gap-[10px]'>
            <CustomLink
              href='/products/ablestack/glue'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                containerClassName={'bg-[#EEF4FB]'}
                title={'Glue'}
                description={'스토리지'}
                image={<SvgIcon Svg={Logo_Article_3_1} />}
              />
            </CustomLink>

            <CustomLink
              href='/products/ablestack/cell'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                containerClassName={'bg-[#EEF4FB]'}
                title={'Cell'}
                description={'가상화'}
                image={<SvgIcon Svg={Logo_Article_3_2} />}
              />
            </CustomLink>
          </div>
          <div className='mt-[10px] flex gap-[10px]'>
            <CustomLink
              href='/products/ablestack/koral'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                containerClassName={'bg-[#EEF4FB]'}
                title={'Koral'}
                description={'쿠버네티스 엔진'}
                image={<SvgIcon Svg={Logo_Article_3_3} />}
              />
            </CustomLink>
            <CustomLink
              href='/products/ablestack/track'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                containerClassName={'bg-[#EEF4FB]'}
                title={'Track'}
                description={'네트워크 및 보안'}
                image={<SvgIcon Svg={Logo_Article_3_4} />}
              />
            </CustomLink>
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          imagePosition={'first'}
          image={<Image src={Logo_Article_4_1} loading={'lazy'} />}>
          <ProductContent.Intro
            title='관리플랫폼'
            description={
              <p className='mt-[24px] text-[16px] font-[400] leading-[23.17px]'>
                ABLESTACK은 설치와 동시에 셀프서비스 방식의 클라우드 플랫폼 및 자동화 플랫폼을
                사용하고, 자원의 운영현황을 모니터링할 수 있습니다.
              </p>
            }
          />
          <div className='flex gap-[10px]'>
            <CustomLink
              href='/products/ablestack/mold'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                title={'Mold'}
                description={'클라우드 관리플랫폼'}
                image={<SvgIcon Svg={Logo_Article_4_2} />}
              />
            </CustomLink>

            <CustomLink
              href='/products/ablestack/genie'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                title={'Genie'}
                description={'하이브리드 배포 자동화'}
                image={<SvgIcon Svg={Logo_Article_4_3} />}
              />
            </CustomLink>
          </div>

          <div className='mt-[10px] flex gap-[10px]'>
            <CustomLink
              href='/products/ablestack/wall'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                title={'Wall'}
                description={'통합 모니터링'}
                image={<SvgIcon Svg={Logo_Article_4_4} />}
              />
            </CustomLink>

            <ProductContent.RowSmallCard containerClassName={'invisible'} title={''} />
          </div>
        </ProductContent>

        <ProductContent image={<Image src={Logo_Article_5_5} loading={'lazy'} />}>
          <ProductContent.Intro
            title='통합 스토리지'
            description={
              <p className='mt-[24px] text-[16px] font-[400] leading-[23.17px]'>
                ABLESTACK 스토리지는 다양한 게이트웨이를 지원하여 블록, 파일시스템, 오브젝트
                스토리지, 그리고 백업 기능을 제공합니다.
              </p>
            }
          />
          <div className='flex gap-[10px]'>
            <CustomLink
              href='/products/ablestack/block'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                containerClassName={'bg-[#EEF4FB]'}
                title={'Block'}
                description={'블록스토리지'}
                image={<SvgIcon Svg={Logo_Article_5_1} />}
              />
            </CustomLink>

            <CustomLink
              href='/products/ablestack/files'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                containerClassName={'bg-[#EEF4FB]'}
                title={'Files'}
                description={'파일시스템'}
                image={<SvgIcon Svg={Logo_Article_5_2} />}
              />
            </CustomLink>
          </div>
          <div className='mt-[10px] flex gap-[10px]'>
            <CustomLink
              href='/products/ablestack/object'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                containerClassName={'bg-[#EEF4FB]'}
                title={'Objects'}
                description={'오브젝트 파일 시스템'}
                image={<SvgIcon Svg={Logo_Article_5_3} />}
              />
            </CustomLink>
            <CustomLink
              href='/products/ablestack/slio'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                containerClassName={'bg-[#EEF4FB]'}
                title={'Slio'}
                description={'백업 자동화'}
                image={<SvgIcon Svg={Logo_Article_5_4} />}
              />
            </CustomLink>
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition={'first'}
          image={<Image src={Logo_Article_6_1} loading={'lazy'} />}>
          <ProductContent.Intro
            title='플랫폼 및 서비스'
            description={
              <p className='mt-[24px] text-[16px] font-[400] leading-[23.17px]'>
                ABLESTACK은 빅데이터 및 인공지능 플랫폼 및 가상데스크톱을 제공하여 신속하게 시스템
                개발 및 원격 업무 환경을 구성할 수 있습니다.
              </p>
            }
          />
          <div className='flex gap-[10px]'>
            <CustomLink
              href='/products/ablestack/works'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                title={'Works'}
                description={'데스크톱 서비스'}
                image={<SvgIcon Svg={Logo_Article_6_2} />}
              />
            </CustomLink>
            <CustomLink
              href='/products/ablestack/station'
              hoverBehavior='none'
              style={{ width: '100%' }}>
              <ProductContent.RowSmallCard
                title={'Station'}
                description={'플랫폼 서비스'}
                image={<SvgIcon Svg={Logo_Article_6_3} />}
              />
            </CustomLink>
          </div>
        </ProductContent>
      </ProductTemplate>
    </>
  );
}
