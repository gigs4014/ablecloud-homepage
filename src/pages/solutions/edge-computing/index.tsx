import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_15 from '@/public/images/new/solutions/article_1_15.png';
import Logo_Article_2_15 from '@/public/images/new/solutions/article_2_15.svg';
import Logo_Article_3_40 from '@/public/images/new/solutions/article_3_40.png';
import Logo_Article_3_41 from '@/public/images/new/solutions/article_3_41.png';
import Logo_Article_3_42 from '@/public/images/new/solutions/article_3_42.png';

const headerContent: SolutionHeaderProps = {
  title: '엣지 컴퓨팅',
  description: (
    <p className='max-w-[400px]'>
      컴팩트한 하이퍼컨버징 기술로 엣지 사이트의 인프라를 지원하고 전문인력 지원을 경감합니다.
    </p>
  ),

  textImage: <Logo_Article_2_15 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_15} />,
  textColor: 'text-[#444444]',
};

const EdgeComputingPage = () => {
  return (
    <>
      <NextSeo
        title='엣지 컴퓨팅'
        description='엣지 컴퓨팅'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/edge-computing',
          images: [
            {
              url: '',
              alt: '엣지 컴퓨팅',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              단순하면서도 고성능을 제공하는 ABLESTACK HCI의 다양한 라인업을 통해 중앙의
              데이터센터에서 통합하여 관리하는 엣지 컴퓨팅의 강력함을 느낄 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='인프라 단순성 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  중앙의 데이터센터, 엣지서버 등의 모든 구조가 단일 인프라 구조로 되어 인프라 전반이
                  단순해 집니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='빠른 데이터 처리 성능'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  사용자 로컬에 HCI가 직접 배치되어 고성능의 데이터 처리가 가능해지고 전반적인
                  애플리케이션의 만족도가 높아집니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='관리 편의성 제고'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  중앙 데이터센터와 지역별로 흩어져 있는 엣지 서버를 모두 중앙에서 관리할 수 있어
                  높은 관리 편의성을 경험할 수 있습니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_40} />}>
          <SolutionContent.Description
            title='다양한 라인업의 HCI 제품 구성'
            contents={[
              {
                title:
                  'ABLESTACK은 데이터센터에서 사용할 수 있는 제품 라인업과, 엣지 서버로 사용할 수 있는 소형 서버 라인업 등을 제공하여 모든 사용처에서 동일한 HCI 구조를 제공합니다.',
                descriptions: [
                  '중앙 데이터센터를 위한 고사양 라인업',
                  '엣지 서버로 사용할 수 있는 소형 서버 라인업 및 클러스터링 라인업',
                  '모든 인프라를 동일 아키텍처로 제공할 수 있는 제품 구성 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_41} />}>
          <SolutionContent.Description
            title='로컬에서 체험하는 고성능 데이터처리'
            contents={[
              {
                title:
                  'ABLESTACK은 Glue를 통해 어떠한 환경에서도 고성능의 데이터 처리를 보장하며 Kubernetes 클러스터를 통해 어떤 사이트에도 빠르게 애플리케이션을 배포할 수 있는 신속성을 제공합니다.',
                descriptions: [
                  '소형 엣지 서버 클러스터에서도 동일하게 경험할 수 있는 스토리지 성능',
                  '엣지 서버에서의 데이터 분석 및 전송을 빠르게 처리할 수 있는 성능 제공',
                  'Kubernetes 클러스터를 통해 언제든지 엣지로 빠른 애플리케이션 전송',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_42} />}>
          <SolutionContent.Description
            title='통합 관리를 통한 효율적 인프라 통제'
            contents={[
              {
                title:
                  'ABLESTACK은 중앙의 데이터센터와 엣지서버 사이트 전체를 하나의 통합관리 환경에서 관리할 수 있도록 함으로써 효율적으로 인프라 통제가 가능합니다.',
                descriptions: [
                  'Mold를 통해 중앙의 데이터센터 Zone과 엣지 서버 Zone을 통합관리하여 관리 편의성 향상',
                  'Kubernetes Cluster 및 자동화 플랫폼을 통한 애플리케이션 통합 배포/관리',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default EdgeComputingPage;
