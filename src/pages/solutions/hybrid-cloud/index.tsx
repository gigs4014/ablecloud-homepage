import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_5 from '@/public/images/new/solutions/article_1_5.png';
import Logo_Article_2_4 from '@/public/images/new/solutions/article_2_4.svg';
import Logo_Article_3_11 from '@/public/images/new/solutions/article_3_11.png';
import Logo_Article_3_12 from '@/public/images/new/solutions/article_3_12.png';
import Logo_Article_3_13 from '@/public/images/new/solutions/article_3_13.png';

const headerContent: SolutionHeaderProps = {
  title: '하이브리드 클라우드',
  description: (
    <p className='max-w-[400px]'>
      ABLESTACK을 사용하여 온프레미스 인프라를 퍼블릭 클라우드로 원활하게 확장할 수 있습니다.
    </p>
  ),

  textImage: <Logo_Article_2_4 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_5} />,
  textColor: 'text-[#444444]',
};

const HybridCloudPage = () => {
  return (
    <>
      <NextSeo
        title='하이브리드클라우드'
        description='하이브리드클라우드'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/hybrid-cloud',
          images: [
            {
              url: '',
              alt: '하이브리드클라우드',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              ABLESTACK HCI에 통합된 멀티클라우드 자동화 플랫폼과 내장된 VPC 네트워크 기능을 통해
              사용자의 온프레미스 환경을 퍼블릭클라우드로 빠르게 확장하십시오.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='클라우드 선택의 자유'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  멀티 클라우드 플랫폼을 통해 더 이상 사용자가 어떤 클라우드를 선택하여 사용할지
                  고민하지 않고 투명하게 클라우드를 확장합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='통합된 단순함'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  Mold와 Genie를 통해 웹 기반으로, 그리고 워크플로우를 통해 언제든지 사용자의
                  온프레미스 환경을 퍼블릭 환경으로 확장할 수 있습니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='안전한 네트워크 통합'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  내장된 VPC 네트워크를 통해 퍼블릭 클라우드의 VPC와의 암호화된 통신을 제공합니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_11} />}>
          <SolutionContent.Description
            title='내장된 멀티클라우드 자동화'
            contents={[
              {
                title:
                  'ABLESTACK은 ABLESTACK 클러스터에서 다양한 환경의 클라우드로의 확장이 가능하도록 멀티클라우드 자동화 플랫폼이 내장되어 있습니다.',
                descriptions: [
                  'Multi Cloud 자동화 플랫폼 Genie 내장',
                  '가상머신, 컨테이너, 애플리케이션의 배포 전반을 자동화',
                  'Mold와 Genie 연계를 통해 Genie를 통해 배포된 자원에 대한 현황 및 통합모니터링 기능 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_12} />}>
          <SolutionContent.Description
            title='다양한 클라우드 플랫폼 지원'
            contents={[
              {
                title:
                  'ABLESTACK Genie는 ABLESTACK 클라우드 클러스터 뿐 아니라다양한 클라우드 플랫폼을 지원하여 밴더 락인을 방지합니다.',
                descriptions: [
                  'ABLESTACK 클라우드 클러스터 자동화 지원',
                  'OpenStack, VMWare 등의 프라이빗 클라우드 플랫폼 지원',
                  'AWS, GCP, Azure 등의 다양한 퍼블릭 클라우드 플랫폼 지원',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_13} />}>
          <SolutionContent.Description
            title='VPC 기반의 네트워크 통합'
            contents={[
              {
                title:
                  'ABLESTACK은 내장되어 있는 VPC 네트워크를 이용해 확장된 다른 퍼블릭클라우드와 통합되어 확장 효과를 극대화 합니다.',
                descriptions: [
                  '내장된 VPC 게이트웨이를 통해 퍼블릭 클라우드 VPC 게이트웨이와 네트워크 통합',
                  'Zero Trust 기반의 보안 관리를 통해 안전하게 클라우드 간 통신 보장',
                  '통합된 네트워크를 통해 배포된 애플리케이션 간의 안정적인 연결 보장',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default HybridCloudPage;
