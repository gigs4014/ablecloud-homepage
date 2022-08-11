import Image from 'next/image';

import {
  ProductContent,
  ProductContentGridItem,
  ProductHeaderProps,
  ProductTemplate,
} from '@/templates';

import Logo_Article_3_1 from '@/public/images/new/product/article_3_1.png';

const headerContent: ProductHeaderProps = {
  title: 'ABLESTACK의 탄생',
  description: `복잡한 구조의 전통적 기업 데이터센터의 문제점을 해결하고,
    IT 환경의 급속한 발전으로 인해  발생하는 문제점을 해결하기 위해
    단일 서버 구성으로 모든 인프라와 플랫폼을 실행할 수 있도록 고안된
    HCI 플랫폼 입니다.`,
  bgImage: 'bg-product-header-bg',
};

const items: Record<string, Array<ProductContentGridItem>> = {
  ablestack: [
    {
      title: 'Cell',
      summary: '하이퍼바이저',
      href: '/products/ablestack/cell',
    },
    {
      title: 'Glue',
      summary: '분산스토리지',
      href: '/products/ablestack/glue',
    },
    {
      title: 'Mold',
      summary: '클라우드센터',
      href: '/products/ablestack/mold',
    },
    {
      title: 'Koral',
      summary: '쿠버네테스 클러스터',
      href: '/products/ablestack/koral',
    },
    {
      title: 'Track',
      summary: '가상 네트워킹',
      href: '/products/ablestack/network/track',
    },
    {
      title: 'Atom',
      summary: 'Micro Segmentation',
      href: '/products/ablestack/network/atom',
    },
  ],
  management: [
    {
      title: 'Wall',
      summary: '인프라 및 App 모니터링',
      href: '/products/ablestack/management/wall',
    },
    {
      title: 'Genie',
      summary: '애플리케이션 관리',
      href: '/products/ablestack/management/genie',
    },
    {
      title: 'Station',
      summary: 'Kubernetes 기반 PaaS',
      href: '/products/ablestack/management/station',
    },
  ],
  storage: [
    {
      title: 'Volume',
      summary: '확장형 블록 스토리지',
      href: '/products/ablestack/glue/volume',
    },
    {
      title: 'Files',
      summary: 'Glue 파일 시스템',
      href: '/products/ablestack/glue/files',
    },
    {
      title: 'Objects',
      summary: '오브젝트 스토리지',
      href: '/products/ablestack/glue/objects',
    },
  ],
};

export default function ProductHomePage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        className={'bg-backgroudGray'}
        title='기업 데이터센터가 직면한 문제'
        description={`기업에서 데이터 센터를 운영하고 실현하는 상황에서 생기는 어려움이 많습니다.
        특히나 급진적으로 발전하는 IT 환경에 비해 IT 인프라를 관리하는 데이터 센터의 대응은 속도를 따라가기 어렵습니다.`}>
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <ProductContent.RowSummaryCard
            title={'점점 더 복잡해지는 인프라'}
            description={`서로 다른 서버, 네트워크 장비, 스토리지로 구축된 기업 데이터센터는
운영하면서 증가하는 애플리케이션을 실행하고 서비스하기 위해 더 많은
서버 등의 장비를 필요로 하게 됩니다.`}
          />
          <ProductContent.RowSummaryCard
            title={'급격한 IT 기술변화에 대응이 어려운 경직된 인프라'}
            description={`애플리케이션 단위로 구성된 전통적 데이터센터는 빅데이터, AI 등의
          새로운 기술 변화와 데이터 폭증에 대응하기 어려운 경직된 인프라입니다.`}
          />
          <ProductContent.RowSummaryCard
            title={'높은 운영 비용'}
            description={`안정적인 인프라 운영을 위해 전통적인 데이터센터는 더 많은 공간과 에너지,
          그리고 인력을 필요로 합니다.`}
          />
          <ProductContent.RowSummaryCard
            title={'통합되지 않는 관리 시스템'}
            description={`인프라가 많아질수록 다양한 벤더사의 제품이 설치되면서 그 제품들을
          관리하기 위한 각각의 관리 인터페이스를 이용해야하기 때문에
          관리가 까다롭습니다.`}
          />
        </div>
      </ProductContent>

      <ProductContent
        title={'Hyper Converged Infrastructure'}
        description={`하이퍼 컨버지드 인프라스트럭처(HCI)는 기존 데이터 센터를 구축하기 위해 필요한 스토리지, 컴퓨팅, 네트워킹 및 관리를 한번에 통합하여
사용할 수 있는 소프트웨어 시스템입니다. HCI는 단순하고 통합된 자원 관리로 기존 IT 운영 모델보다 70%이상 적은 비용으로
데이터센터를 구축하고, 운영할 수 있도록 지원합니다.`}>
        <div>
          <Image src={Logo_Article_3_1} />
        </div>
      </ProductContent>

      <ProductContent className={'bg-backgroudGray'} title='ABLESTACK의 특징'>
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <ProductContent.RowSummaryCard
            title={'단순한 통합 인프라'}
            description={`x86 서버만으로 구성된 단순한 인프라로 서버, 네트워크, 스토리지 등의
            자원 뿐 아니라 다양한 플랫폼을 사용할 수 있어 물리적인 장비가
            매우 단순해 집니다.`}
          />
          <ProductContent.RowSummaryCard
            title={'뛰어난 확장성'}
            description={`용량의 증설을 위해 하드웨어를 언제든지 실행 중인 서비스의 중단 없이
            추가할 수 있으며, 수분 내에 가동하고, 원하는 서비스를 실행할 수 있습니다.`}
          />
          <ProductContent.RowSummaryCard
            title={'저 비용 / 고 가용성'}
            description={`전통적인 데이터센터와 비교하여 70% 이상 절감된 공간 및 에너지,
            인적 자원만으로도 운영이 가능합니다.`}
          />
          <ProductContent.RowSummaryCard
            title={'자원 / 관리를 통합'}
            description={`통합 클라우드 관리 플랫폼을 통해 모든 인프라와 플랫폼을 웹 기반으로
            사용자가 직접, 원클릭으로 관리할 수 있습니다. `}
          />
        </div>
      </ProductContent>
    </ProductTemplate>
  );
}
