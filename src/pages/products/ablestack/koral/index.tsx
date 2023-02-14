import Image from 'next/image';

import { NextSeo } from 'next-seo';
import { ProductsDemoContent } from 'src/templates/productsContents';

import { CustomLink } from '@/components/common';
import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackKoral/article_2_1.png';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackKoral/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackKoral/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackKoral/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackKoral/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackKoral/article_4_4.svg';

const headerContent: ProductHeaderProps = {
  title: 'Koral  쿠버네티스 엔진',
  description: `
      Koral은 ABLESTACK 설치 시 기본적으로 설치되는 플러그인입니다. 이 기능을 사용의 사용은 플러그인
      사용을 위한 설정을 적용하고, Kubernetes 클러스터를 배포하기 위한 실행 바이너리 ISO를 등록함으로
      써 가능합니다. Koral을 이용하면 쉽고 빠르게 컨테이너 환경을  ABLESTACK에 배포할 수
      있으며, 안정적으로 운영할 수 있을 뿐 아니라, 필요 시 신속하게 확장이 가능합니다.`,
  bgImage: 'bg-ablestack-koral-header-bg',
  imagePosition: 'last',
};

export default function AblestackKoralPage() {
  return (
    <>
      <NextSeo
        title='Koral 쿠버네티스 엔진'
        description='쿠버네티스 엔진'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/products/ablestack/koral',
          images: [
            {
              url: '',
              alt: '쿠버네티스 엔진',
            },
          ],
        }}
      />
      <ProductTemplate {...headerContent}>
        <ProductContent
          title='아키텍처 개요'
          description={`Koral은 Mold에 내장된 플러그인으로 Mold를 통해 원클릭으로 쿠버네티스 클러스터를 배포하고 관리할 수 있습니다.`}>
          <div className={'flex w-full items-center justify-center'}>
            <Image src={Logo_Article_2_1} loading={'lazy'} />
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          title='컨테이너 기반의 애플리케이션 배포를 지원하기 위한 플러그인'
          imagePosition='first'
          image={<Image src={Logo_Article_3_1} />}>
          <ProductContent.Description
            contents={[
              {
                title: '자동화된 쿠버네테스 클러스터 배포',
                descriptions: [
                  '원클릭 쿠버네테스 배포',
                  '쿠버네테스 운영에 필요한 모든 구성요소 내장',
                ],
              },
              {
                title: '고가용성 및 부하분산 내장',
                descriptions: ['마스터 노드 이중화', '오토스케일링 지원을 통해 모든 구성요소 내장'],
              },
              {
                title: '유연성 제공',
                descriptions: ['사설 리파지터리 연결 지원', '영구 저장 스토리지 플러그인 내장'],
              },
            ]}
          />
        </ProductContent>

        <ProductContent title='관련 솔루션'>
          <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <CustomLink href='/solutions/cloud-native'>
              <ProductContent.RowSummaryCard
                title={'클라우드 네이티브'}
                description={`독커 기반의 쿠버네티스 클러스터를 제공하여  마이크로
              서비스, CI/CD 등의 클라우드 네이티브 환경을 제공합니다.`}
                image={<Logo_Article_4_1 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/hybrid-cloud'>
              <ProductContent.RowSummaryCard
                title={'하이브리드 클라우드'}
                description={`빠르게 이식할 수 있는 독커 컨테이너를 기반으로
              AWS, Azure, Google 및 독커 호환 컨테이너에 바로
              배포하여 통합할 수 있습니다.`}
                image={<Logo_Article_4_2 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>

            <CustomLink href='/solutions/artificial-intelligence-and-machine-learning'>
              <ProductContent.RowSummaryCard
                title={'인공지능/머신러닝'}
                description={`컨테이너 기반의 이머징 오픈소스 애플리케이션과 
              GPU를 결합하여 AI/ML 플랫폼을 제공합니다.`}
                image={<Logo_Article_4_3 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/ci-and-cd'>
              <ProductContent.RowSummaryCard
                title={'비즈니스 애플리케이션'}
                description={`지속적인 개발 및 통합을 통해 비즈니스 애플리케이션의
              개발/운영 주기를 가속화 합니다.`}
                image={<Logo_Article_4_4 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
          </div>
        </ProductContent>

        <ProductContent className={'bg-backgroudGray text-[#444444]'} title='최신 리소스 살펴보기'>
          <ProductsDemoContent />
        </ProductContent>
      </ProductTemplate>
    </>
  );
}
