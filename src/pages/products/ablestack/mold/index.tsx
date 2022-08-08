import Image from 'next/image';

import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackCell/article_2_1.png';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackMold/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackMold/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackMold/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackMold/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackMold/article_4_4.svg';
import Logo_Product_Default from '@/public/images/new/product_default.svg';

const headerContent: ProductHeaderProps = {
  title: 'Mold 클라우드 관리 플랫폼',
  description: `Mold는 매우 간결한 단순성을 제공하여 IT인프라를 손쉽게 관리할 수 있도록 도와줍니다.
  클릭 한번으로 대부분의 작업을 처리할 수 있습니다.
  또한 인프라 및 애플리케이션의 운영을 자동화 할 수 있어 효율적으로 인프라를 관리할 수 있습니다.`,
  bgImage: 'bg-ablestack-mold-header-bg',
  textColor: 'text-black',
};

export default function AblestackMoldPage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        title='아키텍처 개요'
        description={`Mold는 Cell 하이퍼바이저 및 다양한 하이퍼바이저 호스트에 연결하여
        가상머신, 네트워크, 스토리지 관리 기능을 통합적으로 제공하는 클라우드 플랫폼 입니다.`}>
        <div className={'flex w-full items-center justify-center'}>
          <Image src={Logo_Article_2_1} />
        </div>
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray'}
        title='단일 콘솔에서 가상머신과 볼륨, 네트워크, 백업, 컨테이너 등의 모든 것을 관리'
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
              descriptions: ['가상머신, 스토리지, 네트워크 관리', '정책 기반 가상 자원 배포 관리'],
            },
            {
              title: '내장된 비즈니스 연속성 제공',
              descriptions: [
                'C가상머신 단위별 스냅샷 백업 및 복구',
                '클러스터 간 미러링을 통한 재해 복구 지원',
                'Synology, Veem, EMC Networker 등의 백업 어플라이언스 연동 지원',
              ],
            },
          ]}
        />
      </ProductContent>

      <ProductContent title='관련 솔루션'>
        <div>
          <div className='flex gap-[40px]'>
            <ProductContent.RowSummaryCard
              title={'비즈니스 연속성'}
              description={`내장된 스냅샷 백업 및 복구, 재해복구 및 써드파티
              백업/복구 기능을 통해 비즈니스 연속성을 보장합니다.`}
              image={<Logo_Article_4_1 />}
            />
            <ProductContent.RowSummaryCard
              title={'비즈니스 크리티컬 앱'}
              description={`정책 기반 가상자원 관리 및 부하분산 기능을 통해
              기업의 중요 애플리케이션을 안정적으로 실행합니다.`}
              image={<Logo_Article_4_2 />}
            />
          </div>
          <div className='mt-[40px] flex gap-[40px]'>
            <ProductContent.RowSummaryCard
              title={'IT 운영'}
              description={`일원화된 자원관리 및 네트워크 관리를 통해 단일 환경에서
              모든 인프라를 관리하고 통제할 수 있습니다.`}
              image={<Logo_Article_4_3 />}
            />
            <ProductContent.RowSummaryCard
              title={'개발 및 테스트'}
              description={`다양한 가상머신 및 개발환경을 배포하여 사용할 수 있어
              개발 및 테스트, 운영 환경 통합을 위한 최적의 환경을
              제공합니다. `}
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
