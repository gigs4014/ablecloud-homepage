import AboutAdvantage from 'src/templates/about/AboutAdvantage';
import AboutContent from 'src/templates/about/AboutContent';
import AboutExample from 'src/templates/about/AboutExample';
import AboutHeader from 'src/templates/about/AboutHeader';
import AboutProduct from 'src/templates/about/AboutProduct';

import AdvantageData_2_1 from '@/public/images/new/about/advantageData_2_1.svg';
import AdvantageData_2_2 from '@/public/images/new/about/advantageData_2_2.svg';
import AdvantageData_2_3 from '@/public/images/new/about/advantageData_2_3.svg';
import AdvantageData_2_4 from '@/public/images/new/about/advantageData_2_4.svg';
import Example_2_1 from '@/public/images/new/about/example_2_1.svg';
import Example_2_2 from '@/public/images/new/about/example_2_2.svg';
import Product_2_1 from '@/public/images/new/about/product_2_1.svg';
import Product_2_2 from '@/public/images/new/about/product_2_2.svg';
import Product_2_3 from '@/public/images/new/about/product_2_3.svg';
import Product_2_4 from '@/public/images/new/about/product_2_4.svg';
import Product_2_5 from '@/public/images/new/about/product_2_5.svg';
import Header_Content_2 from '@/public/images/new/home/header-image-2.png';

const headerData = {
  title: '가상데스크톱에 대한 불만족, HCI로 관리와 성능 문제 해결',
  description:
    'ABLESTACK은 단일 플랫폼으로 단순하면서도, 가상데스크톱을 위한 고성능 환경을 제공하여 기존 가상데스크톱 환경의 복잡성 문제와 성능 문제를 동시에 해결합니다.',
  bgImage: 'bg-home-header-bg-2',
  contentImage: Header_Content_2,
};

const advantageData = [
  {
    image: <AdvantageData_2_1 />,
    title: '자사,타사 가리지 않는 호환성',
    description: '다양한 하이퍼바이저와 호환되어 모든 가상데스크톱 제품 사용가능',
  },
  {
    image: <AdvantageData_2_2 />,
    title: '최대 4배 이상',
    description: '다양한 캐시 제공으로 기존 인프라 대비 최대 4배 이상의 성능 제공',
  },
  {
    image: <AdvantageData_2_3 />,
    title: '모든 자원 가상화',
    description: '모든 자원을 가상화하여 단순한 인프라 제공',
  },
  {
    image: <AdvantageData_2_4 />,
    title: '통합 관리',
    description: '가상화 기능과 가상데스크톱 기능을 통합 관리하여 효율성 제고',
  },
];

const Performance = () => {
  return (
    <>
      <AboutHeader headerData={headerData} />
      <div className='w-full bg-[#161616]'>
        <AboutContent
          title='성능과 유연성, 편의성까지 제공하는 단일 HCI 플랫폼'
          titleDescription='ABLESTACK은 HCI 플랫폼으로 단일 서버 환경을 통해 가상데스크톱을 위한 고성능의 가상머신, 스토리지를 제공할 뿐 아니라,
            이러한 편리성을 다양한 하이퍼바이저와 가상데스크톱 제품에 대해 동일하게 제공하는 유일한 제품입니다.'
          subDescription='ABLESTACK은 x86 서버 만으로 가상데스크톱 서비스를 제공할 수 있는 단일 플랫폼으로, 다른 구성요소 없이 바로 가상데스크톱을 실행할 수 있습니다. 더 이상 느린 가상데스크톱 때문에 고민할 필요가 없습니다.'
          buttonText='제품소개 자세히 보기'
          href='/products'>
          <AboutProduct
            bgColor='bg-[#484848]'
            title='가상데스크톱을 위한 최적의 HCI 플랫폼'
            description='ABLESTACK은 가상데스크톱 서비스를 위해 단일 환경과 고성능 인프라를 제공하여 만족도가 높은 인프라를 제공합니다.'
            cards={[
              {
                title: '고성능 분산스토리지 제공',
                image: <Product_2_1 />,
              },
              {
                title: 'iSCSI, SMB 등 다양한 프로토콜 지원',
                image: <Product_2_2 />,
              },
              {
                title: '데이터 로컬리티를 통한 고성능 지원',
                image: <Product_2_3 />,
              },
              {
                title: '가상머신에 대한 통합 모니터링',
                image: <Product_2_4 />,
              },
              {
                title: '멀티하이퍼바이저 지원',
                image: <Product_2_5 />,
              },
            ]}
          />
        </AboutContent>
      </div>
      <div className='w-full bg-[#222]'>
        <AboutContent
          title='특장점 및 기대효과'
          titleDescription='ABLESTACK은 서버, 스토리지로 구성된 일반 가상데스크톱 인프라 또는 경쟁사 HCI 대비 최대 4배 이상의 성능을 제공하여 가상데스크톱에 대한 엔드유저 만족도를 높일 수 있습니다.'
          subDescription='다양한 가상데스크톱 제품에 성능 및 기능이 인증되어 있는 제품으로 어떠한 환경에서도 높은 성능과 관리 효율성을 제공하기 때문에 가상데스크톱 사용자의 만족도와 관리 편의성을 동시에 높일 수 있습니다.'
          buttonText='솔루션 자세히 보기'
          href='/solutions/virtual-desktop-and-daas'>
          <AboutAdvantage advantageData={advantageData} bgColor='bg-[#484848]' />
        </AboutContent>
      </div>
      <div className='w-full bg-[#161616]'>
        <AboutContent
          title='적용사례'
          titleDescription='ABLESTACK은 효율적인 교육환경 제공을 위해 Tilon DStation를 사용하여
          경남정보대학에 가상데스크톱 환경을 구축하여 교육현장에 활용 중입니다.'
          subDescription='ABLESTACK은 Tilon DStation 뿐 아니라 Citrix의 공식 인증 파트너로
          Citrix Virtual Apps & Desktop 에 대해 높은 성능 및 안정성을 보장합니다.'
          buttonText='성공사례 자세히보기'
          href='/interview'>
          <AboutExample
            mainImage={
              <embed width='527' height='296' src={`https://www.youtube.com/embed/4xAH-T0Ta_w`} />
            }
            clientName='경남정보대학'
            title='i Station (ABLESTACK + D Station)'
            cards={[
              {
                title: '고성능 교육용 가상데스크톱 환경 제공',
                image: <Example_2_1 />,
              },
              {
                title: '통합 모니터링 및 운영 환경 제공',
                image: <Example_2_2 />,
              },
            ]}
            bgColor='bg-[#484848]'
          />
        </AboutContent>
      </div>
    </>
  );
};
export default Performance;
