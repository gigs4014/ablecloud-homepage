import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_5 from '@/public/images/new/interview/article_1_5.svg';
import GyeongnamIntroduceImg from '@/public/images/new/interview/clientintroduceimage/GyeongnamImage.svg';

const headerContent: ClientHeader = {
  title: '경상남도청',
  bgImage: 'bg-gyeongnam-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_5 />,
  introduceDescription: (
    <p>
      경상남도의 행정을 총괄하는 지방행정기관으로 경상남도 창원시에 위치합니다. 경상남도민을 위한
      다양한 대민지원 정보시스템을 운영하고 있으며, 이와 함께 행정업무 처리를 위한 다수의 시스템을
      내부적으로 운영하고 있습니다.
    </p>
  ),
  introduceImage: <GyeongnamIntroduceImg className='mx-auto max-w-[462px]' />,
  assignmentDescription: (
    <div>
      대민 업무를 위한 물리적인 시스템의 운영 관리에 대한 개선을 위한 다음의 요구사항이 있었습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>기존 운영 중인 물리적인 시스템의 가상화 이관</li>
        <li>물리적 인프라의 최소화를 통한 관리 체계 효율화</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      경남도청은 기존의 가상화 및 베어메탈 환경에서 운영되고 있던 다양한 인프라를 ABLESTACK HCI
      인프라로 변경한 후 운영 중인 시스템을 마이그레이션 하여 효율적인 인프라 환경에서 자원을
      운영하고 있으며 다음의 효과가 기대됩니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>기존 물리적인 장비의 소프트웨어 정의에 의한 가상화를 통해 비용 절감</li>
        <li>단일 관리포털 사용으로 유지관리 효율성 증대</li>
        <li>신속한 가상자원 배포 및 고가용성을 통한 업무 연속성 및 안정성 보장</li>
      </ul>
    </div>
  ),
};
//경남도청
export default function GyeongnamPage() {
  return <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />;
}
