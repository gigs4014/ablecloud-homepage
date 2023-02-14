import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_2 from '@/public/images/new/interview/article_1_2.svg';
import KacptaIntroduceImg from '@/public/images/new/interview/clientintroduceimage/KacptaImage.png';

const headerContent: ClientHeader = {
  title: '한국세무사회',
  bgImage: 'bg-kacpta-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_2 />,
  introduceDescription: (
    <p>
      한국세무사회는 신규 세무사를 발굴하고, 세무사의 전문지식과 자질 향상, 대국민 서비스 향상을
      위한 다양한 지원 체계를 운영함으로써, 납세자에게 양질의 세무서비스를 제공하기 위하여 설립된
      직역 단체입니다.
      <br />
      <br />
      세무사의 세무 행정을 지원하기 위해 홈페이지, 커뮤니케이션 플랫폼, 세무행정 지원 시스템 뿐
      아니라 공인세무사 시험 관리 등의 다양한 시스템을 운영하고 있습니다.
    </p>
  ),
  introduceImage: (
    <div className='m-auto max-w-[422px]'>
      <Image src={KacptaIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      한국세무사회는 홈페이지, 공인세무사 시험 관리, 다양한 세무행정 지원 시스템을 운영하고 있으며,
      인프라 운영 측면에서 다음의 이슈의 해결이 필요한 상황이었습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>협소한 전산실에 과집적되어 있어 과다한 인프라의 상면 사용</li>
        <li>다양한 서버, 스위치, 소프트웨어 등의 잔재되어 있는 자원의 유지관리가 매우 복잡</li>
        <li>
          세무사회와 관련된 다수의 IT기업들이 자체 가상화 또는 퍼블릭 클라우드를 이용하고 있어 통합
          관리 및 지원에 어려움
        </li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      한국세무사회가 당면한 IT 인프라 이슈를 해결하고, 향후 새로운 워크로드에 효과적으로 대응하기
      위해 ABLESTACK을 기반으로 커뮤니티 클라우드를 구축하였으며 ABLECLOUD가 관리 서비스를 제공하고
      있습니다. 본 사례는 다음의 효과가 기대됩니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          물리적 호스트를 획기적으로 절감하여 전산실의 인프라 상면을 줄이고 공간 효율을 향상하고
          그린IT를 실현
        </li>
        <li>
          유지관리 포인트를 단일 인프라 제조 업체에 위탁하게 되어 신속한 장애 대응 체계를 확보하고
          전반적인 유지관리 비용 절약
        </li>
        <li>턴키 유지보수/관리체계를 적용하여 효율적인 인프라 관리 가능</li>
        <li>
          노후화된 인프라를 최신의 HCI 환경으로 개선하여 전반적인 시스템 성능 및 서비스 품질 향상
        </li>
        <li>
          한국세무사회 뿐 아니라 세무사회 관계사 및 관련 IT 기업에 저렴한 클라우드 서비스를 제공할
          수 있어 대 세무사 서비스 향상 기대
        </li>
      </ul>
    </div>
  ),
};

//한국세무사회
export default function KacptaPage() {
  return (
    <>
      <NextSeo
        title='한국세무사회 / HCI 구축사례'
        description='한국세무사회 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/kacpta',
          images: [
            {
              url: '',
              alt: '한국세무사회 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
