import Image from 'next/image';

import AboutAdvantage from 'src/templates/about/AboutAdvantage';
import AboutContent from 'src/templates/about/AboutContent';
import AboutExample from 'src/templates/about/AboutExample';
import AboutHeader from 'src/templates/about/AboutHeader';
import AboutProduct from 'src/templates/about/AboutProduct';

import AdvantageData_1_1 from '@/public/images/new/about/advantageData_1_1.svg';
import AdvantageData_1_2 from '@/public/images/new/about/advantageData_1_2.svg';
import AdvantageData_1_3 from '@/public/images/new/about/advantageData_1_3.svg';
import AdvantageData_1_4 from '@/public/images/new/about/advantageData_1_4.svg';
import AdvantageData_1_5 from '@/public/images/new/about/advantageData_1_5.svg';
import AdvantageData_1_6 from '@/public/images/new/about/advantageData_1_6.svg';
import Example_1 from '@/public/images/new/about/example_1.png';
import Example_1_1 from '@/public/images/new/about/example_1_1.svg';
import Example_1_2 from '@/public/images/new/about/example_1_2.svg';
import Example_1_3 from '@/public/images/new/about/example_1_3.svg';
import Product_1_1 from '@/public/images/new/about/product_1_1.svg';
import Product_1_2 from '@/public/images/new/about/product_1_2.svg';
import Product_1_3 from '@/public/images/new/about/product_1_3.svg';
import Product_1_4 from '@/public/images/new/about/product_1_4.svg';
import Product_1_5 from '@/public/images/new/about/product_1_5.svg';
import Header_Content_1 from '@/public/images/new/home/header-image-1.png';

const headerData = {
  title: '단일 플랫폼으로 기존의 복잡한 인프라에 대한 고민 해결',
  description:
    'ABLESTACK은 서버, 스토리지, 네트워크 인프라를 제공하는 단일 HCI 플랫폼으로 기존 인프라 대비 IT운영 비용이 최대 80% 절감됩니다.',
  bgImage: 'bg-home-header-bg-1',
  contentImage: Header_Content_1,
};

const advantageData = [
  {
    image: <AdvantageData_1_1 />,
    title: '비용 절감',
    description: 'x86 서버만으로 이루어진 단순구조로 구축 및 유지보수 비용 절감',
  },
  {
    image: <AdvantageData_1_2 />,
    title: '효율성 고도화',
    description: '물리 서버의 가상화로 물리자원 및 상면 효율성 제고',
  },
  {
    image: <AdvantageData_1_3 />,
    title: '직관적인 관리',
    description: '통합 관리를 통해 관리 복잡성이 낮아짐',
  },
  {
    image: <AdvantageData_1_4 />,
    title: '무중단 인프라',
    description: '내장된 고가용성을 제공하여 무중단 인프라 제공',
  },
  {
    image: <AdvantageData_1_5 />,
    title: '신속한 장애 대응',
    description: '단일 유지보수 체계로 빠른 장애 대응 가능',
  },
  {
    image: <AdvantageData_1_6 />,
    title: '다양한 서비스 운영',
    description: '가상화 기술을 통한 인프라 유연성 증가로 다양한 서비스 운영 가능',
  },
];

const Infra = () => {
  return (
    <>
      <AboutHeader headerData={headerData} />
      <div className='w-full bg-[#17244F]'>
        <AboutContent
          title='서버, 스토리지, 네트워크 및 관리시스템을 통합 제공하는 단일 HCI 플랫폼'
          titleDescription='ABLESTACK은 HCI 플랫폼으로 단일 환경에서 서버, 스토리지, 네트워크 인프라를 제공하면서,
            인프라에 대한 관리 환경을 제공하여 기업의 가상화 환경을 단순화 시키는데 가장 적합한 제품입니다.'
          subDescription='ABLESTACK이 제공하는 인프라를 이용해 기존 인프라로 운영한 서비스 뿐 아니라 빅데이터, 인공지능, 모바일 앱 등 다양한 서비스를 자유롭게 구축, 운영할 수 있습니다.'
          buttonText='제품소개 자세히 보기'
          href='/products'>
          <AboutProduct
            bgColor='bg-[#22366F]'
            title='단일 플랫폼 인프라'
            description='ABLESTACK은 HCI 플랫폼으로, 제품을 설치만 하면 별도의 추가 구성요소 없이 다음의 모든 인프라를 제공합니다.'
            cards={[
              {
                title: '가상서버',
                image: <Product_1_1 />,
              },
              {
                title: '분산 스토리지',
                image: <Product_1_2 />,
              },
              {
                title: '소프트웨어 정의 네트워크',
                image: <Product_1_3 />,
              },
              {
                title: '알림 기능을 내장한 실시간 모니터링',
                image: <Product_1_4 />,
              },
              {
                title: '웹 기반 관리 플랫폼',
                image: <Product_1_5 />,
              },
            ]}
          />
        </AboutContent>
      </div>
      <div className='w-full bg-[#1B2549]'>
        <AboutContent
          title='특장점 및 기대효과'
          titleDescription='ABLESTACK은 기존 인프라 구조의 데이터센터에 비해 최대 70%의 운영 비용 절감 효과를 제공합니다.'
          subDescription='단일 HCI 플랫폼을 통해 전반적인 비용 절감 효과를 거둘 수 있을 뿐 아니라 인프라 생성/삭제가 자유로워
          신기술을 접목한 서비스 개발, 운영이 가능해 집니다.'
          buttonText='솔루션 자세히 보기'
          href={'/solutions/server-virtualization'}>
          <AboutAdvantage advantageData={advantageData} bgColor='bg-[#22366E]' />
        </AboutContent>
      </div>
      <div className='w-full bg-[#1D2D54]'>
        <AboutContent
          title='적용사례'
          titleDescription='ABLESTACK은 한국세무사회 데이터센터의 기존 인프라를 전환하여 기존 대비 80%의 운영 비용 및 상면 절감 효과를 제공하고 있습니다.'
          subDescription='한국세무사회는 HCI 도입을 통해 기존의 데이터센터 상면을 대폭 절약하여 데이터센터를 외부로 이관하여 안정성을 높이고,
          절약된 공간은 사내복지시설로 활용하고 있습니다.'
          buttonText='성공사례 자세히보기'
          href='/interview/kacpta'>
          <AboutExample
            mainImage={<Image src={Example_1} />}
            clientName='한국세무사회'
            title='커뮤니티 클라우드'
            cards={[
              {
                title: '물리 인프라 30대를 단 HCI 4대로 교체',
                image: <Example_1_1 />,
              },
              {
                title: '운영 인력 1명으로 모든 시스템 운영',
                image: <Example_1_2 />,
              },
              {
                title: '24시간 무중단 운영체계 구축',
                image: <Example_1_3 />,
              },
            ]}
            bgColor='bg-[#22366E]'
          />
        </AboutContent>
      </div>
    </>
  );
};

export default Infra;
