import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_6 from '@/public/images/new/interview/article_1_6.svg';
import YitIntroduceImg from '@/public/images/new/interview/clientintroduceimage/YitImage.svg';

const headerContent: ClientHeader = {
  title: '여주대학교',
  bgImage: 'bg-yit-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_6 />,
  introduceDescription: (
    <p>
      여주대학교는 경기도 여주에 위치한 사립전문대학으로 4차 산업혁명의 핵심 인재 및 첨단 의료
      서비스를 위한 인재와 문화예술 분야의 인재를 양성하는데 힘을 쏟고 있습니다.
      <br />
      <br />
      재학 및 졸업생을 위한 다양한 서비스를 위한 학사행정시스템을 운영 중이며, 기타 연구개발 목적의
      인프라를 동시에 운영하고 있습니다.
    </p>
  ),
  introduceImage: <YitIntroduceImg className='mx-auto max-w-[396px]' />,
  assignmentDescription: (
    <div>
      여주대학교는 학사행정시스템의 효율적인 운영 및 연구개발 인프라의 학내 제공을 위한 효율적인
      인프라를 필요로 합니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>VMWare ESXi 기반의 가상화 환경 제공</li>
        <li>가상화된 네트워크 인프라 제공</li>
        <li>대학 연구활동을 위한 편리한 가상화 환경 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      여주대학교는 ABLESTACK HCI 클러스터에 VMWare 가상화 환경을 학내망에 구축하여, 가상화된 라우터
      및 가상화된 네트워크 환경, 그리고 업무용 가상머신 환경을 구축하여 대학 내 연구 및 업무 환경을
      제공하고 있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          VMWare ESXi 기반의 가상화 환경에 Data Locality를 제공하여 고성능 가상화 환경을 제공하여
          효율적 연구 환경 제공
        </li>
        <li>
          가상화된 라우터 및 부하분산 환경을 제공하여 물리적 네트워크 패브릭을 단순화하여 관리
          편의성 향상
        </li>
        <li>
          Mold를 통한 셀프 서비스 환경을 제공하여 언제든지 가상머신을 생성하고 연구에 활용할 수
          있도록 하여 효율적인 자원 관리 체계 제공
        </li>
      </ul>
    </div>
  ),
};

//여주대학교
export default function YitPage() {
  return <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />;
}
