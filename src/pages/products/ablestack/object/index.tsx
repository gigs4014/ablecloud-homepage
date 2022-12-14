import Image from 'next/image';

import { NextSeo } from 'next-seo';

import {
  CommonDemoContent,
  ProductContent,
  ProductHeaderProps,
  ProductTemplate,
} from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/product/ablestack/ablestackObject/article_1_1.png';
import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackObject/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/product/ablestack/ablestackObject/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/product/ablestack/ablestackObject/article_2_3.svg';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackObject/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackObject/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackObject/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackObject/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackObject/article_4_4.svg';

const headerContent: ProductHeaderProps = {
  title: 'Object 오브젝트 스토리지',
  description: `
      Glue Objects는 간단하고 안전한 스케일 아웃 오브젝트 스토리지로 S3,
      Swift와 호환되기 때문에 기존의 오브젝트 스토리지 클라이언트로 빠르게 접속하고, 
      마이그레이션 할 수 있으며, 기업 내에서 빠르게 오브젝트 스
   `,
  bgImage: 'bg-ablestack-object-header-bg',
  image: <Image src={Logo_Article_1_1} />,
};

export default function AblestackObjectPage() {
  return (
    <>
      <NextSeo
        title='Object 오브젝트 스토리지'
        description='Object 오브젝트 스토리지'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/products/ablestack/object',
          images: [
            {
              url: '',
              alt: 'Object 오브젝트 스토리지',
            },
          ],
        }}
      />

      <ProductTemplate {...headerContent}>
        <ProductContent
          title='Object 스토리지를 선택하는 이유'
          description={`안전하며, 확장 가능한 클라우드 오브젝트 스토리지로
        빅데이터, 클라우드 네이티브 애플리케이션, 안전한 자료 저장 애플리케이션 등에 적합합니다.`}>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <ProductContent.Item
              image={<Logo_Article_2_1 />}
              title={'비정형 데이터 복잡성 완화'}
              description={
                <p>
                  단일 창에서 단일 플랫폼으로 무제한 용량을 지원하는 비정형 스토리지 공간을 제공
                </p>
              }
            />
            <ProductContent.Item
              image={<Logo_Article_2_2 />}
              title={'높은 호환성 제공'}
              description={<p>AWS S3, OpenStack Swift와 호환되는 네임스페이스를 제공</p>}
            />
            <ProductContent.Item
              image={<Logo_Article_2_3 />}
              title={'강화된 데이터 보안'}
              description={
                <p>복제, 암호화, WORM, 불변성을 통한 데이터 보호하고 오브젝트 버전 관리를 지원</p>
              }
            />
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          title='비정형 데이터를 위한 안전하고 확장성 있는 통합 플랫폼'
          imagePosition='first'
          image={<Image src={Logo_Article_3_1} loading={'lazy'} />}>
          <ProductContent.Description
            contents={[
              {
                title: '클라우드 오브젝트 스토리지',
                descriptions: [
                  'WORM 정책 지원을 통한 데이터 보존 및 규정 준수 지원',
                  '단일 플랫폼으로 빅데이터, 클라우드 네이티브 등의모든 워크로드 지원',
                  '태그 지정 및 버전 관리로 데이터 가시성 향상',
                ],
              },
              {
                title: '비정형 데이터를 위한 최적의 솔루션',
                descriptions: [
                  '메타데이터를 통한 우수한 검색/탐색 지원',
                  '필요에 따라 노드를 추가하여 무제한 용량 확장 가능',
                  '복제본 저장을 통해 재해 발생 시에도 데이터 무손실 보장',
                ],
              },
              {
                title: '소프트웨어 정의 스토리지',
                descriptions: [
                  'Amazon S3, OpenStack Swift REST API 지원',
                  '지리적으로 분산된 데이터 이중화 지원',
                  '엔드포인트 변경으로 온프레미스에서 퍼블릭으로 전환 가능',
                ],
              },
            ]}
          />
        </ProductContent>

        <ProductContent title='관련 솔루션'>
          <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <ProductContent.RowSummaryCard
              title={'빅데이터'}
              description={`S3 호환 인터페이스와 빠르고 무한히 확장 가능한 
            오브젝트 스토리지로 빅데이터를 위한 민첩한 스토리지를
            제공합니다.`}
              image={<Logo_Article_4_1 />}
            />
            <ProductContent.RowSummaryCard
              title={'백업 및 아카이브'}
              description={`내장된 오브젝트 버전관리를 제공하고, 스토리지를
            더욱 안전하게 보호하여 별도의 오프라인 테이프 시스템
            없이 백업, 아카이브를 지원합니다.`}
              image={<Logo_Article_4_2 />}
            />

            <ProductContent.RowSummaryCard
              title={'클라우드 네이티브'}
              description={`차세대 클라우드 네이티브 애플리케이션 개발을 위한
            간단하고 유연한 스토리지입니다.`}
              image={<Logo_Article_4_3 />}
            />
            <ProductContent.RowSummaryCard
              title={'전자문서 유통/관리'}
              description={`WORM 기능을 통해 전자문서의 불변성을 보장하여
            안전한 전자문서 유통 및 관리 환경을 제공합니다.`}
              image={<Logo_Article_4_4 />}
            />
          </div>
        </ProductContent>

        <ProductContent className={'bg-backgroudGray text-[#444444]'} title='최신 리소스 살펴보기'>
          <CommonDemoContent />
        </ProductContent>
      </ProductTemplate>
    </>
  );
}
