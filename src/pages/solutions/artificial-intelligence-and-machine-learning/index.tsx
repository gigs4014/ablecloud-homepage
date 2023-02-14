import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_12 from '@/public/images/new/solutions/article_1_12.png';
import Logo_Article_2_13 from '@/public/images/new/solutions/article_2_13.svg';
import Logo_Article_3_29 from '@/public/images/new/solutions/article_3_29.png';
import Logo_Article_3_32 from '@/public/images/new/solutions/article_3_32.png';
import Logo_Article_3_33 from '@/public/images/new/solutions/article_3_33.png';

const headerContent: SolutionHeaderProps = {
  title: '인공지능/머신러닝',
  description: (
    <p className='max-w-[400px]'>
      빠르고 확장이 간편한 AI 지원 인프라를 통해 AI/ML 이니셔티브를 얻으십시오.
    </p>
  ),

  textImage: <Logo_Article_2_13 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_12} />,
  textColor: 'text-[#444444]',
};

const ArtificialIntelligenceAndMachineLearningPage = () => {
  return (
    <>
      <NextSeo
        title='인공지능/머신러닝'
        description='인공지능/머신러닝'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/artificial-intelligence-and-machine-learning',
          images: [
            {
              url: '',
              alt: '인공지능/머신러닝',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[630px]'>
              고성능 스토리지 및 GPU 옵션을 선택할 수 있는 ABLESTACK HCI 인공지능 인프라를 통해
              효율적인 인프라를 사용하고, 다양한 분석 프로젝트를 통해 프로젝트 성공율을 높일 수
              있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='분석 성능 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  고성능의 스토리지와 가상머신에 할당하는 GPU를 활용한 인공지능으로 더 빠른
                  의사결정이 가능합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='인프라 효율성 제고'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  컴팩트한 인프라 구성과 가상머신, 컨테이너 등의 유연성을 통해 AI/ML을 위한 효율적인
                  인프라를 제공합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='더 빠른 프로젝트 성공'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  다양한 학습과 의사결정 프로젝트의 수행이 가능해 AI/ML 프로젝트의 성공에 더 빠르게
                  다가갈 수 있습니다.
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
            title='AL/ML을 위한 고성능 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 인공지능 및 머신러닝의 전반적 성능을 높이기 위한 고성능 아키텍처를 제공하고, 가상머신에 GPU를 할당함으로써 분석/의사결정 성능을 보장합니다. ',
                descriptions: [
                  '높은 성능을 제공하는 Glue 스토리지',
                  '가상머신에 할당할 수 있는 다양한 GPU 옵션',
                  'NVIDIA, AMD 가상GPU 및 패스스루 GPU 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_32} />}>
          <SolutionContent.Description
            title='단순한 인프라, 편리한 관리'
            contents={[
              {
                title:
                  'ABLESTACK은 단순한 인프라를 제공하여 기업의 인공지능 전문가들이 오직 AI/ML 프로젝트에만 집중할 수 있도록 합니다.',
                descriptions: [
                  'x86으로만 이루어진 단순한 인프라 구조',
                  '자가 장애 식별 및 자가 장애 복구를 통해 사람의 관여를 최소화',
                  '통합 관리 플랫폼을 통한 효율적인 관리',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_33} />}>
          <SolutionContent.Description
            title='다양한 시도, 빠른 성과 도출'
            contents={[
              {
                title:
                  'ABLESTACK은 가상머신, Kubernetes, 자동화 플랫폼 등을 통해 빠르게 AI/ML에 필요한 자원을 제공하여 다양한 시도와 빠른 성과 도출을 지원합니다.',
                descriptions: [
                  '가상머신 셀프서비스를 통해 빠르게 필요 자원 생성 및 사용',
                  'Kubernetes Cluster를 통해 컨테이너 형태의 다양한 AI/ML 애플리케이션 개발/테스트 지원',
                  '자동화 플랫폼을 통해 모든 AI/ML 자원의 배포/관리 가능',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default ArtificialIntelligenceAndMachineLearningPage;
