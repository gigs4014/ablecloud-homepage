import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_22 from '@/public/images/new/solutions/article_1_22.png';
import Logo_Article_2_6 from '@/public/images/new/solutions/article_2_6.svg';
import Logo_Article_3_61 from '@/public/images/new/solutions/article_3_61.png';
import Logo_Article_3_62 from '@/public/images/new/solutions/article_3_62.png';
import Logo_Article_3_63 from '@/public/images/new/solutions/article_3_63.png';

const headerContent: SolutionHeaderProps = {
  title: '서버 가상화',
  description: (
    <p className='max-w-[400px]'>
      기업에서 실행하는 모든 인프라와 애플리케이션을 가상화 하여 민첩성과 효율성을 극대화 하십시오.
    </p>
  ),

  textImage: <Logo_Article_2_6 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_22} />,
  textColor: 'text-[#444444]',
};

const CallCenterPage = () => {
  return (
    <>
      <NextSeo
        title='서버 가상화'
        description='서버 가상화'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/server-virtualization',
          images: [
            {
              url: '',
              alt: '서버 가상화',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              ABLESTACK HCI는 내장되어 있는 하이퍼바이저와 통합 관리 플랫폼을 통해 기본에 충실한
              고성능의 가상화 인프라를 제공합니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='가상화 구축 비용 절감'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  x86 서버로만 구성되는 단순한 인프라 구조를 통해 서버 가상화 구축 비용 및
                  소유비용이 절감됩니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='애플리케이션 민첩성 향상'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  가상머신 및 컨테이너 제공으로 애플리케이션의 종류에 관계없이 언제든 애플리케이션을
                  배포하여 기업 애플리케이션의 대응이 빨라집니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='벤더 락인 최소화'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  다양한 가상화 플랫폼을 지원하고 내장된 네트워크 기능을 제공하여 특정 벤더의 제품에
                  IT 환경이 종속되는 것을 방지합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_61} />}>
          <SolutionContent.Description
            title='컴팩트한 구성으로 총 소유비용 절감'
            contents={[
              {
                title:
                  'ABLESTACK은 x86 서버를 클러스터링하여 서버 가상화에 필요한 모든 인프라를 통합 제공하기 때문에 서버 가상화를 위한 총 소유 비용을 절감할 수 있습니다.',
                descriptions: [
                  '가상화된 서버, 스토리지, 네트워크 기능을 통합하여 제공',
                  '가상머신, 컨테이너 등의 다양한 애플리케이션 실행 수단 제공',
                  '통합 관리 플랫폼을 통해 모든 자원 관리 및 모니터링',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_62} />}>
          <SolutionContent.Description
            title='필요할 때 언제든 사용할 수 있는 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 소프트웨어로 정의된 데이터센터를 사용자에게 제공하기 때문에 언제든 사용자 스스로 원하는 인프라를 생성하여 사용할 수 있습니다. ',
                descriptions: [
                  '다양한 애플리케이션을 실행할 수 있는 인프라를 언제든 생성할 수 있음',
                  '셀프서비스 방식으로 쉽게 인프라 생성 및 관리 가능',
                  '가상머신 및 컨테이너 지원으로 최신의 변화에도 빠르게 대응할 수 있음',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_63} />}>
          <SolutionContent.Description
            title='다양한 가상화 플랫폼을 지원하는 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 내장된 가상화 플랫폼 뿐 아니라 다양한 상용 하이퍼바이저를 지원해 특정 벤더에 인프라가 락인 되는 것을 방지합니다.',
                descriptions: [
                  '내장된 가상화 플랫폼인 Cell을 제공하여 별도의 가상화 플랫폼 없이 바로 구축 가능',
                  'VMWare, Citrix, Microsoft, Redhat 등에서 공급하는 다양한 상용 하이버파이저를 지원하여 특정 벤더에 락인 없이 고객이 원하는 가상화 플랫폼 사용 가능',
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
