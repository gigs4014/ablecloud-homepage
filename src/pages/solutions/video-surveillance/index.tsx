import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_16 from '@/public/images/new/solutions/article_1_16.png';
import Logo_Article_2_3 from '@/public/images/new/solutions/article_2_3.svg';
import Logo_Article_3_43 from '@/public/images/new/solutions/article_3_43.png';
import Logo_Article_3_44 from '@/public/images/new/solutions/article_3_44.png';
import Logo_Article_3_45 from '@/public/images/new/solutions/article_3_45.png';

const headerContent: SolutionHeaderProps = {
  title: '영상 감시',
  description: (
    <p className='max-w-[430px]'>
      고성능 환경 제공을 통해 효과적으로 영상데이터를 수집하고 분석하면서도 필요 면적 및 전력,
      비용을 줄여드립니다.
    </p>
  ),

  textImage: <Logo_Article_2_3 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_16} />,
  textColor: 'text-[#444444]',
};

const VideoSurveillancePage = () => {
  return (
    <>
      <NextSeo
        title='영상 감시/VMS'
        description='영상 감시/VMS'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/video-surveillance',
          images: [
            {
              url: '',
              alt: '영상 감시/VMS',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              대용량의 데이터를 처리해야 하고 다양한 분석/의사결정이 필요한 영상감시 인프라로
              ABLESTACK HCI는 최고의 성능과 확장성, 단순성으로 운영 안정성과 효율성을 높여 드립니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='공간 효율성 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  컴팩트한 아키텍처와 단일 서버만으로 이루어진 인프라 환경을 제공하여 서버실의 공간,
                  전력 비용을 줄입니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='유지보수성 향상'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  단순한 인프라 구조와 턴키 솔루션 제공을 통해 인프라에 대한 유지보수성이
                  향상됩니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='저장/분석 성능 향상'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  지속적 성능이 보장되어야 하는 영상 저장 및 분석 환경에서 하드디스크 만으로도 높은
                  성능을 제공합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_43} />}>
          <SolutionContent.Description
            title='단순한 영상 감시 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 x86 서버만으로 이루어지는 인프라를 제공하고 기존 인프라를 재활용 할 수 있어 영상 감시 인프라를 효율적으로 운영할 수 있습니다.',
                descriptions: [
                  'x86 서버만으로 기존 인프라를 대체하기 때문에 필요한 공간을 줄일 수 있어 전반적인 운영 비용 절감 가능',
                  '기존 스토리지를 그대로 사용할 수 있어 효율적으로 저장공간 운영 계획 수립 가능',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_44} />}>
          <SolutionContent.Description
            title='편리한 관리가 가능한 영상 감시 환경'
            contents={[
              {
                title:
                  'ABLESTACK은 통합 관리 환경을 제공하여 모든 영상감시 인프라를 통합하여 관리하고 모니터링 할 수 있습니다.',
                descriptions: [
                  '영상감시 및 분석/서비스를 위해 필요한 모든 인프라를 통합하여 배포하고관리할 수 있는 Mold 통합 플랫폼 제공',
                  '운영되는 모든 인프라 및 애플리케이션에 대한 운영 현황 및 성능을 모니터링 할 수 있는 Wall 통합 모니터링 플랫폼 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_45} />}>
          <SolutionContent.Description
            title='높은 안정성, 성능의 영상감시 인프라'
            contents={[
              {
                title:
                  'ABLESTACK은 대용량의 지속적 데이터 저장 특성을 가지는 영상감시 인프라에 적합한 분산 스토리지 구조를 제공합니다.',
                descriptions: [
                  '하드디스크 만으로도 안정적으로 고용량 데이터의 입출력 처리를 제공',
                  'Glue 오브젝트 스토리지를 통해 영상 데이터의 효율적 저장 가능',
                  '일부 스토리지 인프라의 장애에도 서비스 중단 없는 안정적 아키텍처',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default VideoSurveillancePage;
