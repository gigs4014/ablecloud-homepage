import React from 'react';

import Image from 'next/image';

import { SvgIcon } from '@/components/common';
import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackBlock/article_3_1.png';

const Logo_Article_2_1 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_2_1.svg'),
);
const Logo_Article_2_2 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_2_2.svg'),
);
const Logo_Article_2_3 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_2_3.svg'),
);

const Logo_Article_4_1 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_4_1.svg'),
);
const Logo_Article_4_2 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_4_2.svg'),
);
const Logo_Article_4_3 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_4_3.svg'),
);
const Logo_Article_4_4 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_4_4.svg'),
);
const Logo_Product_Default = React.lazy(() => import('@/public/images/new/product_default.svg'));

const headerContent: ProductHeaderProps = {
  title: 'Block 블록 스토리지 볼륨',
  description: `Volume은 Glue에 내장된 확장형 블록 스토리지로, 가상머신의 워크로드 및 물리적인 워크로드에 모드 대응할 수 있도록 설계된 단일 통합 스토리지 플랫폼입니다.
  `,
  bgImage: 'bg-ablestack-block-header-bg',
  textColor: 'text-black',
};

export default function AblestackBlockPage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        title='Volume 스토리지를 선택하는 이유'
        description={`Volume은 가상머신의 디스크 워크로드를 위해 Glue를 통해 제공되는 단일 통합 스토리지 플랫폼으로
지능적이고 효율적인 데이터 관리, 고수준의 재해복구 및 데이터 계층화, 스냅샷 백업 등의 HCI 이점을 제공하는 동시에
레거시 스토리지 인프라의 비용과 복잡성을 제거합니다. `}>
        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <ProductContent.Item
            image={<SvgIcon Svg={Logo_Article_2_1} />}
            title={'간편한 관리'}
            description={
              <p>
                볼륨의 생성, 확장 관리가 간편한
                <br />
                엔터프라이즈급 블록 스토리지
              </p>
            }
          />
          <ProductContent.Item
            image={<SvgIcon Svg={Logo_Article_2_2} />}
            title={'복잡성 해소 및 비용 절감'}
            description={
              <p>
                구형의 레거시 인프라 유지보수를
                <br />
                위한 오버헤드 비용 절감
              </p>
            }
          />
          <ProductContent.Item
            image={<SvgIcon Svg={Logo_Article_2_3} />}
            title={'HCI의 장점 활용'}
            description={
              <p>
                HCI의 이점인 지능형 데이터 관리,
                <br />
                고수준 재해복구, 백업 등을 활용
              </p>
            }
          />
        </div>
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray'}
        title='원하는 플랫폼에서 모든 워크로드 연결'
        imagePosition='first'
        image={<Image src={Logo_Article_3_1} />}>
        <ProductContent.Description
          contents={[
            {
              title: '통합 클라우드 관리',
              descriptions: [
                '사용자 별로 완전히 격리된 인프라를 제공',
                '웹 기반 애플리케이션으로 데스크톱, 모바일 환경에서 모두 사용 가능',
              ],
            },
            {
              title: '가상화 기능 통합 제공',
              descriptions: [
                '가상머신, 스토리지, 네트워크 관리',
                '정책 기반 가상 자원 배포 관리사용자 별로 완전히 격리된 인프라를 제공',
              ],
            },
            {
              title: '내장된 비즈니스 연속성 제공',
              descriptions: [
                '가상머신 단위별 스냅샷 백업 및 복구',
                '클러스터 간 미러링을 통한 재해 복구 지원',
                'Synology, Veem, EMC Networker 등의 백업 어플라이언스 연동 지원',
              ],
            },
          ]}
        />
      </ProductContent>

      <ProductContent title='관련 솔루션'>
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <ProductContent.RowSummaryCard
            title={'비즈니스 연속성'}
            description={`내장된 스냅샷 백업 및 복구, 재해복구 및 써드파티
백업/복구 기능을 통해 비즈니스 연속성을 보장합니다.`}
            image={<SvgIcon Svg={Logo_Article_4_1} />}
          />
          <ProductContent.RowSummaryCard
            title={'비즈니스 크리티컬 앱'}
            description={`정책 기반 가상자원 관리 및 부하분산 기능을 통해
              기업의 중요 애플리케이션을 안정적으로 실행합니다.`}
            image={<SvgIcon Svg={Logo_Article_4_2} />}
          />
          <ProductContent.RowSummaryCard
            title={'IT 운영'}
            description={`일원화된 자원관리 및 네트워크 관리를 통해 단일 환경에서
              모든 인프라를 관리하고 통제할 수 있습니다.`}
            image={<SvgIcon Svg={Logo_Article_4_3} />}
          />
          <ProductContent.RowSummaryCard
            title={'개발 및 테스트'}
            description={`다양한 가상머신 및 개발환경을 배포하여 사용할 수 있어
              개발 및 테스트, 운영 환경 통합을 위한 최적의 환경을
              제공합니다. `}
            image={<SvgIcon Svg={Logo_Article_4_4} />}
          />
        </div>
      </ProductContent>

      <ProductContent className={'bg-backgroudGray'} title='최신 리소스 살펴보기'>
        <div className={'grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3'}>
          <ProductContent.ActionCard
            title={'기술노트'}
            image={<SvgIcon Svg={Logo_Product_Default} />}
            description={`에이블스택을 좀더
          자세하게 설명한 기술개요`}
            buttonTitle={'지금 보러가기'}
            href={''}
          />
          <ProductContent.ActionCard
            title={'데모 체험'}
            image={<SvgIcon Svg={Logo_Product_Default} />}
            description={`에이블스택을 먼저 체험하고,
          사용해보세요.`}
            buttonTitle={'기술 지원 및 데모 요청'}
            href={''}
          />
          <ProductContent.ActionCard
            title={'전문가와 상담'}
            image={<SvgIcon Svg={Logo_Product_Default} />}
            description={`에이블스택 전문가와 직접 상담해보세요.
          여러분에게 최적화된 솔루션 구축을 약속드려요.`}
            buttonTitle={'문의하러 가기'}
            href={''}
          />
        </div>
      </ProductContent>
    </ProductTemplate>
  );
}
