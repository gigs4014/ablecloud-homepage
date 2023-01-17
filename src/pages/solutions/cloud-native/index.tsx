import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_7 from '@/public/images/new/solutions/article_1_7.png';
import Logo_Article_2_8 from '@/public/images/new/solutions/article_2_8.svg';
import Logo_Article_3_17 from '@/public/images/new/solutions/article_3_17.png';
import Logo_Article_3_18 from '@/public/images/new/solutions/article_3_18.png';
import Logo_Article_3_19 from '@/public/images/new/solutions/article_3_19.png';

const headerContent: SolutionHeaderProps = {
  title: '클라우드 네이티브',
  description: (
    <p className='max-w-[400px]'>
      HCI 기반의 클라우드를 통해 컨테이너 기반의 마이크로 서비스 및 견고한 자동화 서비스를
      사용하십시오.
    </p>
  ),

  textImage: <Logo_Article_2_8 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_7} />,
  textColor: 'text-[#444444]',
};

const CloudNativePage = () => {
  return (
    <>
      <NextSeo
        title='클라우드 네이티브'
        description='클라우드 네이티브'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/cloud-native',
          images: [
            {
              url: '',
              alt: '클라우드 네이티브',
            },
          ],
        }}
      />

      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              가상화 및 자동화된 Kubernetes 관리 기능이 포함된 ABLESTACK HCI를 통해 기업의 클라우드
              네이티브 워크로드를 가속화 할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='서비스 안정성 제고'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내장되어 있는 자가치유 기능으로 높은 회복성을 제공하여 안정적인 클라우드 네이티브
                  인프라를 제공합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='신속한 개발/운영'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  Kubernetes 및 배포 자동화를 통해 DevOps 환경을 제공하여 신속한 애플리케이션
                  개발/운영을 지원합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='높은 관리 효율성'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  하이브리드 클라우드 환경에서 통합된 관리 환경을 제공하고 견고한 자동화 서비스와
                  함께 높은 관리 편의성을 제공합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_17} />}>
          <SolutionContent.Description
            title='Kubernetes 자동화'
            contents={[
              {
                title:
                  'ABLESTACK은 Kubernetes 자동화를 통해 컨테이너 환경을 제공함으로써 기업에 빠르게 클라우드 네이티브 환경을 제공합니다.',
                descriptions: [
                  'Koral을 통한 Kubernetes 클러스터 구성 자동화',
                  'Mold에 통합되어 편리한 관리 기능 제공',
                  'Kubernetes 클러스터를 위한 LB, AutoScaling 기능 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_18} />}>
          <SolutionContent.Description
            title='하이브리드 클라우드 자동화'
            contents={[
              {
                title:
                  'ABLESTACK은 Mold에 통합된 Genie를 통해 다양한 클라우드 환경에서 확장성 있는 애플리케이션 개발 및 운영이 가능하도록 지원합니다.',
                descriptions: [
                  'Genie를 통해 애플리케이션 배포 자동화 지원',
                  '하이브리드 클라우드 환경에서의 DevOps를 지원하여 풀사이클 개발환경을 빠르게 구성할 수 있음',
                  'AWS, GCP, Azure 및 OpenStack, VMWare 등 폭넓은 클라우드 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_19} />}>
          <SolutionContent.Description
            title='자가 치유를 통한 무중단 운영'
            contents={[
              {
                title:
                  '자가 치유를 통한 무중단 운영 ABLESTACK은 자체적으로 내장된 자가 치유 아키텍처를 통해 인스턴스 장애에도 지속적인 서비스가 가능한 무중단 운영 환경을 제공합니다.',
                descriptions: [
                  'Glue의 자가 장애 탐지 및 복구 기능을 통해 스토리지 인스턴스 장애 자동 처리',
                  'Mold의 호스트 및 가상머신 HA 기능을 통해 호스트 인스턴스 장애 시가상머신 자동 복구 기능 제공',
                  'Koral의 클러스터 자동화를 통해 실행 중인 서비스의 자동 확대 및 축소를 통한서비스 부하의 자동 대응 기능 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default CloudNativePage;
