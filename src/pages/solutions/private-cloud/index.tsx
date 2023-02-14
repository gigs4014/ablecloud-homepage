import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_6 from '@/public/images/new/solutions/article_1_6.png';
import Logo_Article_2_1 from '@/public/images/new/solutions/article_2_1.svg';
import Logo_Article_3_14 from '@/public/images/new/solutions/article_3_14.png';
import Logo_Article_3_15 from '@/public/images/new/solutions/article_3_15.png';
import Logo_Article_3_16 from '@/public/images/new/solutions/article_3_16.png';

const headerContent: SolutionHeaderProps = {
  title: '프라이빗 클라우드',
  description: (
    <p className='max-w-[430px]'>
      필요에 따라 언제든지 확장할 수 있고 모든 앱을 실행할 수 있는 HCI 기반 클라우드로 비즈니스를
      강화할 수 있습니다.
    </p>
  ),

  textImage: <Logo_Article_2_1 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_6} />,
  textColor: 'text-[#444444]',
};

const PrivateCloudPage = () => {
  return (
    <>
      <NextSeo
        title='프라이빗 클라우드'
        description='프라이빗 클라우드'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/private-cloud',
          images: [
            {
              url: '',
              alt: '프라이빗 클라우드',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              단순한 인프라 아키텍처에 언제든 필요에 따라 자원을 무중단 확장할 수 있을 뿐 아니라
              클라우드 웹 콘솔을 이용해 셀프서비스로 원하는 자원을 원하는 만큼 사용하십시오.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='무중단 확장 가능'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  3대의 서버로 시작해서 필요한 만큼 인프라를 무중단으로 확장할 수 있어 기업 내의
                  프라이빗 클라우드를 실현합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='사용자 편의성 향상'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  웹 기반의 클라우드 콘솔을 통해 셀프서비스 환경을 제공해 사용자의 편의성을 향상하고
                  소프트웨어 정의 데이터센터를 제공합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='신속성/민첩성 제고'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  가상머신과 컨테이너 모두를 지원하여 모든 종류의 애플리케이션을 실행할 수 있어 기업
                  IT의 신속성 및 민첩성을 높입니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_14} />}>
          <SolutionContent.Description
            title='필요할 때 1대 씩 무중단 증설'
            contents={[
              {
                title:
                  'ABLESTACK은 기본 3대로 클러스터를 구성한 후 사용 중에 추가적인 자원이 필요할 때 언제든지 1대 씩 무중단으로 증설할 수 있습니다.',
                descriptions: [
                  'Cube 마법사를 통한 무중단 HCI Node 확장 기능 제공',
                  'Wall을 통한 자원 증설 시점 예측 기능 제공',
                  '필요에 따라 증설할 자원을 선택하여, 디스크만 증설하거나 컴퓨트 자원 또는스토리지 자원 만을 증설하는 기능 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_15} />}>
          <SolutionContent.Description
            title='웹 기반 클라우드 플랫폼 제공'
            contents={[
              {
                title:
                  '웹 기반의 셀프서비스 클라우드 플랫폼을 제공하고, 다양한 자동화를 통해 효과적으로 기업 내의 클라우드를 제어할 수 있습니다.',
                descriptions: [
                  'Mold를 통해 웹 기반으로 사용자가 언제든 필요한 자원을생성하여 사용 할 수 있는 셀프서비스 기능',
                  'Genie를 사용해 복잡한 애플리케이션을 사용자가 원클릭으로배포할 수 있는 자동화 기능 제공',
                  'Wall을 통해 모든 자원의 상태를 모니터링할 수 있음',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_16} />}>
          <SolutionContent.Description
            title='모든 유형의 애플리케이션 실행 가능'
            contents={[
              {
                title:
                  'ABLESTACK은 기업에서 실행 중인 모든 유형의 애플리케이션을 실행할 수 있는 유연성을 제공합니다. ',
                descriptions: [
                  '가상머신을 기반으로 기존의 서버에서 실행 중인 모든 애플리케이션 실행을 보장',
                  'Koral을 통해 Kubernetes 클러스터를 사용할 수 있어 컨테이너 기반의이머징 워크로드 실행 가능',
                  'Track을 통해 애플리케이션에 필요한 모든 형태의 네트워크 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default PrivateCloudPage;
