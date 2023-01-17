import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_14 from '@/public/images/new/solutions/article_1_14.png';
import Logo_Article_2_5 from '@/public/images/new/solutions/article_2_5.svg';
import Logo_Article_3_37 from '@/public/images/new/solutions/article_3_37.png';
import Logo_Article_3_38 from '@/public/images/new/solutions/article_3_38.png';
import Logo_Article_3_39 from '@/public/images/new/solutions/article_3_39.png';

const headerContent: SolutionHeaderProps = {
  title: '멀티클라우드',
  description: (
    <p className='max-w-[400px]'>
      통합된 관리 환경으로 다양한 하이퍼바이저와 클라우드 환경으로의 인프라 확장을 제공합니다.
    </p>
  ),

  textImage: <Logo_Article_2_5 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_14} />,
  textColor: 'text-[#444444]',
};

const MultiCloudPage = () => {
  return (
    <>
      <NextSeo
        title='멀티클라우드'
        description='멀티클라우드'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/multi-cloud',
          images: [
            {
              url: '',
              alt: '멀티클라우드',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              다양한 하이퍼바이저를 지원하고, 다수의 클라우드 환경과의 자동화가 가능한 ABLESTACK
              HCI를 통해 인프라 확장 및 활용의 자유를 누릴 수 있습니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='가상화 유연성 향상'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  단순 가상화 클러스터를 ABLESTACK HCI를 통해 클라우드 플랫폼으로 바로 확장하여
                  사용할 수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='인프라 확장성 제고'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  다양한 하이퍼바이저, 다수의 클라우드 환경을 지원하여 원할 때 어디로든 인프라를
                  확장할 수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='벤더 락인 방지'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  특정 제품에 대한 의존도를 낮출 수 있어 벤더 락인을 방지하고 전반적인 소유비용을
                  절감합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_37} />}>
          <SolutionContent.Description
            title='멀티 하이퍼바이저, 클라우드 전환'
            contents={[
              {
                title:
                  'ABLESTACK HCI를 이용하면 단순한 가상화 플랫폼이 클라우드 플랫폼으로 전환되어 다양한 클라우드 기능을 사용할 수 있습니다.',
                descriptions: [
                  'ABLESTACK에 다양한 하이퍼바이저 기반의 클러스터 구성 가능',
                  'Mold를 통해 다양한 하이퍼바이저 클러스터를 클라우드 인프라로 전환',
                  'ABLESTACK 클러스터 외의 일반 가상화 클러스터를 Mold로 통합 관리',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_38} />}>
          <SolutionContent.Description
            title='클라우드로 인프라 확장 지원'
            contents={[
              {
                title:
                  'ABLESTACK은 내장된 멀티 클라우드 자동화 플랫폼을 통해 사용자가 언제든지 가상자원을 퍼블릭 클라우드로 확장하도록 지원합니다.',
                descriptions: [
                  'Genie를 통해 멀티 클라우드 환경에서의 자동화 지원',
                  '내부 가상 인프라와 함께 필요할 때 외부로의 인프라 확장 가능',
                  'VPC 네트워크를 이용해 내부 인프라와 외부 인프라 통합',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_39} />}>
          <SolutionContent.Description
            title='선택의 자유, 소유비용의 절감'
            contents={[
              {
                title:
                  'ABLESTACK은 다양한 하이퍼바이저와 클라우드를 지원하여 사용자에게 선택의 자유를 제공하고, 이로 인한 클라우드 소유비용의 절감 효과를 제공합니다.',
                descriptions: [
                  '내장 하이퍼바이저를 이용한 클라우드로 별도의 하이퍼바이저 불필요',
                  'VMWare, Citrix, Microsoft 등의 다양한 벤더 사의 하이퍼바이저를 지원',
                  'AWS, Azure, GCP, OpenStack 등의 다수의 클라우드 인프라를 지원하여 사용자가 직접 클라우드를 비교/선택할 수 있음',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default MultiCloudPage;
