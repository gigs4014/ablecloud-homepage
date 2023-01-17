import Image from 'next/image';

import { NextSeo } from 'next-seo';

import { SolutionContent, SolutionHeaderProps, SolutionTemplate } from '@/templates';

import Logo_Article_1_19 from '@/public/images/new/solutions/article_1_19.png';
import Logo_Article_2_21 from '@/public/images/new/solutions/article_2_21.svg';
import Logo_Article_3_52 from '@/public/images/new/solutions/article_3_52.png';
import Logo_Article_3_53 from '@/public/images/new/solutions/article_3_53.png';
import Logo_Article_3_54 from '@/public/images/new/solutions/article_3_54.png';

const headerContent: SolutionHeaderProps = {
  title: 'CI/CD',
  description: (
    <p className='max-w-[400px]'>
      HCI 기반의 클라우드 환경을 통해 빠르게 개발환경을 지원하고 통합하여 애플리케이션 생명주기를
      단축합니다.
    </p>
  ),

  textImage: <Logo_Article_2_21 />,
  bgImage: 'bg-[#FAFAFA]',
  image: <Image src={Logo_Article_1_19} />,
  textColor: 'text-[#444444]',
};

const CiAndCdPage = () => {
  return (
    <>
      <NextSeo
        title='CI/CD'
        description='CI/CD'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/solutions/ci-and-cd',
          images: [
            {
              url: '',
              alt: 'CI/CD',
            },
          ],
        }}
      />
      <SolutionTemplate {...headerContent}>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          description={
            <p className='max-w-[590px]'>
              모든 인프라가 통합되어 있는 단순한 구조의 ABLESTACK HCI의 아키텍처와 함께 자동화
              플랫폼을 이용해 개발자가 자신의 일에 더욱 집중할 수 있게 됩니다.
            </p>
          }>
          <section className='mt-12 grid max-w-page-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <SolutionContent.DescriptionCard
              containerClassName='bg-[#F6F7F9]'
              title='생명주기의 단축'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  통합된 인프라와 자동화된 개발/배포 과정으로 기업 애플리케이션의 생명주기가
                  단축됩니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='개발 리소스 절약'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-8 text-[16px] font-[400] leading-[23.17px]'}>
                  소스코드 개발 외의 빌드/테스트/검증 및 애플리케이션 배포가 자동화되어 전반적
                  리소스를 절약합니다.
                </p>
              }
            />

            <SolutionContent.DescriptionCard
              title='개발/운영 간극 최소화'
              containerClassName='bg-[#F6F7F9]'
              description={
                <p className={'m-0 px-12 text-[16px] font-[400] leading-[23.17px]'}>
                  개발 및 운영을 위해 동일한 인프라 환경을 제공하여 개발과 운영 사이의 간극을
                  줄입니다.
                </p>
              }
            />
          </section>
        </SolutionContent>
        <SolutionContent
          className={'bg-[#EEF4FB] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_52} />}>
          <SolutionContent.Description
            title='원클릭 CI/CD 환경 제공 '
            contents={[
              {
                title:
                  'ABLESTACK은 자동화 플랫폼을 통해 사용자가 원하는 형태의 CI/CD 환경을 원클릭으로 제공합니다.',
                descriptions: [
                  'Genie를 통해 CI/CD 구성요소 자동 배포',
                  '사용자가 원하는 CI/CD 환경을 커스터마이징 할 수 있는 기능 제공',
                  '언제든 다수의 사용자가 필요할 때 개발환경 배포 가능',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#FFFFFF] text-[#444444]'}
          imagePosition='last'
          image={<Image src={Logo_Article_3_53} />}>
          <SolutionContent.Description
            title='자동화를 통한 개발 리소스의 절약'
            contents={[
              {
                title:
                  'ABLESTACK은 개발 및 테스트, 배포에 이르는 모든 과정을 자동화 할 수 있기 때문에 기업 애플리케이션 개발을 위한 인적 자원을 절약할 수 있습니다.',
                descriptions: [
                  'ABLECLOUD의 개발 노하우를 담은 CI/CD 환경 제공',
                  '자동화된 테스트 도구를 통해 애플리케이션 오류 최소화',
                  '개발, 테스트, 배포 전반 자동화를 통해 애플리케이션 개발에 필요한 리소스 절약',
                ],
              },
            ]}
          />
        </SolutionContent>
        <SolutionContent
          className={'bg-[#F6F7F9;] text-[#444444]'}
          imagePosition='first'
          image={<Image src={Logo_Article_3_54} />}>
          <SolutionContent.Description
            title='통합된 개발/운영 인프라 제공'
            contents={[
              {
                title:
                  'ABLESTACK은 관리 플랫폼 및 자동화 플랫폼 등이 모두 통합되어 있고 개발/운영에 통합 인프라를 제공하여 관리 자원을 줄일 수 있습니다.',
                descriptions: [
                  '개발 인프라와 운영 인프라가 동일한 구성을 제공',
                  'CI/CD 환경을 구성하는 데 있어 최적의 인프라 환경 제공',
                  '통합 관리 플랫폼을 통해 편리한 모니터링/관리 환경 제공',
                ],
              },
            ]}
          />
        </SolutionContent>
      </SolutionTemplate>
    </>
  );
};

export default CiAndCdPage;
