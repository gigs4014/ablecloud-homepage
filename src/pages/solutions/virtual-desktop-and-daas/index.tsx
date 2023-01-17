import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_11 from '@/public/images/new/solutions/article_1_11.png';
import Logo_Article_2_12 from '@/public/images/new/solutions/article_2_12.svg';
import Logo_Article_3_29 from '@/public/images/new/solutions/article_3_29.png';
import Logo_Article_3_30 from '@/public/images/new/solutions/article_3_30.png';
import Logo_Article_3_31 from '@/public/images/new/solutions/article_3_31.png';

const headerContent: SolutionHeaderProps = {
  title: '가상데스크톱/DaaS',
  description: (
    <p className='max-w-[430px]'>
      회사 직원들을 위한 디지털 작업 공간을 제공하여 업무 환경에 더 큰 유연성을 생산하며 업무
      생산성을 높이십시오.
    </p>
  ),

  textImage: <Logo_Article_2_12 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_11} />,
  textColor: 'text-[#444444]',
};

const VirtualDesktopAndDaasPage = () => {
  return (
    <>
      <NextSeo
        title='가상데스크톱/DaaS'
        description='가상데스크톱/DaaS'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/virtual-desktop-and-daas',
          images: [
            {
              url: '',
              alt: '가상데스크톱/DaaS',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[620px]'>
              고성능을 제공하는 ABLESTACK의 아키텍처와 함께, 다양한 하이퍼바이저 상에서 실행되는
              다양한 데스크톱 옵션을 통해 효과적으로 원격 업무 환경을 구성할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='접근성 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  높은 성능을 제공하는 Glue 스토리지를 통해 고성능을 제공하여 어디서든 빠르게 접근할
                  수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='유연성 제고'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  다양한 하이퍼바이저와 가상데스크톱 소프트웨어를 지원하여 사용자 인프라의 유연성을
                  높일 수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='향상된 배포속도'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내장되어 있는 Works 플랫폼을 통해 원클릭으로 가상데스크톱 서비스를 사용할 수
                  있습니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_29} />}>
          <SolutionContent.Description
            title='고성능 스토리지를 통한 빠른 접근'
            contents={[
              {
                title:
                  'ABLESTACK HCI는 가상데스크톱 환경을 위한 고성능 스토리지를 제공하여 빠르게 사용자가 가상데스크톱 환경에 접근할 수 있습니다.',
                descriptions: [
                  '데이터 로컬리티를 통해 가상머신이 실행 중인 고성능 SSD에 IO 발생',
                  '이미지 로컬리티를 통해 가상데스크톱 마스터 이미지를 로컬에서 실행',
                  'IO_URING을 통해 가상데스크톱 IO가 호스트 메모리 버퍼를 사용하도록 아키텍처 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_30} />}>
          <SolutionContent.Description
            title='다양한 데스크톱 플랫폼과의 호환성'
            contents={[
              {
                title:
                  'ABLESTACK은 다양한 하이퍼바이저를 지원할 뿐 아니라 다수의 데스크톱 플랫폼과 호환되어 사용자의 선택권을 보장합니다.',
                descriptions: [
                  'VMWare ESXi, Citrix Hypervisor, Hyper-V 등의 가상화 호환',
                  'Citrix XenDesktop, VMWare Horizon, Tilon DStation 등의 데스크톱 플랫폼 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_31} />}>
          <SolutionContent.Description
            title='내장된 DaaS - ABLESTACK Works'
            contents={[
              {
                title:
                  'ABLESTACK은 자체적으로 내장된 DaaS 플랫폼인 Works를 제공하여 원클릭으로 사용자가 직접 가상 데스크톱을 배포할 수 있습니다.',
                descriptions: [
                  'Mold에 통합된 DaaS 플랫폼인 Works를 플러그인 방식으로 지원',
                  '원클릭으로 사용자가 직접 가상데스크톱을 배포할 수 있어 빠르고 저렴한 가상 데스크톱 환경 제공',
                  '클라이언트리스 데스크톱으로 별도의 설치 과정 없이 브라우저에서 바로 사용',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default VirtualDesktopAndDaasPage;
