import Image from 'next/image';

import {
  CommonDemoContent,
  ProductContent,
  ProductHeaderProps,
  ProductTemplate,
} from '@/templates';

import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackGlue/article_2_1.png';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackGlue/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackGlue/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackGlue/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackGlue/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackGlue/article_4_4.svg';

const headerContent: ProductHeaderProps = {
  title: 'Glue 스토리지',
  description: `ßGlue는 접착제, 풀을 뜻하는 단어로, ABLESTACK의 스토리지 플랫폼의 이름입니다. 호스트에 있는 
  디스크를 이용해 통합된 저장공간을 제공하 고, 다양한 형태로 스토리지 서비스를 제공하는 HCI
  스토리지의 특성을 잘 설명할 수 있는 단어로, 통합 스토리지라는 의미를 담고 있습니다.`,
  bgImage: 'bg-ablestack-glue-header-bg',
  imagePosition: 'last',
};

export default function AblestackGluePage() {
  return (
    <ProductTemplate {...headerContent}>
      <ProductContent
        title='아키텍처 개요'
        description={`Glue는 ABLESTACK HCI의 핵심 구성요소로 HCI의 스토리지를 제공하기 위한 플랫폼입니다.
        다음의 그림은 ABLESTACK HCI의 전체 구성요소 중 Glue가 제공하는 기능을 아키텍처로 표현합니다.`}>
        <div className={'flex w-full items-center justify-center'}>
          <Image src={Logo_Article_2_1} />
        </div>
      </ProductContent>

      <ProductContent
        className={'bg-backgroudGray'}
        title='기존의 SAN 또는 NAS를 뛰어넘는 고도로 자동화된 하이퍼 컨버지드 스토리지'
        imagePosition='first'
        image={<Image src={Logo_Article_3_1} />}>
        <ProductContent.Description
          contents={[
            {
              title: '가상머신 기반 스토리지 컨트롤러',
              descriptions: ['하드웨어 의존성 경감', '멀티 하이퍼바이저를 지원'],
            },
            {
              title: '내장 디스크를 이용한 스토리지',
              descriptions: [
                '별도의 외장 스토리지 불필요',
                '노드 및 디스크 추가로 무제한 용량 확장',
                '압축, 중복제거를 통한 효율적인 저장공간 활용',
              ],
            },
            {
              title: '내결함성 (자가진단, 자가복구)',
              descriptions: [
                '장비 이상 시 자가진단',
                '장비 이상시 자가복구로 서비스 연속성 제공',
                '유지보수 대응 시간의 여유 제공',
              ],
            },
          ]}
        />
      </ProductContent>

      <ProductContent title='관련 솔루션'>
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <ProductContent.RowSummaryCard
            title={'핵심 업무를 위한 가상화 인프라'}
            description={`내장 디스크 만으로 고성능의 내결함성 스토리지를 제공하여
              복잡한 스토리지 패브릭을 제거할 수 있고
              99.9% 이상의 운영을 보장하는 안정성을 제공합니다.`}
            image={<Logo_Article_4_1 />}
          />
          <ProductContent.RowSummaryCard
            title={'프라이빗 클라우드'}
            description={`필요할 때 무중단으로 무제한 확장이 가능하여
              프라이빗 클라우드 구축을 위한 최적의 솔루션입니다.`}
            image={<Logo_Article_4_2 />}
          />

          <ProductContent.RowSummaryCard
            title={'Edge Computing'}
            description={`내장 디스크 만으로 스토리지를 제공하기 때문에
              단순하고 유연성이 높은 Edge Computing 인프라를
              제공합니다.`}
            image={<Logo_Article_4_3 />}
          />
          <ProductContent.RowSummaryCard
            title={'가상데스크톱/DaaS'}
            description={`Thin Provisioning, 베이스 스냅샷 기능을 제공하여
              다양한 가상데스크톱/DaaS 환경에 적용할 수 있습니다.`}
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
