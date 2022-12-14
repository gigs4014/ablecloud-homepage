import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_8 from '@/public/images/new/interview/article_1_8_2.svg';
import CnuhIntroduceImg from '@/public/images/new/interview/clientintroduceimage/CnuhImage.svg';

const headerContent: ClientHeader = {
  title: '충남대학교병원',
  bgImage: 'bg-cnuh-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_8 className='max-w-[396px]' />,
  introduceDescription: (
    <p>
      충남대학교병원은 대전, 충남, 세종 지역의 거점 병원으로 충남대학교 내에 설치된 의과대학 및
      간호대학을 중심으로 교육 및 의료 등이 이루어지는 국립대학교 병원입니다.
      <br />
      <br />
      대전의 본원 및 세종 분원의 의료 업무를 원활하게 처리하고 어떠한 환경에서도 업무를 처리할 수
      있는 혁신적인 IT 의료 인프라를 바탕으로 최상의 서비스를 제공하고 있습니다.
    </p>
  ),
  introduceImage: <CnuhIntroduceImg className='mx-auto max-w-[399px]' />,
  assignmentDescription: (
    <div>
      충남대학교병원은 본원 및 세종분원의 개원을 통해 지역 주민에 대한 의료 서비스의 질을 높이기
      위해 어떠한 상황에서도 업무를 수행할 수 있으면서도 안전하게 의료 정보가 관리될 수 있는 업무
      환경을 필요로 하였습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>VMWare ESXi 기반의 인프라 필요</li>
        <li>인터넷 접속이 가능한 외부망과 업무를 위한 내부망으로 분리된 망분리 환경의 필요</li>
        <li>안전한 의료 데이터 보호를 위해 사용자 접속 시 항상 새로운 가상머신을 할당해야 함</li>
        <li>업무 환경에 따른 효율적 원격 업무 환경 제공</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      충남대학교병원은 HCI를 기반으로 VMWare Horizon 기반의 가상데스크톱 환경을 구축하고, 망분리
      환경을 제공하여 업무 환경에 따라 보안 이슈 없이 안전하게 원격 업무 환경을 제공하고 있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>
          VMWare ESXi 기반의 가상화 환경에 HCI의 데이터 로컬리티를 적용하여 고성능의 가상 데스크톱을
          제공하여 성능 저하 없이 언제든 접속 가능한 업무 환경 제공
        </li>
        <li>
          망분리를 통해 보안에 민감한 의료 데이터를 안전하게 보호하고, 사용자가 사용한 데스크톱은
          바로 삭제하여 관련 정보가 업무 환경에서 완전히 삭제되도록 조치하여 데이터 완벽 보호
        </li>
        <li>
          원격 업무 환경 제공을 통해 어디서나 의료 업무를 수행할 수 있는 환경을 제공하여 업무 효율성
          제고
        </li>
      </ul>
    </div>
  ),
};

//충남대학교병원
export default function CnuhPage() {
  return (
    <>
      <NextSeo
        title='충남대학교병원 / HCI 구축사례'
        description='충남대학교병원 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/cnuh',
          images: [
            {
              url: '',
              alt: '충남대학교병원 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
