import Image from 'next/image';

import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/product/ablestack/ablestackSlio/article_1_1.svg';
import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackSlio/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/product/ablestack/ablestackSlio/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/product/ablestack/ablestackSlio/article_2_3.svg';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackSlio/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackSlio/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackSlio/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackSlio/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackSlio/article_4_4.svg';
import Logo_Product_Default from '@/public/images/new/product_default.svg';

const headerContent: ProductHeaderProps = {
  title: 'Slio 통합 백업',
  description: `Volume은 Glue에 내장된 확장형 블록 스토리지로, 가상머신의 워크로드 및 물리적인 워크로드에 모드 대응할 수 있도록 설계된 단일 통합 스토리지 플랫폼입니다.`,
  bgImage: 'bg-ablestack-slio-header-bg',
  image: <Logo_Article_1_1 />,
  textColor: 'text-black',
};

export default function AblestackSlioPage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        title='Silo 통합 백업을 선택하는 이유'
        description={`데이터 생성 부터 데이터 아카이브에 이르는 모든 과정에 대한 가시성을 확보하고, 데이터를 제어할 수 있습니다.
        복잡하지 않은 백업으로 쾌적한 환경을 누려보세요.`}>
        <ProductContent.Item
          image={<Logo_Article_2_1 />}
          title={'데이터 라이프사이클 관리 통합'}
          description={<p>수정필요</p>}
        />
        <ProductContent.Item
          image={<Logo_Article_2_2 />}
          title={'걱정 없는 SLA 준수'}
          description={<p>수정필요</p>}
        />
        <ProductContent.Item
          image={<Logo_Article_2_3 />}
          title={'배업 작업 통합'}
          description={<p>수정예정</p>}
        />
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray'}
        title='중앙 집중식 데이터 보호'
        imagePosition='first'
        image={<Image src={Logo_Article_3_1} />}>
        <ProductContent.Description
          contents={[
            {
              title: '완벽한 환경 대응 제품',
              descriptions: ['간결하고 직관적인 웹 기반, 멀티플랫폼, 모바일 환경 대응 제품'],
            },
            {
              title: '가상화 플랫폼 통합 관리',
              descriptions: [
                '완벽한 Private Cloud 환경을 제공',
                '높은 확장성과 유연성, 안정성 제공',
              ],
            },
            {
              title: '지속적으로 다양한 가상화 환경 대응',
              descriptions: [
                '가상머신 및 컨테이너 환경에 능동적으로 대응',
                '다양한 환경에 대한 자동화, 오케스트레이션 제공',
              ],
            },
          ]}
        />
      </ProductContent>

      <ProductContent title='관련 솔루션'>
        <div>
          <div className='flex gap-[40px]'>
            <ProductContent.RowSummaryCard
              title={'단순한 구조'}
              description={`서버, 네트워크, 스토리지를 하나의 장비로 통합하여
              물리적인 인프라 구조를 단순화합니다.`}
              image={<Logo_Article_4_1 />}
            />
            <ProductContent.RowSummaryCard
              title={'확장성이 우수한 유연 인프라'}
              description={`인프라를 추가적으로 확장해야할 때, 무중단 상태로
              서버를 추가할 수 있습니다.`}
              image={<Logo_Article_4_2 />}
            />
          </div>
          <div className='mt-[40px] flex gap-[40px]'>
            <ProductContent.RowSummaryCard
              title={'자동 자가 복구'}
              description={`물리적인 장애 발생 시에도 중지되지 않으며,
              일정 시간 경과 후 자가 복구를 실시합니다.`}
              image={<Logo_Article_4_3 />}
            />
            <ProductContent.RowSummaryCard
              title={'기존 인프라 대비 80% 절감'}
              description={`서버, 네트워크, 스토리지를 하나의 장비로 통합하여
              물리적인 인프라 구조를 단순화합니다.`}
              image={<Logo_Article_4_4 />}
            />
          </div>
        </div>
      </ProductContent>

      <ProductContent className={'bg-backgroudGray'} title='최신 리소스 살펴보기'>
        <ProductContent.ActionCard
          title={'기술노트'}
          image={<Logo_Product_Default />}
          description={`에이블스택을 좀더
          자세하게 설명한 기술개요`}
          buttonTitle={'지금 보러가기'}
          href={''}
        />
        <ProductContent.ActionCard
          title={'데모 체험'}
          image={<Logo_Product_Default />}
          description={`에이블스택을 먼저 체험하고,
          사용해보세요.`}
          buttonTitle={'기술 지원 및 데모 요청'}
          href={''}
        />
        <ProductContent.ActionCard
          title={'전문가와 상담'}
          image={<Logo_Product_Default />}
          description={`에이블스택 전문가와 직접 상담해보세요.
          여러분에게 최적화된 솔루션 구축을 약속드려요.`}
          buttonTitle={'문의하러 가기'}
          href={''}
        />
      </ProductContent>
    </ProductTemplate>
  );
}
