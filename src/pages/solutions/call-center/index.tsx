import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_21 from '@/public/images/new/solutions/article_1_21.png';
import Logo_Article_2_19 from '@/public/images/new/solutions/article_2_19.svg';
import Logo_Article_3_58 from '@/public/images/new/solutions/article_3_58.png';
import Logo_Article_3_59 from '@/public/images/new/solutions/article_3_59.png';
import Logo_Article_3_60 from '@/public/images/new/solutions/article_3_60.png';

const headerContent: SolutionHeaderProps = {
  title: '콜센터 시스템',
  description: (
    <p className='max-w-[400px]'>
      언제 어디서나, 어떠한 장치에서든 액세스할 수 콜센터 시스템을 구성할 수 있습니다.
    </p>
  ),

  textImage: <Logo_Article_2_19 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_21} />,
  textColor: 'text-[#444444]',
};

const CallCenterPage = () => {
  return (
    <>
      <NextSeo
        title='콜센터 시스템'
        description='콜센터 시스템'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/call-center',
          images: [
            {
              url: '',
              alt: '콜센터 시스템',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              다양한 가상데스크톱 환경의 지원 및 관련 애플리케이션의 실행환경을 제공하여 어떠한
              상황에서도 고객 지원 업무가 중단되지 않는 ABLESTACK HCI 인프라를 경험하심시오.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='고객지원 업무 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  언제, 어디서든 필요한 콜센터 업무를 처리할 수 있어 고객 지원 업무가 향상되고 고객
                  응대 직원의 업무 환경이 개선됩니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='무중단 서비스'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  자가 진단 및 복구 기능을 통해 고객 관리에 매우 중요한 콜센터 시스템 및
                  애플리케이션의 무중단 운영을 제공합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='데이터 안정성 향상'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내결함성이 매우 높은 스토리지를 제공하여 고객의 데이터 및 콜센터의 노하우를
                  안전하게 보관합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_58} />}>
          <SolutionContent.Description
            title='다양한 형태의 원격 업무를 지원하는 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 고객 응대 직원이 어떠한 상황에서도 업무를 수행할 수 있도록 다양한 형태의 원격 업무를 지원하여 업무 연속성을 보장합니다.',
                descriptions: [
                  '내장된 DaaS 플랫폼인 Works를 통한 원격 업무 지원',
                  'Citrix, VMWare, Hyper-V 기반의 다양한 데스크톱 솔루션을 통한 원격 업무 지원',
                  '가상머신, Kubernetes Cluster를 통한 모든 종류의 애플리케이션 실행 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_59} />}>
          <SolutionContent.Description
            title='스스로 장애를 극복하는 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 일부 인프라의 장애가 발생할 지라도 스스로 장애를 복구하여 무중단 운영이 중요한 콜센터 시스템에 적합한 인프라입니다.',
                descriptions: [
                  '일부 디스크 장애 자동 감지 및 자동 복구',
                  '일부 서버 장애 자동 감지 및 자동 복구',
                  '모든 애플리케이션이 일부 노드 장애에도 운영되는 무중단 운영 보장',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_60} />}>
          <SolutionContent.Description
            title='데이터를 안전하게 보관하는 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 내결함성이 매우 높은 저장공간을 제공하여 고객지원 업무 정보 및 고객의 중요한 정보를 안전하게 보관합니다.',
                descriptions: [
                  'Glue 스토리지는 주기적인 무결성 검증, 자동 장애 감지 및 장애 복구 등의기능을 포함하여 데이터를 안전하게 보관합니다. ',
                  'WORM 스토리지를 통해 데이터가 안전하게 보관되는 것을 보증합니다.',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default CallCenterPage;
