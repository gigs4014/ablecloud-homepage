import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_11 from '@/public/images/new/interview/article_1_11.svg';
import SpoIntroduceImg from '@/public/images/new/interview/clientintroduceimage/SpoImage.svg';

const headerContent: ClientHeader = {
  title: '대검찰청',
  bgImage: 'bg-spo-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_11 />,
  introduceDescription: (
    <p>
      대검찰청은 대한민국 검사의 검찰 사무를 수행하고, 각종 사건수사 및 전국의 검찰청을 지취
      감독하는 대한민국의 중앙행정기관 입니다.
      <br />
      <br />
      검사의 각종 사건 수사와 기소, 공소유지 활동, 기타 행정활동 등을 지원하기 위해 다양한 내부
      정보시스템을 운영하고 있으며, 이러한 시스템을 운영하기 위한 다수의 인프라를 내부에서 운영하고
      있습니다.
    </p>
  ),
  introduceImage: <SpoIntroduceImg className='mx-auto max-w-[440px]' />,
  assignmentDescription: (
    <div>
      대검찰청 및 지방검찰청 내의 다양한 자료를 효과적으로 관리하는데 있어 다음과 같은 한계가
      있었습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>내부 메신저를 이용한 데이터 공유는 안전하지 않음</li>
        <li>내부 메신저를 이용해 부서간 자료의 공유 및 협업에 어려움이 있음</li>
        <li>웹 기반의 편리한 자료 관리 및 공유 환경에 어려움이 있음</li>
        <li>데이터 위변조에 대한 위험이 있어 효과적인 데이터 관리 체계가 필요함</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      ABLESTACK의 오브젝트 스토리지 기능과 ABLESTOR의 몽글박스(웹 기반 파일 관리 플랫폼)를 이용해
      클라우드 기반 파일 관리/공유 체계를 도입하여 다음과 같은 효과를 기대합니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>WORM 스토리지를 제공하여 원본 데이터가 훼손될 수 없는 안전한 데이터 저장환경 제공</li>
        <li>웹 기반 데이터 관리 시스템으로 편리하게 데이터 관리</li>
        <li>조직/개인 기반의 공간을 통한 안전한 자료 공유 및 협업 체계 제공</li>
        <li>파일 송수신/공유의 모니터링을 통해 비정상적인 데이터 공유/유출을 방지</li>
        <li>
          HCI 기반의 스토리지 제공을 통해 언제든지 자원을 무중단 증설하여 용량을 확대할 수 있는
          인프라 기반 마련
        </li>
      </ul>
    </div>
  ),
};

//대검찰청
export default function SpoPage() {
  return <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />;
}
