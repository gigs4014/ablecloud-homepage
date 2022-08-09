import { PartnerContent, PartnerHeaderProps, PartnerTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/partner/article_1_1.svg';
import Logo_Article_4_1 from '@/public/images/new/partner/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/partner/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/partner/article_4_3.svg';

const headerContent: PartnerHeaderProps = {
  title: '파트너',
  description: (
    <div className={'text-[18px] font-[400] leading-[26.06px]'}>
      <p>
        독자적인 기술력, 지속 가능한 수익창출.
        <br />
        에이블클라우드는 ABLESTACK 플랫폼 설계 및 글로벌 성장을 위해
        <br />
        HCI 시장의 공동 성장을 만들어갈 파트너를 찾습니다.
      </p>
    </div>
  ),
  bgImage: 'bg-[#3CA3FF]',
  image: <Logo_Article_1_1 />,
};

export default function PartnersPage() {
  return (
    <>
      <PartnerTemplate {...headerContent}>
        <PartnerContent
          className={'bg-backgroudGray'}
          title='함께 성공하는 미래'
          description={`에이블클라우드는 고객은 물론 파트너도 만족할 수 있는 진정한 파트너십을 제공하기 위해 최선을 다합니다.
파트너의 권익을 위한 다양한 프로그램 지원을 통해 지속 성장하도록 돕겠습니다.`}>
          <div className='mt-8 grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-2'>
            <PartnerContent.Description
              title='판매/기술지원 파트너'
              description={`ABLESTACK을 고객에게 소개하고, 비즈니스를 창출하며,
제품을 고객 사이트에 배포하고, 종합적인 지원서비스를 제공하는 파트너입니다.
전담 영업 조직 및 기술지원 조직을 운영하며,
ABLECLOUD와 모든 분야에서 긴밀하게 협업하는 파트너입니다.`}
            />
            <PartnerContent.Description
              title='기술제휴 파트너'
              description={`ABLESTACK에서 실행되는 엔터프라이즈 애플리케이션에 대한
              배포, 테스트, 사용자 지원 등을 담당하는 파트너입니다.
              ABLESTACK 상에서 써드파티로 실행되는 애플리케이션 중
              분야별 플랫폼에 대한 전문적인 기술지원 및 상용화 과정을 지원합니다.`}
            />
            <PartnerContent.Description
              title='SI 파트너'
              description={`고객사에 프로젝트 단위로 제공하는 파트너입니다.
              공공 및 기업의 대규모 프로젝트를 수행하며,
              이 때 필요한 인프라를 ABLESTACK으로 도입하는 것을 중점적으로 고려합니다.
              구축이 완료된 후에도 지속적으로 고객에게 관리 서비스를 제공합니다.`}
            />
            <PartnerContent.Description
              title='교육 및 컨설팅 파트너'
              description={`가상화 및 클라우드, 빅데이터와 관련된 프로젝트를 수행하기 위한
              타당성 조사 및 전략 계획의 수립 컨설팅을 수행합니다. 
              ABLESTACK을 기반으로 구성되는 클라우드 환경을 고객에게 컨설팅하고,
              ABLESTACK에 대한 클라우드 관점에서의 교육 서비스를 제공합니다.
              `}
            />
          </div>
        </PartnerContent>
        <PartnerContent title='에이블클라우드와 제휴해야 하는 이유'></PartnerContent>
        <PartnerContent
          className={'bg-backgroudGray'}
          title='함께하는 파트너'
          description={`현재 에이블클라우드와 함께하고 있는 파트너 입니다.`}>
          <div className='mt-8 grid grid-cols-1 gap-[100px] md:grid-cols-2 lg:grid-cols-4'>
            <PartnerContent.LogoBox title={'(주)조인트리'} image={<Logo_Article_4_1 />} />
            <PartnerContent.LogoBox title={'(주)지엔텔'} image={<Logo_Article_4_2 />} />
            <PartnerContent.LogoBox title={'(주)지오멕스소프트'} image={<Logo_Article_4_3 />} />
            <PartnerContent.LogoBox title={'(주)가시'} image={<Logo_Article_4_3 />} />
          </div>
        </PartnerContent>
      </PartnerTemplate>
    </>
  );
}
