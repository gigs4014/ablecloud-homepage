import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_10 from '@/public/images/new/interview/article_1_10.svg';
import DatastreamsIntroduceImg from '@/public/images/new/interview/clientintroduceimage/DatastreamsImage.svg';

const headerContent: ClientHeader = {
  title: '데이타스트림즈 ',
  bgImage: 'bg-datastreams-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_10 />,
  introduceDescription: (
    <p>
      데이터스트림즈는 클라우드, 데이터거버넌스, 빅데이터, IoT 등의 다양한 분야에 해당하는 기술력을
      기반으로 ICT 산업융합형 서비스를 제공하는 전문 IT 서비스 기업입니다.
      <br />
      <br />
      데이터스트림즈는 데이터 통합 및 분석, 데이터거버넌스 등 데이터 관리 전 영역에 대한 솔루션과
      컨설팅 서비스, 플랫폼을 제공하고 있습니다.
    </p>
  ),
  introduceImage: <DatastreamsIntroduceImg className='mx-auto max-w-[493px]' />,
  assignmentDescription: (
    <div>
      데이터스트림즈는 보유한 다양한 빅데이터 기반의 애플리케이션에 대한 지속적 개발 및 배포를
      지원할 수 있는 유연하고 신속한 인프라 체계를 필요로 합니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>개발 인프라의 단순화</li>
        <li>Kubernetes 기반의 인프라 환경 제공</li>
        <li>빅데이터 플랫폼 개발 환경 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      데이터스트림즈는 빅데이터 플랫폼 제조사로써 관련 플랫폼 연구개발을 위해 ABLESTACK을 도입하여
      빅데이터 플랫폼 개발 환경을 Kubernetes 기반으로 구성하여 효과적인 개발/배포을 수행하고
      있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          ABLESTACK HCI를 기반으로 단순한 인프라 패브릭을 제공하여 개발 인프라가 단순화 되어
          효율적인 인프라 관리가 가능
        </li>
        <li>
          Kubernetes 기반의 컨테이너 인프라를 제공하여 지속적인 개발 및 지속적인 배포 환경을
          제공하여 기민한 제품 개발 환경을 제공함
        </li>
        <li>
          빅데이터 전용 아키텍처를 적용하여 충분한 데이터 저장 용량을 제공하여 안정적인 빅데이터
          플랫폼 개발 환경 제공
        </li>
      </ul>
    </div>
  ),
};

//datastreams
export default function DatastreamsPage() {
  return <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />;
}
