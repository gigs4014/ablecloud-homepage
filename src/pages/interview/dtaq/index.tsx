import { NextSeo } from 'next-seo';

import { ClientHeader, InterViewClientContentProps, InterViewClientTemplate } from '@/templates';

import Logo_Article_1_12 from '@/public/images/new/interview/article_1_12_2.svg';
import DtaqIntroduceImg from '@/public/images/new/interview/clientintroduceimage/DtaqImage.svg';

const headerContent: ClientHeader = {
  title: '국방기술품질원',
  bgImage: 'bg-dtaq-header-bg',
};

const clientContent: InterViewClientContentProps = {
  clinetImage: <Logo_Article_1_12 />,
  introduceDescription: (
    <p>
      국방기술품질원은 1981년 7월 1일 국방품질검사소에서 출발 후 2006년 2월 2일 품질관리소의 임무를
      승계하고, 국방기술기획·기술정보관리 등의 임무를 추가하여 방위사업청 출연 전문연구기관인
      국방기술품질원으로 확대·개편되었습니다 .
      <br />
      <br />
      국방기술품질원은 전순기 군수품 품질관리 및 신뢰성 연구를, 부설 국방기술진흥연구소는 국내 방산
      육성 지원 및 국방기술기획·관리·평가를 수행하고 있습니다.
    </p>
  ),
  introduceImage: <DtaqIntroduceImg className='mx-auto max-w-[490px]' />,
  assignmentDescription: (
    <div>
      국방기술품질원은 내부 문서의 안전한 문서 관리 및 공유 체계를 위한 문서중앙화 환경을 구축하기
      위해 다음의 요구사항을 제시하였습니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>물리 인프라의 자원의 최소화</li>
        <li>문서중앙화 솔루션 구축 및 호환성 보장</li>
      </ul>
    </div>
  ),
  solutionDescription: (
    <div>
      국방기술품질원은 안전한 내부 문서의 관리, 유통, 공유 등을 위해 ‘이노티움’의 문서중앙화
      플랫폼을 기반으로 관련 가상머신 및 스토리지를 구성하기 위해 ABLESTACK HCI로 시스템을 구성하여
      운영 중입니다.
      <br />
      <br />
      <ul className='list-disc pl-8'>
        <li>가상화 기능을 통한 최소한의 물리적 상면 구성</li>
        <li>검증된 호환성을 통한 최적의 성능 및 안정성 보장</li>
        <li>관리 효율성 증대를 통한 유지관리 비용 절감</li>
        <li>선형적 확장을 통한 향 후 업무 중단 없는 유기적 확장 제공</li>
      </ul>
    </div>
  ),
};

//국립기술품질원
export default function DtaqPage() {
  return (
    <>
      <NextSeo
        title='국립기술품질원  / HCI 구축사례'
        description='국립기술품질원  / HCI 구축사례'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/interview/dtaq',
          images: [
            {
              url: '',
              alt: '국립기술품질원  / HCI 구축사례',
            },
          ],
        }}
      />
      <InterViewClientTemplate headerContent={headerContent} clientContent={clientContent} />
    </>
  );
}
