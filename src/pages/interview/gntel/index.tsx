import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_9 from '@/public/images/new/interview/article_1_9.svg';
import GntelIntroduceImg from '@/public/images/new/interview/clientintroduceimage/GntelImage.png';

const headerContent: ClientHeader = {
  title: '지엔텔',
  bgImage: 'bg-gntel-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_9 />,
  introduceDescription: (
    <p>
      지엔텔은 2004년 2월 LG전자 정보통신 통신운영사업부가 분사하여 설립된 회사입니다.
      <br />
      <br />
      유/무선 네트웍시스템 사업을 중심으로 한 주력 사업분야의 핵심역량을 보유하고 있고, 세계적인
      통신장비 사업자와의 다양한 파트너십을 통한 시장을 확보하고 있으며, 정보통신 분야에서 최고의
      경쟁력을 갖춘 Total Solution 제공을 목표로 하는 전문 IT 기업입니다.
    </p>
  ),
  introduceImage: (
    <div className='mx-auto max-w-[451px]'>
      <Image src={GntelIntroduceImg} />
    </div>
  ),
  assignmentDescription: (
    <div>
      지엔텔은 내부 업무를 위한 다양한 인프라를 효과적으로 운영할 수 있을 뿐 아니라, 다양한
      소프트웨어 플랫폼에 대한 테스트를 수행할 수 있는 유연성 높은 인프라를 필요로 하고 있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>프라이빗 클라우드 및 웹 기반의 셀프서비스 필요</li>
        <li>
          태넌트 관리를 통해 사용자별로 다양한 리소스를 사용자별 정책에 따라 배포하고 관리할 수 있는
          셀프서비스 환경 필요
        </li>
        <li>다양한 리소스 가상화 기능 및 네트워크 가상화 기능 필요</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      지엔텔은 기간망 및 모바일 통신 부문 사업 관리 및 각종 내부 업무 운영을 위한 애플리케이션을
      가상화 하고, 내부 부서의 테스트 환경 구성을 위한 프라이빗 클라우드를 구축 운영하여 생산성을
      높이고 있습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>셀프 서비스를 통한 업무의 신속성 향상</li>
        <li>테넌트별 리소스 관리를 통한 자원의 효율성 및 활용성 극대화</li>
        <li>통합 모니터링을 통한 안정성 향상 및 유지관리 비용 절감</li>
        <li>SDN 기능(Track)을 통한 네트워크 비용 절감</li>
      </ul>
    </div>
  ),
};

//지엔텔
export default function GntelPage() {
  return (
    <>
      <NextSeo
        title='지엔텔 / HCI 구축사례'
        description='지엔텔 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/gntel',
          images: [
            {
              url: '',
              alt: '지엔텔 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
