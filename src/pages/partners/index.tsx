import { useState } from 'react';

import { partnerItems } from '@/constants/partners';

import { PartnerContent, PartnerHeaderProps, PartnerTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/partner/article_1_1.svg';

const headerContent: PartnerHeaderProps = {
  title: '파트너',
  description: (
    <div className={'text-[18px] font-[400] leading-[26.06px]'}>
      <p>
        독자적인 기술력, 지속 가능한 수익창출. 에이블클라우드는 ABLESTACK 플랫폼 설계 및 글로벌
        성장을 위해 HCI 시장의 공동 성장을 만들어갈 파트너를 찾습니다.
      </p>
    </div>
  ),
  bgImage: 'bg-[#ABD7FF]',
  image: <Logo_Article_1_1 />,
};

export default function PartnersPage() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <PartnerTemplate {...headerContent}>
      <PartnerContent
        className={'bg-backgroudGray text-[#444444]'}
        titleClassName={'text-[#2BBBE6] mb-[30px]'}
        title='함께 성공하는 미래'
        description='에이블클라우드는 고객은 물론 파트너도 만족할 수 있는 진정한 파트너십을 제공하기 위해 최선을 다합니다. 
          파트너의 권익을 위한 다양한 프로그램 지원을 통해 지속 성장하도록 돕겠습니다.'>
        <div className='mt-8 grid h-full grid-cols-1 gap-[15px] px-4 md:h-full md:grid-cols-1 lg:h-[300px] lg:grid-cols-3'>
          <PartnerContent.Description
            title='판매/기술지원 파트너'
            description='ABLESTACK을 고객에게 소개하고, 비즈니스를 창출하며,
              제품을 고객 사이트에 배포하고, 종합적인 지원서비스를 제공하는 파트너입니다.
              전담 영업 조직 및 기술지원 조직을 운영하며, ABLECLOUD와 모든 분야에서 긴밀하게 협업하는 파트너입니다.'
          />
          <PartnerContent.Description
            title='솔루션 파트너'
            description='ABLESTACK을 인프라로 하여 고객에게 필요한 애플리케이션을 제공하는
              파트너로서 빅데이터, 가상데스크톱, 영상감시, 데이터베이스 등을 검증된
              아키텍처를 통해 최적의 상태로 고객에게 통합하여 턴키로 제공합니다.'
          />
          <PartnerContent.Description
            title='하드웨어 파트너'
            description='ABLESTACK을 설치하고 운영하기 위한 x86 서버 제품 및 블록 및 백업 스토리지를
              제공하는 파트너로, ABLESTACK의 철저한 검증을 거쳐 최적의 아키텍처를
              제공하고, 안정적인 가상화 환경을 제공하기 위한 서버, 스토리지, 네트워크 파트너입니다.'
          />
        </div>
      </PartnerContent>
      <PartnerContent title='에이블클라우드와 제휴해야 하는 이유'>
        <div className='mt-8 grid h-full grid-cols-1 gap-[15px] px-4 md:h-full md:grid-cols-1 lg:h-[300px] lg:grid-cols-3'>
          <PartnerContent.Description
            title='더 빠른 파트너 지원'
            description='파트너가 즉시 적용할 수 있는 판매, 사이징, 마케팅 도구를 제공하고
              더욱 빠른 파트너 지원을 통해 고객에게 가상화/클라우드 플랫폼을
              안정적으로 제공할 수 있는 영업적/기술적 지원을 보장합니다.'
          />
          <PartnerContent.Description
            title='지속 가능한 비즈니스 공유'
            description='파트너와 함께 지속 가능한 비즈니스 모델을 발굴하고
              발굴된 비즈니스 기회를 파트너에게 우선적으로 공유하여
              제품의 판매 및 수익이 지속적으로 창출되도록 합니다.'
          />
          <PartnerContent.Description
            title='탁월한 에코플랫폼'
            description='ABLESTACK을 기반으로 검증된 애플리케이션 및 
              하드웨어 제품을 에코 플랫폼으로 제공하여 고객이 원하는 IT 환경을
              인프라 레벨에서 애플리케이션 레벨까지 턴키로 제공함으로써
              파터너의 매출 및 이익을 극대화 합니다.'
          />
        </div>
      </PartnerContent>
      <PartnerContent
        className={'bg-backgroudGray text-[#444444]'}
        title='함께하는 파트너'
        description={`현재 에이블클라우드와 함께하고 있는 파트너 입니다.`}>
        <div className='flex w-full flex-row items-center justify-center gap-[20px]'>
          <div className='lg:hidden'>
            <label htmlFor='tabs' className='sr-only'>
              Select your category
            </label>
            <select
              id='tabs'
              className='block w-full min-w-[290px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:min-w-[470px] xsm:min-w-[370px]'
              onChange={({ target: { value } }) => {
                setActiveTabIndex(Number(value));
              }}>
              {partnerItems.map(({ title }, key) => (
                <option id={`${key}-tab`} value={key} key={key}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <ul className={'-mb-px hidden text-center text-sm font-medium lg:flex'}>
            {partnerItems.map((item, key) => (
              <li className={'mr-2'} role={'presentation'} key={key}>
                <button
                  id={`${key}-tab`}
                  className={`h-[48px] w-[240px] rounded-lg border-neutral-300 ${
                    activeTabIndex === key
                      ? `border-0 bg-[#2151A2] text-white`
                      : `border-1 bg-white`
                  }`}
                  //type={'button'} button에 css 가 입혀져 있어서 위 className 적용 X
                  onClick={() => setActiveTabIndex(key)}>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-[5px] px-4 sm:grid-cols-2 lg:grid-cols-4'>
          <>
            {partnerItems[activeTabIndex] &&
              partnerItems[activeTabIndex].subItems.map((item, i) => (
                <PartnerContent.LogoBox title={item.name} image={item.src} key={i} />
              ))}
          </>
        </div>
      </PartnerContent>
    </PartnerTemplate>
  );
}
