import Image from 'next/image';

import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackBlock/article_3_1.svg';
import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackGenie/article_2_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackGenie/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackGenie/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackGenie/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackGenie/article_4_4.svg';
import Logo_Product_Default from '@/public/images/new/product_default.svg';

const headerContent: ProductHeaderProps = {
  title: 'Genie 셀프서비스/자동화',
  description: `Genie는 개발형 하이브리드 클라우드 배포 자동화 플랫폼으로, ABLESTACK에 대한 자동화 뿐 아니라 퍼블릭/프라이빗 클라우드 환경에 대한 자동화 기능을 제공합니다.`,
  bgImage: 'bg-ablestack-genie-header-bg',
};

export default function AblestackGeniePage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        title='아키텍처 개요'
        description={`Genie는 범용 언어를 기반으로 수행되는 자동화 도구로, 어려운 작업을 반복적으로 수행할 수 있도록 미리 생성한 플레이북을 기반으로 에이전트 없이 버튼 하나만 누르면 전사적으로 가상머신, 컨테이너, 네트워크, 애플리케이션 등을 배포할 수 있습니다.`}>
        <div className={'flex w-full items-center justify-center'}>
          <Image src={Logo_Article_2_1} />
        </div>
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray'}
        title='Genie 애플리케이션 관리 기능과 이점'
        imagePosition='first'
        image={<Logo_Article_3_1 />}>
        <ProductContent.Description
          contents={[
            {
              title: '가독성 높은 자동화 플랫폼',
              descriptions: [
                'YAML 형식의 배포 스크립트를 통한 애플리케이션/플랫폼 배포 자동화',
                '배포 및 모니터링, 관리의 전기능 자동화 지원',
              ],
            },
            {
              title: '다양한 사전 정의 배포 스크립트',
              descriptions: [
                '웹 애플리케이션, Dev Tools, 빅데이터, AI 등의 사전정의된 플랫폼 배포 도구 제공',
                '유명 오픈 소스 ㅡ로젝트의 배포판 제공',
              ],
            },
            {
              title: 'Mold에 통합된 모니터링',
              descriptions: ['독립된 형태의 대시보드', '배포된 앱의 운영 상태 모니터링'],
            },
          ]}
        />
      </ProductContent>

      <ProductContent title='관련 솔루션'>
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <ProductContent.RowSummaryCard
            title={'개발 및 테스트'}
            description={`오픈소스 프로젝트 및 개발/테스트 환경을 자동 배포하여
              빠르게 필요한 개발 및 테스트 환경을 구축합니다.`}
            image={<Logo_Article_4_1 />}
          />
          <ProductContent.RowSummaryCard
            title={'하이브리드 클라우드'}
            description={`원클릭으로 ABLESTACK 인프라 뿐 아니라 AWS, 
              Azure, Google 등의 퍼블릭 클라우드에 자원을
              바로 배포할 수 있습니다. `}
            image={<Logo_Article_4_2 />}
          />

          <ProductContent.RowSummaryCard
            title={'빅 데이터'}
            description={`복잡한 구성의 빅데이터 에코 플랫폼을 원클릭으로
              수분 내에 배포하고 사용할 수 있습니다. `}
            image={<Logo_Article_4_3 />}
          />
          <ProductContent.RowSummaryCard
            title={'데브옵스/IT운영'}
            description={`자동화된 IT 인프라 제공을 통해 애플리케이션의 
              딜리버리 사이클을 단축합니다. `}
            image={<Logo_Article_4_4 />}
          />
        </div>
      </ProductContent>

      <ProductContent className={'bg-backgroudGray'} title='최신 리소스 살펴보기'>
        <div className={'grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3'}>
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
        </div>
      </ProductContent>
    </ProductTemplate>
  );
}
