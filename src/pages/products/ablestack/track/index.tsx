import Image from 'next/image';

import {
  CommonDemoContent,
  ProductContent,
  ProductHeaderProps,
  ProductTemplate,
} from '@/templates';

import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackGlue/article_3_1.png';
import Logo_Article_1_1 from '@/public/images/new/product/ablestack/ablestackTrack/article_1_1.png';
import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackTrack/article_2_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackTrack/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackTrack/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackTrack/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackTrack/article_4_4.svg';

const headerContent: ProductHeaderProps = {
  title: 'Track 네트워크 및 보안',
  description: `Track은 ABLESTACK에 가상화된 네트워킹 레이어를 구성하는 플랫폼으
  로, 가상화 영역에 소프트웨어 정의된 네트워크를 배포합니다. 가상화된
   네트워크 어플라이언스를 배포하여 빠르게 사용자 단위로 격리된 네트워
   크를 배포하고 활용할 수 있습니다. `,
  bgImage: 'bg-ablestack-track-header-bg',
  image: <Image src={Logo_Article_1_1} />,
};

export default function AblestackTrackPage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        title='아키텍처 개요'
        description={`Track은 가상 라우터 기반의 오버레이 소프트웨어 정의 네트워크를 제공합니다.
        다양한 네트워크 기능을 빠르게 구성하고 관리할 수 있습니다. `}>
        <div className={'flex w-full items-center justify-center'}>
          <Image src={Logo_Article_2_1} loading={'lazy'} />
        </div>
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray'}
        title='Track : Overlay SDN'
        imagePosition='first'
        image={<Image src={Logo_Article_3_1} />}>
        <ProductContent.Description
          contents={[
            {
              title: '다양한 가상 네트워킹 지원',
              descriptions: [
                'L2, L3, L4 등 다양한 레벨의 가상 네트워킹',
                'VPN, NAT 등의 게이트웨이 지원으로 모든 애플리케이션 지원',
              ],
            },
            {
              title: '제로 트러스트 기반의 안전한 연결',
              descriptions: [
                '보안 그룹 정책을 통한 애플리케이션 수준의 네트워크 트래픽 제어',
                '웹 기반의 보안 정책, 트래픽 제어 정책 관리 기능',
              ],
            },
            {
              title: '트래픽 모니터링',
              descriptions: [
                '가상 네트워크에 대한 물리 토플리지 모니터링',
                '기장 네트워크 수준의 트래픽, 패킷 덤프, 분석 지원',
              ],
            },
          ]}
        />
      </ProductContent>

      <ProductContent title='관련 솔루션'>
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <ProductContent.RowSummaryCard
            title={'프라이빗 클라우드'}
            description={`소프트웨어로 정의된 멀티테넌트 네트워크 인프라로써
              안전하고 유연한 클라우드 환경을 제공합니다.`}
            image={<Logo_Article_4_1 />}
          />
          <ProductContent.RowSummaryCard
            title={'보안 인프라'}
            description={`웹 기반의 트래픽 컨트롤 및 모니터링 환경을 제공하여
              소프트웨어로 정의된 보안 인프라를 제공합니다.`}
            image={<Logo_Article_4_2 />}
          />

          <ProductContent.RowSummaryCard
            title={'비즈니스 애플리케이션'}
            description={`방화벽, 로드밸런서 등을 내장하고 있어서 안정적으로
              부하분산 환경을 제공해야 하는 비즈니스 앱에 적합합니다. `}
            image={<Logo_Article_4_3 />}
          />
          <ProductContent.RowSummaryCard
            title={'하이브리드 클라우드'}
            description={`VPC 환경 및 Site to Site VPN 제공으로 다양한 퍼블릭
              클라우드와 네트워크 연동을 통해 인프라를 언제든
              확장할 수 있습니다. `}
            image={<Logo_Article_4_4 />}
          />
        </div>
      </ProductContent>

      <ProductContent className={'bg-backgroudGray'} title='최신 리소스 살펴보기'>
        <CommonDemoContent />
      </ProductContent>
    </ProductTemplate>
  );
}
