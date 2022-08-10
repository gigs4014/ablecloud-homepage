import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/product/ablestack/ablestackWorks/article_1_1.svg';
import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackWorks/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/product/ablestack/ablestackWorks/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/product/ablestack/ablestackWorks/article_2_3.svg';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackWorks/article_3_1.svg';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackWorks/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackWorks/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackWorks/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackWorks/article_4_4.svg';
import Logo_Product_Default from '@/public/images/new/product_default.svg';

const headerContent: ProductHeaderProps = {
  title: 'Works 데스크톱 서비스',
  description: `ABLESTACK의 Works는 Mold상에서 DaaS(Desktop As a Service)를 제공하여 전용 클라이언트 없이 언제서가 업무 환경을 사용할 수 있는 가상 데스크톱 플랫폼 입니다.`,
  bgImage: 'bg-ablestack-works-header-bg',
  image: <Logo_Article_1_1 />,
};

export default function AblestackWorksPage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        title='Works 데스크톱을 선택하는 이유'
        description={`Works는 Mold 플러그인으로 제공되는 ABLESTACK이 자체 개발한 데스크톱 서비스로
        원클릭으로 데스크톱 서비스를 배포하여 바로 사용할 수 있으며, 클라이언트 없이 어디서든 업무를 할 수 있도록 지원합니다.`}>
        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <ProductContent.Item
            image={<Logo_Article_2_1 />}
            title={'HCI와 DaaS의 결합'}
            description={
              <p>
                HCI와 결합되어 있기 때문에
                <br />
                단순한 구성, 비용 효율적임
              </p>
            }
          />
          <ProductContent.Item
            image={<Logo_Article_2_2 />}
            title={'클라이언트리스 가상 데스크톱'}
            description={
              <p>
                배포된 데스크톱 연결에
                <br />
                별도의 클라이언트가 필요없음
              </p>
            }
          />
          <ProductContent.Item
            image={<Logo_Article_2_3 />}
            title={'자동화된 배포'}
            description={
              <p>
                Mold와 연계되어 필요 시
                <br />
                원클릭으로 모든 인프라를 배포
              </p>
            }
          />
        </div>
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray'}
        title='단일 콘솔에서 가상머신과 볼륨, 네트워크, 백업, 컨테이너 등의 모든 것을 관리'
        imagePosition='first'
        image={<Logo_Article_3_1 />}>
        <ProductContent.Description
          contents={[
            {
              title: '안전한 원격 업무 환경',
              descriptions: [
                '도메인/사용자별로 완전히 격리된 데스크톱 인프라',
                '자체적인 디렉토리 서비스 및 세분화된 보안 정책 적용',
                '단일 접속 보안 게이트웨이 제공',
                '안전한 공유환경을 통한 데이터 유출 문제 해결',
              ],
            },
            {
              title: '높은 성능 및 유연성',
              descriptions: [
                'Data Localily, Image Caching 등의 고성능 아키텍처',
                '멀티 하이퍼바이저 지원',
              ],
            },
            {
              title: '단일화된 아키텍처',
              descriptions: [
                'HCI에 통합된 플랫폼으로 단순 구조 및 비용 절감',
                '통합 모니터링 환경을 제공',
              ],
            },
          ]}
        />
      </ProductContent>

      <ProductContent title='유즈케이스'>
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <ProductContent.RowSummaryCard
            title={'보안 업무 환경'}
            description={`보안 공유 환경 등을 제공하고, 업무에 집중할 수 있는
            보안 업무 환경을 구축하여 제공할 수 있습니다.`}
            image={<Logo_Article_4_1 />}
          />
          <ProductContent.RowSummaryCard
            title={'DevOps 및 CI/CD'}
            description={`빠르게 개발 및 운영할 수 있는 업무 환경을 제공하여
            지속적으로 개발 및 통합이 가능한 IT환경을 구성합니다.`}
            image={<Logo_Article_4_2 />}
          />

          <ProductContent.RowSummaryCard
            title={'원격업무/지사업무 지원'}
            description={`빠르게 부서별 원격 업무 환경 및 지사를 위한
            업무 환경을 제공하여 어디서든 업무 환경을 
            사용자에게 제공할 수 있습니다. `}
            image={<Logo_Article_4_3 />}
          />
          <ProductContent.RowSummaryCard
            title={'콜센터 시스템'}
            description={`동일 이미지로 만들어진 데스크톱 환경으로 콜센터
            환경을 만들고 어디서든 동일한 업무 환경을 제공합니다.`}
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
