import Image from 'next/image';

import {
  CommonDemoContent,
  ProductContent,
  ProductHeaderProps,
  ProductTemplate,
} from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/product/ablestack/ablestackSlio/article_1_1.png';
import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackSlio/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/product/ablestack/ablestackSlio/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/product/ablestack/ablestackSlio/article_2_3.svg';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackSlio/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackSlio/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackSlio/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackSlio/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackSlio/article_4_4.svg';

const headerContent: ProductHeaderProps = {
  title: 'Slio 통합 백업',
  description: `
      Silo는 최신 비즈니스 환경을 위한 데이터 보호를 제공하여
      시스템의 다운타임을 최소화하고, 백업 작업을 간단하게 합니다.
      통합된 턴키 백업 솔루션으로 시스템을 더 쉽게 운영할 수 있습니다.
   `,
  bgImage: 'bg-ablestack-slio-header-bg',
  image: <Image src={Logo_Article_1_1} />,
  textColor: 'text-[#444444]',
};

export default function AblestackSlioPage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        title='Silo 통합 백업을 선택하는 이유'
        description={`생성에서 보관에 이르기까지 데이터에 대한 중앙 집중식 가시성과, 정책 기반 제어를 제공하며,
        빠르고 효율적인 백업으로 가동 시간에 대한 SLA 충족을 지원합니다.`}>
        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <ProductContent.Item
            image={<Logo_Article_2_1 />}
            title={'데이터 수명 주기 관리'}
            description={
              <p>
                통합 백업 관리 환경을 제공하여 백업/복구에 대한 가시성을 제공하고 백업 수명 주기를
                관리
              </p>
            }
          />
          <ProductContent.Item
            image={<Logo_Article_2_2 />}
            title={'걱정 없는 SLA 준수'}
            description={
              <p>가동시간 서비스 수준 계약을 확실하게 충족하고 효율적으로 백업/복구를 지원</p>
            }
          />
          <ProductContent.Item
            image={<Logo_Article_2_3 />}
            title={'통합 백업 작업'}
            description={
              <p>
                서로 다른 데이터 보호 제품을 구매하고 지원할 필요가 없어 시스템 운영 시간을 절약
              </p>
            }
          />
        </div>
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray text-[#444444]'}
        title='중앙 집중화된 유연한 데이터 보호 환경'
        imagePosition='first'
        image={<Image src={Logo_Article_3_1} loading={'lazy'} />}>
        <ProductContent.Description
          contents={[
            {
              title: '중앙 제어 환경',
              descriptions: [
                '데이터 백업, 복원 및 장기 보존을 위한 통합 솔루션 제공',
                '기본 및 백업 환경 전반에 대한 명확성, 가시성 제공',
                '백업 작업 및 백업 스토리지 상태에 대한 모니터링 및 관리',
              ],
            },
            {
              title: '기업 데이터 보호',
              descriptions: [
                '랜섬 웨어 식별 및 징후 감지',
                '예방, 탐지, 복구 솔루션을 통한 백업 데이터 보호',
                '사이버 공격에 대한 데이터 복원 환경 제공',
              ],
            },
            {
              title: '유연성 및 비용 절감',
              descriptions: [
                '백업 데이터 증가에 따른 보조 스토리지의 빠른 확장',
                '다양한 백업 소프트웨어, 하드웨어 플랫폼, 아카이브 옵션의 선택 가능',
                '콜드 데이터를 S3 오브젝트 스토리지로 저장하여 총 소유 비용을 줄임',
              ],
            },
          ]}
        />
      </ProductContent>

      <ProductContent title='백업/복구 파트너 제품'>
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <ProductContent.RowSummaryCard
            title={'스냅샷 백업 및 복구'}
            description={`ABLESTACK에 내장된 가상머신 스냅샷 기반의
              백업 및 복구 기능을 제공합니다.`}
            image={<Logo_Article_4_1 />}
          />
          <ProductContent.RowSummaryCard
            title={'Synology 기반 Silo'}
            description={`시놀로지 NAS의 Active Backup을 기반으로
              통합된 백업 및 복구 관리 환경을 제공합니다.`}
            image={<Logo_Article_4_2 />}
          />

          <ProductContent.RowSummaryCard
            title={'Networker 기반 Silo'}
            description={`Dell Networker 백업/복구 플랫폼과 오브젝트 스토리지
              백엔드를 사용한 효율적인 백업/복구 플랫폼입니다.`}
            image={<Logo_Article_4_3 />}
          />
          <ProductContent.RowSummaryCard
            title={'Veeam 기반 Silo'}
            description={`VMWare 기반의 ABLESTACK에서 Veeam 백업/복구
              플랫폼과 오보젝트 스트로지 백엔드를 사용한 
              데이터 보호 환경입니다. `}
            image={<Logo_Article_4_4 />}
          />
        </div>
      </ProductContent>

      <ProductContent className={'bg-backgroudGray text-[#444444]'} title='최신 리소스 살펴보기'>
        <CommonDemoContent />
      </ProductContent>
    </ProductTemplate>
  );
}
