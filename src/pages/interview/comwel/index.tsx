import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_4 from '@/public/images/new/interview/article_1_4_2.svg';
import ComwelIntroduceImg from '@/public/images/new/interview/clientintroduceimage/ComwelImage.svg';

const headerContent: ClientHeader = {
  title: '근로복지공단',
  bgImage: 'bg-comwel-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_4 />,
  introduceDescription: (
    <p>
      근로복지공단은 산재 및 고용보험 서비스, 산재의료 서비스, 근로복지 서비스 등 노동복지 사업을
      수행하는 공공 기관입니다.
      <br />
      <br />
      노동 복지의 허브기관으로써 다양한 IT인프라 및 서비스를 제공하고 있으며, 빅데이터/인공지능
      기반의 복지행정을 제공하기 위해 지속적인 IT서비스 및 인프라 개선을 추진하고 있습니다.
    </p>
  ),
  introduceImage: <ComwelIntroduceImg className='mx-auto max-w-[465px]' />,
  assignmentDescription: (
    <div>
      근로복지공단은 축척되어온 노동복제 데이터를 분석하여 효율적으로 복지정책을 수행하는데 많은
      관심을 갖고 있으며 체계적인 빅데이터 구축을 위해 다음과 같은 인프라 요구사항이 있었습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>클라우드 기반의 빅데이터 분석 인프라 필요</li>
        <li>빅데이터 인프라의 고질적인 문제점인 상면 문제를 해결하기 위한 효율적인 인프라 필요</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      근로복지공단은 노동복지 데이터 분석 시스템을 빅데이터 환경으로 재구축하여 관련 업무 시스템을
      고도화하고 업무 효율성을 높이기 위해 ABLESTACK HCI를 도입하였으며 다음과 같은 효과를
      기대합니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>물리적 호스트 수 절감으로 빅데이터 분석 환경 구축 비용 절감</li>
        <li>분석 전문가별 독립된 분석 환경 제공을 통합 분석 효율성 제고</li>
        <li>고성능 스토리지 제공을 통한 분석 단위 시간 단축</li>
      </ul>
    </div>
  ),
};

//근로복지공단
export default function ComwelPage() {
  return (
    <>
      <NextSeo
        title='근로복지공단 / HCI 구축사례'
        description='근로복지공단 / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/comwel',
          images: [
            {
              url: '',
              alt: '근로복지공단 / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
