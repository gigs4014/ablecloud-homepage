import Image from 'next/image';

import {
  CommonDemoContent,
  ProductContent,
  ProductHeaderProps,
  ProductTemplate,
} from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/product/ablestack/ablestackObject/article_1_1.svg';
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
  description: `Glue Objects는 간단하고 안전한 스케일 아웃 오브젝트 스토리지로 S3, Swift와 호환되기 때문에 기존의 오브젝트 스토리지 클라이언트로 빠르게 접속하고, 마이그레이션 할 수 있으며, 기업 내에서 빠르게 오브젝트 스토리지를 구성할 수 있습니다.`,
  bgImage: 'bg-ablestack-object-header-bg',
  image: <Logo_Article_1_1 />,
};

export default function AblestackObjectPage() {
  return (
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
                단일 창에서 단일 플랫폼으로
                <br />
                무제한 용량을 지원하는
                <br />
                비정형 스토리지 공간을 제공
              </p>
            }
          />
          <ProductContent.Item
            image={<Logo_Article_2_2 />}
            title={'높은 호환성 제공'}
            description={
              <p>
                AWS S3, OpenStack Swift와
                <br />
                호환되는 네임스페이스를 제공
              </p>
            }
          />
          <ProductContent.Item
            image={<Logo_Article_2_3 />}
            title={'강화된 데이터 보안'}
            description={
              <p>
                복제, 암호화, WORM, 불변성을
                <br />
                통한 데이터 보호하고
                <br />
                오브젝트 버전 관리를 지원
              </p>
            }
          />
        </div>
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray'}
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
            title={'비즈니스 크리티컬 앱'}
            description={`다수의 가상머신을 통해 서비스되는 비즈니스 앱을 위해
              공유 스토리지를 제공합니다.`}
            image={<Logo_Article_4_1 />}
          />
          <ProductContent.RowSummaryCard
            title={'VDI/DaaS'}
            description={`Hyper-V, Citrix 등의 환경에서의 고성능 파일시스템을
              통해 안정적인 데스크톱 환경을 구축합니다.`}
            image={<Logo_Article_4_2 />}
          />

          <ProductContent.RowSummaryCard
            title={'영상 감시'}
            description={`영상 수집 서버를 통해 수집되는 영상 데이터를 저장하고
              조회할 수 있는 대용량 공유 스토리지를 제공합니다.`}
            image={<Logo_Article_4_3 />}
          />
          <ProductContent.RowSummaryCard
            title={'멀티 클라우드'}
            description={`다양한 프로토콜 지원을 통해 VMWare, Hyper-V, 
              Citrix, Linux KVM 등의 멀티 하이퍼바이저를 지원합니다.`}
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
