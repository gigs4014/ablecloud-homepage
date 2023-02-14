import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_2 from '@/public/images/new/solutions/article_1_2.png';
import Logo_Article_2_7 from '@/public/images/new/solutions/article_2_7.svg';
import Logo_Article_3_3 from '@/public/images/new/solutions/article_3_3.png';
import Logo_Article_3_4 from '@/public/images/new/solutions/article_3_4.png';
import Logo_Article_3_5 from '@/public/images/new/solutions/article_3_5.png';

const headerContent: SolutionHeaderProps = {
  title: '빅데이터 분석',
  description: (
    <p className='max-w-[400px]'>
      ABLESTACK HCI 만의 빅데이터 전용 아키텍처와 자동화 도구를 통해 빠르게 빅데이터 환경을
      구축하십시오.
    </p>
  ),

  textImage: <Logo_Article_2_7 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_2} />,
  textColor: 'text-[#444444]',
};

const BigDataAnalysisPage = () => {
  return (
    <>
      <NextSeo
        title='빅데이터 분석'
        description='빅데이터 분석'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/big-data-analysis',
          images: [
            {
              url: '',
              alt: '빅데이터 분석',
            },
          ],
        }}
      />

      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              HCI Node의 로컬 디스크를 직접 활용한 전용 데이터노드 구성 아키텍처와 자동화 지원을
              통한 신속한 구성, 가상화를 통한 높은 유연성을 가진 빅데이터 인프라
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='Hadoop 전용 구성'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  HDFS를 위한 전용 디스크를 선택하여 데이터 노드를 구성함으로써 기존 HCI가 가지는
                  빅데이터 환경의 저장용량 이슈를 해결했습니다.
                </p>
              }
            />
            <SolutionContent.DescriptionCard
              title='신속한 구성'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  사용자가 원하는 빅데이터 플랫폼을 자동화 도구를 이용해 원하는 절차와 설정으로
                  원클릭으로 빠르게 구성 할 수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='높은 유연성 제공'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  가상머신 뿐 아니라 Kubernetes 환경을 제공하여 다양한 빅데이터 애플리케이션을
                  개발하고 배포할 수 있는 유연성을 제공합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={
            // <CustomSlider>
            //   <Image src={Logo_Article_3_2} />
            //   <Image src={Logo_Article_3_3} />
            // </CustomSlider>

            <Image src={Logo_Article_3_3} />
          }>
          <SolutionContent.Description
            title='다양한 HDFS 옵션 제공'
            contents={[
              {
                title:
                  'ABLESTACK은 HCI를 이용해 유연하게 Hadoop 데이터 저장환경을 제공하기 위해 다양한 HDFS 구성 옵션을 제공합니다.',
                descriptions: [
                  '노드의 로컬 디스크를 직접 HDFS용 디스크로 사용 가능',
                  'Hadoop Cluster가 HDFS 대신, 전용 어댑터를 통해 Glue Object Storage를 데이터 저장소로 사용할 수 있음',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_4} />}>
          <SolutionContent.Description
            title='유연한 인프라 구성'
            contents={[
              {
                title:
                  'ABLESTACK은 빅데이터 에코 플랫폼이 다양한 인프라 환경에서 실행되는 특성을 반영하여 유연하게 에코 플랫폼을 위한 인프라 구성을 선택할 수 있습니다.',
                descriptions: [
                  '가상머신 기반의 빅데이터 인프라',
                  'Kubernetes 클러스터 기반의 빅데이터 인프라',
                  '컴퓨터 노드와 스토리지 노드의 분리 구성',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_5} />}>
          <SolutionContent.Description
            title='통합된 자동화 기능'
            contents={[
              {
                title:
                  'ABLESTACK은 빅데이터 인프라의 기술 변화 및 애플리케이션 변와에 민첩하게 대응할 수 있도록 내장된 통합 자동화 기능을 통해 다양한 방법으로 빠르게 빅데이터 인프라를 배포합니다.',
                descriptions: [
                  'Genie를 이용해 워크플로우 기반으로 사용자의 빅데이터 환경을 자동으로 배포',
                  'Station을 이용해 ABLESTACK이 제공하는 표준 빅데이터 인프라를 원클릭으로 배포',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default BigDataAnalysisPage;
