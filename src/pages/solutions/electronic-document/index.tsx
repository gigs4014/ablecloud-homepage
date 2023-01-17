import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_17 from '@/public/images/new/solutions/article_1_17.png';
import Logo_Article_2_16 from '@/public/images/new/solutions/article_2_16.svg';
import Logo_Article_3_46 from '@/public/images/new/solutions/article_3_46.png';
import Logo_Article_3_47 from '@/public/images/new/solutions/article_3_47.png';
import Logo_Article_3_48 from '@/public/images/new/solutions/article_3_48.png';

const headerContent: SolutionHeaderProps = {
  title: '전자문서 유통관리',
  description: (
    <p className='max-w-[400px]'>
      강력한 내결함성 및 원본 유지 기능을 통해 기업 내부의 중요한 전자문서의 유통 및 관리 및
      중앙화를 지원합니다.
    </p>
  ),

  textImage: <Logo_Article_2_16 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_17} />,
  textColor: 'text-[#444444]',
};

const ElectronicDocumentPage = () => {
  return (
    <>
      <NextSeo
        title='전자문서 유통관리'
        description='전자문서 유통관리'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/electronic-document',
          images: [
            {
              url: '',
              alt: '전자문서 유통관리',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              어떠한 경우에도 원본을 유지하는 스토리지와 다양한 자동화 플랫폼을 내장하고 있는
              ABLESTACK HCI를 통해 중앙 집중화된 문서의 유통 및 관리의 편리함을 경험할 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='데이터 안정성 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  어떠한 경우에도 원본 문서를 유지하는 기능을 제공하여 전자문서의 유실을 근본적으로
                  방지합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='서비스 연속성 보장'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  강력한 내결함성을 통해 장비의 일부 장애에도 전자문서 보관 및 중앙화 서비스는
                  멈추지 않습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='빠른 배포 및 편리한 관리'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  전자문서관리를 위한 다양한 애플리케이션을 빠르게 배포하고 편리하게 관리할 수
                  있습니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_46} />}>
          <SolutionContent.Description
            title='WORM 스토리지 기반의 전자문서 보호'
            contents={[
              {
                title:
                  'ABLESTACK은 Glue 스토리지를 통해 전자문서 유통에 최적의 안전한 저장 공간을 제공하여 기업의 중요한 전자문서를 보호합니다.',
                descriptions: [
                  'Glue Object를 통한 문서 전용 저장 공간 제공',
                  'WORM 스토리지 기능을 제공하여 원본 데이터의 유실을 근본적으로 방지',
                  '자체적으로 내장된 위변조 방지 알고리즘 적용',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_47} />}>
          <SolutionContent.Description
            title='노드 장애에도 멈추지 않는 저장소'
            contents={[
              {
                title:
                  'ABLESTACK은 스토리지를 구성하는 노드에 장애가 발생해도 스토리지 서비스가 중단되지 않는 강력한 내결함성을 제공합니다.',
                descriptions: [
                  '전자문서 보관을 위한 저장소의 서비스 무중단 운영 보장',
                  '문서 데이터의 무결성을 확인하는 무결성 체크 로직의 주기적 모니터링',
                  '노드 장애 시 데이터의 무결성을 유지하기 위한 자가 복구 작업 수행',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_48} />}>
          <SolutionContent.Description
            title='빠르게 배포하고 관리하는 통합 관리 플랫폼'
            contents={[
              {
                title:
                  'ABLESTACK은 전자문서 관리 플랫폼을 다양한 방식으로 빠르게 배포할 뿐 아니라 해당 애플리케이션을 지속적으로 모니터링하여 서비스 품질을 보장합니다.',
                descriptions: [
                  '전자문서를 저장하는 저장공간과 함께 관련 애플리케이션 세트를 자동으로 배포하여 빠르게 사용자에게 서비스를 제공합니다.',
                  'Mold를 통해 모든 가상자원과 애플리케이션의 상태를 모니터링하여 안정적으로서비스를 운영할 수 있습니다.',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default ElectronicDocumentPage;
