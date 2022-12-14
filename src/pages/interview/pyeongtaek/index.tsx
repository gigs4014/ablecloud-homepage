import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_3 from '@/public/images/new/interview/article_1_3_2.svg';
import PyeongtaekIntroduceImg from '@/public/images/new/interview/clientintroduceimage/PyeongtaekImage.svg';

const headerContent: ClientHeader = {
  title: '평택시청',
  bgImage: 'bg-pyeongtaek-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_3 />,
  introduceDescription: (
    <p>
      평택시는 경기도 남단에 위치하는 도시로 평택시청은 평택시를 관할하여 자치하고, 시민들을 위한
      서비스를 제공하는 지방행정기관 입니다.
      <br />
      <br />
      주민 자치, 항만 관리, 환경 관리, 복지, 건설, 추택 등의 다양한 시정을 관리하며, 이를 위한
      다양한 IT 인프라를 운영하고 있습니다.
    </p>
  ),
  introduceImage: <PyeongtaekIntroduceImg className='mx-auto max-w-[490px]' />,
  assignmentDescription: (
    <div>
      평택시청은 수도계량시스템의 현대화를 위해 다음의 요구사항을 제시하였습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>Kuberentes 기반의 신속한 애플리케이션 배포 및 유지관리 체계 필요</li>
        <li>최소한의 물리적 인프라 구성 및 안정성 제공 필요</li>
        <li>다양한 환경에서 이머징 워크로드를 신속하게 배포할 수 있는 인프라 환경 제공 필요</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      평택시청은 수도 계량 시스템을 IoT 및 빅데이터 환경으로 구축하고, 관련 애플리케이션을
      Kubernetes 환경에서 운영하기 위해 ABLESTACK HCI를 도입하여 컨테이너 기반 환경을 운영 중입니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>물리적 호스트 수 절감으로 빅데이터 분석 환경 구축 비용 절감</li>
        <li>분석 전문가별 독립된 분석 환경 제공을 통한 분석 효율성 제고</li>
        <li>고성능 스토리지 제공을 통한 분석 단위 시간 단축 확보</li>
        <li>컨테이너 기반 신속한 배포 및 CI/CD 가능</li>
      </ul>
    </div>
  ),
};

//평택 시청
export default function PyeongtaekPage() {
  return (
    <>
      <NextSeo
        title='평택시청 / HCI 구축사례'
        description='평택시청 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/pyeongtaek',
          images: [
            {
              url: '',
              alt: '평택시청 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
