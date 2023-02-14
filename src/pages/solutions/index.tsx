import Image from 'next/image';

import { NextSeo } from 'next-seo';
import { v4 as uuid } from 'uuid';

import { CustomLink } from '@/components/common';
import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/solutions/article_1_1.png';
import Logo_Article_2_1 from '@/public/images/new/solutions/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/solutions/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/solutions/article_2_3.svg';
import Logo_Article_2_4 from '@/public/images/new/solutions/article_2_4.svg';
import Logo_Article_2_5 from '@/public/images/new/solutions/article_2_5.svg';
import Logo_Article_2_6 from '@/public/images/new/solutions/article_2_6.svg';
import Logo_Article_2_7 from '@/public/images/new/solutions/article_2_7.svg';
import Logo_Article_2_8 from '@/public/images/new/solutions/article_2_8.svg';
import Logo_Article_2_9 from '@/public/images/new/solutions/article_2_9.svg';
import Logo_Article_2_10 from '@/public/images/new/solutions/article_2_10.svg';
import Logo_Article_2_11 from '@/public/images/new/solutions/article_2_11.svg';
import Logo_Article_2_12 from '@/public/images/new/solutions/article_2_12.svg';
import Logo_Article_2_13 from '@/public/images/new/solutions/article_2_13.svg';
import Logo_Article_2_14 from '@/public/images/new/solutions/article_2_14.svg';
import Logo_Article_2_15 from '@/public/images/new/solutions/article_2_15.svg';
import Logo_Article_2_16 from '@/public/images/new/solutions/article_2_16.svg';
import Logo_Article_2_17 from '@/public/images/new/solutions/article_2_17.svg';
import Logo_Article_2_18 from '@/public/images/new/solutions/article_2_18.svg';
import Logo_Article_2_19 from '@/public/images/new/solutions/article_2_19.svg';
import Logo_Article_2_20 from '@/public/images/new/solutions/article_2_20.svg';
import Logo_Article_2_21 from '@/public/images/new/solutions/article_2_21.svg';
import Logo_Article_4_1 from '@/public/images/new/solutions/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/solutions/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/solutions/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/solutions/article_4_4.svg';
import Logo_Article_4_5 from '@/public/images/new/solutions/article_4_5.svg';
import Logo_Article_4_6 from '@/public/images/new/solutions/article_4_6.svg';

const headerContent: SolutionHeaderProps = {
  title: '솔루션',
  description: (
    <p>
      어떤 형태의 애플리케이션, 어떠한 비즈니스 워크로드 등에 상관없이 ABLESTACK이 솔루션을
      제공합니다.
      <br />
      <br />
      ABLESTACK은 기업의 비즈니스 및 IT혁신을 위한 필수적인 솔루션입니다.
    </p>
  ),
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_1} />,
  textColor: 'text-[#444444]',
};

const solutions = [
  {
    title: '빅데이터 분석',
    image: <Logo_Article_2_7 />,
    description: `빅 데이터 애플리케이션을 위한 
    클라우드 HCI의 민첩성과 온프레이스
    관리 편리성을 활용하십시오.`,
    href: '/solutions/big-data-analysis',
  },
  {
    title: '비즈니스 연속성/재해복구',
    image: <Logo_Article_2_2 />,
    description: `전체 데이터 백업 및 다양한 복구
    옵션을 통해 연속성을 보장함함으로써
    저비용으로 SLA를 충족하심시오.`,
    href: '/solutions/business-continuity',
  },
  {
    title: '비즈니스 크리티털 앱',
    image: <Logo_Article_2_20 />,
    description: `HCI기반의 엔터프라이즈 클라우드를
    활용하여 비용을 낮추고 단순성, 확장성,
    성능을 통해 비즈니스를 가속합니다.`,
    href: '/solutions/business-critical',
  },
  {
    title: '하이브리드 클라우드',
    image: <Logo_Article_2_4 />,
    description: `ABLESTACK을 사용하여 온프레미스
    인프라를 퍼블릭 클라우드로 원활하게
    확장할 수 있습니다.`,
    href: '/solutions/hybrid-cloud',
  },
  {
    title: '프라이빗 클라우드',
    image: <Logo_Article_2_1 />,
    description: `필요에 따라 언제든지 확장할 수 있고
    모든 앱을 실행할 수 있는 HCI 기반 
    클라우드로 비즈니스를 강화하십시오.`,
    href: '/solutions/private-cloud',
  },
  {
    title: '클라우드 네이티브',
    image: <Logo_Article_2_8 />,
    description: `HCI 기반의 클라우드를 통해
    컨테이너 기반의 마이크로 서비스 및 
    견고한 자동화 서비스를 사용하십시오.`,
    href: '/solutions/cloud-native',
  },
  {
    title: '데이터베이스',
    image: <Logo_Article_2_9 />,
    description: `다양한 상용 데이터베이스 배포를 위한
    ABLESTACK 솔루션을 통해 안정적인
    운영 및 통찰력을 확보하십시오.`,
    href: '/solutions/database',
  },
  {
    title: '개발/테스트',
    image: <Logo_Article_2_10 />,
    description: `효율적이고 민첩한 개발 및 테스트
    환경을 통해 생산성을 높이고 출시사이클
    단축을 통해 수익을 높일수 있습니다.`,
    href: '/solutions/dev-and-tset',
  },
  {
    title: '데브옵스/IT운영',
    image: <Logo_Article_2_11 />,
    description: `IT 자동화 및 DevOps를 위한 모범
    사례를 통해 기업 클라우드의 비용을 
    절감하고 IT서비스를 가속화합니다.`,
    href: '/solutions/devops-and-operations',
  },
  {
    title: '가상데스크톱/DaaS',
    image: <Logo_Article_2_12 />,
    description: `회사 직원들을 위한 디지털 작업 공간을
    제공하여 업무 환경에 더 큰 유연성을
    제공하여 업무 생산성을 높이십시오.`,
    href: '/solutions/virtual-desktop-and-daas',
  },
  {
    title: '인공지능/머신러닝',
    image: <Logo_Article_2_13 />,
    description: `빠르고 확장이 간편한 AI 지원 인프라를
    통해 AI/ML 이니셔티브를 얻으십시오.`,
    href: '/solutions/artificial-intelligence-and-machine-learning',
  },
  {
    title: '보안 인프라',
    image: <Logo_Article_2_14 />,
    description: `제로 트러스트 정책을 적용하여
    효과적으로 사이버 공격 및 데이터
    손실을 방지 솔루션을 제공합니다.`,
    href: '/solutions/security-infrastructure',
  },
  {
    title: '멀티클라우드',
    image: <Logo_Article_2_5 />,
    description: `통합된 관리 환경으로 다양한 
    하이퍼바이저와 클라우드 환경으로의
    인프라 확장을 제공합니다.`,
    href: '/solutions/multi-cloud',
  },
  {
    title: '엣지 컴퓨팅',
    image: <Logo_Article_2_15 />,
    description: `기업의 각 지점, IoT의 엣지 환경의 모든
    서비스를 안전하게 실행하고, 인프라를
    통합하여 관리합니다.`,
    href: '/solutions/edge-computing',
  },
  {
    title: '영상 감시',
    image: <Logo_Article_2_3 />,
    description: `고성능 환경 제공을 통해 효과적으로
    영상데이터를 수집하고 분석하면서도
    필요 면적 및 전력, 비용을 줄여드립니다.`,
    href: '/solutions/video-surveillance',
  },
  {
    title: '전자문서 유통관리',
    image: <Logo_Article_2_16 />,
    description: `강력한 내결함성 및 원본 유지 기능을 
    통해 기업 내부의 중요한 전자문서의 
    유통 및 관리 및  중앙화를 지원합니다.`,
    href: '/solutions/electronic-document',
  },
  {
    title: '백업 및 복구',
    image: <Logo_Article_2_17 />,
    description: `가상환경 뿐 아니라 레거시 환경에
    대한 통합 백업 및 복구를 지원합니다.`,
    href: '/solutions/backup-and-recovery',
  },
  {
    title: 'CI/CD',
    image: <Logo_Article_2_21 />,
    description: `HCI 기반의 클라우드 환경을 통해 
    빠르게 개발환경을 지원하고 통합하여
    애플리케이션 생명주기를 단축합니다.`,
    href: '/solutions/ci-and-cd',
  },
  {
    title: '원격 및 지사 오피스',
    image: <Logo_Article_2_18 />,
    description: `단일 HCI 플랫폼에서 지사의 모든 로컬 
    앱과 가상 데스크톱 등을 안전하게 실행
    하여 비용, 복잡성 등을 모두 낮춥니다.`,
    href: '/solutions/remote-and-offices',
  },
  {
    title: '콜센터 시스템',
    image: <Logo_Article_2_19 />,
    description: `언제 어디서나, 어떠한 장치에서든
    액세스할 수 콜센터 시스템을 구성할 수
    있습니다.`,
    href: '/solutions/call-center',
  },
  {
    title: '서버가상화',
    image: <Logo_Article_2_6 />,
    description: `기업에서 실행하는 모든 인프라와
    애플리케이션을 가상화 하여 민첩성과
    효율성을 극대화 하십시오.`,
    href: '/solutions/server-virtualization',
  },
];

const partners = [
  {
    title: 'Citrix',
    image: <Logo_Article_4_1 />,
    description: `Virtual App & Desktop`,
    href: '/',
  },
  {
    title: '틸론',
    image: <Logo_Article_4_2 />,
    description: `DStation & AStation`,
    href: '/',
  },
  {
    title: '이노뎁',
    image: <Logo_Article_4_3 />,
    description: `VURIX솔루션`,
    href: '/',
  },
  {
    title: '이든티앤에스',
    image: <Logo_Article_4_4 />,
    description: `WorkTronics RPA`,
    href: '/',
  },
  {
    title: '지오맥스소프트',
    image: <Logo_Article_4_5 />,
    description: `XEUS PLATFORM`,
    href: '/',
  },
  {
    title: '이노티움',
    image: <Logo_Article_4_6 />,
    description: `이노ECM 문서중앙화`,
    href: '/',
  },
];

export default function SolutionPage() {
  return (
    <>
      <NextSeo
        title='클라우드 솔루션'
        description='클라우드 솔루션'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions',
          images: [
            {
              url: '',
              alt: '클라우드 솔루션',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-backgroudGray text-[#444444]'}
          title='ABLESTACK 클라우드 솔루션'
          description={
            <div className={'max-w-[800px] text-[16px] font-[400] leading-[23.17px]'}>
              <p>
                HCI를 통해서 이상적인 디지털 인프라 환경을 배포하고, 여러 워크로드가 상호간의
                마찰없이동일한 인프라를 공유하여 각각의 앱이 목표를 빠르고 효율적으로 달성할 수
                있도록 할 수 있습니다.
              </p>
              <p>
                ABLESTACK은 복잡한 인프라 사일로에 의해 일어나는 레거시 IT 운영의 문제점을
                제거합니다. 또한 ABLESTACK은 프라이빗, 퍼블릭, 하이브리드 클라우드 배포 전반의 모든
                워크로드에 대해 단일 플랫폼을 활용하면서 단순화하고 민첩성을 높일 수 있는 소프트웨어
                정의 접근 방식을 제공합니다.
              </p>
              <p>
                IT팀이든, DevOps 팀이든, 데이터베이스팀이든, 또는 최종 사용자든 상관없이 기업
                클라우드 환경을 단순화하여 해당 클라우드에서 모든 비즈니스 앱 또는 사용 사례를
                제공할 수 있도록 도와드립니다.
              </p>
            </div>
          }></SolutionContent>
        <SolutionContent title='솔루션 유즈케이스'>
          <div
            className='mx-4 mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3
          '>
            {solutions.map(({ title, image, description, href }) => {
              return (
                <CustomLink key={uuid()} href={href} hoverBehavior='none' className={'w-full'}>
                  <SolutionContent.RowCard title={title} image={image} description={description} />
                </CustomLink>
              );
            })}
          </div>
        </SolutionContent>
        <SolutionContent
          className={'not-prose w-full bg-[#EEF4FB] text-[#444444]'}
          title='파트너 애플리케이션'
          description={
            <p className='m-0 mb-[12px] max-w-[960px] text-[16px] font-[400] leading-[23.17px]'>
              ABLSTACK은 파트너의 다양한 애플리케이션과 턴키로 시스템을 구축하여 기업이 원하는
              다양한 IT 기능 및 서비스를 솔루션으로 제공합니다.
            </p>
          }>
          <div className='mx-auto mt-8 grid w-full max-w-[1000px] grid-cols-1 gap-[10px] px-4 md:grid-cols-2 lg:grid-cols-3'>
            {partners.map(({ title, image, description, href }) => {
              return (
                <CustomLink key={uuid()} hoverBehavior='none' className={'w-full'}>
                  <SolutionContent.RowSmallCard
                    imageClassName='m-[20px]'
                    image={image}
                    title={title}
                    description={description}
                  />
                </CustomLink>
              );
            })}
          </div>
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
}
