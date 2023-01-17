import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_4 from '@/public/images/new/solutions/article_1_4.png';
import Logo_Article_2_20 from '@/public/images/new/solutions/article_2_20.svg';
import Logo_Article_3_6 from '@/public/images/new/solutions/article_3_6.png';
import Logo_Article_3_9 from '@/public/images/new/solutions/article_3_9.png';
import Logo_Article_3_10 from '@/public/images/new/solutions/article_3_10.png';

const headerContent: SolutionHeaderProps = {
  title: '비즈니스 크리티컬 앱',
  description: (
    <p className='max-w-[400px]'>
      최신의 애플리케이션에 고성능을 제공하고, ABLESTACK HCI의 가용성, 안전성, 단순성을 누리십시오.
    </p>
  ),

  textImage: <Logo_Article_2_20 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_4} />,
  textColor: 'text-[#444444]',
};

const BusinessCriticalPage = () => {
  return (
    <>
      <NextSeo
        title='미션 크리티컬 앱'
        description='미션 크리티컬 앱'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/business-critical',
          images: [
            {
              url: '',
              alt: '미션 크리티컬 앱',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              조직이 요구하는 비즈니스 애플리케이션에 대한 민첩성과 확장성을 제공하고 기업의 디지털
              환경에 대한 가치실현 시간을 단축하면서 비용을 절감할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='사용자 만족도 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  비즈니스 애플리케이션의 실행 성능을 보장하는 아키텍처를 제공하여 애플리케이션
                  사용자의 만족도를 향상 시킵니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='IT 효율성 최대 75% 향상'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  단순한 인프라 구조, 내장되어 있는 이중화 기능 등 단순하면서도 집약된 기능을 통해
                  기업의 IT 효율성을 높일 수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='다운타임 최소화'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내장되어 있는 데이터베이스 이중화, 고가용성 제공을 통해 비즈니스 애플리키이션의
                  서비스 연속성을 보장합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_9} />}>
          <SolutionContent.Description
            title='고성능을 제공하는 아키텍처'
            contents={[
              {
                title:
                  'ABLESTACK은 비즈니스 크리티컬 앱에 높은 성능을 제공하기 위해 높은 성능의 IO를 처리하기 위한 자체적인 아키텍처를 제공합니다.',
                descriptions: [
                  '호스트 커널 링 버퍼를 사용하는 메모리 로컬리티 기능',
                  '고성능 NVMe 디스크를 캐시로 사용하는 데이터 로컬리티 기능',
                  '가상머신 루트이미지를 캐시하여 읽기 성능을 높이는 이미지 캐시 기능',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_10} />}>
          <SolutionContent.Description
            title='단순한 인프라, 단순한 관리'
            contents={[
              {
                title:
                  'ABLESTACK은 애플리케이션을 실행하는 인프라의 단순성을 제공하고 웹을 통해 편리하게 관리할 수 있습니다.',
                descriptions: [
                  '모든 것이 x86 서버로 통합된 단순 인프라 구성',
                  '로드밸런서 내장을 통해 애플리케이션 서버를 확장하고 부하를 분산할 수 있는 구조 제공',
                  '웹 기반 관리 플랫폼인 Mold를 통한 모든 애플리케이션/인프라 통합관리',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_6} />}>
          <SolutionContent.Description
            title='내장된 인프라 안정성'
            contents={[
              {
                title:
                  'ABLESTACK은 내장된 고가용성 및 보안 기능을 통해 애플리케이션이 안전하면서도 안정적으로 운영되도록 합니다.',
                descriptions: [
                  '가상머신, 컨테이너, 호스트 전반에 대한 고가용성 기능을 내장',
                  '데이터베이스 이중화를 HCI 내부에서 지원',
                  'Zero Trust 기반의 네트워크 보안을 제공하여 애플리케이션을 외부 공격으로 부터 보호',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default BusinessCriticalPage;
