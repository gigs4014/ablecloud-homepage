import { ReactNode } from 'react';

import Image from 'next/image';

import { Container } from '@/components/layout';
import { ProductHeaderProps, ProductTemplate } from '@/templates';

import CostSaving from '@/public/images/solutions/bigdata-cost-saving.png';
import Expansion from '@/public/images/solutions/bigdata-expansion.png';
import IO from '@/public/images/solutions/bigdata-io.png';
import SimpleManagement from '@/public/images/solutions/bigdata-simple-management.png';
import Workload from '@/public/images/solutions/bigdata-workload.png';
import BigData from '@/public/images/solutions/bigdata.png';

interface CardData {
  title: ReactNode;
  description: ReactNode;
  image: ReactNode;
}

const headerContent: ProductHeaderProps = {
  title: '솔루션',
  summary: '빅데이터 분석',
  description:
    'ABLESTACK은 빅 데이터를 위한 고성능 환경을 제공하고, 단순화된 관리 환경을 제공합니다. Hadoop 에코 시스템 및 NoSQL, 분산 데이터베이스 등과 같은 빅데이터 애플리케이션을 위한 민첩성 높은 온프레미스 인프라를 확보하여 기업의 애플리케이션을 빅데이터 기반의 이머징 앱으로 변경할 기회를 잡으십시오.',
  image: <Image src={BigData} />,
};

const cardDataList: Array<CardData> = [
  {
    title: '단순한 관리환경',
    image: <Image src={SimpleManagement} />,
    description:
      '모든 인프라를 단일 관리 환경에서 배포, 관리할 수 있기 때문에 베어메탈 빅데이터의 복잡한 환경에서 해방될 수 있습니다.',
  },
  {
    title: '운영 비용 절약',
    image: <Image src={CostSaving} />,
    description:
      '단일 인프라 환경에서 빅데이터 및 앱을 통합관리 할 수 있기 때문에 더 적은 상면, 전력소모로 비용을 절약할 수 있습니다.',
  },
  {
    title: '높은 안정성',
    image: <Image src={Workload} />,
    description:
      '내장된 데이터보호 및 재해복구, 자가치유, 고가용성 제공 등으로 빅데이터 워크로드를 실행 상태로 유지할 수 있습니다.',
  },
  {
    title: '고성능 IO 제공',
    image: <Image src={IO} />,
    description:
      '데이터로컬리티로 더 빠른 성능을 보장하고, 압축 및 중복제거로 더 적은 공간만으로도 3 티어 솔루션을 실행할 수 있습니다.',
  },
  {
    title: '주문형 확장',
    image: <Image src={Expansion} />,
    description:
      '데이터 노드의 확장 및 용량 확보를 위한 빅데이터 인프라의 배포는 원클릭으로 가능하고 빠르게 확장할 수 있습니다.',
  },
];

export default function BigDataPage() {
  return (
    <ProductTemplate {...headerContent} className='text-left prose-ul:p-0 prose-li:p-0'>
      <Container.PageWidth>
        <ul>
          {cardDataList.map(({ title, image, description }, index) => (
            <li className='my-12 rounded-md border-0.5 border-gray-100 shadow-md' key={index}>
              <section className='flex'>
                {image}
                <div className='px-8 text-left'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </Container.PageWidth>
    </ProductTemplate>
  );
}
