import Image from 'next/image';

import AboutAdvantage from 'src/templates/about/AboutAdvantage';
import AboutContent from 'src/templates/about/AboutContent';
import AboutExample from 'src/templates/about/AboutExample';
import AboutHeader from 'src/templates/about/AboutHeader';
import AboutProduct from 'src/templates/about/AboutProduct';

import AdvantageData_3_1 from '@/public/images/new/about/advantageData_3_1.svg';
import AdvantageData_3_2 from '@/public/images/new/about/advantageData_3_2.svg';
import AdvantageData_3_3 from '@/public/images/new/about/advantageData_3_3.svg';
import AdvantageData_3_4 from '@/public/images/new/about/advantageData_3_4.svg';
import Example_3 from '@/public/images/new/about/example_3.png';
import Example_3_1 from '@/public/images/new/about/example_3_1.svg';
import Example_3_2 from '@/public/images/new/about/example_3_2.svg';
import Example_3_3 from '@/public/images/new/about/example_3_3.svg';
import Product_3_1 from '@/public/images/new/about/product_3_1.svg';
import Product_3_2 from '@/public/images/new/about/product_3_2.svg';
import Product_3_3 from '@/public/images/new/about/product_3_3.svg';
import Product_3_4 from '@/public/images/new/about/product_3_4.svg';
import Header_Content_3 from '@/public/images/new/home/header-image-3.png';

const headerData = {
  title: '영상감시 인프라, HCI를 통해 공간 절약,기존장비 재활용으로 혁신',
  description:
    'ABLESTACK는 단일 HCI 플랫폼을 통해 영상감시 인프라를 단순화 시켜 공간을 절약하면서도 높은 성능을 제공하며, 기존 장비와의 호환성 제공으로 기존 영상데이터의 안정적 운영을 보장합니다.',
  bgImage: 'bg-home-header-bg-3',
  contentImage: Header_Content_3,
};

const advantageData = [
  {
    image: <AdvantageData_3_1 />,
    title: '전력 감소',
    description: '단순한 인프라 구성으로 상면 및 전력 감소',
  },
  {
    image: <AdvantageData_3_2 />,
    title: '고성능 제공',
    description: '고성능을 제공하여 영상감시 안정성 제고',
  },
  {
    image: <AdvantageData_3_3 />,
    title: '용량 부족 문제 해결',
    description: '무중단 인프라 확장을 지원하여 용량 부족 문제를 빠르게 해결',
  },
  {
    image: <AdvantageData_3_4 />,
    title: '관리 효율성',
    description: '통합 관리 및 모니터링을 통한 높은 관리 효율성',
  },
];

const Effect = () => {
  return (
    <>
      <AboutHeader headerData={headerData} />
      <div className='w-full bg-[#000012]'>
        <AboutContent
          title='대용량 데이터 관리를 위한 최적의 단일 HCI 플랫폼'
          titleDescription='ABLESTACK은 HCI 플랫폼으로 단일 서버 환경을 통해 영상감시 시스템에 필요한 서버 및 고성능 스토리지를 제공하여 인프라를 단순화 하면서도 안정적인 영상감시 데이터 수집/분석 환경을 제공합니다.'
          subDescription='ABLESTACK은 단순한 구성 만으로도 지속적인 대량의 데이터 송수신을 위한 인프라를 제공하기 위한 기능을 단일 플랫폼에 모두 구성하기 때문에 단시간 내에 영상감시 시스템용 인프라를 구성할 수 있습니다.'
          buttonText='제품소개 자세히 보기'
          href='/products'>
          <AboutProduct
            bgColor='bg-[#1D1D3D]'
            title='영상감시 시스템을 위한 최적의 HCI 플랫폼'
            description='ABLESTACK은 x86 서버 구성만으로 영상감시 시스템을 위한 모든 인프라를 제공하며, 지속적으로 대량의 영상 데이터를 전송하는 환경에서
            일관된 고성능을 제공하는 안정적인 스토리지를 통합하여 제공합니다.'
            cards={[
              {
                title: '서버 가상화',
                image: <Product_3_1 />,
              },
              {
                title: '내장 디스크 기반의 고성능 스토리지',
                image: <Product_3_2 />,
              },
              {
                title: '웹 기반 통합 인프라 관리 플랫폼',
                image: <Product_3_3 />,
              },
              {
                title: '인프라 통합 모니터링',
                image: <Product_3_4 />,
              },
            ]}
          />
        </AboutContent>
      </div>
      <div className='w-full bg-[#000018]'>
        <AboutContent
          title='특장점 및 기대효과'
          titleDescription='ABLESTACK은 단순하면서도 높은 성능을 제공해 영상감시 시스템의 효율성을 극대화 합니다.'
          subDescription='영상감시 인프라가 가지는 고질적 문제점인 상면 문제 및 용량문제,
          그리고 확장성 문제를 단일 플랫폼으로 해결하여 인프라 효율성을 극대화 할 수 있습니다.'
          buttonText='솔루션 자세히 보기'
          href='/solutions/video-surveillance'>
          <AboutAdvantage advantageData={advantageData} bgColor='bg-[#1D1D3D]' />
        </AboutContent>
      </div>
      <div className='w-full bg-[#00001E]'>
        <AboutContent
          title='적용사례'
          titleDescription='ABLESTACK은 상주시청의 도시 안전을 위한 영상감시 시스템의 효율적 운영을 위해 도입되어 운용 중입니다.'
          subDescription='ABLESTACK은 전통적인 인프라로 구성된 영상감시 인프라를 HCI 기반으로 구성하여 상면을 절약하고,
          단계적으로 인프라의 전반적인 교체 작업을 추진하고 있습니다.'
          buttonText='성공사례 자세히보기'
          href='/interview'>
          <AboutExample
            mainImage={<Image src={Example_3} />}
            clientName='상주시청'
            title='영상 감시 인프라 HCI 전환'
            cards={[
              {
                title: '상주시 데이터센터 상면 절약',
                image: <Example_3_1 />,
              },
              {
                title: '기존 인프라 재활용 및 단계적 인프라 교체 환경 제공',
                image: <Example_3_2 />,
              },
              {
                title: '고가용성 제공을 통한 안정적 인프라 제공',
                image: <Example_3_3 />,
              },
            ]}
            bgColor='bg-[#1D1D3D]'
          />
        </AboutContent>
      </div>
    </>
  );
};

export default Effect;
